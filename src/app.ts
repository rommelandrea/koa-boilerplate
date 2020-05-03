import Koa from 'koa';
import KoaRouter from 'koa-router';

const app = new Koa();

const router = new KoaRouter();

router.get('/healthz', (ctx) => {
  ctx.body = { status: 'ok' };
});

app.use(router.routes());
app.use(router.allowedMethods());

export { app };
