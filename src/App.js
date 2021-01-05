import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling Face with Smiling Eyes",
  "😂": "Face with Tears of Joy",
  "🤑": "Money-Mouth Face",
  "🤗": "Hugging Face",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "🙄": "Face with Rolling Eyes",
  "🥺": "Pleading Face",
  "😪": "Sleepy Face",
  "❤️": "love",
  "🎉": "Party Popper",
  "✨": "Sparkles",
  "🌾": "Sheaf of Rice",
  "🥰": "Smiling Face with Hearts",
  "😷": "Face with Medical Mask",
  "🤒": "Face with Thermometer",
  "🥳": "Partying Face",
  "🤠": "Cowboy Hat Face",
  "🙏": "Namaste",
  "👌": "Perfect",
  "👍": "Like"
};

var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler() {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    console.log(meaning);

    if (meaning == undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Emoji Interpretor</h1>
      <input onChange={emojiInputHandler} />
      <h2> {meaning} </h2>
      {/* Actual output set by REact using useState */}
      <h3> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
