import { FilterPodcastModel } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcast-repository";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
    podcastName:string | undefined) : Promise<FilterPodcastModel> => {

    let responseFormat: FilterPodcastModel = {
        StatusCode: 0,
        body: []
    };    

    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    responseFormat.StatusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;
    
    responseFormat.body = data;

    return responseFormat;
};