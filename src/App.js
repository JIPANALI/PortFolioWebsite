

import React, { useRef } from "react";
import "./App.css";
import Header from "./component/Header";
import HomePage from "./page/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactPage from "./page/ContactPage";

function App() {
  const scrollToSection = useRef();

  return (
    <div className="appFront">
      <Router>
        <Header scrollToSection={(section) => scrollToSection.current(section)} />
        <Routes>
          <Route
            path="/"
            element={<HomePage scrollToSection={scrollToSection} />}
          />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// import './App.css';
// import Header from './component/Header';
// import ContactPage from './page/ContactPage';
// import HomePage from './page/HomePage';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// function App() {

//   return (
//     <div className='appFront'>
//       <Router>
//         <Header />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
        
//         </Routes>
//       </Router>

//     </div>
//   );
// }

// export default App;
