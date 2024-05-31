import Dashboard from "./Pages/Dashboard";
import Admin from "./Pages/Admin";
import Carabelanja from "./Pages/Carabelanja";
import Join from "./Pages/Join";
import Rekrut from "./Pages/Rekrut";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Adminwebsite from "./Pages/Adminwebsite";
import Financialofficer from "./Pages/Financialofficer";
import Adminmedsos from "./Pages/Adminmedsos";

const App = () => {
  return (
  <BrowserRouter>
     <Routes>
      <Route path="/" element = {<Dashboard/>}/>
      <Route path="Carabelanja" element = {<Carabelanja/>} />
      <Route path="Owner" element = {<Admin/>} />
      <Route path="Join" element = {<Join/>} />
      <Route path="Recruit" element = {<Rekrut/>} />
      <Route path="Adminwebsite" element = {<Adminwebsite/>} />
      <Route path="Financial" element = {<Financialofficer/>} />
      <Route path="Adminmedsos" element = {<Adminmedsos/>}/>
     </Routes>
  </BrowserRouter>
  )
}

export default App;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

