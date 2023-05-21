const db = require("../config/database");
const fetchData = async (req, res) => {
  console.log("Inside fetch ");
  console.log("req.body", req.body);
  try {
    const value = await db.any("SELECT * FROM mini_table");
    console.log("value", value);
    res.send(value);
  } catch (error) {
    console.log(error);
  }
};

const postData = async (req, res) => {
  console.log("Inserting data");
  console.log("req.body", req.body);
  try {
    const input = await db.none("INSERT INTO mini_table(task) VALUES ($1)",[req.body.todo]);
    // console.log("input", input);
    res.send('successfully complted ');
  } catch (error) {
    console.log(error);
  }
};

const putData = async (req, res) => {
  console.log("updating existing data");
  console.log("req.body", req.body);
  try {
    const result = await db.any(
      "UPDATE mini_table SET task=($1) WHERE id=($2)",[req.body.todo,req.body.id]
    );
    console.log("result", result);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};
const deleteData = async (req, res) => {
  console.log("Deleted ");
  console.log("req.body", req.body);
  try {
    const deletion = await db.any("DELETE FROM mini_table WHERE id=$1",[req.body.id]);
    console.log("deletedvalue is", deletion);
    res.send(deletion);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { fetchData, putData, postData, deleteData };
