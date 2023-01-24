import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import ResetPassword from './pages/ResetPassword';
import LoginPage from './pages/Login';
import NewPassword from './pages/NewPassword';

function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 -mt-16">
    <div className="max-w-md w-full space-y-8">
     <HashRouter hashType="hashbang">
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/reset" element={<ResetPassword/>} />
            <Route path="/newpassword" element={<NewPassword/>} />
        </Routes>
      </HashRouter>
    </div>
  </div>
  );
}

export default App;

















