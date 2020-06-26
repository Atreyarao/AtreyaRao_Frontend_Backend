import axios from "axios"
import fs from "fs";



export const getBounce = (data, clbk) => {
    var chartData = [];
    axios.post("http://localhost:1234/routes/api/getBounce", data).then(result => {
        //console.log(result.data);
        const { heightAxis, timeAxis, bounce } = result.data;

        //console.log("bounce=" + bounce)
        for (var i = 0; i < heightAxis.length; i++) {
            chartData.push({ x: timeAxis[i], y: heightAxis[i] })
        }
        clbk(chartData, bounce, result.data)

    })

}

export const getPrevData = (clbk) => {
    axios.get("http://localhost:1234/routes/api/prevValue").then(result => {
        clbk(result);
    })
}