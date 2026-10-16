import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisode } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import { PodcastTransferModel } from "../models/podcast-transfer-model";

export const getListEpisodes = async (req: IncomingMessage, res:ServerResponse) => {
    const content : PodcastTransferModel = await serviceListEpisode();

    res.writeHead(content.statusCode, {"Content-Type": ContentType.JSON});
    res.write(JSON.stringify(content));
    res.end();
}

export const getFilterEpisodes = async (req: IncomingMessage, res:ServerResponse) => {
    const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode, {"Content-Type": ContentType.JSON});
    res.write(JSON.stringify(content.body)); 
    res.end(); 
};