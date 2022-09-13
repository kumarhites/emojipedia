import { useState } from 'react'
import './App.css'

// social icons
import github from "./assets/github.png"
import linkedin from "./assets/linkedin.png"
import twitter from "./assets/twitter.png"
import portfolio from "./assets/business.png"

const emojiDictionary = {
  "😴": "Sleeping",
  "😊": "Smiling",
  "😳": "Disbelief",
  "😔": "Sad",
  "🥡": "Takeout box",
  "😒": "Unamused",
  "❤️": "Love",
  "😑": "Annoyance",
  "😕": "Confused",
  "😁": "Beaming Face with Smiling Eyes",
  "🤣": "Rolling on the Floor Laughing",
  "🦁": "Lion",
  "🐪": "Camel",
  "💪": "Festivus",
  "😞": "Disappointed",
  "🤩": "Star-Struck",
  "😉": "Winking",
  "🤗": "Hugging",
  "👍": "Thumbs Up",
  "😟": "Worried",
};
const emojis = Object.keys(emojiDictionary);

function App() {
  const [output, setOutput] = useState("")
  const [error, setError] = useState("")

  function onInputChangeHandler(e){
    const emoji = e.target.value;
    if(emoji === ""){
      setOutput("");
      setError("")
      return
    }
    const emojiOutput = emojiDictionary[emoji];
    if(emojiOutput) {
      setOutput(emojiOutput)
    }else{
      setOutput()
      setError("We don't have this emoji in our database! 🙅‍♂️");
    }
  }
 function emojiClickHandler(e) {
    const outputText = emojiDictionary[e.target.innerText];
    setOutput(outputText)
 }
  return (
    <>
      <div className="App">
        <h1>EmojiPedia 📚</h1>
        <input type="text" onChange={(e) => onInputChangeHandler(e)} placeholder="Enter an emoji '🤗
'"/>
      </div>
      {!output && !error && <p>Output Will be displayed here</p>}
      {!output && error && <p className="error">{error}</p>}
      {output && <p className="output">{output}</p>}
      <div className='container'>
        <ul className="flex flex-wrap">
            {emojis.map((emoji, index) => {
              if(index == 6){
                return <li onClick={emojiClickHandler} key={index} className="emoji red">{emoji}</li>
              }else{
                return <li onClick={emojiClickHandler} key={index} className="emoji">{emoji}</li>
              }
            })}
        </ul>
      </div>
      <footer>
        <div class="socials">
          <h3 id="foot-heading">Socials</h3>
          <p>You can connect with me here</p>
          <ul>
              <li>
                <a href="https://www.linkedin.com/in/hitesh-kumar09/" target="_blank"><img src={linkedin} alt="linkedin icon"/></a>
              </li>
              <li>
                <a href="https://twitter.com/hitesh091895" target="_blank"><img src={twitter} alt="twitter icon"/></a>
              </li>
              <li>
                <a href="https://github.com/kumarhites" target="_blank"><img src={github} alt="github icon"/></a>
              </li>
              <li>
                <a href="https://kumarhitesh.netlify.app/" target="_blank"><img src={portfolio} alt="portfolio"/></a>
              </li>
            </ul>
        </div>
      </footer>
    </>
  )
}

export default App
