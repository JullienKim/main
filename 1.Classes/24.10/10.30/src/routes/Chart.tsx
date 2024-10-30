import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchCoinhistory } from "../api";
import ApexChart from "react-apexcharts";

interface CoinHistory {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  narket_cap: number;
}

const Chart = () => {
  const { coinId } = useParams();
  const { isLoading, data } = useQuery({
    queryKey: ["history", coinId],
    queryFn: () => fetchCoinhistory(coinId),
  });
  // console.log(data);
  // console.log(isLoading, data);
  return (
    <div>{isLoading ? "loading Chart..." : <ApexChart type="line" series={[{name:}]} />}</div>
  );
};

export default Chart;
