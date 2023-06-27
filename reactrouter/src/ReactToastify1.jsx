import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function ReactToastify1() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const [verificationError, setVerificationError] = useState(false);

  const verification = () => {
      const isPhoneNumberValid = phoneNumber === "123456789";
      const isotpValid = otp === "1234";
    if (isPhoneNumberValid&&isotpValid) {
      setVerificationSuccess(true);
      setVerificationError(false);
      showToast("Phone number and OTP verified successfully!", true);
    } else {
      setVerificationSuccess(false);
      setVerificationError(true);
      showToast("Invalid OTP. Please try again.", false);
    }
  };


  const showToast = (message, success) => {
    toast(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      type: success ? toast.TYPE.SUCCESS : toast.TYPE.ERROR,
    });
  };

  return (
    <div>
      {!verificationSuccess && !verificationError && (
        <div>
          <h3> Verification</h3>
          <input
            type="text"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <br></br>
                  <input
                      type="text"
                      placeholder="Enter a Valid OTP"
                      value={otp}
                      onChange={(e)=>setOtp(e.target.value)}
                  />
                  <br></br>
          <button onClick={verification}>Submit</button>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default ReactToastify1;
