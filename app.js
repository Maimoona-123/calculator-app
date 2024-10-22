function getValue(buttonValue) {
    var input = document.getElementById("inputfield");

    input.value += buttonValue;
}

function clearAll() {
    var input = document.getElementById("inputfield");
  
    input.value = "";
  }


  function delChar() {
    var input = document.getElementById("inputfield");
  
    input.value = input.value.slice(0, -1);
  }

  
  function equal() {
    var input = document.getElementById("inputfield");
  
    if (!input.value) {
      input.value = "syntax error";
    } else {
      input.value = eval(input.value);
    }
  }