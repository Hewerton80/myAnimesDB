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