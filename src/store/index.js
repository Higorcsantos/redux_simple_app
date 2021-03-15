import {createStore} from 'redux';
import rootReducer from './reducers';
//Criar uma função para indicar como o estado será inicializado na aplicação

const store = createStore(rootReducer);

export default store;