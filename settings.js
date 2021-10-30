const clientID = process.env.DiscordID; // your clientID
const clientSecret = process.env.DiscordSecret; // your client Secret
const redirect_uri = encodeURIComponent('https://bootlegskrillex.me/redirect'); // your domain

export {
    clientID,
    clientSecret,
    redirect_uri
};