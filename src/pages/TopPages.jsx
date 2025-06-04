import { useParams } from 'react-router-dom';
import { sampleKeywords } from '../data/sampleData';

export default function TopPages() {
  const { id } = useParams();
  const keywords = sampleKeywords.filter(k => k.projectId === Number(id));
  const grouped = keywords.reduce((acc, k) => {
    if (!acc[k.targetUrl]) acc[k.targetUrl] = [];
    acc[k.targetUrl].push(k);
    return acc;
  }, {});
  const pages = Object.entries(grouped).map(([url, ks]) => ({
    url,
    total: ks.length,
    avg: ks.reduce((s, i) => s + i.position, 0) / ks.length
  }));

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">En İyi Sayfalar</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="border p-2">URL</th>
            <th className="border p-2">Kelime Sayısı</th>
            <th className="border p-2">Ortalama Pozisyon</th>
          </tr>
        </thead>
        <tbody>
          {pages.map(p => (
            <tr key={p.url} className="text-center">
              <td className="border p-2">{p.url}</td>
              <td className="border p-2">{p.total}</td>
              <td className="border p-2">{p.avg.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
