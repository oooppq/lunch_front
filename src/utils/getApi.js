import axios from "axios";

export const getData = async (setData, setLoading, url) => {
  if (setLoading) setLoading(true);
  const res = await axios.get(url);

  if (setData) setData(res.data);
  if (setLoading) setLoading(false);
};
