var eos = require('end-of-stream');


module.exports = function(r, w) {
  [r, w].forEach(function(s) {
    eos(s, function(err) {
      throw err;
    });
  });

  r.pipe(w);
};
