import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../component/common/footer'
import Header from '../component/common/header'

export default function Terms() {
    return (
        <div >
            <Head>
                <title> Terms&Conditions</title>
                <meta name="description" content="About - Mritunjoy Mushahary Personal website" />
            </Head>
            <main className='container'>

                <Header />

                <div className="about">
                    <h1>Terms&Conditions</h1>
                    <p>Here are some terms and conditions that you need to follow.</p>
                    <ol>
                        <li>Never copy the content of this website, and paste it on your website. because this is only the personal content shared by Mritunjoy Mushahary.</li>
                        <li>because Mritunjoy Mushahary had shared his contact details or some personal details. Please don&apos;t misuse the given details because the information is only available to Human Resources (HR) at other companies.</li>
                    </ol>
                </div>

                <Footer />

            </main>
        </div>
    )
}
