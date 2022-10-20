import { useState, useEffect } from "react";
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

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="bos">
        {data && (
          <div className="flex justify-between itmes-center flex-col w[30rem]h-[30rem] text-center bg-blue-300 p-4"></div>
        )}
      </div>
    </div>
  );
};

export default Header;
