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

    name: string,
    artist: string,
    albumName: string,
    albumArt: string,
    danceability: number,
    energy: number,
    key: number,
    loudness: number,
    mode: number,
    speechiness: number,
    acousticness: number,
    instrumentalness: number,
    liveness: number,
    valence: number,
    tempo: number,
    timeSignature: number,
    popularity: number,
    duration: number,

    createdAt: Date,
    updatedAt: Date,
}