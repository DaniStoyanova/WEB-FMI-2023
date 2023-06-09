let ctx = document.getElementById("exampleChart").getContext("2d");
    var myChart2 = new Chart(ctx, {
    type: "line",
    data: {
        labels: [
        "Януари",
        "Февруари",
        "Март",
        "Април",
        "Май",
        "Юни",
        "Юли",
        ],
        datasets: [
        {
            label: "Посещения на проект Chart.js",
            data: [8, 10, 10, 14, 19, 19, 15],
            borderColor: "rgb(255, 99, 132)",
            fill: false,
        },
        ],
    },
    options: {},
});



let ctx2 = document.getElementById('barChart').getContext('2d');
let myChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['София', 'Пловдив', 'Варна', 'Бургас', 'Русе', 'Стара Загора'],
        datasets: [{
            label: 'Преброявания на населението - 2021 г.',
            data: [1221172, 349070, 332686, 198035, 133813, 124599],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Преброявания на населението - 2021 г.'
        }
    }
});


new Chart(document.getElementById("lineChart"), {
    type: 'line',
    data: {
      labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
      datasets: [{ 
          data: [86,114,106,106,107,111,133,221,783,2478],
          label: "Африка",
          borderColor: "#3e95cd",
        }, { 
          data: [282,350,411,502,635,809,947,1402,3700,5267],
          label: "Азия",
          borderColor: "#8e5ea2",
        }, { 
          data: [168,170,178,190,203,276,408,547,675,734],
          label: "Европа",
          borderColor: "#3cba9f",
        }, { 
          data: [40,20,10,16,24,38,74,167,508,784],
          label: "Латинска Америка",
          borderColor: "#e8c3b9",
        }, { 
          data: [6,3,2,2,7,26,82,172,312,433],
          label: "Северна Америка",
          borderColor: "#c45850",
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Световна популация за регион (в милиони)'
      }
    }
});
  

new Chart(document.getElementById("lineChart2"), {
    type: 'line',
    data: {
      labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
      datasets: [{ 
          data: [86,114,106,106,107,111,133,221,783,2478],
          label: "Африка",
          borderColor: "#3e95cd",
          fill:false
        }, { 
          data: [282,350,411,502,635,809,947,1402,3700,5267],
          label: "Азия",
          borderColor: "#8e5ea2",
          fill:false
        }, { 
          data: [168,170,178,190,203,276,408,547,675,734],
          label: "Европа",
          borderColor: "#3cba9f",
          fill:false
        }, { 
          data: [40,20,10,16,24,38,74,167,508,784],
          label: "Латинска Америка",
          borderColor: "#e8c3b9",
          fill:false
        }, { 
          data: [6,3,2,2,7,26,82,172,312,433],
          label: "Северна Америка",
          borderColor: "#c45850",
          fill:false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Световна популация за регион (в милиони)'
      }
    }
});


new Chart(document.getElementById("pieChart"), {
    type: 'pie',
    data: {
      labels: ["Африка", "Азия", "Европа", "Латинска Америка", "Северна Америка"],
      datasets: [{
        label: "Популация (в милиони)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Прогнозирано световно население (в милиони) за 2050 г.'
      }
    }
});

new Chart(document.getElementById("doughnutChart"), {
    type: 'doughnut',
    data: {
      labels: ["Африка", "Азия", "Европа", "Латинска Америка", "Северна Америка"],
      datasets: [{
        label: "Популация (в милиони)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Прогнозирано световно население (в милиони) за 2050 г.'
      }
    }
});


new Chart(document.getElementById("radarChart"), {
    type: 'radar',
    data: {
      labels: ["Африка", "Азия", "Европа", "Латинска Америка", "Северна Америка"],
      datasets: [
        {
          label: "1950",
          fill: true,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: [8.77,55.61,21.69,6.62,6.82]
        }, {
          label: "2050",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          data: [25.48,54.16,7.61,8.06,4.45]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Разпределение в % от световното население'
      }
    }
});

new Chart(document.getElementById("polarChart"), {
    type: 'polarArea',
    data: {
      labels: ["Африка", "Азия", "Европа", "Латинска Америка", "Северна Америка"],
      datasets: [
        {
          label: "Популация (в милиони)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Прогнозирано световно население (в милиони) за 2050 г.'
      }
    }
});

new Chart(document.getElementById("bubbleChart"), {
    type: 'bubble',
    data: {
      datasets: [
        {
          label: "Америка",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          borderColor: "transparent",
          data: [
            {
                x: 19390604,  // Брутен вътрешен продукт (БВП)
                y: 329064917, // Население
                r: 79.1, // Продължителност на живота
            }
          ]
        },
        {
          label: "Китай",
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "transparent",
          data: [
            {
                x: 14342932,  // Брутен вътрешен продукт (БВП)
                y: 1403500365,  // Население
                r: 76.9,  // Продължителност на живота
            }
          ]
        },
        {
          label: "Япония",
          backgroundColor: "rgba(255, 206, 86, 0.5)",
          borderColor: "transparent",
          data: [
            {
              x: 5082467, // Брутен вътрешен продукт (БВП)
              y: 126860301, // Население
              r: 84.6, // Продължителност на живота
            }
          ]
        },
        {
          label: "Германия",
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          borderColor: "transparent",
          data: [
            {
              x: 4029143, // Брутен вътрешен продукт (БВП)
              y: 83783942, // Население
              r: 80.9, // Продължителност на живота
            }
          ]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Брутен вътрешен продукт, население и продължителност на живота',
      },
      scales: {
        yAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Популация'
            },
            ticks: {
                min: -600000000, // минимална стойност за оста у
                max: 2000000000, // максимална стойност за оста у
                stepSize: 200000000 // стъпка между стойностите на оста у
              }
        }],
        xAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'БВП (щ.д.)'
          },
          ticks: {
            min: 2240000, // минимална стойност за оста x
            max: 21170000, // максимална стойност за оста x
            stepSize: 10000 // стъпка между стойностите на оста x
          }
        }],
      }
    }
});
  

new Chart(document.getElementById("mixedChart"), {
    type: 'bar',
    data: {
      labels: ["Януари", "Февруари", "Март",  "Април", "Май", "Юни", "Юли"],
      datasets: [{
          label: 'Посетители',
          type:'line',
          data: [500, 750, 670, 900, 1200, 1050, 1020],
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2
        }, {
          label: 'Поръчки',
          type:'bar',
          data: [50, 75, 58, 125, 80, 160, 180],
          backgroundColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Брой посетители на уебсайт и покупки'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
});
  

new Chart(document.getElementById("scatterChart"), {
  type: 'scatter',
  data: {
    datasets: [{
      label: 'Точки',
      data: [{
        x: -0.5,
        y: 0.3
      }, {
        x: 0.1,
        y: 1
      }, {
        x: 1,
        y: 0.5
      }, {
        x: -0.8,
        y: 0.2
      }, {
        x: -0.1,
        y: 0.3
      }, {
        x: 0.9,
        y: 0.05
      }, {
        x: 0.5,
        y: 0.5
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
  },
  options: {},
});