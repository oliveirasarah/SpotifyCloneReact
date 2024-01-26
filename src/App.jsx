import Card from "./components/Card/Card";
import DisclaimerPremium from "./components/DisclaimerPremium/DisclaimerPremium";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import CARDS_CONTENT from "./assets/cardsContent";
import "./App.scss";
import { useEffect, useState } from "react";

function App() {
  const [greeting, setGreeting] = useState("");

  function getDayPeriod() {
    let date = new Date();
    let hours = date.getHours();
    return hours;
  }

  useEffect(() => {
    const dayPeriod = () => {
      let hours = getDayPeriod();
      if (hours >= 12 && hours < 18) {
        setGreeting("Boa Tarde!");
      } else if (hours >= 18 && hours <= 23) {
        setGreeting("Boa Noite!");
      } else if (hours >= 0 && hours < 6) {
        setGreeting("Boa Madrugada!");
      } else {
        setGreeting("Bom Dia!");
      }
    };

    window.addEventListener("load", dayPeriod);
  });

  return (
    <>
      <Sidebar />
      <main className="main">
        <Header />
        <div className="playlist-result">
          <div id="result-playlists">
            <div className="playlist-result__header">
              <h1 id="greeting">{greeting}</h1>
              <h2 className="session">Navegar por todas as seções</h2>
            </div>

            <div className="offer">
              <div className="offer__list-items">
                {CARDS_CONTENT.map((el) => (
                  <Card {...el} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <DisclaimerPremium />
    </>
  );
}

export default App;
