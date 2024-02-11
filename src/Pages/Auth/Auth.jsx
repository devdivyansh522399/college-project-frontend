import React, { useState } from "react";
import images from "../../constants/images";
import LoginPage from "./LoginPage";
import Register from "./Register/Regsiter";


const Auth = () => {
  const [login, setLogin] = useState(false)
  return (
    <section className="font-poppins grid grid-cols-10 h-screen mx-auto">
      <div className="hidden bg-Blue bg-opacity-80 md:col-span-6 lg:flex flex-row justify-center items-center">
        <img src={images.loginPhoto} alt="" />
      </div>
      <div className=" col-span-10 lg:col-span-4 p-12 w-4/5 mx-auto my-auto space-y-4">
         {
          login ?  <LoginPage login={login} setLogin={setLogin}/> : <Register login={login} setLogin={setLogin}/>
         }
      </div>
    </section>
  );
};

export default Auth;
