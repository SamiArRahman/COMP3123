const http = require("http");
const { employees } = require("./Employee");

console.log("Lab 03 -  NodeJs");

// Define Server Port
const port = process.env.PORT || 8081;

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
  
  if (req.method !== "GET") {
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ error: http.STATUS_CODES[405] }));
    return;
  }

  // /
  if (req.url === "/") {
    // TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("<h1>Welcome to Lab Exercise 03</h1>");
    return;
  }

  // /employee
  if (req.url === "/employee") {
    // TODO - Display all details for employees in JSON format
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(employees));
    return;
  }

  // /employee/names
  if (req.url === "/employee/names") {
    // TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
    const names = employees
      .map((e) => `${e.firstName} ${e.lastName}`)
      .sort((a, b) => a.localeCompare(b)); 
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(names));
    return;
  }

  // /employee/totalsalary
  if (req.url === "/employee/totalsalary") {
    // TODO - Display Sum of all employees salary in given JSON format
    const total = employees.reduce((sum, e) => sum + Number(e.Salary || 0), 0); 
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ total_salary: total }));
    return;
  }

  // Fallback 404
  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify({ error: http.STATUS_CODES[404] }));
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
