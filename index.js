var options = {
    series: [{
        name: 'Sales',
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
    }],
    chart: {
        height: 350,
        type: 'line',
    },
    forecastDataPoints: {
        count: 7
    },
    stroke: {
        width: 5,
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
        tickAmount: 10,
        labels: {
            formatter: function (value, timestamp, opts) {
                return opts.dateFormatter(new Date(timestamp), 'dd MMM')
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            gradientToColors: ['#FDD835'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
        },
    },
    yaxis: {
        min: -10,
        max: 40
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

var options = {
    series: [78],
    chart: {
        height: 250,
        type: 'radialBar',
        offsetY: -10
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
                name: {
                    fontSize: '15px',
                    color: undefined,
                    offsetY: 20
                },
                value: {
                    offsetY: -20,
                    fontSize: '22px',
                    color: undefined,
                    formatter: function (val) {
                        return val + "%";
                    }
                }
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
        },
    },
    stroke: {
        dashArray: 4
    },
    labels: ['Growth'],
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();

var options = {
    series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    chart: {
        // height: 200,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    // title: {
    //     text: 'Product Trends by Month',
    //     align: 'left'
    // },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
    },
    // xaxis: {
    //     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    // }
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();


var options = {
    series: [{
        data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
    }],
    chart: {
        type: 'line',
        height: 200
    },
    stroke: {
        curve: 'stepline',
    },
    dataLabels: {
        enabled: false
    },
    // title: {
    //     text: 'Stepline Chart',
    //     align: 'left'
    // },
    markers: {
        hover: {
            sizeOffset: 4
        }
    }
};

var chart = new ApexCharts(document.querySelector("#chart3"), options);
chart.render();

var options = {
    series: [75],
    chart: {
        height: 100,
        type: 'radialBar',
        toolbar: {
            show: true
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: -0,
            endAngle: 320,
            hollow: {
                margin: 0,
                size: '70%',
                background: '#fff',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
                // dropShadow: {
                //     enabled: true,
                //     top: 3,
                //     left: 0,
                //     blur: 4,
                //     opacity: 0.24
                // }
            },
            track: {
                background: '#fff',
                strokeWidth: '67%',
                margin: 0, // margin is in pixels
                // dropShadow: {
                //     enabled: true,
                //     top: -3,
                //     left: 0,
                //     blur: 4,
                //     opacity: 0.35
                // }
            },

            dataLabels: {
                show: true,
                name: {
                    offsetY: -10,
                    show: true,
                    color: '#888',
                    fontSize: '17px'
                },
                value: {
                    formatter: function (val) {
                        // return parseInt(val);
                    },
                    color: '#111',
                    fontSize: '16px',
                    show: true,
                }
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#ABE5A1'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
        }
    },
    stroke: {
        lineCap: 'round'
    },
    labels: [''],
};

var chart = new ApexCharts(document.querySelector("#chart4"), options);
chart.render();

var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
        width: 250,
        type: 'donut',
    },
    plotOptions: {
        pie: {
            startAngle: -90,
            endAngle: 270
        }
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        type: 'gradient',
    },
    legend: {
        formatter: function (val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex]
        }
    },
    // title: {
    //     text: 'Gradient Donut with custom Start-angle'
    // },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 220
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#chart5"), options);
chart.render();