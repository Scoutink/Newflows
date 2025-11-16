# Interactive 3D Web Manual

Interactive 3D documentation for the Newflows compliance management platform.

## 🚀 Quick Start

### Option 1: Using Vite (Recommended)

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Option 2: Simple HTTP Server

```bash
# Using Python
python3 -m http.server 8000

# Or using Node.js http-server
npx http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

## 📁 Project Structure

```
interactive-docs/
├── index.html          # Main entry point
├── css/
│   ├── variables.css  # CSS custom properties
│   ├── base.css       # Base styles and reset
│   ├── components.css # Reusable components
│   ├── layout.css     # Layout and grid
│   ├── 3d-scene.css   # 3D scene styles
│   └── animations.css # Animation styles
├── js/
│   ├── main.js        # Application entry point
│   ├── theme.js       # Theme management
│   ├── navigation.js  # Navigation handling
│   ├── search.js      # Search functionality
│   ├── scene.js       # Three.js scene
│   └── animations.js  # Scroll animations
├── content/           # Markdown content (to be added)
└── assets/            # Images, icons, etc. (to be added)
```

## 🛠️ Technology Stack

- **Three.js** - 3D graphics and visualization
- **GSAP** - Advanced animations
- **Fuse.js** - Fuzzy search
- **Marked** - Markdown processing
- **Prism.js** - Code syntax highlighting

## 📋 Features

- ✅ 3D visualization of three-tier system
- ✅ Interactive scene controls
- ✅ Dark/light theme toggle
- ✅ Search functionality
- ✅ Responsive design
- ✅ Smooth animations
- ✅ Scroll reveal effects

## 🎯 Next Steps

1. Add markdown content processing
2. Create individual manual pages (Templates, Workflows, Boards)
3. Enhance 3D visualizations
4. Add interactive tutorials
5. Implement guided tours

## 📚 Documentation

See the main [documentation folder](../documentation/) for:
- Vision document
- Implementation roadmap
- Content outlines

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📝 Notes

- The 3D scene uses WebGL, so a modern browser is required
- For best performance, use a dedicated graphics card
- Mobile devices may have reduced 3D performance
