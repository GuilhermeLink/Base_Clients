import Routes from './routes';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import {LoginProvider} from './context/loginContext';
import RegisterProvider from './context/registerContext';

function App() {

  return (
  <>
    <ToastContainer autoClose={2000} />
    <RegisterProvider>         
      <LoginProvider>    
          <Routes />       
      </LoginProvider>
    </RegisterProvider>
  </>
  );
}

export default App;
