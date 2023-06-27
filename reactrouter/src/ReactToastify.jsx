import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ReactToastify() {

 const functionThatReturnsPromise = (isSuccess) => {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       if (isSuccess) {
         resolve();
       } else {
         reject();
       }
     }, 2000);
   });
 };
    // const functionThatSuccess = () => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(resolve,2000)
    //     })
    // }

   const notify = (isSuccess) => {
     toast.promise(
        //  functionThatSuccess(),
        //  {
        //    pending: "Promise is Pending",
        //    success: "Promise resolved 👌",
        //    error: "Promise rejected 🤯",
        //    },
        //    {
        //        position: toast.POSITION.TOP_RIGHT,
        //        autoClose:3000,
        //  },
       functionThatReturnsPromise(isSuccess),
       {
         pending: "Promise is pending",
         success: "Promise resolved 👌",
         error: "Promise rejected 🤯",
       },
       {
         position: toast.POSITION.TOP_RIGHT,
         autoClose: 2000,
       },
     );
   };

  return (
    <div>
      {/* <button onClick={() => notify(true)}>Show Toast True</button>
      <button onClick={() => notify(false)}>Show Toast False</button> */}
      <ToastContainer />
    </div>
  );
};
 

export default ReactToastify