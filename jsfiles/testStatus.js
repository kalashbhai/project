// script.js

function startTest() {
    var table = document.getElementById("assessment-table");
    table.style.display = "block";
    document.getElementById("begin-test-btn").style.display = "none";
  }
  
  function startAssessment(assessmentNumber) {
    var progressCell = document.getElementById("progress-" + assessmentNumber);
    progressCell.textContent = "Completed";
  }
  