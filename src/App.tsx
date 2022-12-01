import * as C from './AppStyles';
import {MainRoutes} from './routes/MainRoutes';

function App() {

  return (
    <C.Container>
      <h1>Galeria de Albums</h1>
      <hr />
      <MainRoutes/>
      <footer>
        <hr />
      </footer>
    </C.Container>
    )
}

export default App;
