import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

// #222831 -- Dark Grey
// #393e46 -- Carbon
// #29a19c -- sea blue
// #a3f7bf -- light jade

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
