import { useState } from "react";
import AccountCreation from "./AccountCreation";
import Details from "./Details";
import Validation from "./Validation";
import { ImBlocked } from "react-icons/im";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const Register = ({ login, setLogin }) => {
  const [step, stepHandler] = useState(0);
  console.log(step)
  return (
    <>
      <div className="flex flex-row justify-between items-center mb-8">
        <button className="rounded-full hover:bg-gray-200">
          {
            step===0 ? <ImBlocked className="h-12 w-12 text-Blue p-2" /> : <FaArrowAltCircleLeft className="h-12 w-12 text-Blue p-2" onClick={() => stepHandler(step-1)}/>
          }
        </button>
        <button className="py-2.5 px-5 me-2 mb-2 font-medium text-black focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
        onClick={()=>setLogin(!login)}
        >
          Sign In
        </button>
      </div>
      {step === 0 ? (
        <AccountCreation step={step} stepHandler={stepHandler} />
      ) : step === 1 ? (
        <Validation step={step} stepHandler={stepHandler} />
      ) : (
        <Details step={step} stepHandler={stepHandler} />
      )}
      <div className="text-center mt-5">
        <p>
          <span className="text-Blue">privacy policy</span> and{" "}
          <span className="text-Blue">Terms and Conditions</span>
        </p>
      </div>
    </>
  );
};
export default Register;
