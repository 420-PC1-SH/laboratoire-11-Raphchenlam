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
        expect(result.id).toEqual(9701);
    })
    
    test("object contains rawData attribute", function () {
        let result = processor("9701::<489584872710>");
        expect(result.rawData).not.toEqual(undefined);
    })
    
    test("rawData attribute in object doesn't contain < and >", function () {
        let result = processor("9701::489584872710");
        expect(result.rawData).toEqual(-1);
    })
});