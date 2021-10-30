import React from "react"
import { exchangeToken, saveTokens } from "../public/oauth";
import Router from "next/router"
import PropTypes from "prop-types";
import template from "../public/template";

class redirect extends React.Component {
    static getInitialProps({query}) {
        return {
            code: query.code
        };
    }

    static propTypes = {
        isLoggedIn: PropTypes.bool
    };

    async componentDidMount () {
        if (this.props.code === undefined)  await Router.push('/');
        const data = await exchangeToken(`${this.props.code}`);
        if(data !== 400){
            await saveTokens(data.access_token, data.refresh_token);
        }
        await Router.push('/aa');
    }
    render(){
        return(
            null
            );
    }
};

export default template(redirect);