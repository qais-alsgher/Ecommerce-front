import React from "react";
import { Button, Spinner } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../store/features/authSlicer";

export default function SubmitBtn({ children }) {
  const loading = useSelector(selectIsLoading);

  return (
    <>
      {!loading ? (
        <Button type="submit" mt={2} variant={"submitBtn"}>
          {children}
        </Button>
      ) : (
        <Button type="submit" mt={2} variant={"submitBtn"} isLoading>
          <Spinner size="md" />
        </Button>
      )}
    </>
  );
}
