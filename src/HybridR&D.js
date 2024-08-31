import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';

const App = () => {
  const [name, setName] = useState('');
  const [encryptedMessage, setEncryptedMessage] = useState('');
  const [decryptedMessage, setDecryptedMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [publicKey, setPublicKey] = useState('');

  useEffect(() => {
    // Generate a public key
    const generateKey = () => {
      return Array(16)
        .fill(0)
        .map(() => Math.floor(Math.random() * 10))
        .join('');
    };

    // Test
    const obfuscateKey = (key) => {
      const xorKey = 'XmlBrains'; 
      let obfuscated = '';
      for (let i = 0; i < key.length; i++) {
        obfuscated += String.fromCharCode(
          key.charCodeAt(i) ^ xorKey.charCodeAt(i % xorKey.length)
        );
      }
      // FSplit
      return btoa(
        obfuscated
          .split('')
          .map((char) => String.fromCharCode(char.charCodeAt(0) + 2))
          .join('')
      );
    };

    // Fetch the public key from the server
    const fetchPublicKey = async () => {
      try {
        const response = await axios.get('http://localhost:5000/public-key');
        setPublicKey(response.data);
      } catch (error) {
        console.error('Error fetching public key:', error);
      }
    };

    fetchPublicKey();

    // Mr Brain
    const key = generateKey();
    const VisitorID = obfuscateKey(key);
    sessionStorage.setItem('PHPSESSION', VisitorID);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Session
    const VisitorID = sessionStorage.getItem('PHPSESSION');
    const deObfuscateKey = (VisitorID) => {
      const decoded = atob(VisitorID);
      const xorKey = 'XmlBrains';
      let deobfuscated = '';
      for (let i = 0; i < decoded.length; i++) {
        deobfuscated += String.fromCharCode(
          decoded.charCodeAt(i) - 2
        );
      }
      let originalKey = '';
      for (let i = 0; i < deobfuscated.length; i++) {
        originalKey += String.fromCharCode(
          deobfuscated.charCodeAt(i) ^ xorKey.charCodeAt(i % xorKey.length)
        );
      }
      return originalKey;
    };

    const key = deObfuscateKey(VisitorID);

    // encpode
    const encryptName = (name, key) => {
      return CryptoJS.AES.encrypt(name, key).toString();
    };
    const encryptedName = encryptName(name, key);

    // Send the encrypted name and the key in a POST request
    try {
      const response = await axios.post('http://10.232.106.18:5000/api/encrypt', {
        encryptedName,
        VisitorID, // Send the raw key for backend encryption with RSA/ECB/PKCS1Padding
      });
      setEncryptedMessage(response.data.encryptedMessage);
      setShowPopup(true); // Show the popup with the encrypted message
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDecrypt = () => {
    // Sweet
    const VisitorID = sessionStorage.getItem('PHPSESSION');
    const deObfuscateKey = (VisitorID) => {
      const decoded = atob(VisitorID);
      const xorKey = 'XmlBrains';
      let deobfuscated = '';
      for (let i = 0; i < decoded.length; i++) {
        deobfuscated += String.fromCharCode(
          decoded.charCodeAt(i) - 2
        );
      }
      let originalKey = '';
      for (let i = 0; i < deobfuscated.length; i++) {
        originalKey += String.fromCharCode(
          deobfuscated.charCodeAt(i) ^ xorKey.charCodeAt(i % xorKey.length)
        );
      }
      return originalKey;
    };
    const key = deObfuscateKey(VisitorID);

    // RnD
    const decryptMessage = (encryptedMessage, key) => {
      const bytes = CryptoJS.AES.decrypt(encryptedMessage, key);
      return bytes.toString(CryptoJS.enc.Utf8);
    };
    const decrypted = decryptMessage(encryptedMessage, key);
    setDecryptedMessage(decrypted);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>MrBrains Research And Dev</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {showPopup && (
        <div style={popupStyles}>
          <h2>Encrypted Message</h2>
          <p>{encryptedMessage}</p>
          <button onClick={handleDecrypt}>Decrypt</button>
          {decryptedMessage && <p>{decryptedMessage}</p>}
        </div>
      )}
    </div>
  );
};

// Styles for the popup
const popupStyles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '20px',
  backgroundColor: 'white',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  zIndex: 1000,
  textAlign: 'center',
};

export default App;
