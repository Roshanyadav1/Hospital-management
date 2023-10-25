import Header from './profile/user/header';
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRouter} from 'next/navigation'
export default function Home() {
  return (
    <main >
      <h1>Routing in Next Js</h1>
        <Header/>
    </main>

  )
}
