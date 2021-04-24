/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//categorys in products
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


//checkbox in forum
function check() {
  // get the checkbox
  var checkBox = document.getElementById("myCheck");
  // get the output text
  var text = document.getElementById("text");

  // if the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

//barr charts 
{

  var chart = new CanvasJS.Chart("barContainer", {
     // "light1", "light2", "dark1", "dark2"
    animationEnabled: true,
    title:{
      text: "Εσοδα ανα Μηνα"   
    },
    axisX: {
      interval: 1,
      intervalType: "month",
      valueFormatString: "MMM"
    },
    axisY:{
      title: "",
      includeZero: true,
      valueFormatString: "€#0"
    },
    data: [{        
      type: "line",
      markerSize: 12,
      xValueFormatString: "MMM, YYYY",
      yValueFormatString: "€###.#",
      dataPoints: [        
        { x: new Date(2020, 00, 1), y: 1100, indexLabel: "gain", markerType: "triangle",  markerColor: "#6B8E23" },
        { x: new Date(2020, 01, 1), y: 1150, indexLabel: "gain", markerType: "triangle",  markerColor: "#6B8E23" },
        { x: new Date(2020, 02, 1) , y: 1055, indexLabel: "loss", markerType: "cross", markerColor: "tomato" },
        { x: new Date(2020, 03, 1) , y: 1020, indexLabel: "loss", markerType: "cross", markerColor: "tomato" },
        { x: new Date(2020, 04, 1) , y: 1028, indexLabel: "gain", markerType: "triangle", markerColor: "#6B8E23" },
        { x: new Date(2020, 05, 1) , y: 1388, indexLabel: "gain", markerType: "triangle", markerColor: "#6B8E23" },
        { x: new Date(2020, 06, 1) , y: 1298, indexLabel: "loss", markerType: "cross", markerColor: "tomato" },
        { x: new Date(2020, 07, 1) , y: 1211, indexLabel: "loss", markerType: "cross", markerColor: "tomato" },
        { x: new Date(2020, 08, 1) , y: 1570, indexLabel: "gain", markerType: "triangle", markerColor: "#6B8E23" },
        { x: new Date(2020, 09, 1) , y: 1456, indexLabel: "loss", markerType: "cross", markerColor: "tomato" },
        { x: new Date(2020, 10, 1) , y: 2800, indexLabel: "gain", markerType: "triangle", markerColor: "#6B8E23" },
        { x: new Date(2020, 11, 1) , y: 2523, indexLabel: "loss", markerType: "cross", markerColor: "tomato" }
      ]
    }]
  });
  chart.render();
  
  }

  //pie carts

   {

    var chart = new CanvasJS.Chart("piecontaner", {
      animationEnabled: true,
      title:{
        text: "Προϊοντα",
        horizontalAlign: "center"
      },
      data: [{
        type: "doughnut",
        startAngle: 60,
        //innerRadius: 60,
        indexLabelFontSize: 17,
        indexLabel: "{label} - #percent%",
        toolTipContent: "<b>{label}:</b> {y} (#percent%)",
        dataPoints: [
          { y: 67, label: "ποτα" },
          { y: 28, label: "πατατακια" },
          { y: 10, label: "αναψικτικα" },
        ]
      }]
    });
    chart.render();
    
    }

    //line chart
    {

      var chart = new CanvasJS.Chart("linecontainer", {
        animationEnabled: true,
        title:{
          text: "Κυκλοφορία ιστότοπου"
        },
        axisX:{
          valueFormatString: "DD MMM"
        },
        axisY: {
          title: "Αριθμός επισκεπτών",
          scaleBreaks: {
            autoCalculate: true
          }
        },
        data: [{
          type: "line",
          xValueFormatString: "DD MMM",
          color: "#F08080",
          dataPoints: [
            { x: new Date(2020, 10, 1), y: 610 },
            { x: new Date(2020, 10, 2), y: 680 },
            { x: new Date(2020, 10, 3), y: 690 },
            { x: new Date(2020, 10, 4), y: 700 },
            { x: new Date(2020, 10, 5), y: 710 },
            { x: new Date(2020, 10, 6), y: 658 },
            { x: new Date(2020, 10, 7), y: 734 },
            { x: new Date(2020, 10, 8), y: 963 },
            { x: new Date(2020, 10, 9), y: 847 },
            { x: new Date(2020, 10, 10), y: 853 },
            { x: new Date(2020, 10, 11), y: 869 },
            { x: new Date(2020, 10, 12), y: 943 },
            { x: new Date(2020, 10, 13), y: 970 },
            { x: new Date(2020, 10, 14), y: 869 },
            { x: new Date(2020, 10, 15), y: 890 },
            { x: new Date(2020, 10, 16), y: 930 },
            { x: new Date(2020, 10, 17), y: 1850 },
            { x: new Date(2020, 10, 18), y: 1905 },
            { x: new Date(2020, 10, 19), y: 1980 },
            { x: new Date(2020, 10, 20), y: 1858 },
            { x: new Date(2020, 10, 21), y: 1034 },
            { x: new Date(2020, 10, 22), y: 963 },
            { x: new Date(2020, 10, 23), y: 847 },
            { x: new Date(2020, 10, 24), y: 853 },
            { x: new Date(2020, 10, 25), y: 869 },
            { x: new Date(2020, 10, 26), y: 943 },
            { x: new Date(2020, 10, 27), y: 970 },
            { x: new Date(2020, 10, 28), y: 869 },
            { x: new Date(2020, 10, 29), y: 890 },
            { x: new Date(2020, 10, 30), y: 930 },
            { x: new Date(2020, 10, 31), y: 750 }
          ]
        }]
      });
      chart.render();
      
      }