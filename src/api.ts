import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const albumApi = {
    getAlbums: async () => {
        let response = await axiosInstance.get('/albums/');
        return response.data;
    },

    getAlbumInfo: async (slug: string) => {
        let response = await axiosInstance.get(`/albums/${slug}` );
        return response.data;
    },
    
    getPhotos: async (slug: string) => {
        let response = await axiosInstance.get(`/albums/${slug}/photos` );
        return response.data;
    },

    getPhotoInfo: async (slug: string) => {
        let response = await axiosInstance.get(`/photos/${slug}`);
        return response.data;
    }
}
