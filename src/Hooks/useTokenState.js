import { useEffect, useState } from 'react';
import axios from 'axios';

export default initialVal => {

  const [isTokenValid, setToken] = useState(initialVal);

  useEffect(() => {
    if(!isTokenValid){
      axios.get('http://localhost:3001/')
      .then(res => {
        console.log('Token: ', res.data.access_token);
        localStorage.setItem('token', res.data.access_token);
        localStorage.setItem('token_expires_in', getExpirationDate(res.data.expires_in));
        setToken(true);
      });
    };
  }, [isTokenValid]);

  const getExpirationDate = (seconds) => {
    let miliseconds = (seconds * 1000 + Date.now());
    console.log('Expires: ', new Date(miliseconds));
    return miliseconds;
  };

  const isTokenExpired = () => {
    let expiration = localStorage.getItem('token_expires_in');
    if(new Date() > expiration){
      setToken(false);
    } else {
      return localStorage.getItem('token');
    };
  };

  return [isTokenExpired];

};


