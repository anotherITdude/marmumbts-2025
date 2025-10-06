# Campaign Management Guide

## Campaign Status Control

The Marmum 2025 campaign now has multiple layers of protection to prevent new entries when the campaign is closed.

### Current Status: **CAMPAIGN CLOSED** ❌

### How to Control Campaign Status

#### 1. **Primary Control** - Configuration File

Edit `/lib/config.ts`:

```typescript
export const CAMPAIGN_CONFIG = {
  ACTIVE: false, // Set to true to reopen campaign
  END_DATE: new Date("2025-01-31"),
  // ... rest of config
};
```

#### 2. **What Happens When Campaign is Closed**

**Frontend Changes:**

- Registration form is replaced with "Campaign Ended" message
- Users see a friendly closure notice in both English and Arabic
- No form fields are accessible

**API Protection:**

- `/api/entries` endpoint returns 403 error for new submissions
- Returns appropriate error messages in both languages

**Database Protection (Optional):**

- Run the SQL commands in `campaign-closure-policies.sql` in your Supabase dashboard
- This adds database-level protection against new entries

### How to Reopen Campaign (if needed)

1. **Update Configuration:**

   ```typescript
   // In /lib/config.ts
   ACTIVE: true,
   END_DATE: new Date('2025-12-31'), // Update end date
   ```

2. **If you applied database policies:**
   ```sql
   -- In Supabase SQL editor
   DROP POLICY IF EXISTS "Campaign ended - no inserts" ON public.campaign_entries;
   CREATE POLICY "Allow public insert" ON public.campaign_entries
       FOR INSERT WITH CHECK (true);
   ```

### Testing Campaign Closure

1. **Frontend Test:** Visit the website - you should see "Campaign Ended" instead of the registration form
2. **API Test:** Try to submit to `/api/entries` - should return 403 error
3. **Database Test:** Try to insert directly into `campaign_entries` table (should fail if policies applied)

### Files Modified

- ✅ `/lib/config.ts` - Campaign configuration
- ✅ `/app/api/entries/route.ts` - API protection
- ✅ `/components/CampaignEnded.tsx` - Closure message component
- ✅ `/components/RegistrationSection.tsx` - Conditional rendering
- ✅ `/campaign-closure-policies.sql` - Database protection (optional)

### Deployment Notes

After deploying these changes:

1. The campaign will be immediately closed to new entries
2. Existing entries in the database remain untouched
3. Admin panel (if any) should still work for viewing/managing existing entries
4. The website will show a professional "campaign ended" message

### Emergency Reactivation

If you need to quickly reactivate the campaign, simply change `ACTIVE: false` to `ACTIVE: true` in `/lib/config.ts` and redeploy.
