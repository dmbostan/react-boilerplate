import {defineConfig} from 'vitest/config'
import react from '@vitejs/plugin-react'
import * as path from "path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            {find: '@atoms', replacement: path.resolve(__dirname, 'src/components/atoms')},
            {find: '@molecules', replacement: path.resolve(__dirname, 'src/components/molecules')},
            {find: '@organisms', replacement: path.resolve(__dirname, 'src/components/organisms')},
            {find: '@templates', replacement: path.resolve(__dirname, 'src/components/templates')},
            {find: '@pages', replacement: path.resolve(__dirname, 'src/components/pages')},
            {find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks')},
            {find: '@context', replacement: path.resolve(__dirname, 'src/context')},
            {find: '@assets', replacement: path.resolve(__dirname, 'src/assets')},
            {find: '@styles', replacement: path.resolve(__dirname, 'src/styles')},
            {find: '@utils', replacement: path.resolve(__dirname, 'src/utils')},
        ],
    },
    base: '/react-boilerplate',
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./vitest.setup.ts'],
        coverage: {
            enabled: true,
            provider: 'v8',
            all: true,
            include: ['src/'],
            exclude: ['**/*.types.ts', '**/*.d.ts', '**/**/index.ts', 'src/main.tsx'],
            reporter: ['text', 'html', 'clover', 'json'],
            statements: 90,
            branches: 90,
            functions: 90,
            lines: 90,
        },
    },
})
