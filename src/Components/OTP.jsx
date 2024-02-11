import React, { useState } from "react";

function OTP() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpToNumber = (otp) => {
    return parseInt(otp.join(""), 10);
  };


  const handleChange = (e, index) => {
    const { value} = e.target;
    if (/^[1-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      const nextInput = document.getElementsByName(
        `otp${index+1}`
      )[0];

      console.log(nextInput);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
        const prevInput = document.getElementsByName(
            `otp${index-1}`
      )[0];
      if (prevInput) {
        prevInput.focus();
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const otpNumber = otpToNumber(otp);
    console.log(otpNumber);
  };
  return (
    <div class="container mx-auto">
      <div class="max-w-sm mx-auto md:max-w-lg">
        <div class="w-full">
          <div class="bg-white h-64 py-3 rounded text-center">
            <h1 class="text-2xl font-bold">OTP Verification</h1>
            <div class="flex flex-col mt-4">
              <span>Enter the OTP you received at</span>
              <span class="font-bold">+91 ******876</span>
            </div>
            <form onSubmit={handleSubmit} className="px-2 mt-5">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  name={`otp${index}`}
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="m-2 border h-10 w-10 text-center form-control rounded shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
                  id={`otp${index}`}
                  maxLength="1"
                />
              ))}
            </form>
            <div
              id="otp"
              class="flex flex-row justify-center text-center px-2 mt-5"
            ></div>

            <div class="flex justify-center text-center mt-5">
              <a
                class="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer"
                href="/"
              >
                <span class="font-bold">Resend OTP</span>
                <i class="bx bx-caret-right ml-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTP;
