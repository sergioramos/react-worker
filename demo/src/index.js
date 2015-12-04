var React = require('react-worker/src/host');

React.render(require('worker!./worker'), document.getElementById('root'));
