var koa = require('koa');
var app = koa();
var router = require('koa-router')();
var koaBody = require('koa-body')();
var exec = require('child_process').exec;

router.post('/', koaBody, function *(next) {
    if (this.request.body && this.request.body.msg) {
        var msg = this.request.body.msg;

        var cmd = 'espeak -v czech -a1000 "' + msg + '"';

        exec(cmd, function(error, stdout, stderr) {
            // command output is in stdout
        });

        this.body = msg;
    }
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);