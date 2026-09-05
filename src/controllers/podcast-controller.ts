import {IncomingMessage, ServerResponse} from "http";

export const getListEpisodes = async (req: IncomingMessage, res:ServerResponse) => {
    res.writeHead(200, {"Content-Type":"application/json"});
    res.end(JSON.stringify([
    {
        podcastName: "Flow",
        episode: "CBUM - FLOW # 319",
        videoId: "pQSuQmVfS30",
        cover: "https://i.ytimg.com/vi/pQSuQmVfS30",
        categories: ["saúde", "esporte", "bodybuilder"],
    },
    ])
)}