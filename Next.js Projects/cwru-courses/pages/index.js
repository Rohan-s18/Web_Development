import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import repo from '../components/RepositoryList'
import RepositoryList from '../components/RepositoryList'

//Index page for our next project, when you use the "npm run dev", this page will be displayed on your localhost:3000

export default function index(){
  return(
    <div className={styles.container}>
      <Head>
        <title>Rohan's Repositories</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Check out my repositories</h1>

        
          <RepositoryList />
        
      </main>

    </div>
  )
}

