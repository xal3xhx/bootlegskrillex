import Head from 'next/head'
import template from "../public/template";

function Home() {
  return (
    <div className="container">
      <Head>
        <title>Servers | Bootlexskrillex</title>
      </Head>

      <main>
        <h1 className="title">
          The servers of <a>BootlegSkrillex</a>
        </h1>

        <p className="description">
          Theres are all the servers i host, both private and public. <br/>
          Servers highlighted red are private servers.
        </p>

        <div className="grid">

          <a className="card">
            <h3>test</h3>
            <p>
              <b> ip: </b> alcoholics.bootlegskrillex.me <br/>
              <b> modpack: </b> https://www.curseforge.com/minecraft/modpacks/ftb-revelation <br/>
             </p>
          </a>

          <a className="card" href="https://status.bootlegskrillex.me">
            <h3>Server Status</h3>
            <p>
              click for Server status!
            </p>
          </a>

        </div>
      </main>
    </div>
  );
}

export default template(Home);