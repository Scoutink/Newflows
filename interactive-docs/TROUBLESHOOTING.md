# Troubleshooting Guide

## Loading Spinner Stuck

If you see the loading spinner that never disappears:

### Quick Fix
1. Open browser console (F12)
2. Check for JavaScript errors
3. The page should still work - the overlay is just cosmetic

### Common Causes

**1. JavaScript Module Loading Error**
- Check browser console for import errors
- Ensure all JS files are in the `js/` folder
- Verify file paths are correct

**2. Import Map Not Supported**
- Requires Chrome 89+, Edge 89+, or Safari 16.4+
- Try using Chrome browser

**3. CDN Blocked**
- Some networks block CDN resources
- Check if Three.js, GSAP, or other CDN resources are accessible

### Solutions

**Solution 1: Check Browser Console**
```javascript
// Open browser console (F12) and check for errors
// Common errors:
// - Failed to load module
// - CORS errors
// - Network errors
```

**Solution 2: Verify File Structure**
```
interactive-docs/
├── index.html
├── js/
│   ├── main.js
│   ├── theme.js
│   ├── navigation.js
│   ├── search.js
│   ├── scene.js
│   ├── animations.js
│   └── markdown.js
└── css/
    └── (all CSS files)
```

**Solution 3: Test Individual Files**
1. Open `index.html` directly in browser
2. Check Network tab in DevTools
3. Verify all files are loading (no 404 errors)

**Solution 4: Fallback Timer**
The page includes a fallback timer that hides the loading overlay after 3 seconds, even if JavaScript fails. If you see content after 3 seconds, the page is working - just the overlay didn't hide properly.

## 3D Scene Not Loading

**Symptoms:**
- Blank area where 3D scene should be
- Console errors about WebGL or Three.js

**Solutions:**
1. Check if WebGL is enabled in browser
2. Try a different browser (Chrome recommended)
3. Check browser console for Three.js errors
4. Verify import map is in HTML

## Styles Not Loading

**Symptoms:**
- Page looks unstyled
- Missing colors, layout broken

**Solutions:**
1. Check CSS files are in `css/` folder
2. Verify file paths in HTML are correct
3. Check browser console for 404 errors on CSS files
4. Clear browser cache

## Navigation Not Working

**Symptoms:**
- Links don't work
- Pages don't load

**Solutions:**
1. Check all HTML files are in the same directory
2. Verify file names match links
3. Check browser console for errors

## Theme Toggle Not Working

**Symptoms:**
- Theme doesn't change
- No visual difference

**Solutions:**
1. Check `js/theme.js` is loaded
2. Check browser console for errors
3. Verify localStorage is enabled in browser

## Search Not Working

**Symptoms:**
- Search overlay doesn't open
- No search results

**Solutions:**
1. Check `js/search.js` is loaded
2. Verify Fuse.js CDN is accessible
3. Check browser console for errors

## General Debugging Steps

1. **Open Browser Console (F12)**
   - Look for red error messages
   - Check Network tab for failed requests

2. **Verify File Structure**
   - All files in correct folders
   - File names match exactly (case-sensitive)

3. **Check File Permissions**
   - Files should be readable (644)
   - Folders should be executable (755)

4. **Test in Different Browser**
   - Chrome is recommended
   - Firefox, Safari, Edge should also work

5. **Clear Browser Cache**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - Or clear cache in browser settings

## Still Having Issues?

1. Check browser console for specific errors
2. Verify all files uploaded correctly
3. Test with a simple HTTP server locally first
4. Check server error logs if available

---

**Remember:** The fallback timer will hide the loading overlay after 3 seconds even if JavaScript fails. If you see content, the page is working!
