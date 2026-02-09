import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'  // لازم تضيف هذا

export default defineConfig({
  plugins: [react()],
  base: '/LamaProfile/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  // <-- هذا يربط @ بمجلد src
    },
  },
})
