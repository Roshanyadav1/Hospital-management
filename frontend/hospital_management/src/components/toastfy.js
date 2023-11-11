"use client"
import React, { useRef, useState } from 'react';
import toastfy from '@/components/toastfy'

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { resolve } from 'styled-jsx/css';
  
  function App(){
    const toastId = useRef(null)
    const [Progress,setProgress] = useState(0);
    const showToast = () =>
    {toast("Wow so easy!", 
    {
        autoClose:false
    } );
  };
  const showSucessToast = () =>
  {toast.success("Success Example", 
  {
      autoClose:false
  } );
}; 
const showWarningToast = () =>
{toast.warning("Warning Example", 
{
    autoClose:false
} );
}; 
const showErrorToast = () =>
{toast.error("Error Example", 
{
    autoClose:false
} );
}; 

const showLoadingToast = () => {
    toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve();
        //    reject();
        }, 1000); // Adjust the timeout as needed
      }),
      {
        pending: 'Loading Content...',
        success: 'Loading successfully!',
        error: 'Error recevied',
      },
      {
        autoClose:100,
      }
    );
  };

  const customProgress=() => {
    toastId.current = toast("customProgress",{
    progress : 0,
     autoClose: false,
 });
};
  const updateProgress=() =>{
  setProgress(pre=>pre+0.1);
  toast.update(toastId.current,{progress:Progress+ 0.1 });
  };

  return (
      <div>
        <button onClick={showToast}>showToast!</button>
        <button onClick={showSucessToast}>showToast</button>
        <button onClick={showWarningToast}>showWarning</button>
        <button onClick={showErrorToast}>showError</button>
        <button onClick={showLoadingToast}>show Loading</button>
        <button onClick={customProgress}>Custom Progress</button>

        <button onClick={updateProgress}>update Progress</button>
        


        <ToastContainer position={"top-right"}  
        close on click={true}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        autoClose={2000}
        draggable={true}
        closeButton={<p>Close</p>}
        
        />
      </div>
    );
  }

export default App

















