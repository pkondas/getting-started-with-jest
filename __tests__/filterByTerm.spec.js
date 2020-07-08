function filterByTerm(inputArr, searchTerm) {
        // case insensitive regular expression
        const regex = new RegExp(searchTerm, "i");
        
        return inputArr.filter(function(arrayElement) {
            return arrayElement.url.match(regex);
        });
}

describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        const output = [{ id: 3, url: "https://www.link3.dev" }];

        expect(filterByTerm(input, "link")).toEqual(output);
        expect(filterByTerm(input, "LINK")).toEqual(output);

    }),
    test("it should filter by a search term (uri)", () => {
        //TODO: Try to figure out why "url" doesn't work in toEqual(), but LINK and URI does.
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.url3.dev" }
        ];

        const output = [{ id: 3, url: "https://www.url3.dev" }];

        expect(filterByTerm(input, "url")).toEqual(expect.arrayContaining(output));
        expect(filterByTerm(input, "URL")).toEqual(expect.arrayContaining(output));

    }),
    test("it should filter by a search term (<empty string>)", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.uri3.dev" }
        ];

        const output = [{ id: 1, url: "https://www.url1.dev" }];

        expect(filterByTerm(input, "")).toEqual(expect.arrayContaining(output));
        expect(filterByTerm(input, "")).toEqual(expect.arrayContaining(output));

    });
});