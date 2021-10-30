import React from 'react';
import Head from 'next/head'
import Footer from '../components/footer';
import Header from '../components/header';


import { getTokensForServer, getTokensForBrowser } from "./oauth";

export default Page => class Template extends React.Component {

    static async getInitialProps({req}) {
        console.log("starting")
        let loggedInUser = typeof window ? await getTokensForBrowser() : await getTokensForServer(req);
        if(loggedInUser === undefined || loggedInUser.token === undefined) loggedInUser = false;
        const pageProperties = Page.getInitialProps && await Page.getInitialProps(req);

        return {
            ...pageProperties,
            loggedInUser,
            isLoggedIn: !!loggedInUser
        };
    }

    render() {
        // if (!this.props.isLoggedIn) {
        if (false) {
            return (
            <div className="container">
              <Header/>
              <Head>
                <title>AA | Bootlexskrillex</title>
                <link rel="icon" href="/favicon.ico" />
              </Head>

              <main>
                <h1 className="title">
                  <a> You are not logged in!</a>
                </h1>

                <div className="grid">
                  <a href="/login" className="card">
                    <h3>login &rarr;</h3>
                    <p>click here to login</p>
                  </a>

                  <a href="/" className="card">
                    <h3>Home &rarr;</h3>
                    <p>click here to go back to the public page</p>
                  </a>
                  </div>
              </main>
              <Footer/>
            </div>
          );
        }
        return(
            <div>
                <Header/>
                <Page>{ this.props }</Page>
                <Footer/>
            </div>
        )
    }
}