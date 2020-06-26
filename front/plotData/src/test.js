var data = [
    {
        label: 'My First dataset',
        strokeColor: '#F16220',
        pointColor: '#F16220',
        pointStrokeColor: '#fff',
        data: [
            { x: 19, y: 65 },
            { x: 27, y: 59 },
            { x: 28, y: 69 },
            { x: 40, y: 81 },
            { x: 48, y: 56 }
        ]
    },
    {
        label: 'My Second dataset',
        strokeColor: '#007ACC',
        pointColor: '#007ACC',
        pointStrokeColor: '#fff',
        data: [
            { x: 19, y: 75, r: 4 },
            { x: 27, y: 69, r: 7 },
            { x: 28, y: 70, r: 5 },
            { x: 40, y: 31, r: 3 },
            { x: 48, y: 76, r: 6 },
            { x: 52, y: 23, r: 3 },
            { x: 24, y: 32, r: 4 }
        ]
    }
];

// require(['Chart', '../src/Chart.Scatter-master/Chart.Scatter.js'], function (Chart) {

var ctx = document.getElementById("myChart").getContext("2d");
new Chart(ctx).Scatter(data);