const filterByTerm = require("../src/filterByTerm");

describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        const output = [{ id: 3, url: "https://www.link3.dev" }];

        // Check that the filtered input matches the output exactly
        expect(filterByTerm(input, "link")).toEqual(output);
        expect(filterByTerm(input, "LINK")).toEqual(output);

    }),
    test("it should filter by a search term (url)", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.url3.dev" }
        ];

        const output = [{ id: 3, url: "https://www.url3.dev" }];

        // An array will be returned, so check that the output is contained in the array
        expect(filterByTerm(input, "url")).toEqual(expect.arrayContaining(output));
        expect(filterByTerm(input, "URL")).toEqual(expect.arrayContaining(output));

    }),
    test("it should error on an empty search term", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.uri3.dev" }
        ];

        expect( () => {
            filterByTerm(input, "").toThrowError();
        });
    }),
    test("it should error on an empty argument", () => {
        const input = [
            
        ];

        expect( () => {
            filterByTerm(input, "url").toThrowError();
        });
    });
});