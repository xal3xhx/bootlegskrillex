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
          The Bots of The <a>Anonymous Alcholics</a>
        </h1>

        <div className="grid">
          <a href="/aa/drinks" className="card">
            <h3>Cocktails &rarr;</h3>
            <p>all the drinks stored in the bots database</p>
          </a>

          <a href="/aa/activity" className="card">
            <h3>Activity &rarr;</h3>
            <p>activity graphs. tracks whenever someone types cheers in chat</p>
          </a>

          <a href="/logout" className="card">
            <h3>Logout &rarr;</h3>
            <p></p>
          </a>
          </div>


      </main>
    </div>
  )
}

export default SecureTemplate(secret)