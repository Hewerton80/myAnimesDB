import { useCallback, useState } from "react";
import apiKitsu from '../apis/kitsuApi';


export interface IAnimeAttributes {
    createdAt: Date;
    updatedAt: Date;
    canonicalTitle: string;
    averageRating: string;
    ratingFrequencies: any;
    userCount: number;
    favoritesCount: number;
    startDate: string;
    endDate: string;
    popularityRank: number;
    ratingRank: number;
    ageRating: string;
    ageRatingGuide: string;
    subtype: string;
    status: string;
    posterImage: { tiny: string, small: string, medium: string, large: string, original: string };
    episodeCount: number;
    episodeLength: number;
    totalLength: number;
    youtubeVideoId: string;
    showType: string;
    synopsis: string;
    description: string;
    titles: { de_de: string, en_jp: string, es_es: string, ja_jp: string };
    
}

export interface IAnime {
    id: string;
    type: string;
    links: { self: string };
    attributes: IAnimeAttributes;
    relationships: any;
}

export enum EAnimesFileds {
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
}

export const onlySomeFilds = 'slug,createdAt,canonicalTitle,averageRating,ratingFrequencies,userCount,favoritesCount,startDate,endDate,popularityRank,ratingRank,ageRating,ageRatingGuide,subtype,status,tba,posterImage,coverImage,episodeCount,episodeLength,totalLength,youtubeVideoId';

const useAnime = () => {
    const [animes, setAnimes] = useState<IAnime[]>([]);
    const [isLoadingAnimes, setIsLoadingAnimes] = useState<boolean>(false);

    const getAnimes = useCallback(async (queryParams: IQueryParamsAnime) => {
        try {
            setIsLoadingAnimes(true);
            const response = await apiKitsu.get('/anime', {
                params: queryParams
            });
            setAnimes(response.data.data);
        }
        catch (err) {

        }
        setIsLoadingAnimes(false);
    }, []);
    return { animes, isLoadingAnimes, getAnimes }
}
export default useAnime;