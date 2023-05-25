import axios from "axios";
import config from "../services/config.json";

const addTodos = async (todo) => {
  const data = { todo};
  console.log("data", data);
  await axios
    .post(`${config.api_base_url}/api/task`, data)
    .then((data) => {
      console.log("data", data);
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const updateTodos = async (editId, todo, setTodos, setTodo, setEditid) => {
  try {
    const data = { editId , todo};
    await axios.put(`${config.api_base_url}/api/task/${editId}`, data);
    console.log("data", data);
    setTodos("");
    setEditid(false);
  } catch (error) {
    console.log(error);
  }
};

const deleteTodos = async (id) => {
  console.log('id', id);
  try {
    const result = await axios.delete(
      `${config.api_base_url}/api/task/${id}`
    );
    console.log("result", result);
  } catch (error) {
    console.log(error);
  }
};
export { addTodos, updateTodos, deleteTodos };
