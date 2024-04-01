let fs = require('fs');
let jsdom = require('jsdom');
const { JSDOM } = jsdom;
let path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

let dom;
let document;

describe("UnitTests", function () {
    beforeEach(() => {
        dom = new JSDOM(html, {runScripts: 'dangerously'});
        document = dom.window.document;
    });
    it("Must have 3 paragraph tags", function () {
        // Failure message: 
        // You do not have 3 paragraph tags
        var p = document.getElementsByTagName("p");
        expect(p.length > 2).toBe(true);
    });
    it("Must have at least 4 span tags", function () {
        // Failure message: 
        // You do not have at least 4 span tags
        var span = document.getElementsByTagName("span");
        expect(span.length > 3).toBe(true);
    });
    it("Should have a span tag inside an h1 tag", function () {
        // Failure message: 
        // You do not have a span tag inside an h1 tag
        var h1 = document.getElementsByTagName("h1");
        if (h1.length) {
            var meetsConditions = false;
            for (var i = 0; i < h1.length; i++) {
                if (h1[i].children && (h1[i].children[0].localName === "span")) {
                    meetsConditions = true;
                }
            }
            expect(meetsConditions).toBe(true);
        } else {
            expect(false).toBe(true)
        }
    });
});