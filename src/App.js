import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  const [home, setHomeScore] = useState(0);
  const [away, setAwayScore] = useState(0);
  const [timer, setTimer] = useState(45);

  const touchdown = (team) => {
    return team + 7;
  } 

  const fieldgoal = (team) => {
    return team + 3;
  }

  useEffect( ()=>{
    const clock = setTimeout(()=>{
      if (timer > 0 ) {
        setTimer(timer-1)
      } else {
          clearTimeout(clock)
        }
      }, 1000)
    }, [timer]
  )

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{home}</div>
          </div>
          <div className="timer">00:{timer}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{away}</div>
          </div>
        </div>
        <div className='middleRow'>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button className="homeButtons__touchdown" onClick={() => setHomeScore(touchdown(home))}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeScore(fieldgoal(home))}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setAwayScore(touchdown(away))}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAwayScore(fieldgoal(away))}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
