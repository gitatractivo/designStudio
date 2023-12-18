import React from "react";
import { useNavigate } from "react-router-dom";

const Recents = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col gap-4 ">
      <h1 className="text-3xl font-medium text-black">Dashboard</h1>
      <div className="min-h-[238px]   max-w-[1213px] bg-white gap-9 p-7 flex flex-col rounded-2xl">
        {Array.from(Array(7)).map(() => {
          return (
            <div className="w-full h-[50px] bg-[#F8F9FA] p-3 rounded-xl flex flex-col justify-between shadow-md hover:bg-slate-100 cursor-pointer "
              onClick={() => {
                navigate("/workspace");
              }}
            >
              {" "}
              
              Workspace
            </div>
          );
        })}
      </div>
      
    </div>
    
  );
};

export default Recents;