// shared components
import Header from "./web_pages/Navigation";
import Footer from "./web_pages/Footer";
import Home from "./web_pages/Home";
import About_us from "./web_pages/AboutUs";
import Contact from "./web_pages/Contact";
import Services from "./web_pages/Services";
import NewsUpdates from "./web_pages/NewsUpdates";

// dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useContext, useState } from "react"; // for sharing state between components
// global Context (like a global or session var container)
export const CounterContext = createContext();
function App() {
  // set state variable for a session click count
  const [sessionCounter, setSessionCounter] = useState(0);
  const handleIncrement = () => setSessionCounter(sessionCounter + 1);  
  return (
    <div>
      <CounterContext.Provider value={{ sessionCounter, handleIncrement }}>
        <Header username='Dharmang' />
        <main>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home username='Dharmang' displayName='Dharmang' />} />
              <Route path="/about" element={<About_us />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/news_update" element={<NewsUpdates />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </BrowserRouter>
        </main>
        <Footer />
      </CounterContext.Provider>
    </div>
  );
}
export default App;
