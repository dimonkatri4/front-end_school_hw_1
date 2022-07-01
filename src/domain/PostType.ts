export type Author = {
    uniqueId: string
    avatarMedium: string
    nickname: string
}

export type Music = {
    title: string
    authorName: string
}

export type Status = {
    diggCount: number
    commentCount: number
    shareCount: number
}

export type VideoType = {
    cover: string
    playAddr: string
}

export type PostType = {
    id: string
    author: Author
    desc: string
    music: Music
    stats: Status
    video: VideoType
}