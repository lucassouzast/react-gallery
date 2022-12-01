import * as C from '../AppStyles';
import * as B from './AppStyles';

import {AlbumPhoto} from '../types/AlbumPhoto';
import {AlbumType} from '../types/Album';

import {albumApi} from '../api'

import { PhotoInfo } from '../components/PhotoInfo';

import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom';

export const Album = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [albumPhotos, setAlbumPhotos] = useState<AlbumPhoto[]>([])
    const [albumInfo, setAlbumInfo] = useState<AlbumType>({id: 0, title: '', userId: 0});

    useEffect(()=> {
        if (params.slug?.length) {
            LoadAlbumsPhotos(params.slug);
        }
    },[])
    
    const LoadAlbumsPhotos = async (slug: string) => {
        const json = await albumApi.getPhotos(slug);
        setAlbumPhotos(json);
    }

    const handleHomeButton = () => {
        navigate ('/');
    }

    return (
        <B.AlbumPage>
            <h1>{albumInfo.title}</h1>
            <button onClick={handleHomeButton}>Voltar</button>
            <div>
                {albumPhotos.map((item, index) => (
                    <div>
                        <PhotoInfo
                            key={index}
                            data={item}
                        />
                    </div>
                ))}

                
                
            </div>
        </B.AlbumPage>
    )
}