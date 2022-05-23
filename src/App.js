import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/SharedPage/Header/Header';
import Footer from './Pages/SharedPage/Footer/Footer';
import AllReview from './Pages/AllReview/AllReview';
import AllParts from './Pages/AllParts/AllParts';
import Purchase from './Pages/Purchase/Purchase';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import NotFound from './Pages/NotFound/NotFound';
import MyProtfolio from './Pages/SharedPage/MyProtfolio/MyProtfolio';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/allreview' element={<AllReview></AllReview>}></Route>
        <Route path='/myprotfolio' element={<MyProtfolio></MyProtfolio>}></Route>
        <Route path='/part/:partId' element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}></Route>
        <Route path='/allparts' element={
          <RequireAuth>
            <AllParts></AllParts>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
