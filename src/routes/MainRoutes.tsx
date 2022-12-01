import {useRoutes} from 'react-router-dom'

import {Home} from '../pages/Home';
import {Album} from '../pages/Album';
import {Photo} from '../pages/Photo';

export const MainRoutes = () => {
    return useRoutes ([
        {path: '/', element: <Home />},
        {path: '/album/:slug', element: <Album/>},
        {path: '/photo/:slug', element: <Photo/> }
    ])
}