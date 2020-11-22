import axios from "axios";
const URL = 'http://localhost:5000/api/misc';
// const URL = 'https://honestmilk-api.herokuapp.com/api/misc';


async function api(config) {
  return axios.request(config)
}

export async function addQuery(query) {
  return api({
    url: `${URL}/addQuery`,
    method: 'POST',
    data: {query},
    headers: {
      'Content-Type': 'application/json'
    },
  });
}

export async function bookSampleInit(sample) {
  return api({
    url: `${URL}/bookSample/init`,
    method: 'POST',
    data: {sample},
    headers: {
      'Content-Type': 'application/json'
    },
  });
}

export async function bookSampleConfirm(data) {
  return api({
    url: `${URL}/bookSample/confirm`,
    method: 'POST',
    data: data,
    headers: {
      'Content-Type': 'application/json'
    },
  });
}

export async function bookVisit(visit) {
  return api({
    url: `${URL}/bookVisit`,
    method: 'POST',
    data: {visit},
    headers: {
      'Content-Type': 'application/json'
    },
  });
}

export async function getProduct(id) {
  return api({
    url: `${URL}/${id}/getProductDetails`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
  });
}