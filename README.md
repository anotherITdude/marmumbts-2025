# Marmum 2025 Campaign

A Next.js 15.1 application for the Marmum 2025 campaign with Arabic and English language support, built with Supabase for database and file storage.

## Features

- ✅ Next.js 15.1 with App Router
- ✅ React 19 support
- ✅ Supabase integration for database and file storage
- ✅ Arabic and English localization
- ✅ Form validation with Yup
- ✅ File upload with Supabase Storage
- ✅ Responsive design with Tailwind CSS
- ✅ TypeScript support

## Tech Stack

- **Framework**: Next.js 15.1
- **Database**: Supabase (PostgreSQL)
- **Storage**: AWS S3
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Yup validation
- **UI Components**: Radix UI
- **Language**: TypeScript

## Getting Started

### 1. Prerequisites

- Node.js 18+
- A Supabase account and project

### 2. Clone and Install

```bash
# Navigate to the marmum-2025 directory
cd marmum-2025

# Install dependencies
npm install
```

### 3. Environment Setup

1. Copy the environment template:

   ```bash
   cp env.example .env.local
   ```

2. Fill in your Supabase and AWS S3 credentials in `.env.local`:

   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   DATABASE_URL=your_supabase_database_url

   # AWS S3 Configuration
   REGION=your_aws_region
   S3_BUCKET_NAME=your_s3_bucket_name
   ACCESS_KEY_ID=your_aws_access_key_id
   SECRET_ACCESS_KEY=your_aws_secret_access_key
   ```

### 4. Supabase Setup

#### Create Database Table

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Run the SQL commands from `supabase-schema.sql` to create the table and policies

#### Configure AWS S3 Bucket

1. Create an S3 bucket in your AWS console
2. Configure CORS policy to allow uploads from your domain:

```json
[
  {
    "AllowedHeaders": ["Authorization", "Content-Type", "*"],
    "AllowedMethods": ["GET", "POST", "PUT"],
    "AllowedOrigins": ["http://localhost:3000", "https://yourdomain.com"],
    "ExposeHeaders": ["ETag"],
    "MaxAgeSeconds": 3000
  }
]
```

3. Set up appropriate IAM permissions for your AWS access keys
4. Make sure your bucket allows public read access for uploaded files

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
marmum-2025/
├── app/                    # Next.js App Router
│   ├── api/entries/       # API routes for form submission
│   ├── ar/                # Arabic language route
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
├── lib/                   # Utility functions and configurations
│   ├── supabase.ts       # Supabase client
│   ├── database.types.ts # Database type definitions
│   └── utils.ts          # Utility functions
├── locales/              # Internationalization files
│   ├── ar.js            # Arabic translations
│   └── en.js            # English translations
├── public/               # Static assets
├── schemas/              # Form validation schemas
└── Fonts/               # Custom fonts
```

## Database Schema

The application uses a single table `campaign_entries` with the following fields:

- `id` (UUID, Primary Key)
- `name` (Text, Required)
- `mobile` (Text, Required)
- `email` (Text, Required)
- `emirate` (Text, Required)
- `eid` (Text, Required) - Emirates ID
- `receipt` (Text, Required) - File URL
- `lan` (Text, Default: 'en') - Language preference
- `selected` (Boolean, Default: false) - Admin selection status
- `info` (Text, Default: '') - Additional information
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

## Languages

The application supports:

- **English** (Default): `http://localhost:3000/`
- **Arabic**: `http://localhost:3000/ar`

## Build and Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Contributing

1. Follow the existing code style
2. Use TypeScript for type safety
3. Test both Arabic and English locales
4. Ensure responsive design works on all devices

## Notes

- The application requires users to upload purchase receipts
- All uploaded files are stored in AWS S3
- Form validation is handled client-side and server-side
- The application uses custom Arabic and English fonts
- Row Level Security (RLS) is enabled on the database table
