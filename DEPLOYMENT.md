# GitHub Pages Deployment Guide

## Quick Start

1. **Push your code to GitHub**
2. **Enable GitHub Pages:**
   - Repository → Settings → Pages
   - Source: Select "GitHub Actions"
   - Save

3. **That's it!** The workflow will automatically:
   - Build Tailwind CSS on every push
   - Deploy to GitHub Pages
   - Your site will be live at `https://YOUR_USERNAME.github.io/REPO_NAME/`

## Workflow Details

The `.github/workflows/deploy.yml` file handles:
- ✅ Installing Node.js and dependencies
- ✅ Building Tailwind CSS (minified and optimized)
- ✅ Deploying to GitHub Pages
- ✅ Automatic deployment on push to `main` or `master`

## Manual Trigger

You can also manually trigger the deployment:
- Go to **Actions** tab in your repository
- Select **Deploy to GitHub Pages** workflow
- Click **Run workflow**

## Troubleshooting

### Workflow not running?
- Check that GitHub Pages is enabled in Settings → Pages
- Ensure the source is set to "GitHub Actions"
- Check the Actions tab for any error messages

### CSS not loading?
- The workflow builds the CSS automatically
- Check the Actions tab to ensure the build succeeded
- Clear your browser cache

### Site not updating?
- Check the Actions tab to see if deployment completed
- GitHub Pages can take a few minutes to update
- Try hard refresh (Ctrl+F5 or Cmd+Shift+R)

## Custom Domain

To use a custom domain:
1. Add a `CNAME` file in the root with your domain
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings with your custom domain

