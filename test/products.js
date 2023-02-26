const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");

// Assertion Style
chai.should();

//To make requests 
chai.use(chaiHttp);

// Testing GET Route
describe("GET /api/products", () => {
    it("Should GET all the Products.", (done) => {
        chai.request(server)
            .get("/api/products")
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
        const objectID = "63fb42bd11b4c14ad1426edf";
        chai.request(server)
            .get("/api/products/" + objectID)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                res.body.should.have.property('productName');
            done();
            });
    });
});

// Testing the POST Route
describe("POST /api/products", () => {
    it("Should POST/CREATE a SINGLE Product.", (done) => {
        const product = { 
            "productName": "Test Product",
            "qtyPerUnit": 5,
            "unitPrice": 500,
            "unitInStock": 50,
            "discontinued": false,
            "categoryId": "63fb14a728a9cd394efe3c2b"
            };
        chai.request(server)
            .post("/api/products/")
            .send(product)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                res.body.should.have.property('productName');
            done();
            });
    });
});