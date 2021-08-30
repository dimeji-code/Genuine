import logo from './logo.svg';
import './App.css';
import Main from "./Main"
import 'bootstrap/dist/css/bootstrap.min.css';
import  Fontawesomeicon  from './components/Fontawesomicons'
import { Provider } from 'react-redux'
import {createStore, combineReducers, applyMiddleware} from "redux"
import selectedOptionReducer from "./store/reducers/selectedOptions"

function App() {

  const rootReducer = combineReducers({
    selectedOption:  selectedOptionReducer,
  })
  const store = createStore(rootReducer)
  return (
    <Provider store={store}>
      <div className="App">
          <Main/>
      </div>
    </Provider>
  );
}

export default App;
