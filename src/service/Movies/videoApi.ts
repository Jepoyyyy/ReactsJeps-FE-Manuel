import API from '../api';

export const getMovieVideos = async (movieId: number) => {
    try {
        const response = await API.get(`movie/${movieId}/videos`);
        return response.data;
    } catch (error) {
        console.error('Error fetching movie videos:', error);
        throw error;
    }
};
