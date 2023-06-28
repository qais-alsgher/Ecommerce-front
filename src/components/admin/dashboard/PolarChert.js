import React from "react";
import { useSelector } from "react-redux";
import { PolarArea } from "react-chartjs-2";
import "chart.js/auto";
import {
  selectLabelsPolar,
  selectDataPolar,
} from "../../../store/features/adminSlicer";

function PolarChert() {
  const labels = useSelector(selectLabelsPolar);
  const data = useSelector(selectDataPolar);

  const dataChart = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
        ],
      },
    ],
  };
  const config = {
    type: "polarArea",
    data: dataChart,
    options: {
      width: 50,
    },
  };
  return (
    <>
      <PolarArea
        data={dataChart}
        options={config}
        maxW={{ base: "100%", md: "50%", lg: "50%" }}
      />
    </>
  );
}

export default PolarChert;
