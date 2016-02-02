var koa = require('koa')
var app = koa()

app.use(function * log (next) {
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(function * (){
  this.body = 'Hello World'
})

app.listen(process.env.PORT || 3000)
console.log('listening on port')
