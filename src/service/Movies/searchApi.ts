import API from '../api';

export const searchMovies = async (query: string, page: number = 1) => {
    try {
        const response = await API.get(`search/movie?query=${encodeURIComponent(query)}&page=${page}&language=en-US`);
        return response.data;
    } catch (error) {
        console.error('Error searching movies:', error);
        throw error;
    }
};
