// useCommentState.js
import { useState, useEffect } from "react";

export default function useCommentState() {
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    const savedComment = localStorage.getItem('comment');
    if (savedComment) {
      setCommentText(savedComment);
    }
  }, []);

  const handleSelectFastAnswer = (text) => {
    setCommentText(text);
  };

  const handleInputChange = (event) => {
    setCommentText(event.target.value);
  };

  return { commentText, handleSelectFastAnswer, handleInputChange };
}
