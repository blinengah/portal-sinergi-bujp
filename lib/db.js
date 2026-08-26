/**
 * ============================================================
 * APPLICATION : Portal Sinergi Operasional BUJP-User
 * COMPONENT   : lib/db.js (Neon PostgreSQL Serverless Connection)
 * CREATED BY  : Bli Nengah
 * VERSION     : v1.0.0
 * YEAR        : 2026
 * ============================================================
 */
import { neon } from '@neondatabase/serverless';

export const sql = neon(process.env.DATABASE_URL);
