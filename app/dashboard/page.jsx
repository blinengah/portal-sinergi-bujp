/**
 * ============================================================
 * APPLICATION : Portal Sinergi Operasional BUJP-User
 * COMPONENT   : app/dashboard/page.jsx (Executive Dashboard & SLA Calculator)
 * CREATED BY  : Bli Nengah
 * VERSION     : v1.0.0
 * YEAR        : 2026
 * ============================================================
 */
'use client';

import { useState } from 'react';
import { 
  ShieldCheck, 
  Calculator, 
  Users, 
  AlertCircle, 
  CheckCircle, 
  FileText, 
  Smartphone,
  Sparkles
} from 'lucide-react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('kpi-calculator');

  // Simulator State
  const [attendanceRate, setAttendanceRate] = useState(98);
  const [incidentSlaRate, setIncidentSlaRate] = useState(95);
  const [sopCompliance, setSopCompliance] = useState(92);
  const [majorViolation, setMajorViolation] = useState(0);

  // Perhitungan Nilai SLA
  const calculateResult = () => {
    const rawScore = (attendanceRate * 0.35) + (incidentSlaRate * 0.35) + (sopCompliance * 0.30) - (majorViolation * 15);
    const finalScore = Math.max(0, Math.min(100, rawScore)).toFixed(2);

    let status = 'STANDAR';
    let badgeClass = 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    let rewardInfo = 'Kinerja memenuhi baseline operasional.';

    if (finalScore >= 95 && majorViolation === 0) {
      status = 'REWARD (BONUS INSENTIF)';
      badgeClass = 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200';
      rewardInfo = 'Berhak memperoleh sertifikat keunggulan operasional & insentif kinerja.';
    } else if (finalScore < 80 || majorViolation > 1) {
      status = 'PUNISHMENT (SURAT PERINGATAN / PENALTY)';
      badgeClass = 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      rewardInfo = 'Dikenakan evaluasi manajemen, denda penalti SLA, dan kewajiban audit ulang.';
    }

    return { finalScore, status, badgeClass, rewardInfo };
  };

  const result = calculateResult();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Executive Governance Dashboard</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Monitoring SLA, Simulasi Reward/Punishment, dan Operasional 4 Modul Pengamanan Terpadu
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Sistem Terintegrasi Live
          </span>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 my-6 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800">
        {[
          { id: 'kpi-calculator', label: 'Simulator Reward & Punishment', icon: Calculator },
          { id: 'absensi', label: 'Monitoring Absensi', icon: Smartphone },
          { id: 'incident', label: 'Tiket Insiden (SLA Tracker)', icon: AlertCircle },
          { id: 'reports', label: 'Laporan DAR & MAR', icon: FileText },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* TAB 1: Simulator Reward & Punishment */}
      {activeTab === 'kpi-calculator' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-slate-900 dark:text-white text-base">Parameter Penilaian SLA/KPI BUJP</h3>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-slate-700 dark:text-slate-300">Tingkat Kehadiran Personil (Bobot 35%)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-mono text-sm">{attendanceRate}%</span>
                </div>
                <input 
                  type="range" min="70" max="100" value={attendanceRate} 
                  onChange={(e) => setAttendanceRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-slate-700 dark:text-slate-300">Kecepatan Respons Insiden &lt;15 Menit (Bobot 35%)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-mono text-sm">{incidentSlaRate}%</span>
                </div>
                <input 
                  type="range" min="50" max="100" value={incidentSlaRate} 
                  onChange={(e) => setIncidentSlaRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-slate-700 dark:text-slate-300">Kepatuhan Patroli & Checklist SOP (Bobot 30%)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-mono text-sm">{sopCompliance}%</span>
                </div>
                <input 
                  type="range" min="50" max="100" value={sopCompliance} 
                  onChange={(e) => setSopCompliance(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-slate-700 dark:text-slate-300">Temuan Pelanggaran Mayor (Pengurangan -15 Poin/Kasus)</span>
                  <span className="text-red-600 font-mono text-sm">{majorViolation} Kasus</span>
                </div>
                <div className="flex gap-3">
                  {[0, 1, 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      onClick={() => setMajorViolation(num)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold border transition ${
                        majorViolation === num
                          ? 'bg-red-600 text-white border-red-600'
                          : 'border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Outcome Card */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Hasil Evaluasi SLA</span>
              <div className="my-6 text-center">
                <div className="text-5xl font-extrabold font-mono text-slate-900 dark:text-white mb-2">
                  {result.finalScore}
                </div>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${result.badgeClass}`}>
                  {result.status}
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 text-center leading-relaxed">
                {result.rewardInfo}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700 text-[11px] text-slate-400 space-y-1">
              <div>&bull; Nilai &ge; 95 : Kategori Reward (Bonus)</div>
              <div>&bull; Nilai 80 - 94 : Kategori Standar (Baseline)</div>
              <div>&bull; Nilai &lt; 80 : Kategori Punishment (Penalty Finansial)</div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Monitoring Absensi Personil */}
      {activeTab === 'absensi' && (
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
          <div className="p-5 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
            <h3 className="font-bold text-slate-900 dark:text-white">Log Geotagging Presensi Shift Berjalan</h3>
            <span className="text-xs text-slate-500">Live Sync</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 uppercase font-bold">
                <tr>
                  <th className="px-4 py-3">ID Personil</th>
                  <th className="px-4 py-3">Nama Anggota</th>
                  <th className="px-4 py-3">Unit Kerja</th>
                  <th className="px-4 py-3">Shift</th>
                  <th className="px-4 py-3">Waktu Presensi</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {[
                  { id: 'SEC-001', name: 'Ahmad Fauzi', unit: 'EMP Bentu (Pos Utama)', shift: 'Pagi (07:00-19:00)', time: '06:45:12', status: 'HADIR' },
                  { id: 'SEC-002', name: 'Bambang S.', unit: 'PT Imbang Tata Alam', shift: 'Pagi (07:00-19:00)', time: '06:50:33', status: 'HADIR' },
                  { id: 'SEC-003', name: 'Danang Wijaya', unit: 'EMP Energi Riau', shift: 'Pagi (07:00-19:00)', time: '06:58:01', status: 'HADIR' },
                  { id: 'SEC-004', name: 'Eko Prasetyo', unit: 'EMP Gandewa', shift: 'Malam (19:00-07:00)', time: '-', status: 'OFF' },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-750">
                    <td className="px-4 py-3 font-mono text-slate-500">{row.id}</td>
                    <td className="px-4 py-3 font-bold text-slate-800 dark:text-slate-200">{row.name}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{row.unit}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{row.shift}</td>
                    <td className="px-4 py-3 font-mono text-slate-500">{row.time}</td>
                    <td className="px-4 py-3">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: Incident SLA Tracker */}
      {activeTab === 'incident' && (
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
          <div className="p-5 border-b border-slate-200 dark:border-slate-700">
            <h3 className="font-bold text-slate-900 dark:text-white">Tiket Insiden & SLA Kecepatan Tanggap Operasional</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 uppercase font-bold">
                <tr>
                  <th className="px-4 py-3">No. Tiket</th>
                  <th className="px-4 py-3">Unit Operasional</th>
                  <th className="px-4 py-3">Jenis Insiden</th>
                  <th className="px-4 py-3">Tingkat Kerawanan</th>
                  <th className="px-4 py-3">Target SLA</th>
                  <th className="px-4 py-3">Respons Lapangan</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-750">
                  <td className="px-4 py-3 font-mono font-bold text-blue-600">INC-2026-081</td>
                  <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-200">EMP Bentu - Pos Jalur Pipa</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Indikasi Aktivitas Ilegal Border</td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">MEDIUM</span></td>
                  <td className="px-4 py-3 font-mono">&lt; 15 Menit</td>
                  <td className="px-4 py-3 font-mono text-emerald-600 font-bold">8 Menit (Passed)</td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">RESOLVED</span></td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-750">
                  <td className="px-4 py-3 font-mono font-bold text-blue-600">INC-2026-082</td>
                  <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-200">PT Imbang Tata Alam - Jetty</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Kerusakan Lampu Perimeter Pos 3</td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800">LOW</span></td>
                  <td className="px-4 py-3 font-mono">&lt; 60 Menit</td>
                  <td className="px-4 py-3 font-mono text-emerald-600 font-bold">25 Menit (Passed)</td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800">CLOSED</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 4: Laporan Harian & Bulanan */}
      {activeTab === 'reports' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Daily Activity Report (DAR) Hari Ini</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Rekapitulasi logbook 10 unit KKKS yang telah terverifikasi oleh Supervisor Lapangan.
            </p>
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg flex justify-between items-center">
                <span>Checklist Pos Terpenuhi</span>
                <span className="font-bold text-emerald-600 font-mono">100% (48 Pos)</span>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg flex justify-between items-center">
                <span>Patroli Jalur Pipa & Fasilitas</span>
                <span className="font-bold text-blue-600 font-mono">32 Siklus Selesai</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Monthly Activity Report (MAR)</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Dokumen evaluasi konsolidasi performa BUJP tingkat eksekutif.
            </p>
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg flex justify-between items-center">
                <span>Indeks Sinergi Operasional</span>
                <span className="font-bold text-blue-600 font-mono">96.4 / 100</span>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg flex justify-between items-center">
                <span>Status Kepatuhan Regulasi Perpol</span>
                <span className="font-bold text-emerald-600">COMPLIANT</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
