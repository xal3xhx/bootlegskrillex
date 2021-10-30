import Head from 'next/head'
import SecureTemplate from '../../public/secure-template';


function fix(str) {
  return JSON.parse(
    str.replace(/\['/g, '["').replace(/', '/g, '", "').replace(/'\]/g, '"]')
  );
}

function Main({Drinks}) {
  return (
    <div className="container">
      <Head>
        <title>AA cocktails | Bootlexskrillex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">
          The cocktails of The Anonymous Alcoholics
        </h1>

        <ul>
        <div className="grid">
          {Drinks.map(p => (

          <a className="card">

            <h3>{p.name}</h3>

            <p>
              discription: <b> {p.discription} <br/> <br/> </b>
              ingredients: <br/>  
                {
                fix(p.ingredients).map(i => ( <b> {i} <br/> </b> 
                ))}<br/>

               instructions: <b> {p.instructions} <br/> <br/> </b>
               up votes: <b> {p.up_vote} <br/> <br/> </b>
              down votes: <b> {p.downvote} <br/> <br/> </b>
              author: <b> {p.author} <br/> </b>

            </p>
          </a>
        ))}
        </div>
        </ul>

        
      </main>
    </div>
  );
}

export async function getServerSideProps({ req, query }) {
const protocol = req.headers['x-forwarded-proto']
const host = req.headers['x-forwarded-host']

  const res = await fetch(
    `${protocol}://${host}/api/profiles/drinks`
  )
  const data = await res.json()

  return { props: data }
}
export default Main