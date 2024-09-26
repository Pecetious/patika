import React from "react";
import { useChat } from "../context/ChatContext";
import styles from "./styles.module.css";
import ChatItem from "./ChatItem";
import ScrollableFeed from "react-scrollable-feed"
function ChatList() {
  const { messages } = useChat();
  return (
    <div className={styles.chatlist}>
      <ScrollableFeed>
        {messages.map((item, key) => (
          <ChatItem item={item} key={key} />
        ))}
      </ScrollableFeed>
    </div>
  );
}

export default ChatList;
