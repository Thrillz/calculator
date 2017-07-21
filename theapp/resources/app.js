$(document).ready(function() {

  // stores input from user
  let input = [""];
  // stores current input
  let curInput;
  // operators array for validation
  const operator1 = ["+", "-", "*", "/"];
  // dot operator for validation
  const operator2 = ["."];
  // number validation
  const num = [0,1,2,3,4,5,6,7,8,9];
  let ansLog = "";
  let ans = "";

  function getValue(inputs) {
      //Validation for decimal point.
    if (operator2.includes(input[input.length - 1]) === true && inputs === ".") {
      console.log("Duplicate decimal");
    }
      //validation so it doesn't start with an operator.
    else if (input.length === 1 && operator1.includes(inputs) === false) {
      input.push(inputs);
    }
      // If last character was not an operator add operator.
    else if (operator1.includes(input[input.length - 1]) === false) {
      input.push(inputs);
    }
      //if it's a number add it to input.
    else if (num.includes(Number(inputs))) {
      input.push(inputs);
    }
    update();
  }

  function update() {
    if(input.length < 13) {
      curInput = input.join("");
      $("#result").html(curInput);
    }
    else {
      $("#result").html("Too long");
    }
  }

  function getTotal() {
    curInput = input.join("");
    $("#history").html(eval(curInput));
  }

  $("button").on("click", function() {

    // When "AC" or "CE" is clicked
    if(this.id === "deleteAll") {
      input = [""];
      update();
      $("#history").html("0");
      $("#result").html("0");
    }
    else if (this.id === "deleteOne") {
      input.pop();
      update();
      if (input.length <= 1) {
        $("#result").html(0);
      }
    }
    else if (this.id === "equalButton") {
      getTotal();
    }
    else {
      if(input[input.length -1].indexOf("+", "-", "/", "*", ".") === -1) {
        getValue(this.id);
      }
      else {
        getValue(this.id);
      }
    }

  })
});
