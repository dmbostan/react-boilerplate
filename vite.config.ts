import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import * as path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
        { find: '@atoms', replacement: path.resolve(__dirname, 'src/components/atoms') },
        { find: '@molecules', replacement: path.resolve(__dirname, 'src/components/molecules') },
        { find: '@organisms', replacement: path.resolve(__dirname, 'src/components/organisms') },
        { find: '@templates', replacement: path.resolve(__dirname, 'src/components/templates') },
        { find: '@pages', replacement: path.resolve(__dirname, 'src/components/pages') },
        { find: '@hooks', replacement: path.resolve(__dirname, 'src/components/hooks') },
        { find: '@context', replacement: path.resolve(__dirname, 'src/components/context') },
        { find: '@assets', replacement: path.resolve(__dirname, 'src/components/assets') },
        { find: '@styles', replacement: path.resolve(__dirname, 'src/components/styles') },
        { find: '@utils', replacement: path.resolve(__dirname, 'src/components/utils') },
    ],
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts']
  }
})
