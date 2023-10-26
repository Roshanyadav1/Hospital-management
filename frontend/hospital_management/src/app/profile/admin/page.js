import Link from "next/link"
const AdminPage=()=> {
  return (
    <div>
      <h1>This is admin page</h1>
      <Link href="/about">Go To About Page</Link>
    </div>
  )
}

export default AdminPage


