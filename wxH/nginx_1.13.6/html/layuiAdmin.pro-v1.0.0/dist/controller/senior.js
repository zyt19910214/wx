/** layuiAdmin.pro-v1.0.0 LPPL License By http://www.layui.com/admin/ */
 ;layui.define(function(e){layui.use(["admin","carousel"],function(){var e=layui.$,a=(layui.admin,layui.carousel),t=(layui.element,layui.device());e(".layadmin-carousel").each(function(){var i=e(this);a.render({elem:this,width:"100%",arrow:"none",interval:i.data("interval"),autoplay:i.data("autoplay")===!0,trigger:t.ios||t.android?"click":"hover",anim:i.data("anim")})})}),layui.use(["echarts"],function(){var e=layui.$,a=layui.echarts,t=[],i=[{title:{text:"本月成交单数",subtext:"8月"},tooltip:{trigger:"axis"},legend:{data:["轰趴","麻将","狼人杀包场"]},calculable:!0,xAxis:[{type:"category",boundaryGap:!0,data:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]}],yAxis:[],series:[{name:"轰趴",type:"line",data:[1,1,5,3,2,3,3],markLine:{data:[{type:"average",name:"平均值"}]}},{name:"麻将",type:"line",data:[1,2,2,5,3,2,0],markLine:{data:[{type:"average",name:"平均值"}]}},{name:"狼人杀包场",type:"line",data:[12,4,1,12,2,1,0],markLine:{data:[{type:"average",name:"平均值"}]}}]}],n=e("#LAY-index-normline").children("div"),l=function(e){t[e]=a.init(n[e],layui.echartsTheme),t[e].setOption(i[e]),window.onresize=t[e].resize};n[0]&&l(0)}),layui.use(["echarts"],function(){var e=layui.$,a=layui.echarts,t=[],i=[{title:{text:"某地区蒸发量和降水量",subtext:"纯属虚构"},tooltip:{trigger:"axis"},legend:{data:["蒸发量","降水量"]},calculable:!0,xAxis:[{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]}],yAxis:[{type:"value"}],series:[{name:"蒸发量",type:"bar",data:[2,4.9,7,23.2,25.6,76.7,135.6,162.2,32.6,20,6.4,3.3],markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},markLine:{data:[{type:"average",name:"平均值"}]}},{name:"降水量",type:"bar",data:[2.6,5.9,9,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6,2.3],markPoint:{data:[{name:"年最高",value:182.2,xAxis:7,yAxis:183,symbolSize:18},{name:"年最低",value:2.3,xAxis:11,yAxis:3}]},markLine:{data:[{type:"average",name:"平均值"}]}}]}],n=e("#LAY-index-normcol").children("div"),l=function(e){t[e]=a.init(n[e],layui.echartsTheme),t[e].setOption(i[e]),window.onresize=t[e].resize};if(n[0]){l(0);var u=[],r=[{title:{text:"世界人口总量",subtext:"数据来自网络"},tooltip:{trigger:"axis"},legend:{data:["2011年","2012年"]},calculable:!0,xAxis:[{type:"value",boundaryGap:[0,.01]}],yAxis:[{type:"category",data:["巴西","印尼","美国","印度","中国","世界人口(万)"]}],series:[{name:"2011年",type:"bar",data:[18203,23489,29034,104970,131744,630230]},{name:"2012年",type:"bar",data:[19325,23438,31e3,121594,134141,681807]}]}],m=e("#LAY-index-normbar").children("div"),s=function(e){u[e]=a.init(m[e],layui.echartsTheme),u[e].setOption(r[e]),window.onresize=u[e].resize};m[0]&&s(0)}}),layui.use(["echarts"],function(){var e=layui.$,a=layui.echarts,t=[],i=[{title:{text:"2011全国GDP（亿元）",subtext:"数据来自国家统计局"},tooltip:{trigger:"item"},dataRange:{orient:"horizontal",min:0,max:55e3,text:["高","低"],splitNumber:0},series:[{name:"2011全国GDP分布",type:"map",mapType:"china",mapLocation:{x:"center"},selectedMode:"multiple",itemStyle:{normal:{label:{show:!0}},emphasis:{label:{show:!0}}},data:[{name:"西藏",value:605.83},{name:"青海",value:1670.44},{name:"宁夏",value:2102.21},{name:"海南",value:2522.66},{name:"甘肃",value:5020.37},{name:"贵州",value:5701.84},{name:"新疆",value:6610.05},{name:"云南",value:8893.12},{name:"重庆",value:10011.37},{name:"吉林",value:10568.83},{name:"山西",value:11237.55},{name:"天津",value:11307.28},{name:"江西",value:11702.82},{name:"广西",value:11720.87},{name:"陕西",value:12512.3},{name:"黑龙江",value:12582},{name:"内蒙古",value:14359.88},{name:"安徽",value:15300.65},{name:"北京",value:16251.93,selected:!0},{name:"福建",value:17560.18},{name:"上海",value:19195.69,selected:!0},{name:"湖北",value:19632.26},{name:"湖南",value:19669.56},{name:"四川",value:21026.68},{name:"辽宁",value:22226.7},{name:"河北",value:24515.76},{name:"河南",value:26931.03},{name:"浙江",value:32318.85},{name:"山东",value:45361.85},{name:"江苏",value:49110.27},{name:"广东",value:53210.28,selected:!0}]}]}],n=e("#LAY-index-plat").children("div"),l=function(e){t[e]=a.init(n[e],layui.echartsTheme),t[e].setOption(i[e]),window.onresize=t[e].resize};n[0]&&l(0)}),e("senior",{})});