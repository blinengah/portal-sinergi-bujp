/**
 * ============================================================
 * APPLICATION : Portal Sinergi Operasional BUJP-User
 * COMPONENT   : app/api/init/route.js (Neon DB Seeder API)
 * CREATED BY  : Bli Nengah
 * VERSION     : v1.0.0
 * YEAR        : 2026
 * ============================================================
 */
import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { COST_SHARING_DATA, PARTICIPANTS_DATA, SCHEDULE_DATA } from '@/lib/constants';

export async function GET() {
  try {
    // Seed Cost Sharing
    for (const item of COST_SHARING_DATA) {
      await sql`
        INSERT INTO cost_sharing (entity_name, percentage, cost_amount)
        VALUES (${item.entity}, ${item.percentage}, ${item.cost})
        ON CONFLICT DO NOTHING;
      `;
    }

    // Seed Participants
    for (const item of PARTICIPANTS_DATA) {
      await sql`
        INSERT INTO participant_breakdown (group_category, institution, participant_count)
        VALUES (${item.group}, ${item.name}, ${item.count})
        ON CONFLICT DO NOTHING;
      `;
    }

    // Seed Schedule
    let order = 1;
    for (const item of SCHEDULE_DATA) {
      const times = item.time.split(' - ');
      await sql`
        INSERT INTO tor_schedule (time_start, time_end, session_title, description, order_seq)
        VALUES (${times[0]}, ${times[1]}, ${item.title}, ${item.desc}, ${order++})
        ON CONFLICT DO NOTHING;
      `;
    }

    return NextResponse.json({ success: true, message: "Neon Database seeded successfully." });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
