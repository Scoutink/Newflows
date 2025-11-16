# Deployment Instructions for Plesk

## ✅ Ready to Deploy!

All files are ready. **No build process required** - just upload and go!

## 📦 What's Included

### Complete Pages (6 pages)
- ✅ `index.html` - Platform overview
- ✅ `templates.html` - Templates manual (complete)
- ✅ `workflows.html` - Workflows manual (complete)
- ✅ `boards.html` - Boards manual (complete)
- ✅ `use-cases.html` - Use cases and examples
- ✅ `quick-start.html` - 5-minute quick start guide

### Complete CSS (7 files)
- ✅ `css/variables.css` - Design tokens
- ✅ `css/base.css` - Base styles
- ✅ `css/components.css` - Reusable components
- ✅ `css/layout.css` - Layout system
- ✅ `css/3d-scene.css` - 3D scene styles
- ✅ `css/animations.css` - Animation styles
- ✅ `css/content.css` - Content page styles

### Complete JavaScript (7 files)
- ✅ `js/main.js` - Main entry point
- ✅ `js/theme.js` - Theme management
- ✅ `js/navigation.js` - Navigation handling
- ✅ `js/search.js` - Search functionality
- ✅ `js/scene.js` - Three.js 3D scene
- ✅ `js/animations.js` - Scroll animations
- ✅ `js/markdown.js` - Markdown processing

## 🚀 Deployment via Plesk

### Step 1: Prepare Files
1. Create a ZIP file of the entire `interactive-docs` folder
2. Or prepare to upload files individually

### Step 2: Upload to Plesk
1. Log into Plesk
2. Navigate to **File Manager**
3. Go to your domain's document root (usually `httpdocs` or `public_html`)
4. Upload the ZIP file OR upload the `interactive-docs` folder

### Step 3: Extract (if ZIP)
1. Right-click the ZIP file in Plesk File Manager
2. Select **Extract**
3. Files will be extracted maintaining folder structure

### Step 4: Test
1. Open browser
2. Navigate to: `https://yourdomain.com/interactive-docs/`
3. You should see the overview page with 3D scene

## ✅ Verification Checklist

After deployment, verify:

- [ ] Main page (`index.html`) loads
- [ ] 3D scene appears on left side
- [ ] Navigation links work
- [ ] Theme toggle works (dark/light)
- [ ] All 6 pages are accessible
- [ ] No console errors in browser

## 📁 Expected File Structure

```
yourdomain.com/
└── interactive-docs/
    ├── index.html
    ├── templates.html
    ├── workflows.html
    ├── boards.html
    ├── use-cases.html
    ├── quick-start.html
    ├── css/
    │   ├── variables.css
    │   ├── base.css
    │   ├── components.css
    │   ├── layout.css
    │   ├── 3d-scene.css
    │   ├── animations.css
    │   └── content.css
    ├── js/
    │   ├── main.js
    │   ├── theme.js
    │   ├── navigation.js
    │   ├── search.js
    │   ├── scene.js
    │   ├── animations.js
    │   └── markdown.js
    └── (documentation files)
```

## 🌐 Browser Support

Works on:
- ✅ Chrome 90+ (Recommended)
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

**Note:** Import maps require Chrome 89+, Edge 89+, or Safari 16.4+

## 🔧 No Configuration Needed

- ✅ All dependencies via CDN (no npm install)
- ✅ No build process required
- ✅ No server-side configuration
- ✅ Works with any static file server

## 🎯 Features Working

- ✅ Interactive 3D scene (Three.js)
- ✅ Theme toggle (dark/light)
- ✅ Navigation system
- ✅ Search functionality
- ✅ Responsive design
- ✅ Smooth animations
- ✅ Code syntax highlighting
- ✅ Copy-to-clipboard for code

## 📝 Notes

- All JavaScript uses ES6 modules
- All dependencies loaded from CDN
- No local node_modules needed
- Works offline after initial load (except CDN resources)

## 🐛 Troubleshooting

**If 3D scene doesn't load:**
- Check browser console for errors
- Ensure WebGL is enabled
- Try Chrome browser

**If styles don't load:**
- Check file paths are correct
- Verify CSS files are in `css/` folder

**If JavaScript errors:**
- Check browser console
- Verify all JS files are in `js/` folder
- Ensure import map is in HTML

---

**That's it!** Upload, extract, and test. No complicated setup! 🎉
