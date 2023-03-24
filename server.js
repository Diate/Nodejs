const http = request("http");

const server = http.createServer((req, res) => {
  console.log("run request");
  res.setHeader("Content-type", "text/html");
  res.write("<h3> Hello world </h3>");
  res.write("<h2> from xxxxxxxx </h2>");
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("server start");
});
