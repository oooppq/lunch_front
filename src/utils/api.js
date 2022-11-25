import axios from "axios";
import { baseUrl } from "../data";

export const getData = async (setData, setLoading, url) => {
  if (setLoading) setLoading(true);
  const res = await axios.get(url);

  if (setData) setData(res.data);
  if (setLoading) setLoading(false);
};

export const getMultiData = async (setters, setLoading, urls) => {
  if (setLoading) setLoading(true);
  let i = 0;
  for (let url of urls) {
    let res = await axios.get(url);
    if (setters[i]) setters[i](res.data);
    i = i + 1;
  }
  if (setLoading) setLoading(false);
};

export const loginApi = async (id, pw) => {
  const url = baseUrl + "accounts/login/";
  const data = JSON.stringify({ username: id, password: pw });

  const res = await axios
    .post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .catch((error) => {
      // return error.response;
      return Promise.reject(error);
      // return null;
    });
  console.log(res.status);
  if (!res.status) return null;
  axios.defaults.headers.common["Authorization"] =
    "Bearer " + res.data.token.access;
  localStorage.setItem("token", JSON.stringify(res.data.token));
  // return res.data.token;
};

export const addMyStore = async (e) => {
  let name = e.currentTarget.id;
  const url = baseUrl + "accounts/mystore/";
  const data = JSON.stringify({ store_name: name });
  await axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const addMyMenu = async (e) => {
  let name = e.currentTarget.id;
  const url = baseUrl + "accounts/mymenu/";
  const data = JSON.stringify({ menu_name: name });
  await axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
