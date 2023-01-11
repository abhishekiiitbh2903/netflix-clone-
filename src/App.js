import './App.scss';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import {ReactNavbar} from "overlay-navbar"
import logo from "./logo.png"
import { ImSearch } from "react-icons/im"
function App() {
  return  <Router>
 <ReactNavbar
burgerColorHover="crimson"
burgerPosition="fixed"
burgerColor="white"
logo={logo}
logoWidth="10vmax"
logoHoverColor="crimson"
nav2justifyContent="flex-end"
nav3justifyContent="flex-start"
nav1Transition="0.6"
link1Text="Recently-Watched"
link2Text="Movies"
link3Text="TV Shows"
link4Text="Your favourites"
link1Color="white"
link1Url="/recent"
link2Url="/movies"
link3Url="/tv"
link4Url="/mylist"
link1Size="1.5vmax"
link1Family="cursive"
link1Margin="1.5vmax"
link2Margin="0"
link3Margin="0"
link4Margin="1vmax"
link1ColorHover="crimson"
searchIcon={true}
SearchIconElement={ImSearch}
searchIconColor="white"
searchIconSize="2vmax"
searchIconColorHover="crimson"

 />
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/recent" element={<Home/>}/>
  <Route path="/movies" element={<Home/>}/>
  <Route path="/tv" element={<Home/>}/>
  <Route path="/mylist" element={<Home/>}/>
  <Route path="/Search" element={<Home/>}/>
  
  
  </Routes>
  <div className='footer'
  style={{
    height:"100px",
    backgroundColor:"rgb(20,20,20)",
    width:"100vw",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    color:"white",
    fontWeight:"200",
  }}>All Rights Reserved &copy; ABHISHEK SINGH</div>
    </Router>
}

export default App;
