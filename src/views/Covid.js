import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);

  //componentDidMount
  useEffect(async () => {
    let res = await axios.get(
      `https://api.covid19api.com/country/vietnam?from=2021-11-01T00%3A00%3A00Z&to=2021-11-20T00%3A00%3A00Z`
    );
    console.log("check res covid", res.data);
    let data = res && res.data ? res.data : [];
    if (data && data.length > 0) {
      data.map((item) => {
        item.Date = moment(item.Date).format("DD/MM/YYYY");
        return item;
      });
    }
    setDataCovid(data);
  }, []);
  return (
    <table>
      {console.log("check data covid", dataCovid)}
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
        {dataCovid &&
          dataCovid.length > 0 &&
          dataCovid.map((item, index) => {
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
      </tbody>
    </table>
  );
};

export default Covid;
