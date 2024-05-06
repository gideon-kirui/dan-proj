document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('earnings-chart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
        datasets: [{
          label: 'Employee 1',
          data: [100, 250, 600, 300, 620], // Sample data for employee 1
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          fill: 'start',
          pointRadius: 0 // Hide data points
        },
        {
          label: 'Employee 2',
          data: [150, 120, 500, 350, 640], // Sample data for employee 2
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          fill: 'start',
          pointRadius: 0
        },
        {
          label: 'Employee 3',
          data: [60, 100, 500, 60, 600], // Sample data for employee 3
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: 'start',
          pointRadius: 0
        },
        {
          label: 'Employee 4',
          data: [60, 70, 400, 100, 640], // Sample data for employee 4
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1,
          fill: 'start',
          pointRadius: 0
        },
        {
          label: 'Employee 5',
          data: [60, 60, 300, 400, 640], // Sample data for employee 5
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 1,
          fill: 'start',
          pointRadius: 0
      }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
           display: false
          },
          x: {
            display: false
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        }
      }
    });

    var ctx = document.getElementById('earnings-chart1').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
        datasets: [{
          label: 'Employee 1',
          data: [0, 250, 600, 300, 620], // Sample data for employee 1
          backgroundColor: 'rgba(205, 127, 50, 0.2)',
          borderColor: 'rgba(205, 127, 50, 1)',
          borderWidth: 1,
          fill: 'start',
          pointRadius: 0 // Hide data points
        },
        {
          label: 'Employee 2',
          data: [150, 120, 500, 350, 640], // Sample data for employee 2
          backgroundColor: 'rgba(192, 192, 192, 0.2)',
          borderColor: 'rgba(192, 192, 192, 1)',
          borderWidth: 1,
          fill: 'start',
          pointRadius: 0
        },
        {
          label: 'Employee 3',
          data: [60, 0, 500, 60, 600], // Sample data for employee 3
          backgroundColor: 'rgba(255, 215, 0, 0.2)',
          borderColor: 'rgba(255, 215, 0, 1)',
          borderWidth: 1,
          fill: 'start',
          pointRadius: 0
        },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
           display: false
          },
          x: {
            display: false
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        }
      }
    });
    var ctx = document.getElementById('earnings-chart2').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
        datasets: [{
          label: 'Employee 1',
          data: [0, 250, 600, 300, 620], // Sample data for employee 1
          backgroundColor: 'rgba(205, 127, 50, 0.2)',
          borderColor: 'rgba(205, 127, 50, 1)',
          borderWidth: 1,
          fill: 'start',
          pointRadius: 0 // Hide data points
        },
        {
          label: 'Employee 2',
          data: [150, 120, 500, 350, 640], // Sample data for employee 2
          backgroundColor: 'rgba(192, 192, 192, 0.2)',
          borderColor: 'rgba(192, 192, 192, 1)',
          borderWidth: 1,
          fill: 'start',
          pointRadius: 0
        },
        {
          label: 'Employee 3',
          data: [60, 0, 500, 60, 600], // Sample data for employee 3
          backgroundColor: 'rgba(255, 215, 0, 0.2)',
          borderColor: 'rgba(255, 215, 0, 1)',
          borderWidth: 1,
          fill: 'start',
          pointRadius: 0
        }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
           display: false
          },
          x: {
            display: false
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        }
      }
    });
    var ctx = document.getElementById('earnings-chart3').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
        datasets: [{
          label: 'Employee 1',
          data: [200, 250, 600, 300, 620], // Sample data for employee 1
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          fill: 'start',
          pointRadius: 0 // Hide data points
        }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
           display: false
          },
          x: {
            display: false
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        }
      }
    });
});
