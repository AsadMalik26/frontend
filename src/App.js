import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { APIuser } from './Services/APIS';
import axios from 'axios';

//interceptor config
const successReq = (response) => {
  document.body.classList.add('loading-indicator');
  // const token = localStorage.getItem("token")
  // response.headers.Authorization = token;
  // console.log("SUCCESS response", response)
  return response;
}
const success = (response) => {
  document.body.classList.remove('loading-indicator');
  // const token = localStorage.getItem("token")
  // response.headers.Authorization = token;
  // console.log("SUCCESS response", response)
  return response;
}
const failed = (error) => {
  document.body.classList.remove('loading-indicator');
  // console.log("error response" + error);
  return Promise.reject(error);
}
// APIuser.interceptors.request.use(successReq, failed);
// axios.interceptors.request.use(successReq, failed);
// axios.interceptors.response.use(success, failed)
// APIuser.interceptors.response.use(success, failed)
function App() {
  useEffect(()=>{
    // throw new Error("Hello error")
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
