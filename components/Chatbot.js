"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Chatbot.module.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Função para rolar para a última mensagem
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = { text: inputValue, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://flask-chatbot-webby.vercel.app/api/webby_chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: inputValue }),
        }
      );

      if (!response.ok) {
        throw new Error("Erro na resposta da API");
      }

      const data = await response.json();
      const botMessage = { text: data.response, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      const errorMessage = {
        text: "Desculpe, ocorreu um erro ao processar sua mensagem.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  return (
    <div className={styles.chatbotContainer}>
      {isOpen && (
        <div className={styles.chatbotContainer}>
          {isOpen && (
            <div className={styles.chatWindow}>
              <div className={styles.chatHeader}>
                <h3>Webby Assistente</h3>
                <button
                  className={styles.closeButton}
                  onClick={() => setIsOpen(false)}
                >
                  &times;
                </button>
              </div>
              <div className={styles.messagesContainer}>
                {messages.length === 0 ? (
                  <div className={styles.welcomeMessage}>
                    <p>
                      Olá! Sou o Elliot, o hacker. Como posso te ajudar hoje?
                    </p>
                  </div>
                ) : (
                  messages.map((message, index) => (
                    <div
                      key={index}
                      className={`${styles.message} ${
                        message.sender === "user"
                          ? styles.userMessage
                          : styles.botMessage
                      }`}
                    >
                      {message.text}
                    </div>
                  ))
                )}
                {isLoading && (
                  <div className={styles.message}>
                    <div className={styles.typingIndicator}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              <div className={styles.inputArea}>
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua mensagem..."
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputValue.trim()}
                >
                  Enviar
                </button>
              </div>
            </div>
          )}
          <button
            className={styles.chatbotButton}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image
              src="/hacker.png"
              alt="Chatbot"
              width={60}
              height={60}
              className={styles.chatbotIcon}
            />
          </button>
        </div>
      )}

      {/* Adicione esta div antes do botão do chatbot */}
      {!isOpen && (
        <div className={styles.chatbotCallout}>Tem alguma dúvida?</div>
      )}

      <button
        className={styles.chatbotButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src="/hacker.png"
          alt="Chatbot"
          width={60}
          height={60}
          className={styles.chatbotIcon}
        />
      </button>
    </div>
  );
};

export default Chatbot;
