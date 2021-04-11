import { useCallback, useState } from "react";
import apiKitsu from '../apis/kitsuApi';
import { IAnime } from "../models/anime";
import { ICharacter } from "../models/character";

export enum EAnimesFileds {
    Slug = 'slug',
    PopularityRank = 'popularityRank',
    FavoritesCount = '-favoritesCount',
    RatingRank = 'ratingRank',
    CanonicalTitle = 'canonicalTitle',
    AverageRating = '-averageRating',
    StartDate = '-startDate',
}

export const fieldsToOrderBy = [
    {
        label: 'Mais populares',
        value: 'popularityRank',
    },
    {
        label: 'mais Favoritos',
        value: '-favoritesCount',
    },
    {
        label: 'Classificação no Rank',
        value: 'ratingRank',
    },
    {
        label: 'Nome',
        value: 'canonicalTitle',
    },
    {
        label: 'Classificação média',
        value: '-averageRating',
    },
    {
        label: 'Mais recentes',
        value: 'createdAt',
    },
];

export interface IQueryParamsAnime {
    'page[limit]'?: number;
    'fields[anime]'?: string;
    'filter[text]'?: string;
    'filter[id]'?: string;
    'sort'?: String;
    'filter[seasonYear]'?: string | number;
    'include'?: string;
    'fields[characters]'?: string;
    'page[offset]'?: number;
}

export const onlySomeAnimesFilds = 'slug,createdAt,canonicalTitle,averageRating,ratingFrequencies,userCount,favoritesCount,startDate,endDate,popularityRank,ratingRank,ageRating,ageRatingGuide,subtype,status,tba,posterImage,coverImage,episodeCount,episodeLength,totalLength,youtubeVideoId';

const useAnime = () => {
    const [animes, setAnimes] = useState<IAnime[]>([]);
    const [animesCount, setAnimesCount] = useState<number>(0);
    const [isLoadingAnimes, setIsLoadingAnimes] = useState<boolean>(false);

    const getAnimes = useCallback(async (queryParams: IQueryParamsAnime) => {
        try {
            setIsLoadingAnimes(true);
            const response = await apiKitsu.get('/anime', {
                params: queryParams
            });
            const animesResponse: IAnime[] = response.data.data;
            let characters = [];
            if (queryParams.include === 'characters.character' && response.data.included) {
                characters = response.data.included;
                // console.log('characters: ', characters)
                characters = characters.filter(character => !!character.attributes.canonicalName)
                animesResponse[0].characters = characters as ICharacter[];
            }
            setAnimes(animesResponse);
            setAnimesCount( response.data.meta.count);
        }
        catch (err) {

        }
        setIsLoadingAnimes(false);
    }, []);
    return { animes, isLoadingAnimes, animesCount, getAnimes }
}
export default useAnime;