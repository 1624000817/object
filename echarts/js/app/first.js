
/*折线图*/
var discount= echarts.init(document.getElementById("left-first"));
var app = {};
option = null;
app.title = '多 X 轴示例';

var colors = ['#00FFF9', '#262829', '#fff'];


option = {
    color: colors,
	textStyle:{
    		color:'#00FFF9'
    },
    grid: {
        top: 70,
        bottom: 50
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[2]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '客流量  ' + params.value + '：' + params.seriesData[0].data;
                    }
                }
            },
            data: ["8:00", "10:00", "12:00", "14:00", "16:00", "18：00", "20:00", "22:00","24:00"]
        },
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
               /* onZero: false,*/
                lineStyle: {
                    color: colors[2]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '客流量 ' + params.value + '：' + params.seriesData[0].data;
                    }
                }
            },
          
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
       
        {
            name:'今日客流数据统计',
            type:'line',
            smooth: true,
            data: [0,11, 13,19,9,7, 27,18, 0]
        }
    ]
};
if (option && typeof option === "object") {
    discount.setOption(option, true);
}

/*饼图*/
var mycircle = echarts.init(document.getElementById("right-first"));
 var option = {
    visualMap: {
        show: false,
        min: 150,
        max: 1200,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data:[
                {
                	value:300, 
                	name:'0-18岁',
                	itemStyle:{
                		normal:{
                			color:'#ffffff'
                		}
                	}
                	},
                {
                	value:150,
                	name:'31-40岁',
                	itemStyle:{
                		normal:{
                			color:'#00fff9'
                		}
                	}
                	},
                {
                	value:150, 
                	name:'40岁以上',
                	itemStyle:{
                		normal:{
                			color:'#1e5f6f'
                		}
                	}
                },
                 {
                 	value:600, 
                 	name:'19-30岁',
                 	itemStyle:{
                		normal:{
                			color:'#49bdca'
                		}
                	}
                 }
            ],
            label: {
                normal: {
                    textStyle: {
                        color: '#00fff9'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            }
        }
    ]
};
mycircle.setOption(option);

/*出勤率*/
var myyuan = echarts.init(document.getElementById("yuan"));
option = {
    series: [{
        center: ['50.0%', '50%'],
        radius: ['50%', '60%'],
        hoverAnimation: false,
        type: 'pie',
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 30,
            name: '86.3%\n今日出勤率',
            label: {
                normal: {
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        color: '#00fff9'
                    }
                }
            }
        }, {
            value: 90
        }]
    }]
    }
myyuan.setOption(option);


/*考勤*/
var myzhu = echarts.init(document.getElementById("zhu"));
var option = {
    color: ['#47fff9'],
    textStyle:{
    		color:'#00FFF9'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            data : ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        }
    ],
    yAxis : [
        {
            type : 'category',
            data : ['25','50','75','100'],
            axisTick: {
                show:'false'
            }
        }
    ],
    series : [
        {
            name:'签到情况',
            type:'bar',
            barWidth: '20%',
            data:[1, 3, 2, 3, 4, 2, 1]
        },
        
    ],
    label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c}'
            }
        },
    itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(17, 168,171, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(17, 168,171, 0.1)'
                    }]),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            }
};
myzhu.setOption(option);


/*第四屏*/

var first = echarts.init(document.getElementById("first"));
var option = {
    series: [{
        type: 'liquidFill',
        data: [0.6, 0.55, 0.4, 0.25],
        radius: '90%',
        outline: {
            show: false
        },
        backgroundStyle: {
            borderColor: '#156ACF',
            borderWidth: 1,
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
        },
        shape: 'path://M367.855,428.202c-3.674-1.385-7.452-1.966-11.146-1.794c0.659-2.922,0.844-5.85,0.58-8.719 c-0.937-10.407-7.663-19.864-18.063-23.834c-10.697-4.043-22.298-1.168-29.902,6.403c3.015,0.026,6.074,0.594,9.035,1.728 c13.626,5.151,20.465,20.379,15.32,34.004c-1.905,5.02-5.177,9.115-9.22,12.05c-6.951,4.992-16.19,6.536-24.777,3.271 c-13.625-5.137-20.471-20.371-15.32-34.004c0.673-1.768,1.523-3.423,2.526-4.992h-0.014c0,0,0,0,0,0.014 c4.386-6.853,8.145-14.279,11.146-22.187c23.294-61.505-7.689-130.278-69.215-153.579c-61.532-23.293-130.279,7.69-153.579,69.202 c-6.371,16.785-8.679,34.097-7.426,50.901c0.026,0.554,0.079,1.121,0.132,1.688c4.973,57.107,41.767,109.148,98.945,130.793 c58.162,22.008,121.303,6.529,162.839-34.465c7.103-6.893,17.826-9.444,27.679-5.719c11.858,4.491,18.565,16.6,16.719,28.643 c4.438-3.126,8.033-7.564,10.117-13.045C389.751,449.992,382.411,433.709,367.855,428.202z',
        label: {
            normal: {
                position: ['38%', '40%'],
                formatter: function() {
                    return '哈哈\nO(∩_∩)O~';
                },
                textStyle: {
                    fontSize: 20,
                    color: '#D94854'
                }
            }
        }
    }]

};

first.setOption(option);

var second = echarts.init(document.getElementById("second"));
option = {
    backgroundColor: "#a73e5c",
    color: ['#ffd285', '#ff733f', '#ec4863'],

    title: [{
        text: '河南省主要城市空气质量指数',
        left: '1%',
        top: '6%',
        textStyle: {
            color: '#ffd285'
        }
    }, {
        text: '污染占比分析',
        left: '83%',
        top: '6%',
        textAlign: 'center',
        textStyle: {
            color: '#ffd285'
        }
    }],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        x: 300,
        top: '7%',
        textStyle: {
            color: '#ffd285',
        },
        data: ['郑州', '永城', '新乡']
    },
    grid: {
        left: '1%',
        right: '35%',
        top: '16%',
        bottom: '6%',
        containLabel: true
    },
    toolbox: {
        "show": false,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        "axisLine": {
            lineStyle: {
                color: '#c0576d'
            }
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            textStyle: {
                color: '#ffd285'
            }
        },
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        "axisLine": {
            lineStyle: {
                color: '#c0576d'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#c0576d'
            }
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            textStyle: {
                color: '#ffd285'
            }
        },
        type: 'value'
    },
    series: [{
        name: '郑州',
        smooth: true,
        type: 'line',
        symbolSize: 8,
      	symbol: 'circle',
        data: [90, 50, 39, 50, 120, 82, 80]
    }, {
        name: '永城',
        smooth: true,
        type: 'line',
        symbolSize: 8,
      	symbol: 'circle',
        data: [70, 50, 50, 87, 90, 80, 70]
    }, {
        name: '新乡',
        smooth: true,
        type: 'line',
        symbolSize: 8,
      	symbol: 'circle',
        data: [290, 200,20, 132, 15, 200, 90]
    }, 
    {
        type: 'pie',
        center: ['83%', '33%'],
        radius: ['25%', '30%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 335,
            name: '污染来源分析',
            itemStyle: {
                normal: {
                    color: '#ffd285'
                }
            },
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        color: '#ffd285',
                        fontSize: 5

                    }
                }
            }
        }, {
            value: 180,
            name: '占位',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#b04459'
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#ffd285',
                        
                    },
                    formatter: '\n汽车尾气'
                }
            }
        }]
    },


    {
        type: 'pie',
        center: ['83%', '72%'],
        radius: ['25%', '30%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 435,
            name: '污染来源分析',
            itemStyle: {
                normal: {
                    color: '#ff733f'
                }
            },
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        color: '#ff733f',
                        fontSize: 5

                    }
                }
            }
        }, {
            value: 100,
            name: '占位',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#b04459'


                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#ff733f',
                    },
                    formatter: '\n工业污染'
                }
            }
        }]
    }]
}
second.setOption(option);

var three = echarts.init(document.getElementById("three"));
 //微博上看到的图
var option = {
    series: [{
        color: ['#C5DA51', '#D8E69B', '#dae89b', '#dae89b'],
        type: 'liquidFill',
        data: [0.6,0.59,0.55,0.50],
        radius: '90%',
        outline: {
            show: false
        },
        backgroundStyle: {
            borderColor: '#05a09c',
            borderWidth: 2,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowBlur: 20
        },
        shape: 'path://M-51.8,519.4c-2.7-0.4-4.9-2.7-4.9-5.5l0,0v-3.5h0.8c1.4,0,2.6-1.2,2.6-2.6v-0.5  c0-1.4-1.2-2.6-2.6-2.6h-26c-1.4,0-2.6,1.2-2.6,2.6v0.5c0,1.4,1.2,2.6,2.6,2.6h0.8v3.5l0,0c0,2.8-2.1,5.2-4.9,5.5  c-10.1,1-18,9.6-18,19.9v120c0,11,9,20,20,20h30c11,0,20-9,20-20v-120C-33.9,529-41.8,520.5-51.8,519.4z',
        label: {
            normal: {
                position: ['50%', '30%'],
                formatter: function() {
                    return '许愿瓶 ';
                },
                textStyle: {
                    fontSize: 40,
                    color: '#D94854'
                }
            }
        }
    }]


};
three.setOption(option);



var four = echarts.init(document.getElementById("four"));
var uploadedDataURL = "/asset/get/s/data-1490602888744-Bkb5iBU3g.png";
var hdfs_stack_bar_data = {
    "namelist": ["3G4G固网日志", "上网轨迹", "数据源", "标签", "大数据实验室", "BML", "storm", "NOC智能网管", "无线CDR话单", "其他 "],
    "dataArr_bar": {
        "3G4G固网日志": [883.97, 896.18, 906.39, 922.20, 929.44, 941.16, 951.90],
        "上网轨迹": [53.54, 53.65, 53.70, 53.77, 53.84, 53.90, 53.97],
        "数据源": [698.59, 696.31, 696.40, 696.58, 699.57, 702.37, 701.41],
        "标签": [535.76, 536.07, 536.96, 538.39, 539.12, 539.96, 539.17],
        "大数据实验室": [10.46, 10.46, 10.46, 10.46, 10.46, 10.46, 10.46],
        "BML": [204.81, 204.41, 204.46, 204.87, 204.68, 204.77, 203.29],
        "storm": [0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04],
        "NOC智能网管": [95.09, 96.51, 97.62, 99.46, 101.27, 102.01, 102.58],
        "无线CDR话单": [4.04, 4.04, 4.04, 4.04, 4.04, 4.04, 4.06],
        "其他": [301.53, 307.28, 308.99, 311.60, 316.25, 317.57, 319.98]
    },
    "dataArr_line": {
        "3G4G固网日志": [1.15, 1.38, 1.13, 1.74, 0.78, 1.26, 1.14],
        "上网轨迹": [0.1, 0.20, 0.10, 0.12, 0.12, 0.12, 0.12],
        "数据源": [0.01, -0.320, 0.01, 0.02, 0.42, 0.40, -0.13],
        "标签": [0.05, 0.05, 0.16, 0.26, 0.13, 0.15, -0.14],
        "大数据实验室": [0, 0, 0, 0, 0, 0, 0],
        "BML": [0.06, -0.19, 0.02, 0.19, -0.09, 0.04, -0.72],
        "storm": [0, 0, 0, 0, 0, 0, 0],
        "NOC智能网管": [0.62, 1.49, 1.14, 1.88, 1.81, 0.72, 0.55],
        "无线CDR话单": [0, 0, 0, 0, 0, 0, 0],
        "其他": [0.00, 0.64, 0.85, 0.78, 1.93, 0.72, 1.19]
    }
};
var x_line = ["2017-03-10", "2017-03-11", "2017-03-12", "2017-03-13", "2017-03-14", "2017-03-15", "2017-03-16"];
var colorConsArr_hdfs = ["#ffca67", "#ff60a2", "#bf64ff", "#6c65fb", "#93dffc", "#fb915f", "#4fc277", "#3e94fe", "#ff9cc5", "#c46100", "#9de369"];
var option = {
    animation: false,
    backgroundColor: 'rgba(7,14,28,1)', //设置背景色
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        backgroundColor: 'rgba(7,14,28,0.9)',
        // position: function(point, params, dom) {
        //     // 固定在顶部
        //     return [point[0], '10%'];
        // },
        formatter:function(value,index){
            var tooltip='';
            var contentsDiv="";
            var barSum=0,lineSum=0;
            for(var i=0;i<value.length;i++){
            	if(i%2===0){
            		var barValue,lineValue;
            		value[i].hasOwnProperty("value")?barValue=value[i].value:barValue="暂无数据";
            		value[i+1].hasOwnProperty("value")?lineValue=value[i+1].value:lineValue="暂无数据";
            	    barValue.toString().indexOf("暂无数据")<0?barSum+=~~barValue:barSum+=0;
            		lineValue.toString().indexOf("暂无数据")<0?lineSum+=~~lineValue:lineSum+=0;
            		contentsDiv+="<div style='width:270px;height:13px;padding:5px 10px 6px 10px;font-size:14px;color:"+value[i].color+"'>"+"<span style='display:inline-block;margin-bottom:5px;width:12px;height:12px;border-radius:6px;background:"+value[i].color+"'>"+"</span>"+"<span style='display:inline-block;padding:0 5px 0 5px;width:95px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'>"+value[i].seriesName+"</span>"+"<span style='display:inline-block;padding:0 5px 0 5px;width:45px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'>"+barValue+"</span>"+"<span style='display:inline-block;padding:0 5px 0 5px;width:85px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'>"+"增长率"+lineValue+"</span>"+"</div>";
            	}
            }
        	contentsDiv+="<div style='width:270px;height:13px;padding:5px 10px 6px 10px;font-size:14px;color:#6c65fb'>"+"<span style='display:inline-block;margin-bottom:5px;width:12px;height:12px;border-radius:6px;background:url(/asset/get/s/data-1490602888744-Bkb5iBU3g.png) no-repeat center center'>"+"</span>"+"<span style='display:inline-block;padding:0 5px 0 5px;width:95px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'>"+"增长率"+"</span>"+"<span style='display:inline-block;padding:0 5px 0 5px;width:45px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'>"+barSum+"</span>"+"<span style='display:inline-block;padding:0 5px 0 5px;width:85px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'>"+"增长率"+lineSum+"</span>"+"</div>";
            tooltip="<div style='width:290px;height:100%;border-radius:8px;padding 10px 5px 10px 5px;margin-bottom:15px;'>"+"<span style='display:block;padding:16px 10px 0 10px;font-size:14px;font-weight:700;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'>"+value[0].axisValue+"资源使用情况"+"</span>"+contentsDiv+"<span style='display:block'>"+"</div>";
            return tooltip;
            
        }
    },
    grid: {
        left: '3%',
        right: '1%',
        bottom: '3%',
        top: "17%",
        containLabel: true,
        borderColor: '#1d203b'
    },
    legend: {
        itemGap: 14,
        right: '16%',
        top: '2%',
        //padding:[40,10,0,10],
        data: [] //ToDo
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        data: x_line,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        //坐标轴刻度标签
        axisLabel: {
            textStyle: {
                color: "#454e72"
            },
            formatter: function(value, index) {
                var xName = value.substring(value.indexOf("-") + 1);
                return xName.replace(/-/g, ".");
            },
            margin: 20
        },
        splitLine: {
            lineStyle: {
                color: "#1d203b"
            }
        },

    }],
    yAxis: [{
        name: '单位（T）',
        nameGap:20,
        nameTextStyle:{
            color:'#454e72',
            fontSize: 12,
            },
        type: 'value',
        nameGap: 15,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        scale: true,
        axisLabel: {
            // formatter: function(value, idx) {
            //     if (idx === 0) {
            //         return value + "T";
            //     } else {
            //         return value;
            //     }
            // },
            textStyle: {
                color: '#454e72'
            },
            margin: 20
        },
        boundaryGap: [0.2, 0.2],
        splitLine: {
            lineStyle: {
                color: ["#1d203b"]
            }
        }
    }, {
        name: '单位（%）',
        nameGap:20,
        nameTextStyle:{
            color:'#454e72',
            fontSize: 12,
            },
        type: 'value',
        nameGap: 15,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        scale: true,
        axisLabel: {
            // formatter: function(value, idx) {
            //     if (idx === 0) {
            //         return value + "%";
            //     } else {
            //         return value;
            //     }
            // },
            textStyle: {
                color: '#454e72'
            },
            margin: 20
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: ["#1d203b"]
            }
        },
        boundaryGap: [0.2, 0.2]
    }],
    series: []
};
for (var i = 0; i < hdfs_stack_bar_data["namelist"].length + 1; i++) {
    var namelist = hdfs_stack_bar_data["namelist"];
    var series = [];
    if (i < hdfs_stack_bar_data["namelist"].length) {
        option.series.push({
            name: namelist[i],
            type: 'bar',
            stack: '广告',
            barWidth: "50%",
            data: hdfs_stack_bar_data['dataArr_bar'][namelist[i]],
            itemStyle: {
                normal: {
                    color: colorConsArr_hdfs[i]
                }
            }
        });
        option.series.push({
            name: namelist[i],
            type: 'line',
            yAxisIndex: 1,
            data: hdfs_stack_bar_data['dataArr_line'][namelist[i]],
            symbol: 'none',
            smooth: true,
            lineStyle: {
                normal: {
                    barBorderRadius: 0,
                    width: 2.5, //连线粗细
                    color: colorConsArr_hdfs[i] //连线颜色
                }
            },
        });
        option.legend.data.push({
            name: namelist[i],
            icon: "circle",
            textStyle: {
                color: []
            }
        });
    } else {
        option.series.push({
            name: "增长率",
            type: 'bar',
            stack: '广告',
            barWidth: "52%",
            data: [],
        });
        option.series.push({
            name: "增长率",
            type: 'line',
            yAxisIndex: 1,
            data: [],
            symbol: 'none',
        });
        option.legend.data.push({
            name: "增长率",
            icon:'image:///asset/get/s/data-1490602888744-Bkb5iBU3g.png',
            selectedMode:false,
            textStyle: {
                color: '#6c65fb',
                fontSize:14,
                
            }
        });
    }

};
four.setOption(option);

var five = echarts.init(document.getElementById("five"));
var beginTime = null;
var clicks = 0;
var TOTAL_CLICKS = 100;

var option = {
    title: {
        text: '图表由 ECharts 制作',
        textStyle: {
            fontSize: 15,
            color: '#999'
        },
        left: '50%',
        top: '90%',
        textAlign: 'center',
        textBaseAlign: 'middle'
    },
    series: [{
        color: ['#FFBFE5', '#EA88CE', '#DE52B4', '#C42795'],
        type: 'liquidFill',
        silent: true,
        animationDurationUpdate: 200,
        data: getData(clicks),
        radius: '80%',
        outline: {
            show: false
        },
        backgroundStyle: {
            borderColor: '#A31180',
            borderWidth: 1,
            shadowColor: 'rgba(234, 136, 206, 0.8)',
            shadowBlur: 100,
            color: '#FEF9FF'
        },
        itemStyle: {
            normal: {
                opacity: 0.6,
                shadowColor: 'rgba(234, 136, 206, 0.2)'
            }
        },
        shape: 'path://M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z',
        label: {
            normal: {
                position: ['50%', '45%'],
                formatter: function() {
                    if (clicks === 0) {
                        return '开始游戏';
                    } else if (clicks >= TOTAL_CLICKS) {
                        return '祝我最爱的 XXX\n情人节快乐！';
                    } else {
                        var elapsed = new Date() - beginTime;
                        return Math.floor(clicks / TOTAL_CLICKS * 100) + '%\n';
                    }
                },
                textStyle: {
                    fontSize: 28,
                    color: '#A31180'
                }
            }
        }
    }]
};

document.onclick = function() {
    if (clicks <= TOTAL_CLICKS) {
        if (clicks === 0) {
            beginTime = new Date();
        }
        five.setOption({
            series: [{
                data: getData(clicks),
                backgroundStyle: {
                    shadowBlur: Math.random() * 200 + 50
                }
            }]
        });
    }
    else if (clicks === TOTAL_CLICKS + 1) {
        // game over
    }

    ++clicks;
};

function getData(clicks) {
    var value = clicks / TOTAL_CLICKS;
    return [
        value,
        value - 0.02,
        value - 0.04,
        value - 0.06
    ];
}

five.setOption(option);

var six = echarts.init(document.getElementById("six"));
var base = +new Date(1995, 9, 3);
var oneDay = 24 * 3600 * 1000;
var date = [];
var data = [Math.random() * 300];

for (var i = 1; i < 20000; i++) {
    var now = new Date(base += oneDay);
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
}

option = {
	textStyle:{
    		color:'#fff'
    },
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },
    title: {
        left: 'center',
        text: '大数据量面积图',
    },
    legend: {
        top: 'bottom',
        data:['意向']
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 10
    }, {
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
    series: [
        {
            name:'模拟数据',
            type:'line',
            smooth:true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: 'rgb(255, 70, 131)'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(255, 158, 68)'
                    }, {
                        offset: 1,
                        color: 'rgb(255, 70, 131)'
                    }])
                }
            },
            data: data
        }
    ]
};
six.setOption(option);
/*第五屏*/
var seven = echarts.init(document.getElementById("seven"));
option = {
    title : {
        text : '时间坐标折线图',
        subtext : 'dataZoom支持'
    },
    tooltip : {
        trigger: 'item',
        formatter : function (params) {
            var date = new Date(params.value[0]);
            data = date.getFullYear() + '-'
                   + (date.getMonth() + 1) + '-'
                   + date.getDate() + ' '
                   + date.getHours() + ':'
                   + date.getMinutes();
            return data + '<br/>'
                   + params.value[1] + ', ' 
                   + params.value[2];
        }
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    dataZoom: {
        show: true,
        start : 70
    },
    legend : {
        data : ['series1']
    },
    grid: {
        y2: 80
    },
    xAxis : [
        {
            type : 'time',
            splitNumber:10
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name: 'series1',
            type: 'line',
            showAllSymbol: true,
            symbolSize: function (value){
                return Math.round(value[2]/10) + 2;
            },
            data: (function () {
                var d = [];
                var len = 0;
                var now = new Date();
                var value;
                while (len++ < 200) {
                    d.push([
                        new Date(2014, 9, 1, 0, len * 10000),
                        (Math.random()*30).toFixed(2) - 0,
                        (Math.random()*100).toFixed(2) - 0
                    ]);
                }
                return d;
            })()
        }
    ]
};
                    

seven.setOption(option);

/*第六屏左边*/
var Chart = echarts.init(document.getElementById("left-six"));
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            center: ['50.0%', '50%'],
            radius: [0, '30%'],
			
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:100, name:'100\n\n保修总数\n\n\n\n'}
               
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],
			
            data:[
                {
                	value:25,
                	name:'正在维修中 25',
                	itemStyle:{
                		normal:{
                			color:'#00fff9'
                		}
                	}
                	},
                {
                	value:20, 
                	name:'未处理维修 20',
                	itemStyle:{
                		normal:{
                			color:'#49bdca'
                		}
                	}
                	},
                {
                	value:5,
                	name:'已处理还未维修 5',
                	itemStyle:{
                		normal:{
                			color:'#1e5f6f'
                		}
                	}
                },
                {
                	value:50, 
                	name:'已完成维修 50',
                	itemStyle:{
                		normal:{
                			color:'#fff'
                		}
                	}}
            ]
        }
    ]
};
 Chart.setOption(option);
/*第六屏右边未完善*/
var rightsix = echarts.init(document.getElementById("right-six"));
var data = [];
var labelData = [];
for (var i = 0; i < 24; ++i) {
    data.push({
        value: Math.random() * 10 + 10 - Math.abs(i - 12),
        name: i + ':00'
    });
    labelData.push({
        value: 1,
        name: i + ':00'
    });
}

option = {
    title: {
        text: '基础能量消耗',
        left: '50%',
        textAlign: 'center',
        top: '20%',
        color:'#fff'
    },
    color: ['#22C3AA'],
    series: [{
        type: 'pie',
        data: data,
        roseType: 'area',
        itemStyle: {
            normal: {
                color: 'white',
                borderColor: '#22C3AA'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        label: {
            normal: {
                show: false
            }
        }
    }, {
        type: 'pie',
        data: labelData,
        radius: ['75%', '100%'],
        zlevel: -2,
        itemStyle: {
            normal: {
                color: '#22C3AA',
                borderColor: 'white'
            }
        },
        label: {
            normal: {
                position: 'inside'
            }
        }
    }]
};
 rightsix.setOption(option);
/*第七屏*/
var maps = echarts.init(document.getElementById("right-five"));
option = {
    title :{
        text : '销售数据',
        subtext : '纯属虚构'
    },
    tooltip : {
        trigger: 'axis',
        formatter: function (params){
            return params[0].name + ' : '
                   + (params[2].value - params[1].value > 0 ? '+' : '-') 
                   + params[0].value + '<br/>'
                   + params[2].seriesName + ' : ' + params[2].value + '<br/>'
                   + params[3].seriesName + ' : ' + params[3].value + '<br/>'
        }
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    legend: {
        data:['本周', '上周'],
        selectedMode:false
    },
    xAxis : [
        {
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value',
            min : 200,
            max : 450
        }
    ],
    series : [
        {
            name:'本周',
            type:'line',
            data:[400, 374, 251, 300, 420, 400, 440]
        },
        {
            name:'上周',
            type:'line',
            symbol:'none',
            itemStyle:{
                normal:{
                  lineStyle: {
                    width:1,
                    type:'dashed'
                  }
                }
            },
            data:[320, 332, 301, 334, 360, 330, 350]
        },
        {
            name:'上周2',
            type:'bar',
            stack: '1',
            barWidth: 6,
            itemStyle:{
                normal:{
                    color:'rgba(0,0,0,0)'
                },
                emphasis:{
                    color:'rgba(0,0,0,0)'
                }
            },
            data:[320, 332, 251, 300, 360, 330, 350]
        },
        {
            name:'变化',
            type:'bar',
            stack: '1',
            data:[
              80, 42, 
              {value : 50, itemStyle:{ normal:{color:'red'}}},
              {value : 34, itemStyle:{ normal:{color:'red'}}}, 
              60, 70, 90
            ]
        }
    ]
};
 maps.setOption(option);
 
/*第八屏*/
var power = echarts.init(document.getElementById("power"))
var uploadedDataURL = "/asset/get/s/data-1490602888744-Bkb5iBU3g.png";
var hdfs_stack_bar_data = {
    "namelist": ["3G4G固网日志", "上网轨迹", "数据源", "标签", "大数据实验室", "BML", "storm", "NOC智能网管", "无线CDR话单", "其他 "],
    "dataArr_bar": {
        "3G4G固网日志": [883.97, 896.18, 906.39, 922.20, 929.44, 941.16, 951.90],
        "上网轨迹": [53.54, 53.65, 53.70, 53.77, 53.84, 53.90, 53.97],
        "数据源": [698.59, 696.31, 696.40, 696.58, 699.57, 702.37, 701.41],
        "标签": [535.76, 536.07, 536.96, 538.39, 539.12, 539.96, 539.17],
        "大数据实验室": [10.46, 10.46, 10.46, 10.46, 10.46, 10.46, 10.46],
        "BML": [204.81, 204.41, 204.46, 204.87, 204.68, 204.77, 203.29],
        "storm": [0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04],
        "NOC智能网管": [95.09, 96.51, 97.62, 99.46, 101.27, 102.01, 102.58],
        "无线CDR话单": [4.04, 4.04, 4.04, 4.04, 4.04, 4.04, 4.06],
        "其他": [301.53, 307.28, 308.99, 311.60, 316.25, 317.57, 319.98]
    },
    "dataArr_line": {
        "3G4G固网日志": [1.15, 1.38, 1.13, 1.74, 0.78, 1.26, 1.14],
        "上网轨迹": [0.1, 0.20, 0.10, 0.12, 0.12, 0.12, 0.12],
        "数据源": [0.01, -0.320, 0.01, 0.02, 0.42, 0.40, -0.13],
        "标签": [0.05, 0.05, 0.16, 0.26, 0.13, 0.15, -0.14],
        "大数据实验室": [0, 0, 0, 0, 0, 0, 0],
        "BML": [0.06, -0.19, 0.02, 0.19, -0.09, 0.04, -0.72],
        "storm": [0, 0, 0, 0, 0, 0, 0],
        "NOC智能网管": [0.62, 1.49, 1.14, 1.88, 1.81, 0.72, 0.55],
        "无线CDR话单": [0, 0, 0, 0, 0, 0, 0],
        "其他": [0.00, 0.64, 0.85, 0.78, 1.93, 0.72, 1.19]
    }
};
var x_line = ["2017-03-10", "2017-03-11", "2017-03-12", "2017-03-13", "2017-03-14", "2017-03-15", "2017-03-16"];
var colorConsArr_hdfs = ["#ffca67", "#ff60a2", "#bf64ff", "#6c65fb", "#93dffc", "#fb915f", "#4fc277", "#3e94fe", "#ff9cc5", "#c46100", "#9de369"];
var option = {
    animation: false,
    backgroundColor: 'rgba(7,14,28,1)', //设置背景色
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        backgroundColor: 'rgba(7,14,28,0.9)',
        // position: function(point, params, dom) {
        //     // 固定在顶部
        //     return [point[0], '10%'];
        // },
        formatter:function(value,index){
            var tooltip='';
            var contentsDiv="";
            var barSum=0,lineSum=0;
            for(var i=0;i<value.length;i++){
            	if(i%2===0){
            		var barValue,lineValue;
            		value[i].hasOwnProperty("value")?barValue=value[i].value:barValue="暂无数据";
            		value[i+1].hasOwnProperty("value")?lineValue=value[i+1].value:lineValue="暂无数据";
            	    barValue.toString().indexOf("暂无数据")<0?barSum+=~~barValue:barSum+=0;
            		lineValue.toString().indexOf("暂无数据")<0?lineSum+=~~lineValue:lineSum+=0;
            		contentsDiv+="<div style='width:270px;height:13px;padding:5px 10px 6px 10px;font-size:14px;color:"+value[i].color+"'>"+"<span style='display:inline-block;margin-bottom:5px;width:12px;height:12px;border-radius:6px;background:"+value[i].color+"'>"+"</span>"+"<span style='display:inline-block;padding:0 5px 0 5px;width:95px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'>"+value[i].seriesName+"</span>"+"<span style='display:inline-block;padding:0 5px 0 5px;width:45px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'>"+barValue+"</span>"+"<span style='display:inline-block;padding:0 5px 0 5px;width:85px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'>"+"增长率"+lineValue+"</span>"+"</div>";
            	}
            }
        	contentsDiv+="<div style='width:270px;height:13px;padding:5px 10px 6px 10px;font-size:14px;color:#6c65fb'>"+"<span style='display:inline-block;margin-bottom:5px;width:12px;height:12px;border-radius:6px;background:url(/asset/get/s/data-1490602888744-Bkb5iBU3g.png) no-repeat center center'>"+"</span>"+"<span style='display:inline-block;padding:0 5px 0 5px;width:95px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'>"+"增长率"+"</span>"+"<span style='display:inline-block;padding:0 5px 0 5px;width:45px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'>"+barSum+"</span>"+"<span style='display:inline-block;padding:0 5px 0 5px;width:85px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'>"+"增长率"+lineSum+"</span>"+"</div>";
            tooltip="<div style='width:290px;height:100%;border-radius:8px;padding 10px 5px 10px 5px;margin-bottom:15px;'>"+"<span style='display:block;padding:16px 10px 0 10px;font-size:14px;font-weight:700;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'>"+value[0].axisValue+"资源使用情况"+"</span>"+contentsDiv+"<span style='display:block'>"+"</div>";
            return tooltip;
            
        }
    },
    grid: {
        left: '3%',
        right: '1%',
        bottom: '3%',
        top: "17%",
        containLabel: true,
        borderColor: '#1d203b'
    },
    legend: {
        itemGap: 14,
        right: '16%',
        top: '2%',
        //padding:[40,10,0,10],
        data: [] //ToDo
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        data: x_line,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        //坐标轴刻度标签
        axisLabel: {
            textStyle: {
                color: "#454e72"
            },
            formatter: function(value, index) {
                var xName = value.substring(value.indexOf("-") + 1);
                return xName.replace(/-/g, ".");
            },
            margin: 20
        },
        splitLine: {
            lineStyle: {
                color: "#1d203b"
            }
        },

    }],
    yAxis: [{
        name: '单位（T）',
        nameGap:20,
        nameTextStyle:{
            color:'#454e72',
            fontSize: 12,
            },
        type: 'value',
        nameGap: 15,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        scale: true,
        axisLabel: {
            // formatter: function(value, idx) {
            //     if (idx === 0) {
            //         return value + "T";
            //     } else {
            //         return value;
            //     }
            // },
            textStyle: {
                color: '#454e72'
            },
            margin: 20
        },
        boundaryGap: [0.2, 0.2],
        splitLine: {
            lineStyle: {
                color: ["#1d203b"]
            }
        }
    }, {
        name: '单位（%）',
        nameGap:20,
        nameTextStyle:{
            color:'#454e72',
            fontSize: 12,
            },
        type: 'value',
        nameGap: 15,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        scale: true,
        axisLabel: {
            // formatter: function(value, idx) {
            //     if (idx === 0) {
            //         return value + "%";
            //     } else {
            //         return value;
            //     }
            // },
            textStyle: {
                color: '#454e72'
            },
            margin: 20
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: ["#1d203b"]
            }
        },
        boundaryGap: [0.2, 0.2]
    }],
    series: []
};
for (var i = 0; i < hdfs_stack_bar_data["namelist"].length + 1; i++) {
    var namelist = hdfs_stack_bar_data["namelist"];
    var series = [];
    if (i < hdfs_stack_bar_data["namelist"].length) {
        option.series.push({
            name: namelist[i],
            type: 'bar',
            stack: '广告',
            barWidth: "50%",
            data: hdfs_stack_bar_data['dataArr_bar'][namelist[i]],
            itemStyle: {
                normal: {
                    color: colorConsArr_hdfs[i]
                }
            }
        });
        option.series.push({
            name: namelist[i],
            type: 'line',
            yAxisIndex: 1,
            data: hdfs_stack_bar_data['dataArr_line'][namelist[i]],
            symbol: 'none',
            smooth: true,
            lineStyle: {
                normal: {
                    barBorderRadius: 0,
                    width: 2.5, //连线粗细
                    color: colorConsArr_hdfs[i] //连线颜色
                }
            },
        });
        option.legend.data.push({
            name: namelist[i],
            icon: "circle",
            textStyle: {
                color: []
            }
        });
    } else {
        option.series.push({
            name: "增长率",
            type: 'bar',
            stack: '广告',
            barWidth: "52%",
            data: [],
        });
        option.series.push({
            name: "增长率",
            type: 'line',
            yAxisIndex: 1,
            data: [],
            symbol: 'none',
        });
        option.legend.data.push({
            name: "增长率",
            icon:'image:///asset/get/s/data-1490602888744-Bkb5iBU3g.png',
            selectedMode:false,
            textStyle: {
                color: '#6c65fb',
                fontSize:14,
                
            }
        });
    }

};
power.setOption(option);

var nine = echarts.init(document.getElementById("nine"));

option = {
    series: [{
        type: 'liquidFill',
        data: [0.93, 0.88, 0.8],
        color: ['#49d088', '#38b470', '#2aaf66'],
        center: ['25%', '50%'],
        waveLength: '60%',
        amplitude: 8,
        radius: '40%',
        label: {
            normal: {
                formatter: function() {
                    return '世界\n93%人口'
                },
                textStyle: {
                    fontSize: 22,
                    color: '#44c078'
                },
                position: ['50%', '30%']
            }
        },
        outline: {
            itemStyle: {
                borderColor: '#49d088',
                borderWidth: 5
            },
            borderDistance: 0
        },
        itemStyle: {
            normal: {
                backgroundColor: '#fff'
            }
        }
    }, {
        type: 'liquidFill',
        data: [0.66, 0.6, 0.5],
        color: ['#eb594b', '#e44d46', '#dc403f'],
        center: ['75%', '50%'],
        radius: '40%',
        amplitude: 8,
        label: {
            normal: {
                formatter: function() {
                    return '中国\n66%人口'
                },
                textStyle: {
                    fontSize: 22,
                    color: '#e35140'
                },
                position: ['50%', '30%']
            }
        },
        outline: {
            itemStyle: {
                borderColor: '#e35140',
                borderWidth: 5
            },
            borderDistance: 0
        },
        itemStyle: {
            normal: {
                backgroundColor: '#fff'
            }
        }
    }]
};
 nine.setOption(option);