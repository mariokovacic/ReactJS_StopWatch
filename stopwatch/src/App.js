import './App.css';
import { useState } from 'react';

function App() {

  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [stop, startStop] = useState(true)
  const [interval, postaviInterval] = useState();


  let vrijemeMs = time.ms;
  let vrijemeS = time.s;
  let vrijemeM = time.m;
  let vrijemeSat = time.h;

  const start = () => {

    if (vrijemeM === 60) {

      vrijemeSat++
      vrijemeM = 0;

    }
    if (vrijemeS === 60) {

      vrijemeM++
      vrijemeS = 0;
    }
    if (vrijemeMs === 10) {


      vrijemeS++
      vrijemeMs = 0;

    }

    if (stop === true) {
      vrijemeMs++;


      return setTime({ ms: vrijemeMs, s: vrijemeS, m: vrijemeM, h: vrijemeSat })

    }

    if (stop === false) {

      Stop()

    }



  }

  const Stop = () => {


    startStop(false)

  }


  return (
    <div className="App">
      <h1>STOPWATCH</h1>
      <div className='display'>
        <div className='displayWindow'>{vrijemeSat}</div>
        <div className='displayWindow'>{vrijemeM}</div>
        <div className='displayWindow'>{vrijemeS}</div>
        <div className='displayWindow'>{vrijemeMs}</div>
      </div>
      <div className='buttons'>
        <button onClick={() =>

          postaviInterval(setInterval(start, 100))



        } className='button'>START</button>
        <button className='button' onClick={() => {
          Stop()
          postaviInterval(clearInterval(interval))
        }}>STOP</button>
        <button className='button' onClick={() => {

          setTime({ ms: 0, s: 0, m: 0, h: 0 })


        }}>RESET</button>
      </div>
    </div >
  );
}

export default App;
