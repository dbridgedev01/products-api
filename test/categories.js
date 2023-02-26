const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");

// TESTS ARE RAN USING SOME MOCK DATA

// Assertion Style
chai.should();

//To make requests 
chai.use(chaiHttp);

// Testing GET Route
describe("GET /api/categories", () => {
    it("Should GET all the Categories.", (done) => {
        chai.request(server)
            .get("/api/categories")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("array");
            done();
            });
    });
});

// Testing the GET (By ID) Route
describe("GET /api/categories", () => {
    it("Should GET a SINGLE Category by ID.", (done) => {
        const objectID = "63fb14a728a9cd394efe3c2b";
        chai.request(server)
            .get("/api/categories/" + objectID)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                res.body.should.have.property('name');
            done();
            });
    });
});

// Testing the POST Route
describe("POST /api/categories", () => {
    it("Should POST/CREATE a SINGLE Category.", (done) => {
        const category = {name: "Test Category"};
        chai.request(server)
            .post("/api/categories/")
            .send(category)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                res.body.should.have.property('name');
            done();
            });
    });
});

// // Testing the PUT Route
describe("PUT /api/categories", () => {
    it("Should PUT/UPDATE a SINGLE Category by ID.", (done) => {
        const category = {name: "Test Category123"};
        const objectID = "63fb995a28c3e919a07df332";
        chai.request(server)
            .put("/api/categories/" + objectID)
            .send(category)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                res.body.should.have.property('name');
                res.body.should.have.property('name').eq("Test Category123");
            done();
            });
    });
});

// Testing the DELETE Route
describe("DELETE /api/categories", () => {
    it("Should DELETE a SINGLE Category by ID.", (done) => {
        const objectID = "63fb97fb35edccb1687e690c";
        chai.request(server)
            .delete("/api/categories/" + objectID)
            .end((err, res) => {
                res.should.have.status(200);
            done();
            });
    });
});