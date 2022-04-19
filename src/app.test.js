const app = require("./app");
const supertest = require("supertest");
const request = supertest(app);

describe("/test endpoint", () => {
  it("should return a response", async () => {
    const response = await request.get("/test");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello world");
  });
});

describe("/ endpoint", () => {
  it("should return a response", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("<h2>Init My Project</h2>");
  });
});

// describe("/api/v1/posts endpoint", () => {
//   it("should return a response", async () => {
//     const response = await request.get(
//       "/api/v1/posts/625ecd482d2aa87f4ec1c59e"
//     );
//     expect(response.status).toBe(200);
//     console.log(response);
//     expect(response.text).toBe({
//       title: "test",
//       body: "test",
//     });
//   });
// });
