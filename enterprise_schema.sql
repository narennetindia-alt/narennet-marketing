-- 🚀 NARENNET ENTERPRISE ADMIN MIGRATION
-- Run this in your Supabase SQL Editor: https://supabase.com/dashboard/project/gadpfzwfwutqprsmuphm/sql

-- Enable Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Profiles Table
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL PRIMARY KEY,
  full_name text,
  role text DEFAULT 'admin' CHECK (role IN ('super_admin', 'admin', 'editor')),
  created_at timestamp with time zone DEFAULT now()
);

-- 2. Blogs Table (Updated)
CREATE TABLE IF NOT EXISTS public.blogs (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text,
  excerpt text,
  category text DEFAULT 'Tech',
  read_time text DEFAULT '5 min read',
  cover_image text,
  status text DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  author_id uuid REFERENCES public.profiles(id),
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- 3. Leads Table
CREATE TABLE IF NOT EXISTS public.leads (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  message text,
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'spam', 'archived')),
  created_at timestamp with time zone DEFAULT now()
);

-- 4. Services Table
CREATE TABLE IF NOT EXISTS public.services (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  title text NOT NULL,
  description text,
  price text,
  icon text,
  active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now()
);

-- Add missing columns to services table if they don't exist
ALTER TABLE public.services ADD COLUMN IF NOT EXISTS category text;
ALTER TABLE public.services ADD COLUMN IF NOT EXISTS type text CHECK (type IN ('solution', 'plan'));
ALTER TABLE public.services ADD COLUMN IF NOT EXISTS features text[];
ALTER TABLE public.services ADD COLUMN IF NOT EXISTS image text;
ALTER TABLE public.services ADD COLUMN IF NOT EXISTS updated_at timestamp with time zone DEFAULT now();

-- 5. FAQs Table
CREATE TABLE IF NOT EXISTS public.faqs (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  question text NOT NULL,
  answer text NOT NULL,
  category text DEFAULT 'General',
  display_order int DEFAULT 0,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- 6. Settings Table
CREATE TABLE IF NOT EXISTS public.settings (
  id int PRIMARY KEY DEFAULT 1,
  site_name text DEFAULT 'NarenNet',
  logo text,
  seo_title text,
  seo_description text,
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT single_row CHECK (id = 1)
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;


-- Security Policies
DROP POLICY IF EXISTS "Public profiles are viewable by everyone." ON public.profiles;
CREATE POLICY "Public profiles are viewable by everyone." ON public.profiles FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can update own profile." ON public.profiles;
CREATE POLICY "Users can update own profile." ON public.profiles FOR UPDATE USING (auth.uid() = id);

DROP POLICY IF EXISTS "Published blogs are viewable by everyone." ON public.blogs;
CREATE POLICY "Published blogs are viewable by everyone." ON public.blogs FOR SELECT USING (status = 'published');

DROP POLICY IF EXISTS "Authenticated users can manage blogs." ON public.blogs;
CREATE POLICY "Authenticated users can manage blogs." ON public.blogs FOR ALL USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Public can insert leads." ON public.leads;
CREATE POLICY "Public can insert leads." ON public.leads FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Authenticated users can manage leads." ON public.leads;
CREATE POLICY "Authenticated users can manage leads." ON public.leads FOR ALL USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Services are viewable by everyone." ON public.services;
CREATE POLICY "Services are viewable by everyone." ON public.services FOR SELECT USING (true);

DROP POLICY IF EXISTS "Authenticated users can manage services." ON public.services;
CREATE POLICY "Authenticated users can manage services." ON public.services FOR ALL USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS "FAQs are viewable by everyone." ON public.faqs;
CREATE POLICY "FAQs are viewable by everyone." ON public.faqs FOR SELECT USING (true);

DROP POLICY IF EXISTS "Authenticated users can manage faqs." ON public.faqs;
CREATE POLICY "Authenticated users can manage faqs." ON public.faqs FOR ALL USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Settings are viewable by everyone." ON public.settings;
CREATE POLICY "Settings are viewable by everyone." ON public.settings FOR SELECT USING (true);

DROP POLICY IF EXISTS "Authenticated users can manage settings." ON public.settings;
CREATE POLICY "Authenticated users can manage settings." ON public.settings FOR ALL USING (auth.role() = 'authenticated');

-- Trigger to create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user() 
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, role)
  VALUES (new.id, new.raw_user_meta_data->>'full_name', 'admin');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
