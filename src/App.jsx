import { useState } from 'react'
import './App.css'

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
    const outerText = emojiDictionary[e.target.outerText];
    setOutput(outerText)
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
    </>
  )
}

export default App
