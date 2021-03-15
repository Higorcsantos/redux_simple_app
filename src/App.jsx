import React from 'react';
import {Provider} from 'react-redux'; // onde será passada todas as informações da store

import Sidebar from './components/Sidebar';
import Video from './components/Videos';

import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Sidebar/>
        <Video/>
      </Provider>
      
    </div>
  );
}

export default App;
