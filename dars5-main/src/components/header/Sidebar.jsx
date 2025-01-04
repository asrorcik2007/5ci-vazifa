import React, { useRef, useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";

export const Sidebar = () => {
  const fname = useRef(null);
  const lname = useRef(null);
  const age = useRef(null);
  const gender = useRef(null);
  const profession = useRef(null);
  const [data, setdata] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const submit = (e) => {
    e.preventDefault();
    let todos = {
      fname: fname.current.value,
      lname: lname.current.value,
      age: age.current.value,
      gender: gender.current.value,
      profession: profession.current.value,
    };
    setdata((prev) => [...prev, todos]);
    console.log("Form submitted", todos);
    console.log(data);
    fname.current.value = "";
    lname.current.value = "";
    age.current.value = "";
    gender.current.value = "";
    profession.current.value = "";
  };

  return (
    <>
      <aside>
        <div className="max-w-[1600px] px-4 m-0 mx-auto">
          <div className="bg-slate-500 flex flex-col mt-40 gap-8 p-3 rounded-xl max-w-[300px]">
            {/* {
              if (input.value==""){
                re
              }
            } */}
            <input
              ref={fname}
              className="p-2 rounded-md outline-none"
              placeholder="Fname"
              type="text"
            />
            <input
              ref={lname}
              className="p-2 rounded-md outline-none"
              placeholder="Lname"
              type="text"
            />
            <input
              ref={age}
              className="p-2 rounded-md outline-none"
              placeholder="Age"
              type="number"
            />
            <select
              ref={gender}
              className="bg-white rounded-md p-2"
              name=""
              id=""
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input
              ref={profession}
              className="p-2 rounded-md outline-none"
              placeholder="Profession"
              type="text"
            />
            <button onClick={submit} className="bg-white rounded-md p-2">
              Submit
            </button>
          </div>
        </div>
      </aside>
      <Hero data={data} />
    </>
  );
};

export default Sidebar;
