export default {
    EMPTY_GAME: {
        _id: '',

        name: '',
        profile1: '',
        profile2: '',
        winner: '',
        startTime: '',
        profile1EndTime: '',
        profile2EndTime: '',
        profile1Path: [],
        profile2Path: [],
        startTrack: '',
        endTrack: '',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    EMPTY_SONG: {
        _id: '',

        index: '',
        name: '',
        artist: '',
        album: '',
        image: '',
        preview: '',
        danceability: 0,
        energy: 0,
        loudness: 0,
        speechiness: 0,
        acousticness: 0,
        instrumentalness: 0,
        liveness: 0,
        valence: 0,
        tempo: 0,
        popularity: 0,
        albumReleaseDate: '',
        
        createdAt: new Date(),
        updatedAt: new Date
    },
    EMPTY_PROFILE: {
        _id: '',
        username: '',
        activeGame: '',
        games: [],
    },
    EMPTY_TRACK: {
        _id: '',
        index: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    EMPTY_GLOBAL_STATE: {
        profile_id: '',
    },
    EMPTY_RES: {
        status: 0,
        success: false,
        data: undefined,
        errorMessage: 'This is the initial response message',
    },

    HOSTED_AT: 'https://mhacks-18opcn8ba-ethan-mcintyres-projects.vercel.app',

    SERVER_URL: 'https://beck-ethan-mcintyres-projects.vercel.app',
    // SERVER_URL: 'http://localhost:4000',

    SPOTIFY_CONFIG: {
        clientId: "f7c02a3be86b4a47a0779eec1eac1281",
        clientSecret: "31f9ed5270b148edadd15b5d6efea510",
        redirectUri: 'http://localhost:3000/callback', // Replace with your redirect URI
        scope: 'user-read-currently-playing user-read-playback-state',
    }
} 