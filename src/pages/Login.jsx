import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { sampleUsers } from '../data/sampleData';

export default function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = sampleUsers.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      navigate('/dashboard');
    } else {
      alert('Geçersiz giriş');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-80 space-y-4">
        <h1 className="text-xl font-bold text-center">Giriş Yap</h1>
        <input className="w-full p-2 border" placeholder="E-posta" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" className="w-full p-2 border" placeholder="Şifre" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="w-full bg-blue-500 text-white p-2">Giriş</button>
        <p className="text-center text-sm">Hesabınız yok mu? <Link to="/register" className="text-blue-500">Kayıt olun</Link></p>
      </form>
    </div>
  );
}
