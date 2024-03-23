
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {

  const [mode , setMode] = useState('dark');
  const [alert , setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })  // giving alert state var the value of this object
      setTimeout(() =>{
        setAlert(null);
      },1800);
    }

  const toggleMode = ()=>{
    console.log("SetMode Called : ",mode)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#453232'; // it changes the background color of webpage
      showAlert("Dark Mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled","success")
    }
  }
   return (

    /*
    jsx
    below html will be there in our website on browser
     below nav code is taken from bootstrap after adding bootstrap html and css links in index.html
     some has been made to bootstap code like :
     class -> className ; /> in hr and input tag like <hr /> ; href="#" -> href="/"
    */
   <>   
   
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}  />
    <div className="container my-3" >  
                                {/* my-3 gives 3 margin in y-direction */}
      {/* keeping textform in a div will give better look -> textbox will be in middle of page */}
      <TextForm showAlert={showAlert} title="Enter the text to Analyse" mode={mode} toggleMode={toggleMode} />
      {/* <About heading="About US"/> */}
    </div>
    <br/>
    
   </>
  ); 
}

export default App;


/*
studied from lec-2
first open a folder in vs code
open terminal , type npx create-react-app my-app

my-app named react folder with be formed 

in directory of my-app in terminal , type npm start    to rum react app in browser which run app.js file
*/
