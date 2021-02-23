const express = require("express");
const app = express();
const port = 3000;

const getNumber = (numbers) => {
  return [numbers.value1, numbers.value2];
};

// suma
app.get("/add", (req, res) => {
  const numbers = getNumber(req.query);
  const result = +numbers[0] + +numbers[1];
  res.send(result.toString());
});
// resta
app.get("/substract", (req, res) => {
  const numbers = getNumber(req.query);
  const result = +numbers[0] - +numbers[1];
  res.send(result.toString());
});
//multiplicación
app.get("/multiply", (req, res) => {
  const numbers = getNumber(req.query);
  const result = +numbers[0] * +numbers[1];
  res.send(result.toString());
});
//división
app.get("/divide", (req, res) => {
  const numbers = getNumber(req.query);
  const result = +numbers[0] / +numbers[1];
  res.send(result.toString());
});

const myLogger = (req, res)=>{
  const date= new Date();
  const page= req.url;
  console.log("New visitor on page " + page +" at " + date )
}
app.get("/:operation/:value1/:value2", (req, res) => {
    const operation = req.params.operation;
    const value1 = Number(req.params.value1);
    const value2 = Number(req.params.value2);
    if (operation === "add") {
      const result = value1 + value2;
      return res.send("Result: " + result.toString());
    }
    if (operation === "divide") {
      const result = value1 / value2;
      return res.send("Result: " + result.toString());
    }
    if (operation === "multiply") {
      const result = value1 * value2;
      return res.send("Result: " + result.toString());
    }
    if (operation === "substract") {
      const result = value1 - value2;
      return res.send("Result: " + result.toString());
    }
  });
  app.use(myLogger);
  app.listen(port, () => {
    console.log("App is running on port " + port);
  });