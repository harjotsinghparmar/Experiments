var data = [-5,-4,-3,-2,-1,-0.5,0,0.5,1.0,1.5,2.0,3,4,5];

var sliderSimple = d3
  .sliderBottom()
  .min(d3.min(data))
  .max(d3.max(data))
  .width(200)
  .tickFormat(d3.format('.2'))
  .ticks(5)
  .default(1)
  .on('onchange', val => {
    d3.selectAll('.header').style('letter-spacing',val+'px');
  });

var gSimple = d3
  .select('div#slider-simple')
  .append('svg')
  .attr('width', 400)
  .attr('height', 100)
  .append('g')
  .attr('transform', 'translate(35,30)');

gSimple.call(sliderSimple);


// change lineheight of the para using slider
var line_height = [0, 0.5,1.0,1.5,2.0];

var lineHsimple = d3
  .sliderBottom()
  .min(d3.min(line_height))
  .max(d3.max(line_height))
  .width(200)
  .tickFormat(d3.format('.2'))
  .ticks(5)
  .default(1)
  .on('onchange', val => {
    d3.selectAll('.para').style('line-height',val);
  });

var gSimple = d3
  .select('div#lineh-simple')
  .append('svg')
  .attr('width', 400)
  .attr('height', 100)
  .append('g')
  .attr('transform', 'translate(35,30)');

gSimple.call(lineHsimple);



// change line width of the para using slider
var content_width = [0,20,40,60,80,100];

var contentWsimple = d3
  .sliderBottom()
  .min(d3.min(content_width))
  .max(d3.max(content_width))
  .width(200)
  .tickFormat(d3.format('.3'))
  .ticks(5)
  .step(20)
  .default(1)
  .on('onchange', val => {
    d3.selectAll('.content').style('max-width',val+'%');
  });

var gSimple = d3
  .select('div#linew-simple')
  .append('svg')
  .attr('width', 400)
  .attr('height', 100)
  .append('g')
  .attr('transform', 'translate(35,30)');

gSimple.call(contentWsimple);



// change header font size width of the para using slider
var fsize = [12,16,18,24,36];

var fsizesimple = d3
  .sliderBottom()
  .min(d3.min(fsize))
  .max(d3.max(fsize))
  .width(200)
  .tickFormat(d3.format('.3'))
  .ticks(5)
  .step(4)
  .default(1)
  .on('onchange', val => {
    d3.selectAll('.pheader').style('font-size',val+'px');
  });

var gSimple = d3
  .select('div#fsize')
  .append('svg')
  .attr('width', 400)
  .attr('height', 100)
  .append('g')
  .attr('transform', 'translate(35,30)');

gSimple.call(fsizesimple);



