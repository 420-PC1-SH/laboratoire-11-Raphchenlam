const processor = require("./processor");

describe ("Transmission processor", function () {
    test("Take a string returns an object", function (){
        let result = processor("9701::<489584872710>");
        expect(typeof result).toEqual("object");
    });

    test("return -1 if :: is missing", function () {
        let result = processor("9701<489584872710>");
        expect(result).toEqual(-1);
    })
    
    test("return id in object", function () {
        let result = processor("9701::<489584872710>");
        expect(result.id).not.toEqual(undefined);
    })
    
    test("id in object is of type Number", function () {
        let result = processor("9701::<489584872710>");
        expect(typeof result.id).toEqual("Number");
    })
});