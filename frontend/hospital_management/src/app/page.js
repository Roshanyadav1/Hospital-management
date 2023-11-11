"use client"
import React from 'react'
// import FetchData from '@/app/data/page'
// import Link from 'next/link'
// import Footer from '@/components/Footer'

import { useGetAllPostByIdQuery, useGetAllPostQuery,useCreatePostMutation } from'@/service/user'

function page() {
  const {data}  = useGetAllPostQuery()
    console.log(data)
  //  const {data} = useGetAllPostByIdQuery(5 )

  //    const [updatePost, result] = useCreatePostMutation()
  // console.log("Result",result)
  return (
    <div>
      <h1>RTK QUERY PRACTICE</h1>
      {/* <button onClick={()=>updatePost({name:"Megha",id:1301})}>Add Post</button> */}
      {/* <Footer/> */}
    </div>
  )
}
export default page

