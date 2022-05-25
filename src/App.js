import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/SharedPage/Header/Header';
import Footer from './Pages/SharedPage/Footer/Footer';
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
import MyOrder from './Pages/ForUser/MyOrder/MyOrder';
import AddAReview from './Pages/ForUser/AddAReview/AddAReview';
import MyProfile from './Pages/MyProfile/MyProfile';
import User from './Pages/User/User';
import RequireAdmin from './Pages/Login/RequireAuth/RequireAdmin';
import Payment from './Pages/Payment/Payment';
import ManageAllProducts from './Pages/Admin/ManageAllProducts/ManageAllProducts';
import ManageAllOrders from './Pages/Admin/ManageAllOrders/ManageAllOrders';
import AddAProduct from './Pages/Admin/AddAProduct/AddAProduct';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/myprotfolio' element={<MyProtfolio></MyProtfolio>}></Route>
        <Route path='/part/:partId' element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route path='myorder' element={<MyOrder></MyOrder>}></Route>
          <Route path='addreview' element={<AddAReview></AddAReview>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='users' element={<RequireAdmin>
            <User></User>
          </RequireAdmin>}></Route>
          <Route path='manageproduct' element={<RequireAdmin>
            <ManageAllProducts></ManageAllProducts>
          </RequireAdmin>}></Route>
          <Route path='manageorder' element={<RequireAdmin>
            <ManageAllOrders></ManageAllOrders>
          </RequireAdmin>}></Route>
          <Route path='addaproduct' element={<RequireAdmin>
            <AddAProduct></AddAProduct>
          </RequireAdmin>}></Route>
        </Route>
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
