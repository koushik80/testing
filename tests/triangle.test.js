const { Triangle } = require ('../triangle');
describe('Triangle', () => {
    test('Should correctly create a triangle object with three lengths', () => {
        const triangle = new Triangle(2,4,5);
        expect(triangle.side1).toEqual(2);
        expect(triangle.side2).toEqual(4);
        expect(triangle.side3).toEqual(5);
    });
    test('Should correctly determine whether three lengths are not a triangle',() => {
        const notTriangle = new Triangle(3,9,22);
        expect(notTriangle.checkType()).toEqual("not a triangle");
    })
    test('should correctly determine whether 3 lengths make a scalene (epäsäännöllisen) kolmion',() => {
        const scalTriangle = new Triangle(4,5,7)
        expect(scalTriangle.checkType()).toEqual("Epäsäännöllinen kolmio");
    });
    test('should correctly determine whether three lengths make a isoceles (tasakylkinen) triangle',() => {
        const isocTriangle = new Triangle(5,5,7)
        expect(isocTriangle.checkType()).toEqual("Tasakylkinen kolmio")
    });
    test('should correctly determine whether three lengths make a equilater (tasasivunen) triangle', () => {
        const equiTriangle = new Triangle(5,5,5)
        expect(equiTriangle.checkType()).toEqual("Tasasivuinen kolmio");
    });
});