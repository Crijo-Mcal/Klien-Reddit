import { useState } from "react";
import Lanes from "./components/Lanes.jsx";
import Popup from "./components/Popup.jsx";
import ButtonAdd from "./components/ButtonAdd.jsx";
import "./App.css";

function Main({ setPopup }) {
  return (
    <>
      <main className="relative flex justify-center gap-4 w-full mt-8 ">
        {/* Lanes / subreddit list */}
        <Lanes />
        {/* Add subreddit button */}
        <ButtonAdd setPopup={setPopup} />
      </main>
    </>
  );
}

export default function App() {
  const [popup, setPopup] = useState(false);

  function handlePopup() {
    setPopup((prev) => !prev);
  }

  async function getDataReddit(subreddit) {
    try {
      /* can´t continue the project becouse, this link has been blocked by CORS policy: No 'Access-Control-Allow-Origin'  */
      const redditUrl = `https://www.reddit.com/r/$javascript.json
`;
      let response = await fetch(redditUrl);
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <header className="bg-[#ff4500] text-white w-full text-center text-5xl p-4">
        <h1>Reddit Feed Viewer</h1>
      </header>

      <Main setPopup={setPopup} />

      <Popup
        popup={popup}
        handlePopup={handlePopup}
        getDataReddit={getDataReddit}
      />
    </>
  );
}
