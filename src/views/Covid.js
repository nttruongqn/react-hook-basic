import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import useFetch from "./customize/fetch";


const Covid = () => {
  const today = moment().startOf('day').toISOString(true);
  const priorDate = moment().subtract('day').subtract(31, 'days').toISOString(true);;


  const {data: dataCov,loading,isError} = useFetch( `https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`,true)


  

  return (
    <div style={{background:'#282c34',color:'white'}}>
    <h3>Covid 19 tracking in Viet Nam</h3>
    <table>
      {console.log("check data covid", dataCov)}
      <thead>
        <tr>
          <th>Date</th>
          <th>Confirmed</th>
          <th>Active</th>
          <th>Deaths</th>
          <th>Recovered</th>
        </tr>
      </thead>
      <tbody>
        {isError === false &&
          loading === false &&
          dataCov &&
          dataCov.length > 0 &&
          dataCov.map((item, index) => {
            return (
              <tr key={item.ID}>
                <td>{item.Date}</td>
                <td>{item.Confirmed}</td>
                <td>{item.Active}</td>
                <td>{item.Deaths}</td>
                <td>{item.Recovered}</td>
              </tr>
            );
          })}

        {loading === true && (
          <tr>
            <td colspan="5" style={{ textAlign: "center" }}>
              Crush not be long to me ...
            </td>
          </tr>
        )}

        {isError === true && (
          <tr>
            <td colspan="5" style={{ textAlign: "center" }}>
              Wrong...
            </td>
          </tr>
        )}
      </tbody>
      </table>
      </div>
  );
};

export default Covid;









  //componentDidMount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect(async () => {
  //   setTimeout(async () => {
  //     try {
  //       let res = await axios.get(
  //         `https://api.covid19api.com/country/vietnamfd?from=2021-11-01T00%3A00%3A00Z&to=2021-11-20T00%3A00%3A00Z`
  //       );
  //       console.log("check res covid", res.data);
  //       let data = res && res.data ? res.data : [];
  //       if (data && data.length > 0) {
  //         data.map((item) => {
  //           item.Date = moment(item.Date).format("DD/MM/YYYY");
  //           return item;
  //         });
  //       }
  //       setDataCovid(data);
  //       setLoading(false);
  //       setIsError(false);
  //     }
  //     catch (error) {
  //       setIsError(true);
  //       setLoading(false);
  //     }
  //   }, 3000)
  // }, []);
