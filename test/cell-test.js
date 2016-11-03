var tape = require("tape"),
    mesh = require("../");

tape("Cell constructor sets correct properties", function(test) {
  var c = new mesh.Cell([
    {'a': 0, 'b': 0.5},
    {'a': 0.5, 'b': 1}
  ], 'abc');
  test.same(
      c,
      { 
          'x': { 'a': 0, 'b': 0.5 },
          'y': { 'a': 0.5, 'b':1 },
          'data': 'abc'
      }
  );
  test.end();
});

tape("Cell computes shape properly", function(test) {
  var c = new mesh.Cell([
    {'a': 0, 'b': 0.5},
    {'a': 0.5, 'b': 1}
  ], 'abc');
  test.same(
      c.shape(),
      { x: 0.5, y: 0.5 }
  );
  test.end();
});
