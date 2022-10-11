const axios = require("axios");

const getToken = async () => {
  let details = await axios.post("http://0.0.0.0:3000/api/v1/users/logIn", {
    email: "fursat@gmail.com",
    password: "noopinion",
  });
  return details.data;
};

const getAllTours = async () => {
  let details = await getToken();

  const data = await axios.get("http://0.0.0.0:3000/api/v1/tours", {
    headers: { Authorization: `Bearer ${details.token}` },
  });
  //   const data = await axios.get("https://jsonplaceholder.typicode.com/posts");

  return data;
};

const exportObj = {
  getAllTours,
};

module.exports = exportObj;
