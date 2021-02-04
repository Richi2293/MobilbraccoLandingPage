import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import Image from 'next/image'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.contentOverlay}>
                    <h1>Siamo in manutenzione,<br/>a breve torneremo online</h1>
                </div>
                <div className={styles.overlay}></div>
                <img src="/img/background.jpg" alt="background" className={styles.imageBG} layout='fill' />
            </main>

            <footer className={styles.footer}>

            </footer>
        </div>
    )
}
