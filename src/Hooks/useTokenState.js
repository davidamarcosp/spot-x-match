import { useEffect, useState } from 'react';
import axios from 'axios';

export default initialVal => {

  const [token, setToken] = useState(initialVal);

  let authServer = process.env.AUTH_SERVER ? process.env.AUTH_SERVER : 'http://localhost:3001/';

  useEffect(() => {
    if (!token) {
      axios.get(authServer)
        .then(res => {
          console.log('Token: ', res.data.access_token);
          localStorage.setItem('token', res.data.access_token);
          localStorage.setItem('token_expires_in', getExpirationDate(res.data.expires_in));
          setToken(true);
        })
        .catch(e => {
          console.log(e);
        })
    };
  }, [token]);

  const getExpirationDate = (seconds) => {
    let miliseconds = (seconds * 1000 + Date.now());
    console.log('Expires: ', new Date(miliseconds));
    return miliseconds;
  };

  const Wait = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
  };

  const isTokenExpired = async () => {
    let expiration = localStorage.getItem('token_expires_in');
    if (new Date() > expiration) {
      setToken(false);
      await Wait(500);
      return localStorage.getItem('token');
    } else {
      return localStorage.getItem('token');
    };
  };

  return [isTokenExpired];

};


