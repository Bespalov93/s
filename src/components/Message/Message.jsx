import React, { useState, useEffect } from 'react';

const Message = ({ text, onClose }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 10000); // Закрытие сообщения через 10 секунд

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div style={{ position: 'fixed', top: '10px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'white', padding: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', borderRadius: '5px', zIndex: '9999' }}>
      <p>{text}</p>
    </div>
  );
};

const MessageContainer = () => {
  const [message, setMessage] = useState(null);

  const showMessage = (text) => {
    setMessage(text);
  };

  const hideMessage = () => {
    setMessage(null);
  };

  return (
    <>
      {message && <Message text={message} onClose={hideMessage} />}
      <button onClick={() => showMessage('Пример сообщения')}>Показать сообщение</button>
    </>
  );
};

export default MessageContainer;
