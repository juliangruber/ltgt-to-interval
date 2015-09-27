module.exports = function(r){
  var o = '';

  if (r.gt) {
    o += '(' + r.gt;
  } else if (r.gte) {
    o += '[' + r.gte
  }

  o += ',';

  if (r.lt) {
    o += r.lt + ')';
  } else if (r.lte) {
    o += r.lte + ']';
  }

  return o;
};
