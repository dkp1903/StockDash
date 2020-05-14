var pivot = new Flexmonster({
    container: "#pivot-container",
    componentFolder: "https://cdn.flexmonster.com/",
    licenseFilePath: "https://cdn.flexmonster.com/codepen.key",
    width: "100%",
    height: 500,
    width: 700,
    toolbar: "true",
    report: {
        "dataSource": {
            "dataSourceType": "json",
            "data": getData()
        },
        "slice": {
        "reportFilters": [
            {
                "uniqueName": "Average Time to Solve An Issue"
            },
            {
                "uniqueName": "Customer Satisfaction"
            }
        ],
        "rows": [
            {
                "uniqueName": "Date.Year"
            }
        ],
        "columns": [
            {
                "uniqueName": "[Measures]"
            }
        ],
        "measures": [
            {
                "uniqueName": "Revenue",
                "aggregation": "sum"
            },
            {
                "uniqueName": "Client Support Cost",
                "aggregation": "sum"
            }
        ]
    },
        "options": {
            "grid": {
                "type": "classic"
            }
        },
        "conditions": [{
                "formula": "#value > 4000",
                "measure": "Revenue",
                "format": {
                    "backgroundColor": "#488A99",
                    "color": "#fff",
                    "fontFamily": "Arial",
                    "fontSize": "12px"
                }
            },
            {
                "formula": "#value > 1000",
                "measure": "Client Support Cost",
                "format": {
                    "backgroundColor": "#AC3E31",
                    "color": "#fff",
                    "fontFamily": "Arial",
                    "fontSize": "12px"
                }
            }
        ],
        "formats": [{
            "name": "",
            "maxDecimalPlaces": 2
        }]
    },
    reportcomplete: function() {
        pivot.off("reportcomplete");
        createPieChart();
        createColumnChart();
        createBarChart();
        createAreaChart();
        createLineChart();
        createLineChart2();
    }
});

function createPieChart() {
    var chart = new FusionCharts({
        "type": "pie2d",
        "renderAt": "piechartContainer",
        "width": 550,
        "height": 350

    });

    pivot.fusioncharts.getData({
        type: chart.chartType(),
        "slice": {
            "rows": [{
                "uniqueName": "Customer Satisfaction"
            }],
            "columns": [{
                "uniqueName": "[Measures]"
            }],
            "measures": [{
                "uniqueName": "Requests",
                "aggregation": "sum"
            }]
        }
    }, function(data) {
        data.chart.xAxisName = undefined;
        data.chart.yAxisName = undefined;
        data.chart.theme = "ocean"; // apply the FusionCharts theme
        data.chart.caption = "Customer Satisfaction";
        data.chart.showLegend = "1";
        chart.setJSONData(data);
        chart.render();
    }, function(data) {
        data.chart.xAxisName = undefined;
        data.chart.yAxisName = undefined;
        data.chart.theme = "ocean"; // apply the FusionCharts theme
        data.chart.caption = "Customer Satisfaction";
        data.chart.showLegend = "1";
        chart.setJSONData(data);
    });
}


function createColumnChart() {
    var chart = new FusionCharts({
        "type": "mscolumn2d",
        "renderAt": "columnchartContainer",
        "width": 550,
        "height": 350

    });

    pivot.fusioncharts.getData({
        type: chart.chartType(),
        "slice": {
            "rows": [{
                "uniqueName": "Date.Year"
            }],
            "columns": [{
                "uniqueName": "[Measures]"
            }],
            "measures": [{
                    "uniqueName": "Revenue",
                    "aggregation": "sum"
                },
                {
                    "uniqueName": "Client Support Cost",
                    "aggregation": "sum"
                }
            ]
        }
    }, function(data) {
        data.chart.xAxisName = undefined;
        data.chart.yAxisName = undefined;
        data.chart.theme = "fusion"; // apply the FusionCharts theme
        data.chart.caption = "Revenue";
        data.chart.showToolTip = "0";
        data.chart.numberPrefix = "$";
        data.chart.subcaption = "by Years";
        data.chart.showLegend = "1";
        chart.setJSONData(data);
        chart.render();
    }, function(data) {
        data.chart.xAxisName = undefined;
        data.chart.yAxisName = undefined;
        data.chart.theme = "fusion"; // apply the FusionCharts theme
        data.chart.caption = "Revenue";
        data.chart.showToolTip = "0";
        data.chart.numberPrefix = "$";
        data.chart.subcaption = "by Years";
        data.chart.showLegend = "1";
        chart.setJSONData(data);
    });
}

function createBarChart() {
    var chart = new FusionCharts({
        "type": "bar2d",
        "renderAt": "barchartContainer",
        "width": 550,
        "height": 350
    });

    pivot.fusioncharts.getData({
        type: chart.chartType(),
        "slice": {
            "rows": [{
                "uniqueName": "Average Time to Solve An Issue"
            }],
            "columns": [{
                "uniqueName": "[Measures]"
            }],
            "measures": [{
                "uniqueName": "Revenue",
                "aggregation": "count"
            }]
        }
    }, function(data) {
        data.chart.xAxisName = undefined;
        data.chart.yAxisName = undefined;
        data.chart.theme = "fusion"; // apply the FusionCharts theme
        data.chart.caption = "Average Time to Solve An Issue";
        data.chart.showLegend = "1";
        chart.setJSONData(data);
        chart.render();
    }, function(data) {
        data.chart.xAxisName = undefined;
        data.chart.yAxisName = undefined;
        data.chart.theme = "fusion"; // apply the FusionCharts theme
        data.chart.caption = "Average Time to Solve An Issue";
        data.chart.showLegend = "1";
        chart.setJSONData(data);
    });
}

function createAreaChart() {
    var chart = new FusionCharts({
        "type": "area2d",
        "renderAt": "areachartContainer",
        "width": 550,
        "height": 350

    });

    pivot.fusioncharts.getData({
        type: chart.chartType(),
        "slice": {
            "rows": [{
                "uniqueName": "Date.Year"
            }],
            "columns": [{
                "uniqueName": "[Measures]"
            }],
            "measures": [{
                "uniqueName": "Client Support Cost",
                "aggregation": "sum"
            }]
        }
    }, function(data) {
        data.chart.xAxisName = undefined;
        data.chart.yAxisName = undefined;
        data.chart.theme = "fusion"; // apply the FusionCharts theme
        data.chart.caption = "Costs per Client Support";
        data.chart.numberPrefix = "$";
        data.chart.showLegend = "1";
        chart.setJSONData(data);
        chart.render();
    }, function(data) {
        data.chart.xAxisName = undefined;
        data.chart.yAxisName = undefined;
        data.chart.theme = "fusion"; // apply the FusionCharts theme
        data.chart.caption = "Costs per Client Support";
        data.chart.numberPrefix = "$";
        data.chart.showLegend = "1";
        chart.setJSONData(data);
    });
}

function createLineChart() {
    var chart = new FusionCharts({
        "type": "line",
        "renderAt": "linechartContainer",
        "width": 550,
        "height": 350

    });

    pivot.fusioncharts.getData({
        type: chart.chartType(),
        "slice": {
            "rows": [{
                "uniqueName": "Date.Month"
            }],
            "columns": [{
                "uniqueName": "[Measures]"
            }],
            "measures": [{
                "uniqueName": "Requests",
                "aggregation": "sum"
            }]
        }
    }, function(data) {
        data.chart.xAxisName = undefined;
        data.chart.yAxisName = undefined;
        data.chart.theme = "fusion"; // apply the FusionCharts theme
        data.chart.caption = "Requests over months";
        data.chart.showLegend = "1";
        chart.setJSONData(data);
        chart.render();
    }, function(data) {
        data.chart.xAxisName = undefined;
        data.chart.yAxisName = undefined;
        data.chart.theme = "fusion"; // apply the FusionCharts theme
        data.chart.caption = "Requests over months";
        data.chart.showLegend = "1";
        chart.setJSONData(data);
    });
}

function createLineChart2() {
    var chart = new FusionCharts({
        "type": "line",
        "renderAt": "linechartContainer2",
        "width": 550,
        "height": 350

    });

    pivot.fusioncharts.getData({
        type: chart.chartType(),
        "slice": {
            "rows": [{
                "uniqueName": "Date.Month"
            }],
            "columns": [{
                "uniqueName": "[Measures]"
            }],
            "measures": [{
                "uniqueName": "Answered Calls",
                "aggregation": "sum"
            }]
        }
    }, function(data) {
        data.chart.xAxisName = undefined;
        data.chart.yAxisName = undefined;
        data.chart.theme = "fusion"; // apply the FusionCharts theme
        data.chart.caption = "Answered calls over months";
        data.chart.showLegend = "1";
        chart.setJSONData(data);
        chart.render();
    }, function(data) {
        data.chart.xAxisName = undefined;
        data.chart.yAxisName = undefined;
        data.chart.theme = "fusion"; // apply the FusionCharts theme
        data.chart.caption = "Answered calls over months";
        data.chart.showLegend = "1";
        chart.setJSONData(data);
    });
}


function getData() {
    return [{
            "Customer Satisfaction": "Satisfied",
            "Average Time to Solve An Issue": "Less than 1 hour",
            "Revenue": 455,
            "Client Support Cost": 250,
            "Requests": 55,
            "Date": "2015-02-14T07:34:08",
            "Answered Calls": 45
        },
        {
            "Customer Satisfaction": "Satisfied",
            "Average Time to Solve An Issue": "Less than 1 hour",
            "Revenue": 156,
            "Client Support Cost": 501,
            "Requests": 55,
            "Date": "2015-02-14T07:34:08",
            "Answered Calls": 48
        },
        {
            "Customer Satisfaction": "Very satisfied",
            "Average Time to Solve An Issue": "Less than 1 hour",
            "Revenue": 455,
            "Client Support Cost": 302,
            "Requests": 75,
            "Date": "2016-01-11T07:28:30",
            "Answered Calls": 95
        },
        {
            "Customer Satisfaction": "Very satisfied",
            "Average Time to Solve An Issue": "Less than 1 hour",
            "Revenue": 455,
            "Client Support Cost": 205,
            "Requests": 75,
            "Date": "2016-01-11T07:28:30",
            "Answered Calls": 14
        },
        {
            "Customer Satisfaction": "Satisfied",
            "Average Time to Solve An Issue": "Less than 1 hour",
            "Revenue": 236,
            "Client Support Cost": 63,
            "Requests": 55,
            "Date": "2017-11-27T06:52:07",
            "Answered Calls": 45
        },
        {
            "Customer Satisfaction": "Satisfied",
            "Average Time to Solve An Issue": "Less than 1 hour",
            "Revenue": 355,
            "Client Support Cost": 140,
            "Requests": 55,
            "Date": "2017-11-27T06:52:07",
            "Answered Calls": 43
        },
        {
            "Customer Satisfaction": "Satisfied",
            "Average Time to Solve An Issue": "Less than 1 hour",
            "Revenue": 354,
            "Client Support Cost": 88,
            "Requests": 65,
            "Date": "2017-10-13T05:34:44",
            "Answered Calls": 45
        }, {
            "Customer Satisfaction": "Satisfied",
            "Average Time to Solve An Issue": "1 - 2 hours",
            "Revenue": 354,
            "Client Support Cost": 170,
            "Requests": 65,
            "Date": "2017-10-13T05:34:44",
            "Answered Calls": 45
        },
        {
            "Customer Satisfaction": "Neutral",
            "Average Time to Solve An Issue": "1 - 2 hours",
            "Revenue": 354,
            "Client Support Cost": 230,
            "Requests": 55,
            "Date": "2014-11-20T07:16:26",
            "Answered Calls": 45
        },
        {
            "Customer Satisfaction": "Neutral",
            "Average Time to Solve An Issue": "1 - 2 hours",
            "Revenue": 354,
            "Client Support Cost": 160,
            "Requests": 25,
            "First Name": "Vega",
            "Last Name": "Sexton",
            "Company": "KONNECT",
            "Date": "2018-12-18T01:26:57",
            "Answered Calls": 22
        },
        {
            "Customer Satisfaction": "Neutral",
            "Average Time to Solve An Issue": "1 - 2 hours",
            "Revenue": 352,

            "Client Support Cost": 180,

            "Date": "2015-09-12T05:29:36",
            "Answered Calls": 89
        },
        {
            "Customer Satisfaction": "Neutral",

            "Average Time to Solve An Issue": "Less than 1 hour",
            "Revenue": 654,

            "Client Support Cost": 190,
            "Requests": 23,

            "Date": "2016-06-13T11:43:37",
            "Answered Calls": 78
        },
        {
            "ID": 8,
            "Customer Satisfaction": "Satisfied",


            "Average Time to Solve An Issue": "Less than 1 hour",
            "Revenue": 355,
            "Client Support Cost": 140,
            "Requests": 55,
            "Date": "2015-10-03T05:41:44",
            "Answered Calls": 23
        },
        {
            "Customer Satisfaction": "Satisfied",
            "Average Time to Solve An Issue": "Less than 1 hour",
            "Revenue": 770,
            "Client Support Cost": 177,
            "Requests": 23,
            "Date": "2014-04-28T06:05:53",
            "Answered Calls": 15
        },
        {
            "Customer Satisfaction": "Satisfied",
            "Average Time to Solve An Issue": "Less than 1 hour",
            "Revenue": 770,
            "Client Support Cost": 200,
            "Requests": 45,
            "Date": "2014-06-13T03:03:22",
            "Answered Calls": 44
        },
        {

            "Customer Satisfaction": "Satisfied",
            "Average Time to Solve An Issue": "Less than 1 hour",
            "Revenue": 770,

            "Client Support Cost": 300,
            "Requests": 55,

            "Date": "2015-07-28T12:04:26",
            "Answered Calls": 22
        },
        {
            "Customer Satisfaction": "Satisfied",
            "Average Time to Solve An Issue": "Less than 1 hour",
            "Revenue": 770,
            "Client Support Cost": 140,
            "Requests": 55,
            "Date": "2014-12-31T10:21:58",
            "Answered Calls": 45
        },
        {
            "ID": 13,
            "Customer Satisfaction": "Satisfied",
            "Average Time to Solve An Issue": "Less than 1 hour",
            "Revenue": 550,

            "Client Support Cost": 120,
            "Requests": 55,

            "Date": "2017-09-09T07:11:20",
            "Answered Calls": 88
        },
        {

            "Customer Satisfaction": "Neutral",
            "Average Time to Solve An Issue": "Less than 1 hour",
            "Revenue": 655,
            "Client Support Cost": 88,
            "Requests": 45,
            "Date": "2014-06-15T12:41:23",
            "Answered Calls": 35
        },
        {
            "Customer Satisfaction": "Satisfied",
            "Average Time to Solve An Issue": "Less than 1 hour",
            "Revenue": 354,
            "Client Support Cost": 90,
            "Requests": 55,
            "Date": "2017-12-08T11:25:50",
            "Answered Calls": 74
        },
        {
            "Customer Satisfaction": "Neutral",
            "Average Time to Solve An Issue": "More than 2 hours",
            "Revenue": 322,
            "Client Support Cost": 30,
            "Requests": 55,
            "Date": "2018-03-18T04:39:25",
            "Answered Calls": 41
        },
        {
            "Customer Satisfaction": "Unsatisfied",
            "Average Time to Solve An Issue": "More than 2 hours",
            "Revenue": 322,
            "Client Support Cost": 140,
            "Requests": 55,
            "Date": "2014-11-18T11:59:17",
            "Answered Calls": 44
        },
        {
            "Customer Satisfaction": "Satisfied",
            "Average Time to Solve An Issue": "Less than 1 hour",
            "Revenue": 774,
            "Client Support Cost": 220,
            "Requests": 123,
            "Date": "2016-08-06T03:38:09",
            "Answered Calls": 99
        },
        {
            "Customer Satisfaction": "Satisfied",
            "Average Time to Solve An Issue": "Less than 1 hour",
            "Revenue": 436,
            "Client Support Cost": 130,
            "Requests": 123,
            "Date": "2014-07-16T08:27:06",
            "Answered Calls": 36
        },
        {
            "Customer Satisfaction": "Satisfied",
            "Average Time to Solve An Issue": "Less than 1 hour",
            "Revenue": 655,
            "Client Support Cost": 70,
            "Requests": 123,
            "Date": "2019-02-01T01:16:28",
            "Answered Calls": 98
        },
        {
            "Customer Satisfaction": "Satisfied",
            "Average Time to Solve An Issue": "Less than 1 hour",
            "Revenue": 455,
            "Client Support Cost": 140,
            "Requests": 123,
            "Date": "2019-02-01T01:16:28",
            "Answered Calls": 105
        }
    ]
}
