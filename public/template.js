import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

import { getTokensForServer, getTokensForBrowser } from "./oauth";

export default Page => class Template extends React.Component {
    static async getInitialProps({req}) {
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
        return(
            <div>
                <Header/>
                <Page>{ this.props }</Page>
                <Footer/>
            </div>
        )
    }
}