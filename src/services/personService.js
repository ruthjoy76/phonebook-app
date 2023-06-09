import axios from "axios";

const baseUrl = "http://localhost:8080/api/persons";

let token = null;

function setToken(newToken) {
  token = `Bearer ${newToken}`;
}

function getPersons() {
  return axios.get(baseUrl).then((res) => res.data);
}

function createPerson(person) {
  const config = {
    headers: { Authorization: token },
  };

  return axios.post(baseUrl, person, config).then((res) => res.data);
}

function deletePerson(id) {
  return axios.delete(`${baseUrl}/${id}`).then((res) => res.status);
}

export default {
  getPersons,
  createPerson,
  deletePerson,
  setToken,
};