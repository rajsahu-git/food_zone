import { useState} from 'react';
import './App.css';
// import Body from './components/body';
import Header from './components/Hearder';
import Footer from './components/footer';
import { Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  const [user,setUser]=useState({
    name:"Raj Sahu",
    email:"Rajkumarsahu8824@gmail.com"
  })

  // user = useContext(UserContext)

  console.log(store)
  return (
    <div className="App">
      <Provider store={store}>
      <UserContext.Provider value={{user:user, setUser:setUser}}>
      <Header />
      <Outlet />
      </UserContext.Provider>
      <Footer />
    </ Provider>
    </div>
  );
}



export default App;
