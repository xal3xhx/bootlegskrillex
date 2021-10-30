import Head from 'next/head'
import SecureTemplate from '../../public/secure-template';


function secret() {
return (
     <div className="container">
      <Head>
        <title>AA | Bootlexskrillex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Movie/Tv requests!
        </h1>

        

      </main>
    </div>
  )
}

export default SecureTemplate(secret)