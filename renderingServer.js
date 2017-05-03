const fs = require('fs');
const path = require('path');
const Vue = require('vue')
const server = require('express')()
const VueSSRServerPlugin = require('vue-server-renderer');

const context = {
    title: "This is a test title injected from the context by rendering server",
    url: "mocked out url"
};

const templateText = fs.readFileSync('./index.template.html', 'utf-8')
const renderer = VueSSRServerPlugin.createBundleRenderer(
    // This HAS to be an ABSOLUTE PATH!
    path.resolve(__dirname, './dist/bwsServerBundle.json'),
    {
        runInNewContext: false,
        template: templateText
        // There are some other options but we ignore them for now.
    }
);

server.get('*', (req, res) => {
    console.log("inside request");
    renderer.renderToString(
        context,
        (err, html) => {
            console.log("render callback");
            if (err) {
                console.log(err);
                console.log(err.stack);
                res.status(500).end('Internal Server Error')
                return
            }
            res.end(html)
        });    
});

server.listen(8080);
