import React from "react";
import { useState } from "react";
import { Toaster, toast,ToastBar } from "react-hot-toast";

function ReactHotToast() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const [verificationError, setVerificationError] = useState(false);

  const verification = () => {
    const isPhoneNumberValid = phoneNumber === "123456789";
    const isOtpValid = otp === "1234";

    if (isPhoneNumberValid && isOtpValid) {
      setVerificationSuccess(true);
      setVerificationError(false);
      shownotify("Phone number and OTP verified successfully!", true);
    } else {
      setVerificationSuccess(false);
      setVerificationError(true);
      shownotify("Invalid OTP. Please try again.", false);
    }
  };

  const shownotify = (message, success) => {
    if (success) {
      toast.success(message, { duration: 3000 });
    } else {
      toast.error(message, { duration: 3000 });
    }
  };

  return (
    <div>
      {!verificationSuccess && !verificationError && (
        <div
          style={{
            marginTop: "80px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>Verification</h3>
          <input
            type="text"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Enter a Valid OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <br />
          <button onClick={verification}>Submit</button>
        </div>
      )}
      <Toaster position="top-center">
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== "loading" && (
                  <button style={{fontSize:"10px",borderStyle:"none",backgroundColor:"white"}} onClick={() => toast.dismiss(t.id)}>X</button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
      
    </div>
  );
}

export default ReactHotToast;