import logo from './logo.svg';
import './App.css';
import RegistrationForm from './Components/RegistrationForm';

function App() {
  return (
    <div className="App">
      <h1 className='text-center' style={{color:"purple",marginTop:"20px"}}>Registration-Form</h1>
      <RegistrationForm/>
    </div>
  );
}

export default App;
