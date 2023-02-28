import Header from "./components/Header/Header";
import Player from "./components/Player/Player";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Player src="https://icilondelawebradio.ice.infomaniak.ch/icilondelawebradio-128.mp3" />
      <Footer />
    </div>
  );
}

export default App;
