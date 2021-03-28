# Packages

## [client-web](./packages/client-web)

NextJS Front end application.
Available commands:

### `yarn dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn deploy`

Runs build + deploy to AWS via serverless.

Application will be available at [https://dyth48evx2jw.cloudfront.net](https://dyth48evx2jw.cloudfront.net)

### `yarn cleanup`

Deletes all build/deploy folders

## Global Scripts

In the project directory, you can run:
(You should use Yarn)

### `yarn dev`

Alias for `yarn workspace @app/client-web dev`.
Runs frontend dev server.

### `yarn deploy`

Alias for `yarn workspace @app/client-web deploy`.
Deploy with serverless.
