const { connectRedshiftDB } = require("../db/redshift-conn");

exports.Fetch = async function (req, res) {
  const redshiftClient = connectRedshiftDB();
  redshiftClient
    .query('SELECT * FROM "demodata3"')
    .then(function (data) {
      console.log(data);
      res.json(data);
    })
    .catch(function (err) {
      console.error(err);
      return res.status(error.status || 500).send(error);
    });
};

exports.RecordData = async function (req, res) {
  const data = req.body;
  console.log("Data Recieved From Frontend", data);
  return res.json({ message: "Data Logged to Backend" });
};
