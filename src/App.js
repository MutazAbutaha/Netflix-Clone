
import Home from './components/Home'
import FavList from './components/FavList';
import NavBar from './components/Navbar';
import {Routes,Route} from  'react-router-dom';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favList' element={<FavList />}/>
      </Routes>
    </>
  );
}

export default App;

