export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log("POST")
  } else {
  	res.send("METHOD IS NOT POST")
  }
}