import Login from "./Main-Components/Login";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import ResetPassword from "./Main-Components/ResetPassword";
import SignUp from "./Main-Components/SignUp";
import LoadingPage from "./Main-Components/LoadingPage";
import RightEllipseImage from "./components/RightEllipseImage";
import LeftEllipseImage from "./components/LeftEllipseImage";
import Pricing from "./Main-Components/Pricing";
import Payment from "./Main-Components/Payment"
import PaymentDone from "./Main-Components/PaymentDone";

function App() {
  return (
   
  <>
  <BrowserRouter>
    <RightEllipseImage/>
    <LeftEllipseImage/> 
    <Routes>

      <Route path="/" element={<LoadingPage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/payment-done" element={<PaymentDone/>} />
    </Routes>
  </BrowserRouter>
   
  </>
    
  );
}

export default App;
