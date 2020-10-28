# demo
1. Nuxt
1. Vue

# RP
## 1 `npm run page`
1. `./demo/template/xx[.vue/js/css]` copy to `vue`/`nuxt`.
1. vue build, nuxt generate
1. `./index.html` copy to  `docs/index.html` 

## 2 `npm run devpage`， ditto.

<hr>

Vue/Nuxt add environment variable `page`
- vue: `VUE_APP_ENV`
- nuxt: `NUXT_DEV_PROD`

<hr><hr>

# demo web pack tutorial
打包步骤
## 1. Root 
```sh
  # root execution
  npm install

  # or
  yarn install
```

## 2. demo/nuxt-animatecss 、demo/template 、demo/vue2-animatecss
```sh
  npm install

  # or
  yarn install
```

## 3. Root 
```sh
# root execution
  # development
  npm run devpage

  # production
  npm run page

# ----------------
  # index.html template generation
  npm run devhtml
  npm run html

  # to index.js content add version number comment
  npm run v

  # rule of grammar
  npm run lint
```