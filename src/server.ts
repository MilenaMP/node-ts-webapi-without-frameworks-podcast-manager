import * as http from "http";
import {getListEpisodes, getFilterEpisodes} from "./controllers/podcast-controller";
import { Routes } from "./routes/routes";

const server = http.createServer(async(req: http.IncomingMessage, res: http.ServerResponse) => {
    const [baseUrl, queryString] = req.url?.split("?") ??  ["", ""];

    if(req.method === "GET" && baseUrl === Routes.LIST){
        await getListEpisodes(req, res);
    }
    if(req.method === "GET" && baseUrl === Routes.EPISODE){
        await getFilterEpisodes(req, res);
    }
});

const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Servidor iniciado na ${port}`);
})