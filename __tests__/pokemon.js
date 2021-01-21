const supertest = require('supertest')
const server = require('../server')


describe("pokemon integration tests", () => {
  it("gets pokemon", async () => {
    const res = await supertest(server).get("/pokemon")

    expect(res.statusCode).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.length).toBe(3)
    expect(res.body[0].id).toBe(1)
    expect(res.body[0].name).toBe("pikachu")
  })

  it("gets pokemon by id", async () => {
    const res = await supertest(server).get("/pokemon/1")

    expect(res.statusCode).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.length).toBe(1)
    expect(res.body[0].id).toBe(1)
    expect(res.body[0].type).toBe("electric")
  })

  it("creates a new pokemon", async () => {
    const res = await supertest(server)
      .post("/pokemon")
      .send({ id: 4, name: "sandslash", type: "ground" })

    expect(res.statusCode).toBe(201)
    expect(res.type).toBe("application/json")
    expect(res.body.length).toBe(1)
    expect(res.body[0].id).toBe(4)
    expect(res.body[0].name).toBe("sandslash")
    expect(res.body[0].type).toBe("ground")
  })
})