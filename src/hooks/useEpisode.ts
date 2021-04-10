import { useCallback, useState } from "react";
import apiKitsu from '../apis/kitsuApi';


export interface IEpisodeAttributes {
    createdAt?: string;
    canonicalTitle?: string;
    description?: string;
    airdate?: string;
    seasonNumber?: number;
    number?: number;
    length?: number;
    thumbnail: { original: string };
}

export interface IEpisode {
    id: string;
    type: string;
    links: { self: string };
    attributes: IEpisodeAttributes;
    relationships: any;

}

interface IQueryParamsAnime {

}
const useEpisode = () => {

    const [episodes, setEpisodes] = useState<IEpisode[]>([]);
    const [isLoadingEpisodes, setIsLoadingEpisodes] = useState<boolean>(false);

    const getEpisodes = useCallback(async (idAnime: string, queryParams: IQueryParamsAnime) => {
        try {
            setIsLoadingEpisodes(true);
            const response = await apiKitsu.get(`/anime/${idAnime}/episodes`, {
                params: queryParams
            });
            setEpisodes(response.data.data);
        }
        catch (err) {

        }
        setIsLoadingEpisodes(false);
    }, []);

    return { episodes, isLoadingEpisodes, getEpisodes };

}
export default useEpisode;