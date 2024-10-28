 
import './App.css';
import Home from './Home';
import { store } from './Store';
import { Provider } from 'react-redux';
 


function App() {
  return (
     <Provider store={store}>
      <Home/>
     </Provider>
  );
}

export default App;
