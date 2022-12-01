import { useEffect, useState } from 'react';
import {albumApi} from '../api'
import { AlbumPhoto } from '../types/AlbumPhoto';
import {useParams, useNavigate} from 'react-router-dom'
import * as C from '../AppStyles'

export const Photo = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [loadPhoto, setLoadPhoto] = useState<AlbumPhoto>({albumId: 0, id:0, title:'', thumbnailUrl:'', url: '' });
    
    useEffect(()=> {
        if (params.slug?.length) {
            PhotoLoad(params.slug);
        }
    })

    const PhotoLoad = async (slug: string) => {
        let json = await albumApi.getPhotoInfo(slug);
        setLoadPhoto(json)

    }

    const handleHomeButton = () => {
        navigate (-1);
    }

    return(
        <C.PhotoSection>
            <C.ButtonPag onClick={handleHomeButton}>Voltar</C.ButtonPag>
             <p> {loadPhoto.title} </p>
            <img src={loadPhoto.url} alt="" />
        </C.PhotoSection>
    )
}