import express, { Express } from 'express';
const server: Express = express();

import projectConfigs from './middlewares/projectConfigs';
projectConfigs(server)

server.get('/', () =>{
console.log("first")
})

const port: string | undefined = process.env.PORT;
server.listen(port, (): void => {
  console.log(`The server is listening on port ${port}`);
});
