# Installation & Deployment Guide

## 🚀 Simple Deployment (No Build Required)

This documentation is designed to work **directly from static files** - no build process, no npm install, no compilation needed!

## 📦 What You Need

- A web server (Apache, Nginx, or any static file server)
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)

## 📁 File Structure

```
interactive-docs/
├── index.html              # Main overview page
├── templates.html          # Templates manual
├── workflows.html          # Workflows manual
├── boards.html             # Boards manual
├── use-cases.html          # Use cases page
├── quick-start.html        # Quick start guide
├── css/                    # All CSS files
│   ├── variables.css
│   ├── base.css
│   ├── components.css
│   ├── layout.css
│   ├── 3d-scene.css
│   ├── animations.css
│   └── content.css
├── js/                     # All JavaScript files
│   ├── main.js
│   ├── theme.js
│   ├── navigation.js
│   ├── search.js
│   ├── scene.js
│   ├── animations.js
│   └── markdown.js
└── README.md
```

## 🔧 Deployment Steps

### Option 1: Plesk File Manager

1. **Upload Files:**
   - Log into Plesk
   - Navigate to File Manager
   - Upload the entire `interactive-docs` folder to your domain directory
   - Or extract a ZIP file containing all files

2. **Set Permissions:**
   - Ensure files are readable (644 for files, 755 for directories)
   - Plesk usually handles this automatically

3. **Access:**
   - Navigate to: `https://yourdomain.com/interactive-docs/`
   - Or: `https://yourdomain.com/interactive-docs/index.html`

### Option 2: Direct Upload via FTP/SFTP

1. Connect to your server via FTP/SFTP
2. Upload all files maintaining the folder structure
3. Ensure `index.html` is in the root of the `interactive-docs` folder
4. Access via web browser

### Option 3: Extract ZIP Archive

1. Create a ZIP file of the `interactive-docs` folder
2. Upload ZIP to Plesk File Manager
3. Extract in place
4. Access via web browser

## ✅ Verification

After deployment, verify:

1. **Main Page Loads:**
   - Open `https://yourdomain.com/interactive-docs/`
   - Should see the overview page with 3D scene

2. **3D Scene Works:**
   - 3D visualization should appear on the left
   - Should be able to drag to rotate, scroll to zoom

3. **Navigation Works:**
   - Click navigation links
   - Pages should load correctly

4. **Theme Toggle:**
   - Click theme toggle button
   - Should switch between light/dark themes

## 🌐 Browser Requirements

- **Chrome 90+** (Recommended)
- **Firefox 88+**
- **Safari 14+**
- **Edge 90+**

**Note:** Import maps require:
- Chrome 89+
- Edge 89+
- Safari 16.4+

For older browsers, consider using a bundler (optional).

## 📝 Dependencies (All via CDN)

All dependencies are loaded from CDN - no local installation needed:

- **Three.js** - 3D graphics (via CDN)
- **GSAP** - Animations (via CDN)
- **Font Awesome** - Icons (via CDN)
- **Google Fonts** - Typography (via CDN)
- **Prism.js** - Code highlighting (via CDN)

## 🔍 Troubleshooting

### 3D Scene Not Loading
- Check browser console for errors
- Ensure WebGL is enabled in browser
- Try a different browser
- Check that Three.js CDN is accessible

### Import Maps Not Working
- Use Chrome 89+, Edge 89+, or Safari 16.4+
- Or use a bundler (optional - not required)

### Styles Not Loading
- Check file paths are correct
- Ensure CSS files are in `css/` folder
- Check browser console for 404 errors

### JavaScript Errors
- Check browser console
- Ensure all JS files are in `js/` folder
- Verify import map is in HTML

## 🎯 Quick Test

1. Upload files to server
2. Open `index.html` in browser
3. You should see:
   - Navigation bar at top
   - 3D scene on left
   - Content on right
   - Theme toggle working

## 📞 Support

If you encounter issues:
1. Check browser console for errors
2. Verify all files are uploaded correctly
3. Check file permissions
4. Ensure web server is running

---

**That's it!** No build process, no npm install, just upload and go! 🚀
