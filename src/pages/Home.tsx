import {Link, useNavigate, useParams} from 'react-router-dom';
import {AlbumType} from '../types/Album';
import {useState, useEffect} from 'react'
import {albumApi} from '../api'
import { AlbumInfo } from '../components/AlbumInfo';

export const Home = () => {
    const [album, setAlbum] = useState<AlbumType[]>([])

    useEffect(()=> {
        LoadAlbums()
    },[])
    
    const LoadAlbums = async () => {
        let json = await albumApi.getAlbums();
        setAlbum(json);
    }

    return (
        <div>
            
            <p>Numero total de albums: {album.length}</p> 
            {album.map((item, index) => (
                <AlbumInfo
                    key={index}
                    id={item.id}
                    title={item.title} 
                />
            ))}

        </div>
    )
}



