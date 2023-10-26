import Link from "next/link"
import Header from "./header/page"
const UserPage=()=> {
  return (
    <div>
      <h1>This is User page</h1>
      <Link href="/profile/user/cards">Go To Cards Page</Link>
      <br/>
      <br/>
      <Link href="/profile/user/header">Go To Header Page</Link>
      <br/><br/>
      <Link href="/profile/user/modal">Go To Modal Page</Link>
    </div>
  )
}

export default UserPage
