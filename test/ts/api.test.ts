import * as Promise from "bluebird";
import "./browser.env";
import * as mocha from "mocha";
import * as assert from "power-assert";
import {API,util} from "../../src/ts/api";

function createFakeServer(url, responseObj, method="GET"){
  const server = global.sinon.fakeServer.create();
  server.respondWith(method, url,
    [200, { "Content-Type": "application/json" }, JSON.stringify(responseObj)]);
  return server;
}

describe("api", () => {
  describe("API", () => {
    it("APIクライアントの定義", () => {
      class TestAPI extends API{
        user = {
          load: () => { return Promise.resolve({ name : "test" }); }
        }
        
        gizmoItem = {
          load: () => { return Promise.resolve({items:[{ id:"test", src:"/src/test" }]}); }
        }
      }
      
      const testApi = new TestAPI();
      assert(testApi);
    });
  });
  
  describe("util", () => {
    describe("http-client", () => {
      it("getする", () => {
        const endpoint = "/get";
        const response = { message : "ok" };
        const server = createFakeServer(endpoint, response);
        util.http.get(endpoint)
        .then((response) => {
          assert(response);
        }).catch((err) => {
          throw err;
        });
      });
      
      it("postする", () => {
        const endpoint = "/post";
        const body = { message : "is ok?" };
        const response = { message : "ok" };
        const server = createFakeServer(endpoint, response, "POST");
        
        util.http.post(endpoint, body)
        .then((response) => {
          assert(response);
        }).catch((err) => {
          throw err;
        });
      });
    });
    
    describe("cbo", () => {
    const endpoint = "/cbo";
    const visitorId = "test";
    let cbo;
    
      it("CBOクライアントの生成", () => {
        cbo = new util.CBO(endpoint);
        assert(cbo);
      });

      it("正しいデータが返ってきたとき", () => {
        const url =`${endpoint}?visitor_id=${visitorId}`;
        const response = {
          status : true,
          property : {
            age : "20",
            sex : "1",
            ann_income : "3",
            has_rid : "1"
          }
        }
        const server = createFakeServer(url, response);
        
        cbo.load(visitorId)
        .then((property) => {
          assert(property);
        })
        .catch((err) => {
          throw err;
        });
        server.respond();
      });

      it("visitor idがなかったとき", () => {
        const url =`${endpoint}?visitor_id=${visitorId}`;
        const response = {};
        const server = createFakeServer(url, response);
        cbo.load(null)
        .then((property) => {
          throw new Error("エラーになるべき")
        })
        .catch((err) => {
          assert(err);
        });
        server.respond();
      });

      it("データが欠けていたとき", () => {
        const url =`${endpoint}?visitor_id=${visitorId}`;
        const response = {
          status : true,
          property : {
            ver : "000",
            age : "",
            sex : ""
          }
        }

        const server = createFakeServer(url, response);
        cbo.load(visitorId)
        .then((property) => {
          throw new Error("エラーになるべき")
        })
        .catch((err) => {
          assert(err);
        });
        server.respond();
      });

      it("データがなかったとき", () => {
        const response = {
          status : false,
          property : {}
        }

        const url =`${endpoint}?visitor_id=${visitorId}`;
        const server = createFakeServer(url, response);
        cbo.load(visitorId)
        .then((property) => {
          throw new Error("エラーになるべき")
        })
        .catch((err) => {
          assert(err);
        });
        server.respond();
      });
    });
  });
});