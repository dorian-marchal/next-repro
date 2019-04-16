# Repro for issue [zeit/next.js#xxx](https://github.com/zeit/next.js/issues/xxx)

## What your looking at?

This is a Next project using a custom `_app` and a custom `_document`.
- `_app`: wrapped in `withRedux` (from [`next-redux-wrapper`](https://github.com/kirill-konshin/next-redux-wrapper)), gives a `store`

### In dev mode (dev)

In a terminal:

```shell
$ git clone -b repro-xxx https://github.com/dorian-marchal/next-repro
Cloning into 'next-repro'...

$ cd next-repro/

$ node -v
v10.14.1

$ npm install

$ npm ls next
next-repro@1.0.0 /tmp/next-repro
└── next@8.0.4

$ npm run dev
...
> Ready on http://localhost:3000

```

In your browser:

- Go to http://localhost:3000/
- Look at the error in your terminal, the error appears in `_document`:
  ```
  TypeError: Cannot read property 'getState' of undefined
    at _callee$ (/tmp/next-repro/.next/server/static/development/pages/_document.js:2307:35)
  ```


### In prod mode (build/start)

Back in your terminal:

```shell
^C
$ npm run build && npm run start
...
> Ready on http://localhost:3000
```

In your browser:

- Go to http://localhost:3000/
- Look at the error in your terminal, the error appears in `_document`:
  ```
  ReferenceError: foo is not defined
    at makeStore (/tmp/next-repro/.next/server/static/U7qa~kWkAyR43YlsuhM91/pages/_app.js:274:3)
  ```


This is the expected behaviour. The error thrown in `_document` shouldn't shadow the one thrown in `makeStore`.
