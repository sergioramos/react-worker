# react-worker

[![](https://img.shields.io/travis/ramitos/react-worker.svg)](https://travis-ci.org/ramitos/react-worker) [![](https://img.shields.io/codeclimate/coverage/github/ramitos/react-worker.svg)](https://codeclimate.com/github/ramitos/react-worker/coverage) [![](https://img.shields.io/npm/v/react-worker.svg)](https://www.npmjs.com/package/react-worker) [![](https://img.shields.io/david/ramitos/react-worker.svg)](https://david-dm.org/ramitos/react-worker) [![](https://img.shields.io/codeclimate/github/ramitos/react-worker.svg)](https://codeclimate.com/github/ramitos/react-worker) [![](https://img.shields.io/npm/l/react-worker.svg)](https://www.npmjs.com/package/react-worker)

## install

```bash
npm install --save react-worker
```


## usage

on the main thread:

```js
var React = require('react-worker/src/host');

React.render(require('worker!./worker'), document.getElementById('root'));
```

on the worker:

```jsx
var React = require('react-worker/src/client');

var App = React.createClass({
  getInitialState: function() {
    return {
      i: 0
    };
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 16);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  tick: function tick() {
    this.setState({
      i: this.state.i + 1
    });
  },
  render: function render() {
    return React.createElement('ul', null, React.createElement('li', null, this.state.i));
  }
});

React.render(<App />);
```

## license

BSD-3-Clause