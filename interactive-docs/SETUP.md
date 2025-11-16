# Setup Guide

## Quick Start (No Build Required)

The simplest way to run the interactive documentation is using a local HTTP server:

### Python
```bash
cd interactive-docs
python3 -m http.server 8000
```

### Node.js
```bash
cd interactive-docs
npx http-server -p 8000
```

### PHP
```bash
cd interactive-docs
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## With Vite (For Development)

If you want to use Vite for hot module replacement:

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Browser Requirements

- Modern browser with ES6 module support
- WebGL support for 3D graphics
- Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

## Troubleshooting

### 3D Scene Not Loading
- Check browser console for errors
- Ensure WebGL is enabled
- Try a different browser

### Import Errors
- Make sure you're using a local server (not file://)
- Check that import maps are supported (Chrome 89+, Edge 89+, Safari 16.4+)

### Module Not Found
- Clear browser cache
- Check network tab for failed requests
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

## Next Steps

1. Add content pages (templates.html, workflows.html, boards.html)
2. Integrate markdown content
3. Enhance 3D visualizations
4. Add interactive tutorials
