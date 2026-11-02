# Framer Motion Templates Vault ✦

A curated repository of production-grade, highly animated Framer templates engineered with **Three.js WebGL canvases, custom shaders, interactive 3D physics, and Framer Motion dynamics**.

Each template is completely self-contained in its own standalone directory inside [`templates/`](./templates/).

---

## ✦ Template Catalog

| Template | Preview / Key Features | Tech Stack | Local Port |
| :--- | :--- | :--- | :---: |
| [**Aldersmith Jewellery**](./templates/aldersmith) | • Photorealistic 3D Solitaire Ring with orbital drag<br>• Real-time CAD caliper lines & interactive loupe<br>• Floating glass metal/gemstone configurator<br>• 5-Stage 3D bench mandrel scrub with temperature HUD<br>• Parallax lookbook horizontal carousel | Three.js (r169)<br>WebGL Shaders<br>Framer Motion | `:3000` |
| [**Durra Luxury & Watches**](./templates/durra) | • South Sea pearl necklace with drop shadow typography overlap<br>• Progressive scroll-driven typography reading reveal<br>• Interactive statistics counter cards<br>• Continuous animated press marquee ticker<br>• Independent Swiss watch showcase & dark/light theme toggle | Framer Motion<br>SVG Geometry<br>CSS Shaders | `:3001` |
| [**Jewel™ Premium Jewelry**](./templates/jewel) | • Full-screen luxury editorial hero & floating metallic actions<br>• Fine-bordered product showcase grid with hover reveals<br>• Animated interactive product detail state windows<br>• Gallery thumbnail switcher, counter, and accordion drawers<br>• 36 pages: collections, categories, shop & journal | Framer Motion<br>Accordion Drawers<br>Cart Modal | `:3002` |

---

## ⚡ Clone ONLY One Specific Template

You don't need to clone the entire repository if you only want one template. Use either method below:

### Method 1: Instant 1-Second Extraction (`degit` — Recommended)

To download **only** `aldersmith` into a fresh standalone folder:
```bash
npx degit ithis0623-png/goldTemplates/templates/aldersmith my-aldersmith
cd my-aldersmith
npm install
npm run dev
```

To download **only** `durra`:
```bash
npx degit ithis0623-png/goldTemplates/templates/durra my-durra
cd my-durra
npm install
npm run dev
```

To download **only** `jewel`:
```bash
npx degit ithis0623-png/goldTemplates/templates/jewel my-jewel
cd my-jewel
npm install
npm run dev
```

*(No Git history of other projects is downloaded — you get an instant, clean starter ready to push to its own new repository).*

---

### Method 2: Native Git Sparse-Checkout

If you want to use standard `git`:

```bash
# 1. Clone repository structure without downloading all files
git clone --filter=blob:none --sparse https://github.com/ithis0623-png/goldTemplates.git
cd goldTemplates

# 2. Select only the template you want
git sparse-checkout set templates/durra
```

---

## 🛠️ Running the Entire Monorepo Locally

Clone the full repository:
```bash
git clone https://github.com/ithis0623-png/goldTemplates.git
cd goldTemplates
npm install
```

### Run Templates Independently

- **Aldersmith (Port 3000)**:
  ```bash
  npm run dev:aldersmith
  # or
  cd templates/aldersmith && npm run dev
  ```
  Visit: `http://localhost:3000/`

- **Durra (Port 3001)**:
  ```bash
  npm run dev:durra
  # or
  cd templates/durra && npm run dev
  ```
  Visit: `http://localhost:3001/`

---

## ➕ How to Add a New Template (Zero-Conflict Design)

Adding a new template will **never** break or conflict with existing templates:

1. Create a new folder inside `templates/`:
   ```
   templates/your-new-template/
   ├── site/
   │   └── index.html
   ├── package.json
   └── vite.config.ts
   ```
2. Assign a unique port in `vite.config.ts` (e.g. `3002`).
3. Commit and push:
   ```bash
   git add templates/your-new-template
   git commit -m "feat(template): add your-new-template"
   git push
   ```

---

## 📄 License
Private & Proprietary. All rights reserved.
