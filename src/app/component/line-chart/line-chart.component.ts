import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import * as  d3 from 'd3';

declare var $;

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit, AfterViewInit {
  yLableLeft: any;
  yPropNameLeft: any;
  yLableRight: any;
  yPropNameRight: any;
  yRangeLeft: any;
  yRangeRight: any;

  constructor() { }

  @Input("id") chartId: string;
  @Input("title") chartTitle: string = '';
  @Input("category") chartCategories: {}[] = [];
  @Input("chartData") chartData: {}[] = [];

  @ViewChild('chartDiv') chartDiv: ElementRef<any>;

  ngOnInit() {
    // this.loadChart();
  }

  ngAfterViewInit() {
      this.loadChart();
  }
  loadChart() {
    // console.log(this.chartCategories);
  //  console.log(this.chartDiv.nativeElement);
   let that = this;
    this.chartCategories.forEach( (cat: any) => {
      if (cat.axisLeft) {
        this.yLableLeft = cat.label;
        this.yPropNameLeft = cat.name;
        this.yRangeLeft = cat.range;
      }
      if (cat.axisRight) {
        this.yLableRight = cat.label;
        this.yPropNameRight = cat.name;
        this.yRangeRight = cat.range;
      }
    })



   let containerWidth = $(this.chartDiv.nativeElement).innerWidth();
   let containerHeight = $(this.chartDiv.nativeElement).innerHeight() || 300;
  //  console.log(containerWidth, containerHeight)
    var svg = d3.select("#" + this.chartId).append("svg")
      .attr("width", containerWidth)
      .attr("height", containerHeight)

    var margin = {left:100, right:100, top: 20, bottom: 20}
    var width = svg.attr("width") - margin.left - margin.right;
    var height = svg.attr("height") - margin.bottom - margin.top;

    svg.append("text")
      .attr("x", (containerWidth / 2))             
      .attr("y", margin.top )
      .attr("text-anchor", "middle")  
      .style("font-size", "20px") 
      // .style("text-decoration", "underline")  
      .style("fill", "var(--gray)")
      .text(this.chartTitle);


    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", (margin.left / 2 ))
      .attr("x",0 - (height / 2))
      .attr("dy", "1em")
      .style("font-size", "1.2rem")
      .style("text-anchor", "middle")
      .text(this.yLableLeft);
      
      svg.append("text")
        .attr("transform", "rotate(90)")
        .attr("y", 0 - (containerWidth - (margin.left / 2)))
        .attr("x", (height / 2))
        .attr("dy", "1em")
        .style("font-size", "1.2rem")
        .style("text-anchor", "middle")
        .text(this.yLableRight);  

    // var data = StreamGaugeData;
    // var data: {}[] = StageRportData;
    // if (this.chartData && this.chartData.length) {
      var data = this.chartData;
    // }
    // var data = RowData;
    // RowData.forEach(item => {
    //   item['a'] = item['a'] / 100;
    // })
    // for (let i in data) {
    //   data[i]['a'] = data[i].stage;
    //   delete data[i].stage;
    // };

    var x = d3.scaleTime()
    .rangeRound([0, width]);
  var x_axis = d3.axisBottom(x);
  
  var y = d3.scaleLinear()
    .rangeRound([height, 0]);
    var y_axis = d3.axisBottom(y);
  var y1 = d3.scaleLinear()
    .rangeRound([height, 0]);  
  var y1_axis = d3.axisBottom(y1);
  // %d-%b-%Y
  var xFormat = "%d. %b";;
  var parseTime = d3.timeParse("%m/%d/%Y");
  // var parseTime = d3.timeParse("%d/%m/%Y");
  
  x.domain(d3.extent(data, function(d) { return parseTime(d.date.split(' ')[0]); }));
  // x.domain(d3.extent(data, function(d) { return parseTime(d.date); }));
    if (this.yRangeLeft) {
      y.domain(this.yRangeLeft)
    } else {
      y.domain([d3.min(data, function (d) { return d3.min([d.a, d.b, d.c, d.d, d[that.yPropNameLeft]]); }),
              d3.max(data, function (d) { return d3.max([d.a, d.b, d.c, d.d, d[that.yPropNameLeft]]); })]);
    }
    if (this.yRangeRight) {
      y1.domain(this.yRangeRight)
    } else {
      y1.domain([d3.min(data, function(d) { return d3.min([d.a, d.b, d.c, d.d, d[that.yPropNameRight]]); }), 
                d3.max(data, function(d) { return d3.max([d.a, d.b, d.c, d.d, d[that.yPropNameRight]]); })]);
    }

  var a = function(d) {return d.a};
  
  var multiline = function(category) {
    console.log('category ', category);
    var line = d3.line()
                .x(function(d) { return x(parseTime(d.date.split(' ')[0])); })
                // .x(function(d) { return x(parseTime(d.date)); })
                .y(function(d) { return y(d[category]); });
    return line;
  }
  
 

  var categories = ['stage', 'cfs'];
  //var color = d3.scale.category10();  // escala com 10 cores (category10)
  var color = d3.scaleOrdinal(d3.schemeCategory10);
  
  var g = svg.append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");
  
  // for (let j in categories) {
  //   var lineFunction = multiline(categories[j]);
  var line1 = d3.line()
  .x(function(d) { return x(parseTime(d.date.split(' ')[0])); })
  // .x(function(d) { return x(parseTime(d.date)); })
  .y(function(d) { return y(d[that.yPropNameLeft]); })
  .curve(d3.curveBasis);
  
      var line2 = d3.line()
      .x(function(d) { return x(parseTime(d.date.split(' ')[0])); })
      // .x(function(d) { return x(parseTime(d.date)); })
      .y(function(d) { return y1(d[that.yPropNameRight]); })
      .curve(d3.curveCardinal);

    g.append("path")
      .datum(data) 
      .attr("class", "line")
      .style("stroke", "blue")
      .style("fill","none")
      .style("stroke-width", '1.5px')
      .attr("d", line1);

      g.append("path")
      .datum(data) 
      .attr("class", "line")
      .style("stroke", "red")
      .style("fill","none")
      .style("stroke-width", '1.5px')
      .attr("d", line2);
  // }
  
    // Add the X Axis
    g.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickFormat(d3.timeFormat(xFormat)));
  
    // Add the Y Axis
    g.append("g")
    .call(d3.axisLeft(y));

    // Add the Y Axis
    g.append("g")
    .attr("class", "axisRed")
    // .style("fill", "red")
    
    .attr("transform", "translate( " + width + ", 0 )")
    .call(d3.axisRight(y1).ticks(7));
  } 
}