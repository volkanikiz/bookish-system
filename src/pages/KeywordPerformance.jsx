import { useParams, Link } from 'react-router-dom';
import { sampleKeywords } from '../data/sampleData';

export default function KeywordPerformance() {
  const { id } = useParams();
  const keywords = sampleKeywords.filter(k => k.projectId === Number(id));

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Anahtar Kelimeler</h1>
        <Link to={`/projects/${id}/keywords/new`} className="bg-blue-500 text-white px-4 py-2 rounded">Anahtar Kelime Ekle</Link>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="border p-2">Kelime</th>
            <th className="border p-2">Pozisyon</th>
            <th className="border p-2">Hedef URL</th>
            <th className="border p-2">Sayfa</th>
            <th className="border p-2">Değişim</th>
          </tr>
        </thead>
        <tbody>
          {keywords.map(k => (
            <tr key={k.id} className="text-center">
              <td className="border p-2">{k.keyword}</td>
              <td className="border p-2">{k.position}</td>
              <td className="border p-2">{k.targetUrl}</td>
              <td className="border p-2">{k.page}</td>
              <td className="border p-2">{k.change > 0 ? `+${k.change}` : k.change}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
