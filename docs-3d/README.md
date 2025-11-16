# Newflows Interactive 3D Documentation

An immersive, interactive 3D documentation experience for the Newflows platform.

## 🚀 Quick Start

Simply open `index.html` in a modern web browser:

```bash
# Using Python's built-in server
python3 -m http.server 8000

# Or using Node.js http-server
npx http-server -p 8000

# Then open: http://localhost:8000/docs-3d/
```

## ✨ Features

### Current Implementation (MVP)
- ✅ **3D Scene** - Full Three.js environment with dynamic lighting
- ✅ **Three Islands** - Templates (Green), Workflows (Purple), Boards (Pink)
- ✅ **Smooth Navigation** - Camera fly-to animations between islands
- ✅ **Particle System** - 1000+ animated particles with mouse interaction
- ✅ **Glassmorphism UI** - Beautiful frosted glass interface elements
- ✅ **Search Functionality** - Quick search with Ctrl/Cmd + K
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile
- ✅ **Keyboard Navigation** - Full keyboard support
- ✅ **Help Modal** - Keyboard shortcuts reference
- ✅ **Content Management** - Structured documentation system
- ✅ **Platform Data Integration** - Loads real templates, workflows, and boards

### Visual Design
- Deep space aesthetic with gradient backgrounds
- Smooth animations and transitions (60fps target)
- Floating navigation orb with expanding menu
- Content panels that slide in from the right
- Pulsing, glowing island markers
- Ambient particle effects

## 🎮 Controls

### Mouse
- **Click & Drag** - Rotate camera view
- **Scroll** - Zoom in/out
- **Click Islands** - Navigate to island content
- **Click Markers** - View detailed information

### Keyboard
- **Ctrl/Cmd + K** - Open search
- **Esc** - Close modals/panels
- **Tab** - Navigate focusable elements
- **Arrow Keys** - Navigate between islands
- **H** - Toggle help modal

## 📁 Project Structure

```
docs-3d/
├── index.html              # Main entry point
├── README.md               # This file
├── src/
│   ├── main.js            # Application entry point
│   ├── data/
│   │   ├── content.js     # Documentation content manager
│   │   └── platform-data.js  # Platform data loader
│   └── styles/
│       ├── main.css       # Base styles & design system
│       └── components.css # UI component styles
├── assets/
│   ├── models/            # 3D models (future)
│   ├── textures/          # Textures & images
│   ├── animations/        # Lottie animations (future)
│   └── fonts/             # Custom fonts
└── dist/                  # Built/minified files (future)
```

## 🎨 Design System

### Colors
- **Deep Space Blue**: `#0a0e27` (Primary background)
- **Electric Cyan**: `#00d9ff` (Accents & highlights)
- **Soft Purple**: `#8b5cf6` (Workflows)
- **Coral Pink**: `#ec4899` (Boards)
- **Mint Green**: `#10b981` (Templates)

### Typography
- **Font Family**: Inter, SF Pro, System UI
- **Headings**: 700-800 weight, -0.02em letter-spacing
- **Body**: 400-500 weight, 1.6 line-height
- **Code**: Fira Code, Monaco (monospace)

### Spacing Scale
- **XS**: 0.25rem (4px)
- **SM**: 0.5rem (8px)
- **MD**: 1rem (16px)
- **LG**: 1.5rem (24px)
- **XL**: 2rem (32px)
- **2XL**: 3rem (48px)
- **3XL**: 4rem (64px)

## 🛠️ Technologies

### Core
- **Three.js** (r160) - 3D rendering engine
- **GSAP** (3.12) - Advanced animations
- **Vanilla JavaScript** - No framework overhead
- **CSS3** - Modern styling with custom properties

### Libraries
- **Marked.js** - Markdown parsing
- **Highlight.js** - Syntax highlighting
- **OrbitControls** - Camera controls

## 🎯 Islands

### Templates Island (Left, Green)
- Position: (-20, 0, 0)
- Geometry: Rotating cube
- Content: Template builder, level hierarchies, property configuration
- Color Theme: Mint green (#10b981)

### Workflows Island (Center, Purple)
- Position: (0, 0, 0)
- Geometry: Rotating sphere
- Content: Workflow creation, structure building, export
- Color Theme: Soft purple (#8b5cf6)

### Boards Island (Right, Pink)
- Position: (20, 0, 0)
- Geometry: Rotating torus
- Content: Kanban boards, cards, milestones, dynamic lists
- Color Theme: Coral pink (#ec4899)

## 📖 Content Structure

Documentation is organized into four main sections:

1. **Platform Overview** - Introduction and three-tier system
2. **Templates Manual** - Template design and configuration
3. **Workflows Manual** - Workflow creation and management
4. **Boards Manual** - Board execution and collaboration

Each section contains multiple chapters accessible via navigation.

## 🔍 Search

The search system supports:
- Keyword matching across all documentation
- Real-time results as you type
- Navigate to content with single click
- Keyboard-only operation
- Fuzzy matching (future enhancement)

## 🌐 Browser Support

### Recommended
- Chrome 90+
- Firefox 88+
- Edge 90+
- Safari 14+

### Requirements
- WebGL support
- ES6 modules support
- CSS Grid & Flexbox
- Custom properties (CSS variables)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Mobile devices get a simplified 2.5D experience with touch controls.

## ⚡ Performance

### Target Metrics
- **FPS**: Stable 60fps during all interactions
- **Load Time**: < 2 seconds to interactive
- **Response Time**: < 100ms for UI interactions
- **Particle Count**: Adaptive based on device capability

### Optimization Techniques
- Lazy loading for sections
- Geometry instancing
- Texture compression
- Frustum culling
- LOD (Level of Detail) for distant objects

## 🎓 Learning Resources

### Three.js
- [Official Documentation](https://threejs.org/docs/)
- [Three.js Journey](https://threejs-journey.com/)
- [Examples](https://threejs.org/examples/)

### GSAP
- [Documentation](https://greensock.com/docs/)
- [CodePen Examples](https://codepen.io/GreenSock/)

## 🐛 Troubleshooting

### Issue: Low FPS
**Solution**: Reduce particle count in `main.js` (line ~255)
```javascript
const particleCount = 500; // Reduced from 1000
```

### Issue: Content not loading
**Solution**: Check browser console for errors. Ensure you're running from a server (not file://)

### Issue: WebGL not supported
**Solution**: Update your browser or graphics drivers

### Issue: Search not working
**Solution**: Ensure content.js is loaded properly. Check console for errors.

## 🚧 Future Enhancements

### Phase 2 (Planned)
- [ ] Interactive demos for Templates/Workflows/Boards
- [ ] Animated flow diagrams
- [ ] Guided tours with step-by-step walkthroughs
- [ ] User progress tracking
- [ ] Bookmarking system

### Phase 3 (Planned)
- [ ] 3D workflow tree visualization
- [ ] Live board Kanban demo
- [ ] Template builder integration
- [ ] Code playground
- [ ] Video tutorials

### Phase 4 (Future)
- [ ] User accounts and progress tracking
- [ ] Community contributions
- [ ] Multi-language support
- [ ] AI chat assistant
- [ ] Analytics dashboard

## 📄 License

Part of the Newflows platform documentation system.

## 🤝 Contributing

This is the initial implementation. Enhancements and improvements welcome!

## 📞 Support

For issues or questions, refer to the main Newflows platform documentation.

---

**Version**: 1.0.0 (MVP)
**Last Updated**: November 16, 2025
**Status**: ✅ Functional MVP with core features

**Built with ❤️ using Three.js, GSAP, and modern web technologies**
