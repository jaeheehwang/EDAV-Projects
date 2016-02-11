var w = 350,
	h = 350;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ["Data Science Certification", "IDSE (master)", "Statistics (master)", "Others"];

d = [
  [
    {axis: "R, Data manipulation and modeling", value: 1.227},
    {axis: "R, Graphics", value: 0.682},
    {axis: "R, Advanced", value: 0.5},
    {axis: "RMarkdown", value: 0.591},
    {axis: "Matlab, visualization, etc.", value: 0.636},
    {axis: "Github", value: 1.182}
  ],
  [
    {axis: "R, Data manipulation and modeling", value: 1.661},
    {axis: "R, Graphics", value: 1.143},
    {axis: "R, Advanced", value: 0.982},
    {axis: "RMarkdown", value: 1.107},
    {axis: "Matlab, visualization, etc.", value: 0.929},
    {axis: "Github", value: 0.911}
  ],
  [
    {axis: "R, Data manipulation and modeling", value: 1.941},
    {axis: "R, Graphics", value: 1.294},
    {axis: "R, Advanced", value: 1.294},
    {axis: "RMarkdown", value: 0.588},
    {axis: "Matlab, visualization, etc.", value: 0.882},
    {axis: "Github", value: 0.882}
  ],
  [
    {axis: "R, Data manipulation and modeling", value: 1.513},
    {axis: "R, Graphics", value: 1.215},
    {axis: "R, Advanced", value: 0.821},
    {axis: "RMarkdown", value: 1.172},
    {axis: "Matlab, visualization, etc.", value: 0.553},
    {axis: "Github", value: 1.333}
  ]
];

d_cert = [
  [
    {axis: "R, Data manipulation and modeling", value: 1.227},
    {axis: "R, Graphics", value: 0.682},
    {axis: "R, Advanced", value: 0.5},
    {axis: "RMarkdown", value: 0.591},
    {axis: "Matlab, visualization, etc.", value: 0.636},
    {axis: "Github", value: 1.182}
  ]];
d_idse = [
  [
    {axis: "R, Data manipulation and modeling", value: 1.661},
    {axis: "R, Graphics", value: 1.143},
    {axis: "R, Advanced", value: 0.982},
    {axis: "RMarkdown", value: 1.107},
    {axis: "Matlab, visualization, etc.", value: 0.929},
    {axis: "Github", value: 0.911}
  ]];
d_stats = [
  [
    {axis: "R, Data manipulation and modeling", value: 1.941},
    {axis: "R, Graphics", value: 1.294},
    {axis: "R, Advanced", value: 1.294},
    {axis: "RMarkdown", value: 0.588},
    {axis: "Matlab, visualization, etc.", value: 0.882},
    {axis: "Github", value: 0.882}
  ]];
d_others = [
  [
    {axis: "R, Data manipulation and modeling", value: 1.513},
    {axis: "R, Graphics", value: 1.215},
    {axis: "R, Advanced", value: 0.821},
    {axis: "RMarkdown", value: 1.172},
    {axis: "Matlab, visualization, etc.", value: 0.553},
    {axis: "Github", value: 1.333}
  ]
];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 2,
  levels: 10,
  ExtraWidthX: 200
}
var mycfg_cert = JSON.parse(JSON.stringify(mycfg)),
  mycfg_idse = JSON.parse(JSON.stringify(mycfg)),
  mycfg_stats = JSON.parse(JSON.stringify(mycfg)),
  mycfg_others = JSON.parse(JSON.stringify(mycfg));

mycfg_cert.color = d3.scale.ordinal().range(['#1F77B4']);
mycfg_idse.color = d3.scale.ordinal().range(['#FF7F0E']);
mycfg_stats.color = d3.scale.ordinal().range(['#2CA02C']);
mycfg_others.color = d3.scale.ordinal().range(['#D62728']);


//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);
RadarChart.draw("#chart1", d_idse, mycfg_idse);
RadarChart.draw("#chart2", d_stats, mycfg_stats);
RadarChart.draw("#chart3", d_cert, mycfg_cert);
RadarChart.draw("#chart4", d_others, mycfg_others);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#combined')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 50)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("Program Enrolled	");
		
//Initiate Legend	
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 45)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 32)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	