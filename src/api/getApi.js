import axios from "axios";

export const getData = async (setData, setLoading, url) => {
  setLoading(true);
  const res = await axios.get(url);
  setData(res.data);
  setLoading(false);
};
