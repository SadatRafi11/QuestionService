const app = require("./app");
const { config } = require("dotenv");

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`up and running at port ${PORT} of localhost`);
});
