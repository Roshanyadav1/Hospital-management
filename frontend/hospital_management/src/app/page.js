"use client";
import { Button, TextField } from "@mui/material";
import Switch from "@mui/material/Switch";
import { useRouter } from "next/navigation";
import AboutPage from "@/app/about/page";
import { useGetPokemonByNameQuery } from "@/services/Hospital";
export default function Home() {

  // const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
  // console.log(data , isLoading , error)


  return (
    <main>
      {/* <ResponsiveAppBar/>
      <MediaControlCard/>
      <BasicModal/> */}
      <AboutPage />
    </main>
  )
}


