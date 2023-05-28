const baseUrl = 'http://localhost:3001/api/persons';

function getPersons() {
    return fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => data);   
}

function createPerson(person) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(person),
  })
    .then((response) => response.json())
    .then((data) => data);
}

function deletePerson(id) {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.status);
}

export default {
  getPersons,
  createPerson,
  deletePerson,
};