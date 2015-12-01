require('webpack-clear-require')();

var toElement = require('json-to-react-element');
var WorkerStream = require('worker-stream');
var Writable = require('readable-stream/writable');
var ReactDOM = require('react-dom');
var defaults = require('lodash.defaults');
var pipe = require('./pipe.js');
var React = require('react');


var ReactWorker = {
  render: function(W, element) {
    ReactDOM.render(React.createElement(React.createClass({
      getInitialState: function() {
        return {
          tree: {}
        };
      },
      trigger: function(ev, enc, fn) {
        this.setState({
          tree: ev.data
        });

        fn();
      },
      componentDidMount: function() {
        var r = new WorkerStream(new W());
        var w = new Writable({
          write: this.trigger,
          objectMode: true
        });

        this.setState({
          readable: r,
          writable: w
        });

        pipe(r, w);
      },
      componentWillUnmount: function() {
        this.state.r.unpipe(this.state.w);
      },
      render: function() {
        return toElement(this.state.tree);
      }
    })), element);
  },
  unmountComponentAtNode: React.unmountComponentAtNode,
  version: React.version,
  isClient: false,
  isHost: true
};

module.exports = defaults(ReactWorker, React);