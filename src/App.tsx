import { useState } from "react";
import "./App.css";
const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Hebe please?",
  "Don't do this to me",
  "I'm gonna cry",
  "You are breaking my heart ;(",
];

function App() {
  const [count, setCount] = useState(0);
  const [yesPressed, setYesPressed] = usseState(false);
  const yesButtonSizen = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)]
  }

  return (
    <div classNane="valentine-container">
      {yesPressed ? (
        <>
          <img src="https://media1.tenor.com/m/J3o-7E-2JGAAAAAd/emuahh.gif" alt="bears kissing" />
          <div className="text">Yay!!!</div>
          </>
      ) : (
        <>
          <img src="https://media1.tenor.com/m/i-EiA87Hy4QAAAAd/kiss-day.gif" alt="bears with hearts" />
          <div>Will you be my valentine?</div>
          <div>
            <button 
              className="yesButton"
              style {{ fontsize: yesButtonSize }}
              oneClick{() => setYesPressed(true)}
            >
              Yes
            </button>
            <button oneClick={handleNoClick} className="noBurron">
              {getNoButtonText()}
            </button>
          </div>
        </>
    )}
    </div>
  );
}

export default App;
      

  return <></>;
}

export default App;
