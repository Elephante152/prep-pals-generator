import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/supabase/database'

const SUPABASE_URL = "https://nbtobeqeftxympbskqqo.supabase.co"
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5idG9iZXFlZnR4eW1wYnNrcXFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ4MzM1NjMsImV4cCI6MjA1MDQwOTU2M30._ZzMNDdjmW0qo2LBL51qIk50-KjlEe2d6l6R_3EHcgg"

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)