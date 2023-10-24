import React, { useState } from 'react';

const App = () => {
  // State to hold the URL input by the user
  const [url, setUrl] = useState('');
  // State to hold the response from the server
  const [response, setResponse] = useState('');

  // Function to handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Make a request to the server with the input URL
    const res = await fetch(`/api?url=${url}`);
    const data = await res.text();
    // Set the response state with the data received from the server
    setResponse(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder='Enter URL'
        />
        <button type='submit'>Submit</button>
        <p>{response}</p>
      </form>
    </div>
  );
};

export default App;