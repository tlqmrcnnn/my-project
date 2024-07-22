import { useState } from 'react';
import './Home.css';
import character from './assets/character.png'; // Karakter resmini import edin

function Home() {
  const [count, setCount] = useState(0);
  const [ghostPoints, setGhostPoints] = useState([]);

  const handleButtonClick = (event) => {
    // Sadece butonun kendi içinde tıklama kontrolü
    if (event.target.classList.contains('count-button') || event.target.classList.contains('character')) {
      setCount(count + 1);
      const rect = event.target.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const newGhostPoint = {
        id: Date.now(),
        value: "+1",
        x: x,
        y: y,
      };

      setGhostPoints([...ghostPoints, newGhostPoint]);

      setTimeout(() => {
        setGhostPoints((points) => points.filter((point) => point.id !== newGhostPoint.id));
      }, 1000); // 1 saniye sonra hayalet puan kaybolacak
    }
  };

  return (
    <div className="container">
      <h1>Home Page</h1>
      <div className="score-display">Score: {count}</div>
      <div className="card">
        <button className="count-button" onClick={handleButtonClick}>
          <img src={character} className="character" alt="Character" />
          {ghostPoints.map((point) => (
            <div
              key={point.id}
              className="ghost-point"
              style={{ left: point.x, top: point.y }}
            >
              {point.value}
            </div>
          ))}
        </button>
      </div>
    </div>
  );
}

export default Home;
