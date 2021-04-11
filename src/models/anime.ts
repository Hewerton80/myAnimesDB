import { ICharacter } from "./character";

interface IAnimeAttributes {
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
    characters?: ICharacter[];

}