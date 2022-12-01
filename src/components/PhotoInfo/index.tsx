import { Link } from 'react-router-dom';
import { AlbumPhoto } from '../../types/AlbumPhoto';

type Props = {
    data: AlbumPhoto
}
export const PhotoInfo = ({data}: Props) => {
    return(
        <Link to={`/photo/${data.id}`} className="photo">
            <img src={data.thumbnailUrl} alt={data.title} />
        </Link>

    );
}