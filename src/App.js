import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/SharedPage/Header/Header';
import Footer from './Pages/SharedPage/Footer/Footer';
import AllReview from './Pages/AllReview/AllReview';
import AllParts from './Pages/AllParts/AllParts';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/allreview' element={<AllReview></AllReview>}></Route>
        <Route path='/part/:partId' element={<Purchase></Purchase>}></Route>
        <Route path='/allparts' element={<AllParts></AllParts>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
