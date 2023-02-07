import { React, useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { mapDivisions } from "../analyzedData/analyzerDivisions";
import { useSelector } from "react-redux";
import store from "../../store";
import '../pie.css'

ChartJS.register(ArcElement, Tooltip, Legend);
function GenericPie(props) {
  const mydata = useSelector((state) => state.fetchData.data);
  console.log("a", store.getState());
  const [data1, setdata1] = useState({
    sectorvals: [],
    sectornames: [],
  });

  const { param } = props;

  useEffect(() => {
    console.log("generic pies", mydata);
    // setparams(param)
    if (mydata.length > 0) {
      let divisionmap = {};
      divisionmap = mapDivisions(mydata);
      let resp = convertToArray(divisionmap[param]);
      setdata1(resp);
    }
  }, [mydata, param]);



  function convertToArray(data) {
    console.log("change value", data);
    let resp = {
      sectorvals: [],
      sectornames: [],
    };

    for (const key in data) {
      resp["sectorvals"].push(data[key].count);
      resp["sectornames"].push(key);
    }
    console.log("array resp", resp);
    return resp;
  }



  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: `Counts of ${param}`,
        subtitle: {
          display: true,
          text: "Custom Chart Subtitle",
        },
      },
    },
  };
  const data = {
    labels: data1.sectornames,
    datasets: [
      {
        label: ` ${param}`,
        data: data1.sectorvals,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(203, 102, 255, 0.2)",
          "rgba(255, 159, 164, 0.2)",
          "rgba(205, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Pie data={data} options={options} 
      className="Pies"
      />
     
    </div>
  );
}

export default GenericPie;
