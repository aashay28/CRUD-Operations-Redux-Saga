import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddEditUser from "./pages/AddEditUser";
import Userinfo from "./pages/Userinfo";
import About from "./pages/About";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <div className='text-center'>
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/addUser' element={<AddEditUser />} />
          <Route path='/editUser/:id' element={<AddEditUser />} />
          <Route path='/userInfo/:id' element={<Userinfo />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
