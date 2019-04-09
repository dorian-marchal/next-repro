# Repro for issue [zeit/next.js#6973](https://github.com/zeit/next.js/issues/6973)

In a terminal:

```shell
$ git clone https://github.com/dorian-marchal/next-repro
Cloning into 'next-repro'...

$ cd next-repro/

$ node -v
v10.14.1

$ npm install

$ npm ls next
next-repro@1.0.0 /tmp/next-repro
└── next@8.0.4

$ npm run build && npm run start
...
> Ready on http://localhost:3000

```

In your browser:

- Go to http://localhost:3000/
- Open your browser devtools
- Click on "Client side nav"
- See the app entering an endless loop (stopped after 20 iterations).
