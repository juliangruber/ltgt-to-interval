var test = require('tape');
var render = require('./');

test('ltgt-to-interval', function(t){
  t.equal(render({}), ',');
  t.equal(render({ gt: 'a' }), '(a,');
  t.equal(render({ gte: 'a' }), '[a,');
  t.equal(render({ lt: 'b' }), ',b)');
  t.equal(render({ lte: 'b' }), ',b]');
  t.equal(render({ gt: 'a', lte: 'b' }), '(a,b]');
  t.end();
});

