import {neon} from '@neondatabase/serverless';
import {drizzle} from 'drizzle-orm/neon-http';
import 'dotenv/config.js'
const NEON_DATABASE_URL="postgresql://stories_owner:bce7tDWyLX3G@ep-floral-snowflake-a2rnirhh-pooler.eu-central-1.aws.neon.tech/todo-list?sslmode=require"
const sql = neon(NEON_DATABASE_URL!);

const db = drizzle(sql);

export default db;