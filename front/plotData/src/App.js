import React, { useEffect, useState } from 'react';
import { getBounce, getPrevData } from "./getData/apiCall";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import CanvasJSReact from "./Canvas/canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;




function App() {

  var [Bounce, setBounce] = useState(0);
  var [check, setCheck] = useState(false);
  var [sliderValue, setValue1] = useState(0);
  var [dataObj, setDataObj] = useState({});
  var [data, setData] = useState({
    height: 0,
    restiturion: 0
  });

  const options = {
    theme: "dark2",
    animationEnabled: true,
    zoomEnabled: true,
    title: {
      text: "Height vs Time"
    },
    axisX: {
      title: "Time",
      suffix: "e",
      crosshair: {
        enabled: true,
        snapToDataPoint: true
      }
    },
    axisY: {
      title: "Height",
      includeZero: false,
      crosshair: {
        enabled: true,
        snapToDataPoint: true
      }
    },
    data: [{
      type: "line",

      toolTipContent: "<b>Height: </b>{x}<br/><b>Time: </b>{y}",
      dataPoints: [

      ]
    }]
  }

  function submit(e) {

    e.preventDefault();

    var test = {
      height: data.height,
      restiturion: sliderValue
    }


    getBounce(test, (da, Bounce1, original) => {
      options.data[0].dataPoints = da;
      setBounce(Bounce1);
      console.log(da);
      setDataObj(original)
      setCheck(true)
    });
  }
  function dataToSend(e) {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev,
      [name]: Number(value)
    }))

  }

  function getPrev() {

    getPrevData((result) => {
      console.log(result.data);
      setDataObj(result.data)

      setBounce(result.data.bounce)
    })

  }

  return (
    <div>

      <h1 className="d-flex justify-content-center" >Calculate Ball Bounce</h1>




      {check ? <CanvasJSChart options={options} /> : null}
      <br /><br />
      <div className="d-flex justify-content-center">
        <form className="form-group " noValidate onSubmit={submit} style={{ width: "80%" }}>
          <label for="height" >Height</label>
          <input id="height" type="text" className="form-control" placeholder="Enter the height" onChange={dataToSend} name="height" />
          <label>Select </label>
          <Slider min={0} max={1} step={0.1} onChange={setValue1} value={sliderValue} className="width-slide" />
          <span>{sliderValue}</span><br />
          {/* <Range /> */}
          <input type="submit" value="Display" className="btn btn-lg btn-success" />
        </form>
        <button className="btn btn-lg btn-dark" onClick={getPrev}>GetPrevios Value</button>

      </div><br />
      <h2>Number of Bounce:{Bounce}</h2><br />
      <div className="d-flex flex-column">
        {dataObj.heightAxis}<br />
        {dataObj.timeAxis}
      </div>
    </div>

  );
}

export default App;
