/**
 * ============================================================
 * APPLICATION : Portal Sinergi Operasional BUJP-User
 * COMPONENT   : lib/db.js (Safe Neon Connection)
 * CREATED BY  : Bli Nengah
 * VERSION     : v1.0.1
 * YEAR        : 2026
 * ============================================================
 */
import { neon } from '@neondatabase/serverless';

export const sql = (strings, ...values) => {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL environment variable is missing.");
  }
  const query = neon(process.env.DATABASE_URL);
  return query(strings, ...values);
};
