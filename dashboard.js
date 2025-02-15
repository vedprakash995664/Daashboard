// Toggle sidebar visibility
document.getElementById('menu-toggle').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var content = document.getElementById('content');
    sidebar.classList.toggle('collapsed');
    content.classList.toggle('collapsed');
  });


  // Chart.js for Pie and Bar Charts
  const ctx1 = document.getElementById("casesChart").getContext("2d");
  new Chart(ctx1, {
      type: "doughnut",
      data: {
          labels: ["Successful", "Pending", "In Progress", "Closed", "Not Started"],
          datasets: [{
              data: [200, 100, 50, 100, 50],
              backgroundColor: ["blue", "orange", "yellow", "gray", "red"]
          }]
      }
  });

  const ctx2 = document.getElementById("requestChart").getContext("2d");
  new Chart(ctx2, {
      type: "doughnut",
      data: {
          labels: ["Successful", "Pending", "Approval", "Not Sent", "Rejected"],
          datasets: [{
              data: [40, 20, 10, 15, 15],
              backgroundColor: ["blue", "orange", "yellow", "gray", "red"]
          }]
      }
  });

  const ctx3 = document.getElementById("barChart").getContext("2d");
  new Chart(ctx3, {
      type: "bar",
      data: {
          labels: ["TMA", "FA", "UDA", "OSINT", "DF"],
          datasets: [{
              data: [120, 90, 60, 30, 100],
              backgroundColor: "orange"
          }]
      }
  });