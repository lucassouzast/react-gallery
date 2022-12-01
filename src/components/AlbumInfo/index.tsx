import { Link } from 'react-router-dom';
import './styles.css';

type Props = {
    id: number;
    title: string;
}

export const AlbumInfo = ({id, title}: Props) => {
    return(
        <Link to= {`album/${id}`} id="album">
            {title}
        </Link>

    )

}