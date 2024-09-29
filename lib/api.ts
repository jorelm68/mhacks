// This is where I will define the routes

import axios from 'axios'
import { Attribute, Profile, Res } from './types'
import constants from './constants';

async function handleRequest(route: string, type: string, data?: any): Promise<Res> {
    const response: Res = constants.EMPTY_RES;

    try {

        const formData = new FormData()

        if (data) {
            for (const key in data) {
                formData.append(key, data[key])
            }
        }

        const headers: any = {}
        if (data) {
            headers['Content-Type'] = 'multipart/form-data'
        }

        let serverResponse = null;
        if (type === 'POST') {
            serverResponse = await axios.post(`${constants.SERVER_URL}/${route}`, formData, {
                responseType: 'json',
                headers,
            });
        }

        if (!serverResponse) {
            throw new Error('No response from the server');
        }
        if (serverResponse.status !== 200) {
            throw new Error(serverResponse.data.errorMessage);
        }

        response.data = serverResponse.data;

        response.status = 200;
        response.success = true;
        response.errorMessage = '';
    } catch (error: any) {
        response.status = error.response.status;
        response.success = false;
        response.errorMessage = error?.response?.data?.errorMessage || error?.message || 'An error occured during the API request';

        console.error(error);
    }

    return response;
}

export default {
    profile: {
        authenticate: async (username: string): Promise<Res> => await handleRequest('api/profile/authenticate', 'POST', { username }),
        read: async (profile_id: string): Promise<Res> => await handleRequest('api/profile/read', 'POST', { profile_id }),
        factoryReset: async (): Promise<Res> => await handleRequest('api/profile/factoryReset', 'POST', {}),
    },
    game: {
        create: async (name: string, profile: string): Promise<Res> => await handleRequest('api/game/create', 'POST', { name, profile }),
        read: async (game_id: string): Promise<Res> => await handleRequest('api/game/read', 'POST', { game_id }),
        remove: async (game_id: string): Promise<Res> => await handleRequest('api/game/remove', 'POST', { game_id }),
        move: async (game_id: string, profile_id: string, moveName: Attribute, moveValue: number): Promise<Res> => await handleRequest('api/game/move', 'POST', { game_id, profile_id, moveName, moveValue }),
    },
    track: {
        read: async (track_id: string): Promise<Res> => await handleRequest('api/track/read', 'POST', { track_id }),
        create: async (track_id: string, index: number): Promise<Res> => await handleRequest('api/track/create', 'POST', { track_id, index }),
        factoryReset: async (): Promise<Res> => await handleRequest('api/track/factoryReset', 'POST', {}),
    },
    spotify: {
        getTrack: async (track_id: string, access_token: string): Promise<Res> => await handleRequest('api/spotify/getTrack', 'POST', { track_id, access_token }),
    }
}