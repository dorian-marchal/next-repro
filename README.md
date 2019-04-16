# Repro for issue [zeit/next.js#xxx](https://github.com/zeit/next.js/issues/xxx)

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
- Look at the error in your terminal:
  ```
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
- Look at the error in your terminal
