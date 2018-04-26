var koa = require('koa');
var app = koa();        //有问题,这是1.0的写法，下载的包是2.0的

app.use('/', function* () {
    yield doReadFile1();
    var data = yield doReadFile2();
    this.body = data;
});
// app.use(async (ctx, next) => {
//     await next();
//     var data = await doReadFile();
//     ctx.response.type = 'text/plain';
//     ctx.response.body = data;
// });
app.listen(3000);