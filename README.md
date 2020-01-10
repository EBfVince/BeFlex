# BeFlex 🚀🪐

<p align="center">
  <img src="https://firebasestorage.googleapis.com/v0/b/bento-vince.appspot.com/o/Groupe%2026.png?alt=media&token=1f0d89ba-e5b1-4a60-a55d-fc343e0e5e84"/>
</p>

<p align="center">
  <a href="https://gitmoji.carloscuesta.me/"><img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square"/></a>
</p>

> Le site de la meilleure classe de Digital Campus !

## ✨ Site

👉 <https://beflex.best/>

## ❤ Projet clés en main

These libraries and tools are already setup:

- 🤘 Vue
- ☄ Nuxt
- 📱 PWA
- 👤 Firebase Auth (and server side verification)
- 🔥 [Nuxt-Fire](https://github.com/lupas/nuxt-fire) : all Firebase tools in Nuxt
- 🏠 Firebase Hosting deployment
- 🌍 Google App Engine deployment
- 💄 Prettier : code formatting rules
- 🚨 Eslint : control code quality
- ✅ Jest (testing)

## 🚀 Get started

### 🍺 Let's start

``` bash
# clone Spaceship 🚀🪐 repository
$ git clone https://github.com/EBfVince/BeFlex.git BeFlex
$ cd BeFlex

# install dependencies
$ yarn
$ npm i
```

### 👨‍🔧 Configuring the project

- Create a Firebase project. For more informations, [see here](https://firebase.google.com/).
- Open `package.json` file. Replace the `name` with your project name.
- Open `nuxt.config.js` file. On the top of the file, replace the `firebaseConfig` values by yours.
- That's it ! 🎉🍻

### 💻 Serve locally

``` bash
# serve with hot reload at localhost:3000
$ yarn dev
$ npm run dev
```

### 🔥 Serve locally with Firebase

> Spaceship 🚀🪐 is using NodeJS 10 in order to run the project with Firebase functions. To make it work properly, you need to install and use NodeJS 10. See [NVM](https://github.com/coreybutler/nvm-windows) for using multiple versions of Node on the same computer.

``` bash
# serve with firebase functions at localhost:5000
$ yarn build:firebase
$ yarn start:firebase
```

## 🚀 Easy Deploy

### 🔥 Deploy on Firebase

``` bash
# deploy on Firebase functions and hosting
$ yarn build:firebase
$ yarn deploy
```

### 👩‍🚀 Deploy on Google App Engine

The `[project-id]` is the project ID of your Google Cloud project.

``` bash
# deploy on Firebase functions and hosting
$ yarn build
$ yarn deploy:google
```

Made with ❤ by EBfStudio and Vince

-----

## Important stuff

- `~` or `@` for [srcDir](https://nuxtjs.org/api/configuration-srcdir)
- `~~` or `@@` for [rootDir](https://nuxtjs.org/api/configuration-rootdir)

## Firebase Authentication

Domain names need to be verified by Firebase Auth.
See here : <https://console.firebase.google.com/u/0/project/[project-id]/authentication/providers>

## Important links

> Here are some pages you should check to avoid struggling with your project.

### Nuxt Fire 🔥

- [Github](https://github.com/lupas/nuxt-fire)
- [Documentation](https://nuxtfire.netlify.com/)

### Deploy Nuxt on Firebase 🚀

- [Tutorial](https://dev.to/kiritchoukc/deploy-nuxt-on-firebase-4ad8)

-----

## Création d'un nouveau projet

> Cette section permet d'aider à la création de nouveaux projets dans l'avenir. Ca n'a rien à voir avec ce projet en particulier.

### Installation de Firebase

Sur un nouveau projet, si on installe Firebase avec `yarn` via `yarn add firebase` et qu'on tente de lancer le projet, on va se rendre compte qu'il ne compile plus. (Pourtant ça marche correctement avec `npm`)

Pour installer firebase correctement voici la méthode :

``` bash
# install firebase
$ yarn add firebase

# install missing dependencies
$ yarn add -D core-js@2 @babel/runtime-corejs2
```

Et là, ça devrait compiler normalement.
