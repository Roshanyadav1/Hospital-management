import Link from "next/link"
function AboutPage() {
  return (
    <div>
      <h1>This is about  pagee</h1>
      <Link href="/profile/admin" >GO To Admin Page</Link>
      <br/> <br/>
      <Link href="/profile/user" >GO To User Page</Link>
    </div>
  )
}

export default AboutPage
