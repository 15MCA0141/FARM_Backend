const fs = require('fs');
const http = require('http');
const url = require('url');

// /* Blocking - Synchronous */
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `Avacado's description: ${textIn}. \nCreated on: ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('Updated Succcessfully');


// /* Non-Blocking - Asynchronous */
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//             console.log(data3);

//         fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log('Written successfully');
//             })
//         });
//     });
// });
// console.log('Reading File:');


/* SERVER */
const data = fs.readFileSync('./dev-data/data.json', 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if(pathName === '/' || pathName === '/overview') {
        res.end('This is Overview');
    }
    else if(pathName === '/product') {
        res.end('This is Product');
    }
    else if(pathName === '/api') {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); // Specify allowed origin
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST'); // Specify allowed HTTP methods
        
        /* Other Headers to set
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization'); // Specify allowed headers
            res.setHeader('Access-Control-Allow-Credentials', 'true'); // Specify if credentials are allowed
            res.setHeader('Access-Control-Max-Age', '3600'); // Specify how long preflight requests can be cached in seconds
        */
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(data);
    }
    else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'test-header': 'page-not-found'
        });
        res.end(`<h1>Page not found!</h1>`);
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening on port: 8000');
});