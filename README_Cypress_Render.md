# Fullstack App with Cypress CI & Render Deployment

This is a full-stack web application featuring React, Vite, and Cypress Component Testing with automated GitHub Actions and Render deployment support.

## Useful Links

- [Cypress Documentation](https://docs.cypress.io)
- [Render Deployment Docs](https://render.com/docs/deploy-a-web-service)
- [GitHub Actions](https://docs.github.com/en/actions)

## Description

This project demonstrates a full-stack application with CI/CD pipelines using GitHub Actions for Cypress component tests and automatic deployment to Render.

**Motivation**: Automate testing and deployment for reliability and speed.  
**Reason**: Validates new features before merging and deploys production builds effortlessly.  
**Problem Solved**: Ensures high-quality code and smooth deployment.  
**What I Learned**: Cypress CT, GitHub Actions, Render deploy hooks, and CI/CD best practices.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [GitHub Actions](#github-actions)
- [Deployment](#deployment)
- [License](#license)
- [Tests](#tests)
- [Credits](#credits)
- [Questions](#questions)

## Installation

To run locally:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd your-repo
npm install
npm run build 
npm run seed

```

## Usage

Start the app:

```bash
npm run start:dev
```

Access the app at `http://localhost:5173`.


## Deployment

Set a deploy hook in Render and save it as a GitHub secret:

```env
Name: RENDER_DEPLOY_HOOK
Value: https://api.render.com/deploy/YOUR_DEPLOY_HOOK
```

## License

This project is licensed under the MIT License.

## Tests

Cypress component tests are located in:

```
cypress/component/
```

Run locally:

```bash
npx cypress open
```

## Credits

GitHub: your-username  
Cypress: [https://docs.cypress.io](https://docs.cypress.io)  
Render: [https://render.com](https://render.com)

## Questions

For questions or collaboration inquiries:

- GitHub: [your-username](https://github.com/your-username)
- Email: your@email.com
