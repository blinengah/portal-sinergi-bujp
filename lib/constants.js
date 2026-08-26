/**
 * ============================================================
 * APPLICATION : Portal Sinergi Operasional BUJP-User
 * COMPONENT   : lib/constants.js (Master TOR, Cost Sharing & Participant Data)
 * CREATED BY  : Bli Nengah
 * VERSION     : v1.0.0
 * YEAR        : 2026
 * ============================================================
 */

export const APP_METADATA = {
  name: "Portal Sinergi Operasional BUJP dan User",
  theme: "Penyelarasan Peran, Tanggung Jawab, dan Mekanisme Kerja Pengamanan",
  creator: "Bli Nengah",
  version: "v1.0.0",
  year: "2026",
  totalBudget: 294213700,
  totalParticipants: 42,
  duration: "08:00 - 16:00 WIB (1 Hari Full)"
};

export const COST_SHARING_DATA = [
  { entity: "EMP Bentu Limited", percentage: 57, cost: 167701809 },
  { entity: "PT Imbang Tata Alam", percentage: 21, cost: 61784877 },
  { entity: "EMP Energi Gandewa", percentage: 8, cost: 23537096 },
  { entity: "EMP Energi Riau", percentage: 5, cost: 14710685 },
  { entity: "EMP Tonga", percentage: 2, cost: 5884274 },
  { entity: "EMP Tunas Energi", percentage: 2, cost: 5884274 },
  { entity: "EMP Korinci Baru Limited", percentage: 2, cost: 5884274 },
  { entity: "Kangean Energy Indonesia", percentage: 1, cost: 2942137 },
  { entity: "Energy Equity Epic Sengkang Pty,Ltd.", percentage: 1, cost: 2942137 },
  { entity: "EMP Gebang Japex", percentage: 1, cost: 2942137 },
];

export const PARTICIPANTS_DATA = [
  { group: "SKK Migas", name: "SKK Migas Pusat - Sekuriti", count: 7 },
  { group: "SKK Migas", name: "SKK Migas Sumbagut", count: 2 },
  { group: "SKK Migas", name: "SKK Migas Jabanusa", count: 2 },
  { group: "SKK Migas", name: "SKK Migas Kalsul", count: 2 },
  { group: "Security HQ", name: "Security EMP Group Jakarta", count: 5 },
  { group: "Field Managers", name: "Field Manager EMP Bentu", count: 1 },
  { group: "Field Managers", name: "Field Manager ITA", count: 1 },
  { group: "Field Managers", name: "Field Manager Tonga", count: 1 },
  { group: "Field Managers", name: "Field Manager EMP Energi Riau", count: 1 },
  { group: "Field Managers", name: "Field Manager EMP Energi Gandewa", count: 1 },
  { group: "Field Managers", name: "Field Manager EMP Tunas Energi", count: 1 },
  { group: "Field Managers", name: "Field Manager EMP Korinci Baru", count: 1 },
  { group: "Field Managers", name: "Field Manager EEES", count: 1 },
  { group: "Field Managers", name: "Field Manager KEI", count: 1 },
  { group: "Field Managers", name: "Field Manager Gebang Japex", count: 1 },
  { group: "Mitra BUJP", name: "BUJP ITA & Bentu", count: 2 },
  { group: "Mitra BUJP", name: "BUJP EER & EEG", count: 2 },
  { group: "Mitra BUJP", name: "BUJP Jakarta", count: 2 },
  { group: "Mitra BUJP", name: "BUJP Tonga", count: 2 },
  { group: "Mitra BUJP", name: "BUJP EEES", count: 2 },
  { group: "Mitra BUJP", name: "BUJP Kangean", count: 2 },
  { group: "Mitra BUJP", name: "BUJP Gebang", count: 2 },
];

export const SCHEDULE_DATA = [
  { time: "08:00 - 08:30", title: "Registrasi Peserta & Morning Coffee", desc: "Pemeriksaan kehadiran 42 delegasi dan welcoming kit." },
  { time: "08:30 - 09:15", title: "Pembukaan & Keynote Address", desc: "Menyanyikan Indonesia Raya, Safety Briefing, Sambutan SKK Migas & Manajemen EMP Group." },
  { time: "09:15 - 10:30", title: "Sesi I: Penyelarasan Peran & Mekanisme Kerja", desc: "Bedah tata kelola keamanan operasional, batasan wewenang User vs BUJP." },
  { time: "10:30 - 10:45", title: "Coffee Break & Executive Networking", desc: "Sesi diskusi informal antar Field Manager dan Pimpinan BUJP." },
  { time: "10:45 - 12:00", title: "Sesi II: Transisi Digitalisasi Pengamanan", desc: "Live demo ekosistem 4 Modul: Absensi Geotagging, DAR, MAR, & Incident SLA System." },
  { time: "12:00 - 13:00", title: "ISHOMA (Makan Siang & Sholat)", desc: "Istirahat bersama di Executive Dining Hall." },
  { time: "13:00 - 14:30", title: "Sesi III: Transparansi Reward & Punishment Berbasis SLA", desc: "Kalkulasi otomatis KPI: Respons time insiden, kepatuhan pos, dan penalti finansial." },
  { time: "14:30 - 15:30", title: "Sesi IV: Panel Diskusi, Q&A & Penyusunan Action Plan", desc: "Penyelarasan target penanganan kerawanan unit kerja dan penunjukan PIC." },
  { time: "15:30 - 16:00", title: "Penandatanganan Komitmen Bersama & Penutupan", desc: "Penandatanganan Pakta Sinergi Operasional 2026, dokumentasi dan closing." },
];
