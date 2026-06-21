import axios from 'axios';

export const getMyProfile = async (accessToken: string) => {
  try {
    const response = await axios.get('https://dummyjson.com/auth/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
};
