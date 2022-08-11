# Commands to use with this project:

`yarn install`

`yarn start`

# Source of project:

Nivo code & data:
https://nivo.rocks/funnel/

Project Created via:

- `npx create-react-app nivo-experiment-funnel-expanding` create with CRA
- `cd nivo-experiment-funnel-expanding` cd into directory
- `rm -rf node_modules` remove node_modules so we can re-install with yarn
- `rm package-lock.json` remove package-lock.json so we can re-install with yarn
- `yarn install`
- `yarn add @nivo/core @nivo/funnel bulma` add the packages we'll need for this simple project
- `rm -rf .git` remove the CRA .git directory so we can create our own git project
- `touch .gitignore` create .gitignore
- `echo "**/.DS_Store \n**/node_modules" >> .gitignore` add ignored items to .gitignore

# Purpose of project

I was trying to recreate a bug I saw when using Nivo & Bulma CSS.

With the Nivo Funnel visualization wrapped in Bulma columns, for example:
```html
<div className="columns">
  <div className="column parent-container"><NivoFunnel data={funnelData} /></div>
  <div className="column parent-container"><NivoFunnel data={funnelData} /></div>
  <div className="column parent-container"><NivoFunnel data={funnelData} /></div>
</div>
```

The NivoFunnel visualization would continously & infinitely expand horizontally.
I wasn't able to quickly reproduce the bug in this current project. I don't recall what sort of CSS or html structure I had when the bug occured.  Oh well, at least this will be a serve as a simple NivoFunnel + Bulma CSS example.

Screenshot of 3 Nivo Funnels--

![Screenshot of 3 Nivo Funnels](./project-screenshot/3-funnels.png?raw=true "Screenshot of 3 Nivo Funnels")


_________________CRA readme______________
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
