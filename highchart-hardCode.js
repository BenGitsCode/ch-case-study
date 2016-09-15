$(function(){ 
var json = {
  data: [{
    "females": 1839926,
    "country": "United States",
    "age": 0,
    "males": 1922639,
    "year": 1950,
    "total": 3762565
  }, {
    "females": 1759976,
    "country": "United States",
    "age": 1,
    "males": 1840451,
    "year": 1950,
    "total": 3600427
  }, {
    "females": 1682237,
    "country": "United States",
    "age": 2,
    "males": 1760107,
    "year": 1950,
    "total": 3442344
  }, {
    "females": 1607176,
    "country": "United States",
    "age": 3,
    "males": 1682118,
    "year": 1950,
    "total": 3289294
  }]
};

var data = [];


Highcharts.each(json.data, function(item, i) {
   data.push({
   	y: item.total
   });
});

 $('#container').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: 'Male Population by age in 1950'
    },
    xAxis: {
        categories: ['Age']
    },
    yAxis: {
        title: {
            text: 'Population'
        }
    },
    series: [{
    	data:data
    }]
  });
});
