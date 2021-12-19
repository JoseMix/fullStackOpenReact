import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAllPhones = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const createPhone = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const updatePhone = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const deletePhone = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
};

export default { getAllPhones, createPhone, updatePhone, deletePhone };
