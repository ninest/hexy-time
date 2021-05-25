# [Hexy Time](https://hexy-time.now.sh/)

> 🕘 Time as a color

<p align="center">
  <img src="assets/movie.gif" alt="Demo" />
</p>

## Build setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Clone or fork the repository then run

```bash
yarn
yarn start
```

to start a development server.

Run `yarn build` to compile and build the web app.

### Generating icons

Using [`pwa-asset-generator`](https://github.com/onderceylan/pwa-asset-generator) to generate icons for Android, iOS, and iOS splashscreen.

```bash
pwa-asset-generator icon.png -b "linear-gradient(139.62deg, #FFE74C 4.35%, #6BF178 70.81%, #35A7FF 97.49%)" ./icon1
```

Change `icon1` to `icon-N` to ensure that the browser picks up the latest icons if changed.

### Hosting

- Development: `vc`
- Production: `vc --prod`

## Extension

Create a `.env file`:

```env
INLINE_RUNTIME_CHUNK=false
```

Run `yarn build`, then load the `build/` directory as an unpacked extension.

### TS errors

- Reload VScode so it can detect changes
- Set `"jsx": "react"`

  ```json
  {
    "compilerOptions": {
      "jsx": "react"
    }
  }
  ```

## 📜 License

MIT
