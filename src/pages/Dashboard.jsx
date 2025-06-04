import { Link } from 'react-router-dom';
import { sampleProjects } from '../data/sampleData';

export default function Dashboard() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Projeler</h1>
        <Link to="/projects/new" className="bg-blue-500 text-white px-4 py-2 rounded">Proje Oluştur</Link>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="border p-2">Site</th>
            <th className="border p-2">Anahtar Kelime</th>
            <th className="border p-2">Ortalama Pozisyon</th>
            <th className="border p-2">Güncellenme</th>
            <th className="border p-2">İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {sampleProjects.map(p => (
            <tr key={p.id} className="text-center">
              <td className="border p-2">{p.domain}</td>
              <td className="border p-2">{p.keywords}</td>
              <td className="border p-2">{p.avgPosition}</td>
              <td className="border p-2">{p.lastUpdated}</td>
              <td className="border p-2 space-x-2">
                <Link className="text-blue-500" to={`/projects/${p.id}`}>Görüntüle</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
