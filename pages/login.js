import Axios from 'axios'
import React from 'react'
import * as settings from '../settings';
import template from "../public/template";

const url = `https://discordapp.com/api/oauth2/authorize?client_id=${settings.clientID}&redirect_uri=${settings.redirect_uri}&response_type=code&scope=guilds%20identify`

class Login extends React.Component {
	render() {
		return (<div>
			<p>Please wait...</p>
		</div>
		)
	}
	
	async componentDidMount() {
		window.location.replace(url)
	}
}

export default template(Login);