// Vite Configuration
import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        port: 3000,
        open: true
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: true
    },
    resolve: {
        alias: {
            'three': 'three/build/three.module.js'
        }
    }
});
