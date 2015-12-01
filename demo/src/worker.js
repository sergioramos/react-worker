var React = require('../../src/client');
var format = require('util').format;

var Child = React.createClass({
  getInitialState: function getInitialState() {
    return {
      i: 0
    };
  },
  componentDidMount: function componentDidMount() {
    this.interval = setInterval(this.tick, 16);
  },
  componentWillUnmount: function componentWillUnmount() {
    clearInterval(this.interval);
  },
  tick: function tick() {
    this.setState({
      i: this.state.i + 1
    });
  },
  render: function render() {
    return React.createElement('li', {
      key: 'second-li'
    }, format('%s %s', this.props.i, this.state.i));
  }
});

var App = React.createClass({
  getInitialState: function getInitialState() {
    return {
      i: 0
    };
  },
  componentDidMount: function componentDidMount() {
    this.interval = setInterval(this.tick, 16);
  },
  componentWillUnmount: function componentWillUnmount() {
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

React.render(React.createElement(App));