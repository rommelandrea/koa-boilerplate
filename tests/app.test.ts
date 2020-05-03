import request from 'supertest';
import { app } from '../src/app';

describe("routes/healthcheck", () => {
  it("should pong", async () => {
    const response = await request(app.callback()).get("/healthz");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body.status).toEqual("ok");
  });
});
