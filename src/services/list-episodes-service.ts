import { repositoryPodcast } from "../repositories/podcast-repository";

export const serviceListEpisode = async () => {
    const data = await repositoryPodcast();

    return data;
}
