# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
Please find some snapshots for **RecipeHub** app with attached performance report using npx-unlighthouse [Instead of running Lighthouse one page at a time, Unlighthouse scans your entire site in one go and scores every page.] Full command => **npx unlighthouse --site**

**List view mode**
<img width="960" alt="image" src="https://github.com/user-attachments/assets/140b6152-1e99-4030-92a7-500616acbfb0" />

**Grid view mode**
<img width="960" alt="image" src="https://github.com/user-attachments/assets/a141a7c7-beb7-450b-8d44-2f9110934fc0" />

**Detailed recipe 1**
<img width="960" alt="image" src="https://github.com/user-attachments/assets/ac186a56-93f5-4a92-afa2-9a114ad0c656" />

**Detailed recipe 2**
<img width="960" alt="image" src="https://github.com/user-attachments/assets/bda2b683-6f47-49ba-82e4-636dd0e0a550" />

**Performance report**
<img width="960" alt="image" src="https://github.com/user-attachments/assets/85b9a9d1-3063-4aca-923e-73db8e19e583" />
