const Welcome = (req, res) => {
  res.status(200).send(`
    <div style="text-align:center">
        <h1>Welcome To my API</h1>
        <i>${process.env.npm_package_name}</i>
        <p>version: <b>${process.env.npm_package_version}</b></p>
        <p>by <a href="https://brunopaula.com">Bruno Paula</a><p>
    </div>
    `)
}
module.exports = Welcome
