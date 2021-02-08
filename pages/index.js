import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ImageSection from '../components/ImageSection';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>MOBILBRACCO - Mobili Senza Tempo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.contentOverlay}>
                    <h1>MOBILBRACCO</h1>
                    <h4>ITALIAN QUALITY MANIFACTURE</h4>
                </div>
                <div className={styles.mainRow}>
                    <div className={styles.mainRow1}>
                        <ImageSection img={"img/mobilbraccoHotel.jpg"} title={"HOTEL"} desc={"Bespoke interiors for exclusive hotel."} url={"/hostfurniture"} />
                    </div>
                    <div className={styles.mainRow2}>
                        <ImageSection img={"img/mobilbraccoHome.jpg"} title={"HOME"} desc={"Timeless interior for your home."} url={"/home"} />
                    </div>
                </div>
                
            </main>

            <footer className={styles.footer}>

            </footer>
        </div>
    )
}
