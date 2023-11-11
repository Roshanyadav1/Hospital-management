
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

const Login=() => {

    const diffToast =()  =>{
        alert ("login Sucessfully");
    }

return (
    <>
    {/* <div className="main-div"> */}
        <h2>welcome to sigin in page</h2>
        <button> login </button>
        {/* <button className="btn btn-primary"  */}
         {/* onClick={diffToast} */}
        {/* >Login</button> */}
    {/* </div> */}
    </>
) 
}

export default Login;