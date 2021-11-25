import { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment'




const useFetch = (url,isCovidData) => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {

    const ourRequest = axios.CancelToken.source(); //1
    
    async function fetchData() {
      try {
        let res = await axios.get(url, {
          cancelToken: ourRequest.token, //2
        });
        console.log("check res covid", res.data);
        let data = res && res.data ? res.data : [];
        if (data && data.length > 0 &&  isCovidData === true) {
          data.map((item) => {
            item.Date = moment(item.Date).format("DD/MM/YYYY");
            return item;
          });
        }
        setdata(data);
        setLoading(false);
        setIsError(false);
      }
    
    catch (error) {
      if (axios.isCancel(error)) {
        console.log('req cancele', error.message)
      } else {
        setIsError(true);
        setLoading(false);
      }
    }
  }
  
      setTimeout(() => {
        fetchData();
      }, 2000);
   
    return () => {
      ourRequest.cancel('Operation canceled by the user')
    }
  },[url]);

  return {
    data,
    loading,
    isError,
  };
};

export default useFetch;
