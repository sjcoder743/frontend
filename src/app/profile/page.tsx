'use client';
import { useEffect, useState } from 'react';
import api, { setAuthToken } from '@/utils/axios';

export default function ProfilePage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthToken(token);
      api.get('/protected')
        .then(res => setMessage(res.data.message))
        .catch(() => setMessage('Unauthorized'));
    } else {
      setMessage('No token found');
    }
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <p>{message}</p>
    </div>
  );
}
