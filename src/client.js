require('webpack-clear-require')();

var React = require('react-json-stream');
var defaults = require('lodash.defaults');
var WorkerStream = require('worker-stream');
var pipe = require('./pipe.js');


var ReactWorker = {
  render: function(element) {
    var r = React.render(element);
    var w = new WorkerStream();

    pipe(r, w);

    return r;
  },
  unmountComponentAtNode: React.unmountComponentAtNode,
  version: React.version,
  isClient: true,
  isHost: false
};

module.exports = defaults(ReactWorker, React);