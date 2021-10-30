import React from 'react';
import { deleteTokens } from '../public/oauth';
import Router from 'next/router';
import template from "../public/template";

class Logout extends React.Component {
    async componentDidMount () {
        const action = await deleteTokens();
        console.log(action);
        await Router.push('/');
    }
    render() {
        return null;
    }
}

export default template(Logout);