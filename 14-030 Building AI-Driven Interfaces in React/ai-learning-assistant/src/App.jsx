import React, { useState } from "react";
import RecommendationPanel from "./components/RecommendationPanel";


function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePromptSubmit = async () => {
    if (!prompt.trim()) {
      setError(
        "Please enter a question before submitting."
      );
      return;
    }

    setLoading(true);
    setError(null);
    setResponse("");

    try {
      // Add a specific model selection parameter to the end of the template string
      const apiUrl = 
      `https://text.pollinations.ai/${encodeURIComponent(prompt)}`;
     

      const result = await fetch(apiUrl);

      if (!result.ok) {
        throw new Error(
          "The API request was unsuccessful."
        );
      }

      const data = await result.text();

      setResponse(data);

      setHistory((previousHistory) => [
        ...previousHistory,
        {
          question: prompt,
          answer: data
        }
      ]);

      setPrompt("");
    } catch (error) {
      setError(
        "Unable to generate a response. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="app">
      <section className="assistant-panel">
        <h1>AI Learning Assistant</h1>

        <p>
          Ask a learning-related question about React,
          JavaScript, or AI-powered interfaces.
        </p>

        <textarea
          value={prompt}
          onChange={(event) =>
            setPrompt(event.target.value)
          }
          placeholder="Example: How does React state help with AI interfaces?"
        />

        <button
          onClick={handlePromptSubmit}
          disabled={loading}
        >
          {loading ? "Generating..." : "Ask AI"}
        </button>

        {loading && (
          <p className="loading-message">
            Generating response...
          </p>
        )}

        {error && (
          <p className="error-message">
            {error}
          </p>
        )}

        {response && (
          <section className="response-panel">
            <h2>AI Response</h2>
            <p>{response}</p>
          </section>
        )}
      </section>

      <section className="history-panel">
        <h2>Conversation History</h2>

        {history.length === 0 ? (
          <p>No questions have been asked yet.</p>
        ) : (
          history.map((item, index) => (
            <div
              className="history-item"
              key={index}
            >
              <h3>Question</h3>
              <p>{item.question}</p>

              <h3>Response</h3>
              <p>{item.answer}</p>
            </div>
          ))
        )}
      </section>

      <RecommendationPanel />
    </main>
  );
}

export default App;