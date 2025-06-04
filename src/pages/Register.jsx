import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { sampleUsers } from '../data/sampleData';

export default function Register({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    sampleUsers.push({ email, password });
    const user = { email };
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-80 space-y-4">
        <h1 className="text-xl font-bold text-center">Kayıt Ol</h1>
        <input className="w-full p-2 border" placeholder="E-posta" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" className="w-full p-2 border" placeholder="Şifre" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="w-full bg-blue-500 text-white p-2">Kayıt</button>
        <p className="text-center text-sm">Zaten hesabınız var mı? <Link to="/" className="text-blue-500">Giriş yap</Link></p>
      </form>
    </div>
  );
}
