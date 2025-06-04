import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { sampleKeywords } from '../data/sampleData';

export default function AddKeyword() {
  const { id } = useParams();
  const [keyword, setKeyword] = useState('');
  const [targetUrl, setTargetUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    sampleKeywords.push({
      id: sampleKeywords.length + 1,
      projectId: Number(id),
      keyword,
      position: 0,
      targetUrl,
      page: 0,
      change: 0,
      firstSeen: new Date().toISOString().split('T')[0],
      lastUpdated: new Date().toISOString().split('T')[0]
    });
    navigate(`/projects/${id}`);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Anahtar Kelime Ekle</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full p-2 border" placeholder="Anahtar kelime" value={keyword} onChange={e=>setKeyword(e.target.value)} />
        <input className="w-full p-2 border" placeholder="Hedef URL" value={targetUrl} onChange={e=>setTargetUrl(e.target.value)} />
        <button className="w-full bg-blue-500 text-white p-2">Ekle</button>
      </form>
    </div>
  );
}
