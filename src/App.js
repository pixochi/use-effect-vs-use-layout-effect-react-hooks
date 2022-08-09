import React from "react";

import MessageListWithUseEffect from "./components/MessageListWithUseEffect";
import MessageListWithUseLayoutEffect from "./components/MessageListWithUseLayoutEffect";
import useMessages from "./hooks/useMessages";
import "./App.css";

function App() {
  const { messages, addMessage } = useMessages();

  return (
    <div className="App">
      <button onClick={addMessage} className="btn">
        Add message
      </button>
      <div className="message-lists-container">
        <MessageListWithUseLayoutEffect messages={messages} />
        <MessageListWithUseEffect messages={messages} />
      </div>
    </div>
  );
}

export default App;
