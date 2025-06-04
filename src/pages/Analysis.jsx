import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { sampleKeywords } from '../data/sampleData';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Analysis() {
  const { id } = useParams();
  const keywords = sampleKeywords.filter(k => k.projectId === Number(id));

  useEffect(() => {
    const ctx = document.getElementById('trend');
    if (!ctx) return;
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: keywords.map(k => k.keyword),
        datasets: [
          {
            label: 'Pozisyon',
            data: keywords.map(k => k.position),
            borderColor: 'rgb(37,99,235)',
            fill: false
          }
        ]
      }
    });
    return () => chart.destroy();
  }, [keywords]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Analiz</h1>
      <canvas id="trend" height="100"></canvas>
    </div>
  );
}
