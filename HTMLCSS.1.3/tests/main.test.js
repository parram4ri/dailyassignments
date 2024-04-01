let fs = require('fs');
let jsdom = require('jsdom');
const { JSDOM } = jsdom;
let path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

let dom;
let document;

describe("Requirements", function () {
    beforeEach(() => {
        dom = new JSDOM(html, {runScripts: 'dangerously'});
        document = dom.window.document;
    })
    it("Your program needs three separate times where you use both the greater than and less than symbols", function () {
        // Failure message: 
        // Your program needs three separate times where you use both the greater than and less than symbols
        var elements = document.querySelectorAll("body *");
        var lessCount = 0;
        var greaterCount = 0;

        for (var i = 0; i < elements.length; i++) {
            if (elements[i].innerHTML.includes("&lt;")) {
                lessCount++;
            }
            if (elements[i].innerHTML.includes("&gt;")) {
                greaterCount++;
            }
        }

        expect(lessCount > 2 && greaterCount > 2).toBe(true);
    });
    it("Should have a br tag inside of a paragraph tag", function () {
        // Failure message: 
        // Should have a br tag inside of a paragraph tag
        var p = document.getElementsByTagName("p");
        var test = false;

        for (var i = 0; i < p.length; i++) {
            if (p[i].children.length > 0) {
                for (var j = 0; j < p[i].children.length; j++) {
                    if (p[i].children[j].localName === "br") {
                        test = true;
                    }
                }
            }
        }

        expect(test).toBe(true);

    });
});