# Public Directory Cleanup Guide

## ✅ Safe to Remove (Old Laravel Mix Artifacts)

1. **`public/js/`** - Old Laravel Mix JavaScript files (645 files)
   - Replaced by Vite build in `public/build/js/`
   - ✅ Already updated in code

2. **`public/css/`** - Old Laravel Mix CSS files
   - Replaced by Vite build in `public/build/css/`
   - ✅ Already updated in code

3. **`public/mix-manifest.json`** - Old Laravel Mix manifest (if exists)
   - Replaced by `public/build/manifest.json`

4. **`public/hot`** - Vite HMR file (auto-generated)
   - Can be deleted, regenerated when running `npm run dev`

## ⚠️ Test Files (Can Remove)

5. **`public/test.php`** - Encrypted/obfuscated PHP file
   - Appears to be a test file with PHP Bolt encryption
   - Not referenced in code

6. **`public/528a805699c4d876d449e0dfd885d261.wav`** - Random audio file
   - Likely a test file
   - Not referenced in code

## ⚠️ Keep (But Review)

7. **`public/upg.php`** - GitHub webhook handler
   - ⚠️ Referenced in `UpdateSettingCommand.php` line 151
   - Used for automated deployments
   - **Decision**: Keep if using GitHub webhooks, remove if not

## ✅ Must Keep (Active Use)

- **`public/images/`** - Used by `global_asset('images/...')` in views
- **`public/fonts/`** - Referenced in UpdateSettingCommand
- **`public/installer/`** - Used by installer views
- **`public/vendor/telescope/`** - Laravel Telescope assets
- **`public/index.php`** - Essential Laravel entry point
- **`public/.htaccess`** - Essential for routing
- **`public/robots.txt`** - SEO file
- **`public/favicon.ico`** - Favicon
- **`public/web.config`** - IIS config (Windows servers)
- **`public/demo-csv-file/`** - Demo/import files
- **`public/quotations/`** - Generated PDFs storage
- **`public/uploads/`** - User uploads
- **`public/print/`** - Print CSS files
- **`public/storage/`** - Storage symlink
- **`public/build/`** - Vite build output (KEEP!)

## 📝 Notes

- Vite copies files from `public/` to `public/build/` during build
- Some directories exist in both places (duplicates)
- Images are served from `public/images/` via `global_asset()` helper
- Fonts might be duplicated - check if `public/fonts/` is actually needed

