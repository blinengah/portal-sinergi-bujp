/**
 * ============================================================
 * APPLICATION : Portal Sinergi Operasional BUJP-User
 * COMPONENT   : app/api/tor-data/route.js
 * CREATED BY  : Bli Nengah
 * VERSION     : v1.0.0
 * YEAR        : 2026
 * ============================================================
 */
import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function GET() {
  try {
    const costSharing = await sql`SELECT * FROM cost_sharing ORDER BY cost_amount DESC;`;
    const participants = await sql`SELECT * FROM participant_breakdown ORDER BY id ASC;`;
    const schedule = await sql`SELECT * FROM tor_schedule ORDER BY order_seq ASC;`;

    return NextResponse.json({
      success: true,
      data: {
        costSharing,
        participants,
        schedule
      }
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
