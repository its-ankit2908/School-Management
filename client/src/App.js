import {useEffect} from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {addUserName} from './store/userSlice';

function App() {

  const user = useSelector((state)=>state.user);
  const dispatch = useDispatch();

  useEffect(() => {

    console.log("use effect app.js");
    dispatch(addUserName("Ankit Patel"));

    
  },[dispatch, user.name]);
  



  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello World</h2>
        <h3>{user.name}</h3>
      </header>
    </div>
  );
}

export default App;
