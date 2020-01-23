export interface Podcast { 
    title: string,
    id: string,
    description: string,
    image: Image
    audioFile?: AudioFile
}


export interface Image {
    url: string,
    id: string,
    mime: string
}

export interface AudioFile { 
    url: string,
    id: string,
    mime: string
}
