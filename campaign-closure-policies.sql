-- Campaign Closure: Database-level protection
-- Run these SQL commands in your Supabase SQL editor to prevent new entries at the database level

-- Option 1: Disable the existing insert policy (Recommended)
-- This prevents any new inserts while keeping existing data intact
DROP POLICY IF EXISTS "Allow public insert" ON public.campaign_entries;

-- Create a new policy that denies all inserts
CREATE POLICY "Campaign ended - no inserts" ON public.campaign_entries
    FOR INSERT WITH CHECK (false);

-- Option 2: Alternative - Add date-based restriction (if you want to re-enable later)
-- Uncomment the lines below if you prefer a date-based approach instead of the above

-- DROP POLICY IF EXISTS "Allow public insert" ON public.campaign_entries;
-- CREATE POLICY "Campaign date restriction" ON public.campaign_entries
--     FOR INSERT WITH CHECK (NOW() <= '2025-01-31 23:59:59'::timestamp with time zone);

-- Optional: Add a comment to the table for documentation
COMMENT ON TABLE public.campaign_entries IS 'Campaign entries table - Campaign ended on 2025-01-31';

-- Verify the policies (this will show current policies)
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check 
FROM pg_policies 
WHERE tablename = 'campaign_entries';
