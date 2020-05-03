import Koa from 'koa';
import KoaRouter from 'koa-router';
import KoaLogger from 'koa-logger';

const app = new Koa();
app.use(KoaLogger());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
});

const router = new KoaRouter();

router.get('/healthz', (ctx) => {
  ctx.body = { status: 'ok' };
});

app.use(router.routes());
app.use(router.allowedMethods());

export { app as default };
