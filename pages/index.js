import Head from 'next/head'
import template from "../public/template";

function Home() {
    return (
    <div className="container">

      <Head>
        <title>Home | Bootlexskrillex</title>
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a>BootlegSkrillex</a>
        </h1>

        <p className="description">
          whats going on boys, I host games servers for friends and the public, along with a cdn!
        </p>

        <div className="grid">
          <a href="https://discord.com/users/102131189187358720" className="card">
            <h3>Discord Mr Alex#6074 &rarr;</h3>
            <p>If you have anything you want add me on discord!</p>
          </a>

          <a href="/servers" className="card">
            <h3>Servers &rarr;</h3>
            <p>All my games servers I run with details</p>
          </a>

          <a href="https://cdn.bootlegskrillex.me/" className="card" >
            <h3>Public CDN &rarr;</h3>
            <p> My Publid CDN. Hosts some nsfw content and other things I want to give away. </p>
          </a>

          <a href="https://ko-fi.com/bootlegskrillex" className="card">
            <h3>Donate?? &rarr;</h3>
            <p>hosting these servers is not free, please consider donating to support this project</p>
          </a>
        </div>
      </main>
    </div>
  );
}


export default template(Home);