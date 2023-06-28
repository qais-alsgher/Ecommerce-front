import { Box, chakra, SimpleGrid } from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { FaMoneyBillWave } from "react-icons/fa";
import StatsCard from "./StatsCard";
import {
  getUserStatistics,
  getProductsStatistics,
  getSalesStatistics,
} from "../../../store/actions/adminAction";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../../store/features/authSlicer";
import { selectNumberStatistics } from "../../../store/features/adminSlicer";

function StatisticsBtn() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const { usersCount, itemsCount, salesCount } = useSelector(
    selectNumberStatistics
  );

  return (
    <Box maxW="7xl" mx={"auto"} pt={4} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        Dashboard Statistics 📊
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        {/* itemsCount : 23 salesCount : 6 usersCount : */}
        <StatsCard
          title={"Users"}
          stat={usersCount}
          icon={<BsPerson size={"3em"} />}
          handleClick={() => {
            getUserStatistics(dispatch, token);
          }}
        />
        <StatsCard
          title={"Products"}
          stat={itemsCount}
          icon={<FiServer size={"3em"} />}
          handleClick={() => {
            getProductsStatistics(dispatch, token);
          }}
        />
        <StatsCard
          title={"Sales"}
          stat={salesCount}
          icon={<FaMoneyBillWave size={"3em"} />}
          handleClick={() => {
            getSalesStatistics(dispatch, token);
          }}
        />
      </SimpleGrid>
    </Box>
  );
}

export default StatisticsBtn;
