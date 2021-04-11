interface ICharacterAttributes {
    createdAt: Date;
    updatedAt: Date;
    canonicalName: string;
    otherNames?: string[];
    names: {en: string, ja_jp: string};
    slud?: string;
    name: string;
    malId: string;
    image: { original: string };
    youtubeVideoId: string;
    showType: string;
    synopsis: string;
    description: string;
    titles: { de_de: string, en_jp: string, es_es: string, ja_jp: string };

}

export interface ICharacter {
    id: string;
    type: string;
    links: { self: string };
    attributes: ICharacterAttributes;
    relationships: any;
}