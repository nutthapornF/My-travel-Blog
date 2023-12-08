import { useState, useEffect } from "react";
import axios from "axios";
import paginate from "../context/pagination";
//import paginate from './utils'
const url = "http://localhost:4000/destination";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(url);
      const dataInfo = res.data.data;

      setData(paginate(dataInfo.reverse())); //reverse ให้อันเก่าขี่นก่อน
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { loading, data };
};
