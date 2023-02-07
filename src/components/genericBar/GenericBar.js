import { React, useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { MapYearfunct } from "../analyzedData/analyzerYear";
import { useSelector } from "react-redux";

import '../pie.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function GenericBar(props) {
  // console.log("props data",props)
  const mydata = useSelector((state) => state.fetchData.data);

  const [data1, setdata1] = useState({
    Eyear: [],
    intensity: [],
    relevance: [],
    likelihood: [],
  });


  useEffect(() => {
    if (mydata.length > 0) {
      console.log("i am insidit");
      let MapYear = {};
      console.log("props val", props.year)
      MapYear.mapToYear = MapYearfunct(mydata, props.year);

      let resp = convertToArray(MapYear.mapToYear);
      setdata1(resp);
    }
  }, [mydata, props.year]);


  function convertToArray(data) {
    let resp = { Eyear: [], intensity: [], relevance: [], likelihood: [] };


    for (const key in data) {
      for (const key1 in resp) {
        resp[key1].push(data[key][key1]);
        // console.log(key,key1)
      }
    }

    return resp;
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `${props.year} vs intensity,relevance,likelihood1`,
      },
    },
  };




  const labels = data1.Eyear;

  const data = {
    labels,
    datasets: [
      {
        label: "Intensity",
        data: data1.intensity,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Likelihood",
        data: data1.likelihood,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Relevance",
        data: data1.relevance,
        backgroundColor: "rgba(153, 102, 25, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data}
    className="Bar"
  />;
}

export default GenericBar;
