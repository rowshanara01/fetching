export interface PostProps {
    id: number,
    title: string,
    body: string,
    image: {
        url: string,
        alt: string
    },
    isFavourite: boolean
}

export interface PostListProps {
    postList: PostProps[]
}

export interface FilterProps {
    setFilteredValue: React.Dispatch<React.SetStateAction<string>>
}