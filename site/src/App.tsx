import React, { useState, ChangeEventHandler } from 'react';

export default function App() {
  const [cookie, setCookie] = useState('');

  const handleCookieInputChange: ChangeEventHandler<HTMLInputElement> = event => setCookie(event.currentTarget.value);

  const handleSetButtonClick = async () => {
    const response = await fetch('/set?' + cookie, { credentials: 'include' });
    alert(response.status);
  };

  const handleGetButtonClick = async () => {
    const response = await fetch('/get', { credentials: 'include' });
    const text = await response.text();
    alert(text);
  };

  return (
    <>
      <input value={cookie} onChange={handleCookieInputChange} />
      <button onClick={handleSetButtonClick}>Set '{cookie}'</button>
      <button onClick={handleGetButtonClick}>Get</button>
    </>
  );
}
