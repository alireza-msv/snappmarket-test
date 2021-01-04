# Snappmarket test project

## How to test

The project uses Google map service. You need a Google API key for running project in both development and production mode.

Generate a Google API key in your [Google Cloud dashboard](https://console.cloud.google.com/apis/credentials).

Copy .env.example and rename it to .env.

In unix-like operating systems you can do this by following command:

```bash
cp .env.example .env
```

Enter your Google API key in `.env` file and save it.

Following scripts are defined in project:

#### dev
Start developement server on port `3000`.

```bash
npm run dev
```

### build
Builds project and generates bundle file in `build` directory.

```bash
npm run build
```

### test
Runs unit test

```bash
npm run test
```

### lint
Checks typescript and styles to match defined rules

```bash
npm run lint
```

## Needs Improvement

- Use `navigator.geoLocation` for finding user location
- Write more unit and integreation tests
