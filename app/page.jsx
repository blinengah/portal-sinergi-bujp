/**
 * ============================================================
 * APPLICATION : Portal Sinergi Operasional BUJP-User
 * COMPONENT   : app/page.jsx (Interactive Landing Page & Executive TOR Hub)
 * CREATED BY  : Bli Nengah
 * VERSION     : v1.0.0
 * YEAR        : 2026
 * ============================================================
 */
import Link from 'next/link';
import { 
  ShieldCheck, 
  Users, 
  Clock, 
  Wallet, 
  Layers, 
  CheckCircle2, 
  Smartphone, 
  FileCheck2, 
  BarChart3, 
  AlertTriangle 
} from 'lucide-react';
import { 
  APP_METADATA, 
  COST_SHARING_DATA, 
  PARTICIPANTS_DATA, 
  SCHEDULE_DATA 
} from '@/lib/constants';
import TorCharts from '@/components/TorCharts';

export default function HomePage() {
  const formatRupiah = (val) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-b from-blue-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-6">
              Term of Reference (TOR) & Operational Hub
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
              Forum Sinergi Operasional BUJP dan User
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Penyelarasan peran, tanggung jawab, dan mekanisme kerja guna meningkatkan efektivitas pengamanan dan kualitas layanan di seluruh unit operasional migas.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                <Clock className="w-5 h-5 text-blue-600 mb-1" />
                <span className="text-xs text-slate-500 dark:text-slate-400 block">Durasi Kegiatan</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">08:00 - 16:00 WIB</span>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                <Users className="w-5 h-5 text-emerald-600 mb-1" />
                <span className="text-xs text-slate-500 dark:text-slate-400 block">Total Delegasi</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">42 Peserta</span>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                <Wallet className="w-5 h-5 text-amber-600 mb-1" />
                <span className="text-xs text-slate-500 dark:text-slate-400 block">Total Anggaran</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">Rp 294.213.700</span>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                <Layers className="w-5 h-5 text-purple-600 mb-1" />
                <span className="text-xs text-slate-500 dark:text-slate-400 block">Cost Sharing</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">10 Entitas KKKS</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/dashboard"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition shadow-md"
              >
                Masuk Dashboard Operasional
              </Link>
              <a
                href="#tor-section"
                className="bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 transition"
              >
                Eksplorasi Rincian TOR
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Pillars */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">3 Fokus Utama Sinergi</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Transformasi tata kelola sekuriti modern yang terstandarisasi, transparan, dan berbasis teknologi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Transisi Digital</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Migrasi penuh dari logbook manual ke ekosistem pelaporan digital real-time untuk akurasi data lapangan dan kepatuhan SOP 100%.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Transparansi Reward & Punishment</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Penilaian kinerja BUJP objektif menggunakan kalkulasi KPI/SLA otomatis: respons insiden, kelengkapan pos, dan kedisiplinan shift.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 text-purple-600 rounded-xl flex items-center justify-center mb-4">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Integrasi 4 Aplikasi Pengamanan</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Terhubung langsung dengan Absensi Personil Geotagging, Daily Activity Report (DAR), Laporan Bulanan (MAR), dan Tiket Kejadian.
            </p>
          </div>
        </div>
      </section>

      {/* TOR Detail Section */}
      <section id="tor-section" className="py-16 bg-slate-100/70 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Struktur Term of Reference (TOR)
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Rincian komprehensif susunan kegiatan, alokasi anggaran 10 KKKS, dan peserta forum sinergi.
            </p>
          </div>

          <TorCharts />

          {/* Agenda Table */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm mb-12">
            <div className="p-5 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
              <h3 className="font-bold text-slate-900 dark:text-white">Susunan Acara (08:00 - 16:00 WIB)</h3>
            </div>
            <div className="divide-y divide-slate-200 dark:divide-slate-700">
              {SCHEDULE_DATA.map((item, idx) => (
                <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="w-36 font-bold text-blue-600 dark:text-blue-400 text-sm">
                    {item.time}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Budget & Participants Tables Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Cost Sharing Table */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
              <div className="p-5 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
                <h3 className="font-bold text-slate-900 dark:text-white">Alokasi Pembebanan Biaya Entitas</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 uppercase font-bold">
                    <tr>
                      <th className="px-4 py-3">Entitas KKKS</th>
                      <th className="px-4 py-3 text-center">Prosentase</th>
                      <th className="px-4 py-3 text-right">Pembebanan Biaya</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {COST_SHARING_DATA.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-750">
                        <td className="px-4 py-2.5 font-medium text-slate-800 dark:text-slate-200">{item.entity}</td>
                        <td className="px-4 py-2.5 text-center font-bold text-blue-600 dark:text-blue-400">{item.percentage}%</td>
                        <td className="px-4 py-2.5 text-right font-mono text-slate-700 dark:text-slate-300">{formatRupiah(item.cost)}</td>
                      </tr>
                    ))}
                    <tr className="bg-blue-50 dark:bg-blue-950/40 font-bold">
                      <td className="px-4 py-3 text-slate-900 dark:text-white">TOTAL BIAYA</td>
                      <td className="px-4 py-3 text-center text-blue-600 dark:text-blue-400">100%</td>
                      <td className="px-4 py-3 text-right text-blue-600 dark:text-blue-400 font-mono text-sm">{formatRupiah(APP_METADATA.totalBudget)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Participants Table */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
              <div className="p-5 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
                <h3 className="font-bold text-slate-900 dark:text-white">Rincian 42 Delegasi Peserta</h3>
              </div>
              <div className="overflow-x-auto max-h-[480px]">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 uppercase font-bold sticky top-0">
                    <tr>
                      <th className="px-4 py-3">Kategori</th>
                      <th className="px-4 py-3">Peserta / Unit</th>
                      <th className="px-4 py-3 text-right">Jml</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {PARTICIPANTS_DATA.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-750">
                        <td className="px-4 py-2 text-slate-500 dark:text-slate-400">{item.group}</td>
                        <td className="px-4 py-2 font-medium text-slate-800 dark:text-slate-200">{item.name}</td>
                        <td className="px-4 py-2 text-right font-bold text-slate-900 dark:text-white">{item.count}</td>
                      </tr>
                    ))}
                    <tr className="bg-blue-50 dark:bg-blue-950/40 font-bold sticky bottom-0">
                      <td colSpan={2} className="px-4 py-3 text-slate-900 dark:text-white">TOTAL PESERTA FORUM</td>
                      <td className="px-4 py-3 text-right text-blue-600 dark:text-blue-400 text-sm">42</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Integrated Apps Showcase */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Ekosistem 4 Aplikasi Terpadu</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Infrastruktur digital pendukung pengamanan operasional di seluruh wilayah kerja KKKS.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
            <Smartphone className="w-8 h-8 text-blue-600 mb-3" />
            <h4 className="font-bold text-slate-900 dark:text-white mb-1">Absensi Personil</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Geofencing presisi di pos sekuriti, verifikasi shift regu, dan audit status kehadiran real-time.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
            <FileCheck2 className="w-8 h-8 text-emerald-600 mb-3" />
            <h4 className="font-bold text-slate-900 dark:text-white mb-1">Laporan Harian (DAR)</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Digital Activity Report per pos, checklist patroli titik rawan, dan pencatatan buku mutasi pos.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
            <BarChart3 className="w-8 h-8 text-purple-600 mb-3" />
            <h4 className="font-bold text-slate-900 dark:text-white mb-1">Laporan Bulanan (MAR)</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Konsolidasi data SLA bulanan, performa manpower BUJP, tren kerawanan, dan rekomendasi mitigasi.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
            <AlertTriangle className="w-8 h-8 text-red-600 mb-3" />
            <h4 className="font-bold text-slate-900 dark:text-white mb-1">Laporan Kejadian</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Sistem tiket insiden instan, timer kecepatan tanggap (SLA &lt;15 menit), eskalasi & root cause analysis.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
