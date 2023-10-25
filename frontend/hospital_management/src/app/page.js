import { TextField } from "@mui/material";
import Switch from "@mui/material/Switch";

export default function Home() {
  return (
    <main>
      <h1>Material ui and Redux !</h1>
      <Switch />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </main>
  )
}

