import { React, useEffect } from "react";
import { Grid, GridItem, Container } from "@chakra-ui/react";
import ChartLin from "../components/admin/dashboard/ChartLin";
import PolarChert from "../components/admin/dashboard/PolarChert";
import StatisticsBtn from "../components/admin/dashboard/StatisticsBtn";
import {
  getUserStatistics,
  getNumbersStatistics,
} from "../store/actions/adminAction";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../store/features/authSlicer";

function Dashboard() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    getUserStatistics(dispatch, token);
    getNumbersStatistics(dispatch, token);
  }, []);
  return (
    <>
      <Container maxW={"container.xl"}>
        <StatisticsBtn />
        <Grid
          templateColumns="repeat(6, 1fr)"
          gap={5}
          alignItems="center"
          justifyContent="center"
          mt="5"
          w="100%"
          maxH={"100hv"}
        >
          <GridItem colSpan={{ base: 6, md: 4 }} minW={"100%"} h="100%">
            <ChartLin />
          </GridItem>
          <GridItem colSpan={{ base: 6, md: 2 }} minW={"100%"} h="100%">
            <PolarChert />
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
