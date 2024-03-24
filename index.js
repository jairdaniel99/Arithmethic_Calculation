//import express
const express = require("express");
const app = express();
// import our functions module for the operations
const arithmeticFunctions = require("./arithmethicFunctions");

// translate the json code we are posting through postman
app.use(express.json());

// make an api to give back the result of the operation
app.post("/operation", function (req, res) {
  const operationRequest = {
    operation: req.body.operation,
    value_1: req.body.value_1,
    value_2: req.body.value_2,
  };
  // summ operation
  if (operationRequest.operation == "add") {
    operationRequest.result = arithmeticFunctions.add(
      operationRequest.value_1,
      operationRequest.value_2
    );
    res.send(operationRequest);
    // subtraction operation
  } else if (operationRequest.operation == "sub") {
    operationRequest.result = arithmeticFunctions.sub(
      operationRequest.value_1,
      operationRequest.value_2
    );
    res.send(operationRequest);
    // multiplying operation
  } else if (operationRequest.operation == "mul") {
    operationRequest.result = arithmeticFunctions.mul(
      operationRequest.value_1,
      operationRequest.value_2
    );
    res.send(operationRequest);
    // division operation
  } else if (operationRequest.operation == "div") {
    operationRequest.result = arithmeticFunctions.div(
      operationRequest.value_1,
      operationRequest.value_2
    );
    res.send(operationRequest);
  }
  // return error if operation not found
  else {
    res.status(404).send("Operation requested not found.");
  }
});

// listen to the server!
app.listen(3000, function () {
  console.log("listening to port 3000");
});
