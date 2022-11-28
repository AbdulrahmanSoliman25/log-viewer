const request = require("supertest");

// healthcheck Api
describe("healthcheck", () => {
  it("should show the healthcheck status get /api/healthcheck", async () => {
    const response = await request.get("/api/healthcheck");
    expect(response.status).toBe(200);
    return done();
  });
});

// view logs Api
describe("view logs", () => {
  // case 1  ":"
  describe("view logs with vaild path and starting line", () => {
    it("should show the requested 10 lines with status 200 post /api/get-logs", async () => {
      await request(app)
        .post("/api/tasks")
        .send({
          path: "log-sample",
          start: 1,
        })
        .expect(response.status)
        .toBe(200)
        .then((res) => {
          expect(res.body.data.start).to.exist;
          expect(res.body.data.start).to.exist;
          expect(res.body.data.content).to.exist;
          done();
        });
    });
  });

  // case 2  ":"
  describe("view logs with vaild path and undefined starting line", () => {
    it("should show the last requested 10 lines with status 200 post /api/get-logs", async () => {
      await request(app)
        .post("/api/tasks")
        .send({
          path: "log-sample",
          start: undefined,
        })
        .expect(response.status)
        .toBe(200)
        .then((res) => {
          expect(res.body.data.start).to.exist;
          expect(res.body.data.start).to.exist;
          expect(res.body.data.content).to.exist;
          done();
        });
    });
  });

  // case 3  ":"
  describe("view logs with not vaild path or starting line", () => {
    it("should show Invalid data. message with status 422 post /api/get-logs", async () => {
      await request(app)
        .post("/api/tasks")
        .send({
          path: "log-sample",
          start: undefined,
        })
        .expect(response.status)
        .toBe(422)
        .then((res) => {
          expect(res.message).toBe("Invalid data.");
          done();
        });
    });
  });
});
