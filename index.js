var koa = require('koa');
var app = koa();
var router = require('koa-router')();
var koaBody = require('koa-body')();

router.post('/', koaBody, function *(next) {
    var body = this.request.body;
    console.log(body.msg);

    this.body = body;
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);