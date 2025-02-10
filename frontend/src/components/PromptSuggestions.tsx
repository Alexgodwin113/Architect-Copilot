import React, { useState } from "react";
import styles from "./PromptSuggestions.module.css"; // Ensure this file exists

interface PromptSuggestionsProps {
  onPromptClick: (prompt: string) => void;
}

const PromptSuggestions: React.FC<PromptSuggestionsProps> = ({ onPromptClick }) => {
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);

  const examplePrompts = [
    "Give me an overview about TechSphere",
    "Which applications currently have the highest amount of tech debt?",
    "How can I transform this application to meet my business standards?",
    "What needs to change to meet my company's naming conventions?",
  ];

  const handlePromptClick = (prompt: string) => {
    setSelectedPrompt(prompt);  // Highlight selected prompt
    onPromptClick(prompt);
  };

  return (
    <div className={styles.promptContainer}>
      <h3 className={styles.promptTitle}>Example Prompts</h3>
      <div className={styles.promptList}>
        {examplePrompts.map((prompt, index) => (
          <button 
            key={index} 
            className={`${styles.promptButton} ${selectedPrompt === prompt ? styles.activePrompt : ""}`} 
            onClick={() => handlePromptClick(prompt)}
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PromptSuggestions;
