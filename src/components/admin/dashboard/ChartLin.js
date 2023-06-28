import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { useSelector } from "react-redux";
import {
  selectLabelsLine,
  selectDataLine,
  selectTileLabel,
} from "../../../store/features/adminSlicer";

function ChartLin() {
  const labels = useSelector(selectLabelsLine);
  const data = useSelector(selectDataLine);
  const tileLabel = useSelector(selectTileLabel);

  const options = {
    maintainAspectRatio: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          borderDash: [3, 3],
        },
        beginAtZero: true, // this works
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const dataChart = {
    labels: labels,
    datasets: [
      {
        label: tileLabel,
        data: data,
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return <Line data={dataChart} options={options} />;
}

export default ChartLin;
