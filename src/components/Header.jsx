import { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

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
          <div className="flex justify-between items-center mx-auto flex-col w-[30rem] h-[30rem] text-center bg-blue-300 p-4">
            <img
              className="rounded-full w-[9rem]"
              src={data.picture.medium}
              alt="img"
            />
            <p className="text-2xl">
              {data.name.title} {data.name.first} {data.name.last}
            </p>
            <p className="flex justify-items-center">
              <AiOutlineMail className="text-2xl mr-2" /> {data.email}
            </p>
            <p className="flex justify-items-center">
              <AiOutlinePhone className="text-2xl mr-2" /> {data.phone}
            </p>
            <p className="flex justify-items-center">
              <HiOutlineLocationMarker className="text-2xl mr-2" />
              {data.location.city}-{data.location.country}
            </p>
            <p>Age: {data.dob.age}</p>
            <p>Register Date: {data.registered.date.slice(0, 10)}</p>
          </div>
        )}
      </div>
      <button
        className="bg-blue-500 p-1 text-white hover:bg-slate-400 hover: text-black mt-5"
        onClick={() => getApi()}
      >
        Random User
      </button>
    </div>
  );
};

export default Header;
