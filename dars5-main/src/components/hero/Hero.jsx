import React from "react";
import Person from "../../assets/images/person-fill.svg";
const Hero = ({ data }) => {
  if (!data) return null;
  return (
    <>
      <main className="max-w-[1600px] !important px-4 mx-auto">
        <div className="container w-[1584px] h-[800px] mt-[70px] rounded-xl bg-white p-3">
          <div className="text-center">
            <div className="flex gap-4 flex-wrap">
              {data.map((todo, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-red-700 gap-2 items-center  p-6 rounded-lg  w-[300px] hover:scale-95 transition-all	"
                >
                  <img
                    className="w-28 bg-white rounded-[50%] p-2"
                    src={Person}
                    alt=""
                  />
                  <div className="bg-white p-2 w-[230px] rounded-lg text-center">
                    <h2 className=" text-center">Fname: {todo.fname}</h2>
                    <h2 className=" text-center">Lname: {todo.lname}</h2>
                    <p className=" text-center">Age: {todo.age}</p>
                    <p className=" text-center">Gender: {todo.gender}</p>
                    <p className=" text-center">
                      Profession: {todo.profession}
                    </p>
                    <div className="flex gap-3 justify-center pt-2">
                      <button className="hover:scale-95 transition-all bg-red-600 text-white rounded-md  p-4">
                        Delete
                      </button>
                      <button className="hover:scale-95 transition-all bg-yellow-300 text-black rounded-md  p-4">
                        edit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
