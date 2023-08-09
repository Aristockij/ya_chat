import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
    root: resolve(__dirname, 'src'),
    build: {
        outDir: resolve(__dirname, 'dist'),
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, '/index.html'),
                nested1: resolve(__dirname, '/404.html'),
                nested2: resolve(__dirname, '/500.html'),
                nested3: resolve(__dirname, '/change-info.html'),
                nested4: resolve(__dirname, '/change-password.html'),
                nested5: resolve(__dirname, '/chat.html'),
                nested6: resolve(__dirname, '/profile.html'),
                nested: resolve(__dirname, '/signin.html'),
                nested8: resolve(__dirname, '/signup.html'),
            },
        },
    },
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'src/partials'),
            context: {
                username: 'John doe!',
            },
        }),
    ],
})
