// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tkbvkhmqseulxflbynsb.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY  // 👈 asegúrate que esté en .env
export const supabase = createClient(supabaseUrl, supabaseKey)
