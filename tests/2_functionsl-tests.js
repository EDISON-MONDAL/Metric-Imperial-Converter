const chaiHttp = require("chai-http");
const chai = require("chai");
let assert = chai.assert;
const server = require("../server");

chai.use(chaiHttp);

suite("Functional Tests", function () {

  suite("GET /api/convert => conversion object", function () {

    test("Convert 4L (valid input)", function (done) {
      chai
        .request(server)
        .get("/api/convert")
        .query({ input: "4L" })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, 4);
          assert.equal(res.body.initUnit, "L");
          assert.approximately(res.body.returnNum, 1.056688, 0.1);
          assert.equal(res.body.returnUnit, "gal");
          done();
        });
    });

    test("Convert 5g (invalid input unit)", function (done) {
      chai
        .request(server)
        .get("/api/convert")
        .query({ input: "5g" })
        .end(function (err, res) {
          assert.equal(res.body.initUnit, undefined);
          done();
        });
    });

    test("Convert 4/3.2/7L (invalid number)", function (done) {
      chai
        .request(server)
        .get("/api/convert")
        .query({ input: "4/3.2/7L" })
        .end(function (err, res) {
          assert.equal(res.body.initNum, undefined);
          done();
        });
    });

    test("Convert 4/3.2/7g (invalid number and unit)", function (done) {
      chai
        .request(server)
        .get("/api/convert")
        .query({ input: "4/3.2/7g" })
        .end(function (err, res) {
          assert.equal(res.body.initNum, undefined);
          assert.equal(res.body.initUnit, undefined);
          done();
        });
    });

    test("Convert kg (no number)", function (done) {
      chai
        .request(server)
        .get("/api/convert")
        .query({ input: "kg" })
        .end(function (err, res) {
          assert.equal(res.body.initNum, 1);
          assert.equal(res.body.initUnit, "kg");
          done();
        });
    });
  });
});
