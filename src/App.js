//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {Routes, Route} from 'react-router-dom';

let name = "Rahul Mandal"
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App(user) {
  const [mode, setMode] = useState("dark")
  const [alert, setAlert] = useState(null)

  const showAlert =(msg, type)=>{
    setAlert({
    msg: msg,
    type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000)
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title="Textutils- Dark mode"
      setInterval(()=>{
        document.title="Textutils- Amazing mode"
      },2000);
      setInterval(()=>{
        document.title="Install Textutils- now"
      },1500);
      
        }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled", "success")
      document.title="Textutils- light mode"
    }
  }
  return (
    
    <>
    
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className='container'>
      <h1> hello {name}</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis modi rem explicabo voluptatum quae! Laborum quam corporis quis magnam nemo, deleniti tempore quae ex! Eveniet iusto mollitia eligendi inventore aliquam?
      </p>
    </div>
     <div className="blank">Lovely</div>  
    <Navbar title="TextUtils" about="aboutText" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    
    {/* <Router> */}
    {/* <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/> */}
    {/* <About />
    <TextForm heading = "Enter text to Analyze" mode={mode} showAlert={showAlert}/> */}
    <div className='container my-3'>
      <Routes>
            <Route path='/about' element={<About />} >
              
            </Route>
            <Route path="/" element={<TextForm heading = "Enter text to Analyze" mode={mode} showAlert={showAlert}/>} >
              
            </Route>
      </Routes>
    </div> 
        {/* </Router> */}
    
    
   

    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
    </>
    

      
  );
}


export default App;
       
// // <div className="App">
    // //   Hello World
    //div.    (config javascript in settings search amment language add)
    // lorem ipsum
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    //   // <Navbar></Navbar>
    //   // {/* <Navbar title="TextUtils" about="About" /> */}
    //   // <TextForm />
    // // </div>


    // function formatName(user) {
    //   return user.firstName + ' ' + user.lastName;
    // }
    
    // const user = {
    //   firstName: 'Harpe----------------r',
    //   lastName: 'Perez'
    // };
    
    // <h1>
    //     Hello, {formatName(user)}!
    //   </h1>
    // const element = (
    //   <h1>
    //     Hello, {formatName(user)}!
    //   </h1>
    // );