"use client";
import { Button, TextField } from "@mui/material";
import Switch from "@mui/material/Switch";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();//


  // const sayHello = () => {
  //   console.log("hello");
  // }
  

  const navigateToDashboard = () => {
    router.push("/dashboard");
  }

  return (
    <main>
      <h1>Material ui and Redux !</h1>
      <Switch />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />

      <Button onClick={navigateToDashboard} variant="contained">Go to dashboard</Button>
    </main>
  )
}

