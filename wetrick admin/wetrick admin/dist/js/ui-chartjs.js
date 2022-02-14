
var chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    info: '#B66DF4',
    blue: '#0BBCFD',
    purple: 'rgb(153, 102, 255)',
    grey: '#EBEFF6'
};

var ctxBar = document.getElementById("bar").getContext("2d");
var myBar = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ["Upload", "Download"],
        datasets: [{
            label: 'Data',
            backgroundColor: [chartColors.info, chartColors.blue],
            data: [
                45,
                15
            ]
        }]
    },
    options: {
        responsive: true,
        barRoundness: 1,
        title: {
            display: true,
            text: "User Data Usage"
        },
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    suggestedMax: 40 + 20,
                    padding: 10,
                },
                gridLines: {
                    drawBorder: false,
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false
                }
            }]
        }
    }
});
var line = document.getElementById("line").getContext("2d");
var gradient = line.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(50, 69, 209,1)');
gradient.addColorStop(1, 'rgba(265, 177, 249,0)');

var gradient2 = line.createLinearGradient(0, 0, 0, 400);
gradient2.addColorStop(0, 'rgba(255, 91, 92,1)');
gradient2.addColorStop(1, 'rgba(265, 177, 249,0)');


// let ctx1 = document.getElementById("canvas1").getContext("2d");
// let ctx2 = document.getElementById("canvas2").getContext("2d");
// let ctx3 = document.getElementById("canvas3").getContext("2d");
// let ctx4 = document.getElementById("canvas4").getContext("2d");
// var lineChart1 = new Chart(ctx1, config1);
// var lineChart2 = new Chart(ctx2, config2);
// var lineChart3 = new Chart(ctx3, config3);
// var lineChart4 = new Chart(ctx4, config4);
