import React from "react";
import "./App.css";
import PostList from "./components/PostList";
import { BrowserRouter } from 'react-router-dom'

import { PostForm } from "./components/PostForm";
import ApplicationViews from "./components/ApplicationViews";
import { PostSearch } from "./components/PostSearch";
import Header from "./components/Header";


function App() {
 return(
  <div className="App">
  <BrowserRouter>
  <Header/>
  <ApplicationViews />
 
  </BrowserRouter>
  
  </div>
);
}

export default App;

//try again. 