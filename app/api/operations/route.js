/**
 * ============================================================
 * APPLICATION : Portal Sinergi Operasional BUJP-User
 * COMPONENT   : app/api/operations/route.js
 * CREATED BY  : Bli Nengah
 * VERSION     : v1.0.0
 * YEAR        : 2026
 * ============================================================
 */
import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function GET() {
  try {
    const incidents = await sql`SELECT * FROM incident_reports ORDER BY reported_at DESC LIMIT 10;`;
    const attendance = await sql`SELECT * FROM attendance_logs ORDER BY check_time DESC LIMIT 10;`;

    return NextResponse.json({
      success: true,
      data: {
        incidents,
        attendance
      }
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
