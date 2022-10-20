import { useState } from "react";
import axios from "axios";

const Header = () => {
  const [data, setData] = useState(null);

  const getApi = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => {
        console.log(res);
        setData(res.data.results[0]);
      })
      .catch((err) => console.log(err));
  };
  //   getApi();
  return <div className=""></div>;
};

export default Header;
