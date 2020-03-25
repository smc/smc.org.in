# smc.org.in

SMC website


# How to use

Instal dependencies

```
npm install
```

Start development server. You can edit files and same changes will be automatically applied in the interface.

```
npm run serve
```
W
Build the application for production:

```
npm run build
```

# How to develop pages?

1. Refer existing pages in src/views
2. For URLs refer router/index.js and App.vue. Use [Vue Router](router.vuejs.org/) documentation as well.
3. For layouting and UI widgets refer [vuetify documentation](https://vuetifyjs.com)
4. Committing and pushing the code will automatically update the website.
5.

# Writing articles

Create a file in markdown fromat in public/articles folder. Prepare the content by referring existing samples in that folder. Run

```
nodejs generateManifest.js
```

Commit the code and push to the repo.
