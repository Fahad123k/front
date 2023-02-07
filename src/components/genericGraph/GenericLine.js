import { React, useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { MapYearfunct } from "../analyzedData/analyzerYear";
import { useSelector } from "react-redux";
import '../pie.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function GenericLine(props) {

  // console.log("a",MapYear)

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
    let resp = { Eyear: [], intensity: [], relevance: [], likelihood: [] }
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
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: `${props.year} vs intensity,relevance,likelihood1`,
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const labels = data1.Eyear

  const data = {
    labels,
    datasets: [

      {
        label: 'intensity',
        data: data1.intensity,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
      {
        label: 'relevance',
        data: data1.relevance,
        borderColor: 'rgb(53, 262, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
      {
        label: 'likelihood:',
        data: data1.likelihood,
        borderColor: 'rgb(10, 10, 235)',
        backgroundColor: 'rgba(10, 10, 235, 0.5)',
        yAxisID: 'y1',
      },
    ],
  };

  return (<Line options={options} data={data}
    className="Lines" />)
}


export default GenericLine