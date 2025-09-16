import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import oxlintPlugin from 'vite-plugin-oxlint'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), oxlintPlugin(), tailwindcss(), tsconfigPaths()],
})
