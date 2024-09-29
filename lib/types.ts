export type Res = {
    status: number,
    success: boolean,
    data: any,
    errorMessage: string,
}

export type Attribute = 'danceability' | 'energy' | 'loudness' | 'speechiness' | 'acousticness' | 'instrumentalness' | 'liveness' | 'valence' | 'tempo' | 'timeSignature' | 'popularity';

export type Profile = {
    _id: string,
    username: string,
    activeGame: string,
    games: string[],
}

export type Game = {
    _id: string,

    name: string,
    profile1: string,
    profile2: string,
    winner: string,
    startTime: string,
    profile1EndTime: string,
    profile2EndTime: string,
    profile1Path: string[],
    profile2Path: string[],
    startTrack: string,
    endTrack: string,

    createdAt: Date,
    updatedAt: Date,
}

export type Track = {
    _id: string,
    index: number,
    createdAt: Date,
    updatedAt: Date,
}

export type Song = {
    _id: string,
    
    index: string,
    name: string,
    artist: string,
    album: string,
    image: string,
    preview: string,
    popularity: number,
    danceability: number,
    energy: number,
    loudness: number,
    speechiness: number,
    acousticness: number,
    instrumentalness: number,
    liveness: number,
    tempo: number,
    valence: number,
    albumReleaseDate: string,

    createdAt: Date,
    updatedAt: Date,
}