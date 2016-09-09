'use strict';

// var highChart  = {};
// declare chart name globally both from the document ready function and our requestData function



// chart: type, title text, xaxis categories, y axis title


$.getJSON('http://api.population.io/1.0/population/1950/United%20States/', function(data) {
  let series = { data: [] };
 for (let i = 0; i < series.length; i++) {
   if (key === 'total') {
     let total = [];
     console.log(i);
     series.data.push([[i]]);
   }
   else
   {
     for (let i = 0; i < series.length; i++) {
       array[i]
      }
   }
   }
 });








// $.getJSON('http://api.population.io/1.0/population/1950/United%20States/', function(data) {
//    $.each(data, function(key, val) {
//      if(key === 'total') {
//        let val = series.total;
//      }
//      else
//      {
//        $.each(val, function(key, val) {
//          val.push();
//        });
//      }
//    });
//
// });
//
// $.getJSON('http://api.population.io/1.0/population/1950/United%20States/', function(data) {
//   $.each(data, function(key,value) {
//       var series = { data: []};
//       $.each(value, function(key,val) {
//           if (key === 'name') {
//               series.name = val;
//           }
//           else
//           {
//             $.each(val, function(key,val) {
//                 var d = val.split(",");
//                 var x = Date.UTC(d[0],d[1],d[2]);
//                 series.data.push([x,d[3]]);
//             });
//           }
//       });
//       options.series.push(series);
//   });
//
//
//
//
//
//
//
//
// function visitorData (data) {
//    $('#chart1').highcharts({
//     chart: {
//         type: 'column'
//     },
//     title: {
//         text: 'Male Population by age in 1950'
//     },
//     xAxis: {
//         categories: ['']
//     },
//     yAxis: {
//         title: {
//             text: 'Number of visitors'
//         }
//     },
//     series: data,
//   });
// }


// $(()=>{
// // CHART CODE HERE
//  $.ajax({
//     url: '/URL with JSON DATA',
//     type: 'GET',
//     async: true,
//     dataType: "json",
//     success: function (data) {
//         visitorData(data);
//     }
//   });
//  });
