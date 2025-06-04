import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sampleProjects } from '../data/sampleData';

export default function CreateProject() {
  const [name, setName] = useState('');
  const [domain, setDomain] = useState('');
  const [country, setCountry] = useState('Türkiye');
  const [language, setLanguage] = useState('Türkçe');
  const [device, setDevice] = useState('desktop');
  const [frequency, setFrequency] = useState('günlük');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    sampleProjects.push({
      id: sampleProjects.length + 1,
      name,
      domain,
      country,
      language,
      device,
      frequency,
      keywords: 0,
      avgPosition: 0,
      lastUpdated: new Date().toISOString().split('T')[0]
    });
    navigate('/dashboard');
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Proje Oluştur</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full p-2 border" placeholder="Proje adı" value={name} onChange={e=>setName(e.target.value)} />
        <input className="w-full p-2 border" placeholder="Alan adı" value={domain} onChange={e=>setDomain(e.target.value)} />
        <div className="flex space-x-2">
          <input className="w-1/2 p-2 border" placeholder="Ülke" value={country} onChange={e=>setCountry(e.target.value)} />
          <input className="w-1/2 p-2 border" placeholder="Dil" value={language} onChange={e=>setLanguage(e.target.value)} />
        </div>
        <div className="flex space-x-2">
          <select className="w-1/2 p-2 border" value={device} onChange={e=>setDevice(e.target.value)}>
            <option value="desktop">Masaüstü</option>
            <option value="mobile">Mobil</option>
          </select>
          <select className="w-1/2 p-2 border" value={frequency} onChange={e=>setFrequency(e.target.value)}>
            <option value="günlük">Günlük</option>
            <option value="haftalık">Haftalık</option>
          </select>
        </div>
        <button className="w-full bg-blue-500 text-white p-2">Kaydet</button>
      </form>
    </div>
  );
}
