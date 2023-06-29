import { React, useState } from "react";
import {
  Avatar,
  Flex,
  Text,
  useToast,
  Textarea,
  Button,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import Rating from "../items/cardItem/Rating";
import EditBtn from "../admin/allItems/EditBtn";
import DeleteBtn from "../cart/DeleteBtn";
import { canDo } from "../../store/actions/authAction";
import {
  selectUser,
  selectIsAuthenticated,
} from "../../store/features/authSlicer";
import { useSelector, useDispatch } from "react-redux";
import { deleteReview, updateReview } from "../../store/actions/itemAction";
import { StarRating } from "./StarRating";
import ReportModal from "./ReportModal";

function ReviewRead({ review, rating, handleClick }) {
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [showEdit, setShowEdit] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleSubmit = (e, item) => {
    e.preventDefault();
    const data = {
      rating: rating ? rating : item.rating,
      reviewMessage: e.target?.reviewMes?.value
        ? e.target?.reviewMes?.value
        : item.reviewMessage,
    };

    updateReview(
      dispatch,
      { id: item.id, data: data, token: user.token },
      toast
    );
    setShowEdit(!showEdit);
  };

  return (
    <>
      {review?.map((item) => {
        return (
          <Flex gap={5} flexDir="column" key={item?.User?.userName}>
            <Flex justifyContent="space-between" alignItems="center">
              <Flex gap={5} alignItems="center">
                <Avatar
                  size="md"
                  name={item?.User?.userName}
                  src={item?.User?.image}
                />
                <Text fontSize="xl">{item?.User?.userName}</Text>
                <Rating rating={review} />
                {canDo({
                  user,
                  userId: item?.userId,
                }) && (
                  <Flex gap={5}>
                    <EditBtn
                      hadleClick={() => {
                        setShowEdit(!showEdit);
                      }}
                    />
                    <DeleteBtn
                      handleDelete={() => {
                        deleteReview(
                          dispatch,
                          {
                            id: item?.id,
                            token: user.token,
                          },
                          toast
                        );
                      }}
                    />

                    {/* for report modal */}
                    {isAuthenticated && <ReportModal item={item} />}
                  </Flex>
                )}
              </Flex>
            </Flex>
            {!showEdit ? (
              <Text pl={5} fontSize="xl">
                {item?.reviewMessage}
              </Text>
            ) : (
              // for edite review message and rating
              <>
                <StarRating rating={rating} handleClick={handleClick} />
                <form
                  onSubmit={(e) => {
                    handleSubmit(e, item);
                  }}
                >
                  <Flex position={"relative"}>
                    <Textarea
                      placeholder={item?.reviewMessage}
                      name="reviewMes"
                      size="lg"
                      h="fit-content"
                      w="100%"
                      flex={1}
                      pr={"100px"}
                      overflow={"hidden"}
                    />
                    <Button
                      type="submit"
                      size="lg"
                      top={0}
                      right={0}
                      position={"absolute"}
                      rounded={"md"}
                      h={"100%"}
                      zIndex={1}
                    >
                      Edit
                    </Button>
                  </Flex>
                </form>
              </>
            )}
          </Flex>
        );
      })}
    </>
  );
}

export default ReviewRead;
