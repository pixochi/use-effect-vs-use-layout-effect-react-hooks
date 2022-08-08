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
      <div style={{ display: "flex" }}>
        <MessageListWithUseLayoutEffect messages={messages} />
        <MessageListWithUseEffect messages={messages} />
      </div>
    </div>
  );
}

export default App;
