function getMarriedValue() {
  var uimarried = document.getElementsByName("uimarried");
  for(var i in uimarried) {
    if(uimarried[i].checked) {
        return parseInt(i)+1;
    }
  }
  return -1; // Invalid Value
}

function getDependentsValue() {
  var uidependents = document.getElementsByName("uidependents");
  for(var i in uidependents) {
    if(uidependents[i].checked) {
        return parseInt(i)+1;
    }
  }
  return -1; // Invalid Value
}

function getGradValue() {
  var uigraduation = document.getElementsByName("uigraduation");
  for(var i in uigraduation) {
    if(uigraduation[i].checked) {
        return parseInt(i)+1;
    }
  }
  return -1; // Invalid Value
}

function getEmpValue() {
  var uiselfemployed = document.getElementsByName("uiselfemployed");
  for(var i in uiselfemployed) {
    if(uiselfemployed[i].checked) {
        return parseInt(i)+1;
    }
  }
  return -1; // Invalid Value
}

function getCreditValue() {
  var uicredithistory = document.getElementsByName("uicredithistory");
  for(var i in uicredithistory) {
    if(uicredithistory[i].checked) {
        return parseInt(i)+1;
    }
  }
  return -1; // Invalid Value
}

function getPropertyValue() {
  var uipropertyarea = document.getElementsByName("uipropertyarea");
  for(var i in uipropertyarea) {
    if(uipropertyarea[i].checked) {
        return parseInt(i)+1;
    }
  }
  return -1; // Invalid Value
}

function onClickedLoanStatus() {
	console.log("Estimate loan status clicked");
    var applicantincome = document.getElementById("uiapplicantincome");
    var married = getMarriedValue();
    var dependents = getDependentsValue();
    var grad = getGradValue();
    var selfemp = getEmpValue();
    var credit = getCreditValue();
    var coapp = document.getElementById("uicoapplicantincome");
    var loanamt = document.getElementById("uiloanamount");
    var term = document.getElementById("uiloanamountterm");
    var property = getPropertyValue()
    var loanStatus = document.getElementById("uiLoanStatus");
  
  var url = "http://127.0.0.1:5000/predict_loan_status"; //Use this if you are NOT using nginx which is first 7 tutorials
  // var url = "/api/predict_home_price"; // Use this if  you are using nginx. i.e tutorial 8 and onwards

  $.post(url, {
	  married = married.value,
	  dependents = dependents.value,
	  grad = grad.value,
	  selfemp = selfemp.value,
	  credit = credit.value,
	  applicantincome = parseInt(applicantincome.value),
	  coapp = parseFloat(coapp.value),
	  loanamt = parseFloat(loanamt.value),
	  term = parseInt(term.value),
	  property = property.value,

  },function(data, status) {
      console.log(data.get_loan_status);
      loanStatus.innerHTML = "<h2>" + data.get_loan_status.toString() + "</h2>";
      console.log(status);
  });
}