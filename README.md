# Rukesh Pulugu — Data Analyst Portfolio

Next.js 15 · React 19 · TypeScript · Tailwind CSS · Framer Motion. Zero environment variables required.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
```

## Deploy on Vercel
1. Create a new empty repository on GitHub.
2. In this folder: `git init && git add . && git commit -m "Portfolio" && git branch -M main`
3. `git remote add origin https://github.com/<you>/<repo>.git && git push -u origin main`
4. On vercel.com choose **Add New → Project**, import the repository.
5. Framework is auto-detected as Next.js. Click **Deploy**.

## Editing content
All text/links live in `lib/data.ts`. Replace `public/Rukesh_Pulugu_Resume.pdf` and `public/rukesh.jpeg` to update the resume or photo.
If your site URL differs from `https://aesthetic-cajeta-4604e4.netlify.app`, change `SITE` in `lib/data.ts`.
