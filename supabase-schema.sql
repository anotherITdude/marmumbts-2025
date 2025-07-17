-- Create the campaign_entries table
CREATE TABLE IF NOT EXISTS public.campaign_entries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    mobile TEXT NOT NULL,
    email TEXT NOT NULL,
    emirate TEXT NOT NULL,
    eid TEXT NOT NULL,
    receipt TEXT NOT NULL,
    lan TEXT NOT NULL DEFAULT 'en',
    selected BOOLEAN DEFAULT false,
    info TEXT DEFAULT '',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on the created_at column for faster queries
CREATE INDEX IF NOT EXISTS idx_campaign_entries_created_at ON public.campaign_entries(created_at);

-- Create an index on the selected column for admin queries
CREATE INDEX IF NOT EXISTS idx_campaign_entries_selected ON public.campaign_entries(selected);

-- Create an index on the lan column for language-based queries
CREATE INDEX IF NOT EXISTS idx_campaign_entries_lan ON public.campaign_entries(lan);

-- Enable Row Level Security (RLS)
ALTER TABLE public.campaign_entries ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows public insert access (for form submissions)
CREATE POLICY "Allow public insert" ON public.campaign_entries
    FOR INSERT WITH CHECK (true);

-- Create a policy that allows public read access (you can modify this based on your needs)
CREATE POLICY "Allow public read" ON public.campaign_entries
    FOR SELECT USING (true);

-- Function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update the updated_at column
CREATE TRIGGER update_campaign_entries_updated_at 
    BEFORE UPDATE ON public.campaign_entries 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column(); 