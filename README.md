## About

An open-source project of [Google Developer Student Clubs - USLS](https://www.facebook.com/dsc.usls) that generates event certificates for club members.

### Preview

<div>

> *Try Student ID: 2201064*
<img src="https://user-images.githubusercontent.com/69457996/227433621-dd4916ea-e005-46d5-9d16-5053089b5db6.png" width="500" />

</div>

### Tech Stack
- Vite
- React.js
- Firebase
- TypeScript
- Tailwind CSS

## Contributing

If you like this project, consider giving it a star! Want to contribute? See [CODE_OF_CONDUCT.md](https://github.com/gdsc-usls/landing/blob/main/CODE_OF_CONDUCT.md)

1. Fork this [repository](https://github.com/gdsc-usls/certificate-generator) and clone your fork.
2. Create a new branch for your changes:

```sh
$ cd your_cloned_fork
$ git checkout dev
$ git checkout -b my-new-branch
```

3. Create a [Firebase](https://firebase.google.com/) project & add a `Web` app.

4. Create a `.env.local` file with this content:

> Replace `VALUE` with your Firebase config.

```sh
VITE_API_KEY=VALUE
VITE_AUTH_DOMAIN=VALUE
VITE_PROJECT_ID=VALUE
VITE_STORAGE_BUCKET=VALUE
VITE_MESSAGING_SENDER_ID=VALUE
VITE_APP_ID=VALUE
VITE_MEASUREMENT_ID=VALUE

VITE_PASSWORD=123456
```

5. To run locally:

```sh
# Only use pnpm as your package manager

$ pnpm i # install dependencies
$ pnpm run dev # start local server
```

6. Visit `/manage` to add data & use `VITE_PASSWORD` to authenticate.

7. Commit your changes and push your branch:

```sh
$ git add .
$ git commit -m "chore: some changes"
$ git push origin HEAD
```

8. Submit a pull request on the `dev` branch. (resolve conflicts if present)

## License

Licensed under [GPL-3.0](https://github.com/gdsc-usls/certificate-generator/blob/main/LICENSE).
