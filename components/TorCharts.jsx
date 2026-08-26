/**
 * ============================================================
 * APPLICATION : Portal Sinergi Operasional BUJP-User
 * COMPONENT   : components/TorCharts.jsx (Cost Sharing & Participant Charts)
 * CREATED BY  : Bli Nengah
 * VERSION     : v1.0.0
 * YEAR        : 2026
 * ============================================================
 */
'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import { COST_SHARING_DATA } from '@/lib/constants';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

export default function TorCharts() {
  const doughnutData = {
    labels: COST_SHARING_DATA.map(item => item.entity),
    datasets: [
      {
        data: COST_SHARING_DATA.map(item => item.percentage),
        backgroundColor: [
          '#2563EB', '#3B82F6', '#60A5FA', '#93C5FD',
          '#10B981', '#34D399', '#6EE7B7', '#F59E0B',
          '#F97316', '#EF4444'
        ],
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: ['SKK Migas', 'Security HQ', 'Field Managers (10 KKKS)', 'Mitra BUJP (14 Delegasi)'],
    datasets: [
      {
        label: 'Jumlah Peserta',
        data: [13, 5, 10, 14],
        backgroundColor: '#2563EB',
        borderRadius: 6,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
          Proporsi Pembebanan Biaya (Total: Rp 294.213.700)
        </h4>
        <div className="h-64 flex items-center justify-center">
          <Doughnut data={doughnutData} options={{ maintainAspectRatio: false }} />
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
          Sebaran 42 Delegasi Forum Sinergi
        </h4>
        <div className="h-64 flex items-center justify-center">
          <Bar data={barData} options={{ maintainAspectRatio: false, scales: { y: { beginAtZero: true } } }} />
        </div>
      </div>
    </div>
  );
}
