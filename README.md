![Next Boilerplate](/static/images/next-boilerplate-logo.png?raw=true "Next Boilerplate")

# next-boilerplate
A starter project for building Universal React Redux apps with Next.js featuring;
- [x] React              : view
- [x] Redux              : state
- [x] Redux Devtools     : debug state
- [x] Redux Form         : forms, state
- [x] Next.js            : ssr, routing
- [x] Node server        : custom routes
- [x] Jest               : tests
- [x] Istanbul           : coverage
- [x] Styled-jsx         : style
- [x] SASS               : pre-processor
- [x] Babel es6          : js
- [x] Standard.js        : lint
- [x] Travis CI          : build script

This project cherry picks the features from next.js's [examples](https://github.com/zeit/next.js/tree/master/examples)

## Getting started

1. Clone project `$ git clone https://github.com/grraft/next-boilerplate.git`
2. Install dependencies `cd next-boilerplate` and `npm install`
3. Fire it up with `npm dev` and see it on localhost:3000

## Folder structure
    .
    ├── (.next)                 # Next.js build
    ├── components              # React components (stateless & stateful)
    ├── (coverage)              # Istanbul coverage report
    ├── (node_modules)
    ├── pages                   # Next.js pages (React components)
    ├── static                  # Static assets served by next
    ├── styles                  # Global styles
    ├── .babelrc                # Babel config
    ├── .gitignore
    ├── .travis.yml             # Travis CI settings (including AWS EB deploy)
    ├── LICENSE
    ├── next.config.js          # Webpack config (sass)
    ├── package.json
    ├── postcss.config.js       # PostCss config
    ├── README.md
    └── server.js               # Custom Express routes

## Development

Next uses the `./pages` directory as its router so by default it'll look for `./pages/index.js` when hitting `localhost:3000` after `npm dev`, and `localhost:3000/about` will map to `./pages/about.js`. Check out [Next.js's docs](https://github.com/zeit/next.js) to understand how routing works.

Add React containers (stateful es6 classes) to `./containers` and associated components (stateless, pure functions) to `./components`.

## Testing

`npm test` to run Jest

Jest will test `*.test.js` files regardless of where they are in the project. Placing the test files within the same directory of your code will help

    .
    ├── code.js                    # React components, pure functions, etc.
    └── code.test.js               # Jest tests for code.js


`npm run coverage` to get an Istanbul coverage report

## Deploy & Production

Ensure your production build follows at least these steps:
- `npm test`
- `npm run build` (which triggers `next build`)
- `npm run start`

### Continuous Integration

`.travis.yml` show the setup required to have Travis CI run tests and build when pushing to your Github repo. If the build passes Travis will deploy to AWS ElasticBeanstalk (EB).

Note you'll need to:
- Link Travis to your Github account
- Configure EB. I used the CLI to eb init, and travis encrypt to generate the secure secret access key
- Setup a user (and group) on AWS who has the rights to manage EB instances

