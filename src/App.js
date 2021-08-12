import {Provider} from "react-redux";
import {store} from "./store";
import Game from "./components/Game/Game";

import './App.scss';

function App() {

  return (
      <Provider store={store}>
          <div className="App">
              <Game />
          </div>
      </Provider>
  );
}

export default App;
