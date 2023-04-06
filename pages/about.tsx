import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../component/common/Footer'
import Header from '../component/common/Header'

export default function About() {
    return (
        <div >
            <Head>
                <title> About - Mritunjoy Mushahary Personal website</title>
                <meta name="description" content="About - Mritunjoy Mushahary Personal website" />
                <link rel="icon" type="image/png" href="/../imgs/icons/profile.jpg" />
            </Head>
            <main className='container'>

                <Header />

                <div className="about">
                    <h1>About - Mritunjoy Mushahary</h1>
                    <p>Hello everybody, and thank you for visiting my website. The main objectives of this website are listed below:</p>
                    <ol>
                        <li>To show my resume to everyone.</li>
                        <li>To practice and share my experiences.</li>
                        <li>Write articles about Golang DSA (Data Structure and Algorithms). so that others can read and learn.</li>
                        <li>To host my completed projects for practicing DSA (Data Structure and Algorithm).</li>
                    </ol>
                </div>

                <Footer />

            </main>
        </div>
    )
}
