import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisode } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { StatusCode } from "../utils/status-code";
import { ContentType } from "../utils/content-type";
import { FilterPodcastModel } from "../models/filter-podcast-model";

export const getListEpisodes = async (req: IncomingMessage, res:ServerResponse) => {
    const content = await serviceListEpisode();

    res.writeHead(StatusCode.OK, {"Content-Type": ContentType.JSON});
    res.end(JSON.stringify(content));
}

export const getFilterEpisodes = async (req: IncomingMessage, res:ServerResponse) => {
    
    const content: FilterPodcastModel = await serviceFilterEpisodes(req.url);

    res.writeHead(content.StatusCode, {"Content-Type": ContentType.JSON});
    res.end(JSON.stringify(content.body)); 
};