import React from "react";
import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./Components/ChatFeed";
function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="e8593e71-ea51-4201-a8db-d5b3ba93c11d"
      userName="vivek koyani"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
