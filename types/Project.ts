export type Project = {
    id: string;
    name: string;
    job: string;
    description: string;
    tags: Tag[];
    thumbnail: string;
    link: string;
}

export type Tag = {
    name: string;
    color: string;
    icon: string;
}