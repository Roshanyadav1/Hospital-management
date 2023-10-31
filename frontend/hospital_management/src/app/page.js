"use client";
import { Button, TextField } from "@mui/material";
import Switch from "@mui/material/Switch";
import { useRouter } from "next/navigation";
// import ResponsiveAppBar from "@/app/profile/user/header/page";
// import MediaControlCard from "@/app/profile/user/cards/page";
// import BasicModal from "@/app/profile/user/modal/page";
import AboutPage from "@/app/about/page";
export default function Home() {

  // const router = useRouter();

  // const navigateToDashboard = () => {
  //   router.push("/dashboard");
  // }

  return (
    <main>
      {/* <h1>Material ui and Redux !</h1>
      <Switch />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />

      <Button onClick={navigateToDashboard} variant="contained">Go to dashboard</Button> */}
      {/* <ResponsiveAppBar/> */}
     {/* <MediaControlCard/> */}
    {/* <BasicModal/> */}
    <AboutPage/>
    </main>
  )
}

