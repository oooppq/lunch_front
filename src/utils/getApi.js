import axios from "axios";

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
