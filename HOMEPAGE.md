
# Eagle Heart Retreats

## GitHub Pages Setup Instructions

1. Go to your repository's Settings tab
2. Navigate to the "Pages" section in the sidebar
3. Under "Build and deployment", select:
   - Source: "GitHub Actions"
4. The GitHub workflow will automatically build and deploy your site when you push to the main branch

## Repository Configuration

Your repository is configured with a GitHub workflow that:
- Builds your Vite React application
- Deploys it to GitHub Pages
- Handles SPA routing correctly via custom 404 redirects

## Updating Your Site

Simply push changes to the main branch, and the GitHub workflow will automatically rebuild and deploy your site.
