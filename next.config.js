const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');

if (typeof require !== 'undefined') {
  require.extensions['.less'] = () => {};
}

module.exports = withLess(
  withSass({
    lessLoaderOptions: {
      javascriptEnabled: true,
    },
  })
);
