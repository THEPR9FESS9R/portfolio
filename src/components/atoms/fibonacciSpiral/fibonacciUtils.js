const PI = 3.14159265358979;

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

class Rectangle {
    constructor(tl, tr, bl, br, type) {
        this.tr = tr;
        this.tl = tl;
        this.bl = bl;
        this.br = br;
        this.type = type;
    }

    setTL (point) {
        this.tl = point;
    }

    setTR (point) {
        this.tr = point;
    }

    setBL (point) {
        this.bl = point;
    }

    setBR (point) {
        this.br = point;
    }

    getVerticalSideLength () {
        return this.bl.y - this.tl.y;
    }

    getHorizontalSideLength () {
        return this.tr.x - this.tl.x;
    }

    render(path) {
        path = path || '';
        path = createMoveToPath(path, this.tl.x, this.tl.y);
        path = createRectanglePath(path, this.br.x, this.bl.y, this.tl.x, this.tl.y);
        
        let sideLength = this.getHorizontalSideLength();

        switch (this.type) {
            case 1:
                path = createMoveToPath(path, this.br.x, this.br.y);
                path = createArcPath(path, sideLength, 0, this.tl.x, this.tl.y);
                break;
            case 2:
                path = createMoveToPath(path, this.tr.x, this.tr.y);
                path = createArcPath(path, sideLength, 0, this.bl.x, this.bl.y);
                break;
            case 3:
                path = createMoveToPath(path, this.tl.x, this.tl.y);
                path = createArcPath(path, sideLength, 0, this.br.x, this.br.y);
                break;
            default:
                path = createMoveToPath(path, this.bl.x, this.bl.y);
                path = createArcPath(path, sideLength, 0, this.tr.x, this.tr.y);
                break;
        }
        
        return path;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

export function createPath () {
    
    let originX = 169,
        originY = 105,
        path,
        scaleFactor = 1;

    let origin = new Point(originX, originY)
    let completeRectangle = new Rectangle(origin, origin, origin, origin);

    let iterations = 14;
    let fibonacciSequence = createFibonacciSequence(iterations);
    let rectangles = [];
    
    let rectangle;
    for (let i = 1; i <= iterations; i++) {
        let sideLength = fibonacciSequence[i - 1] * scaleFactor;
        
        let type = (i + (4 - (iterations % 4))) % 4;
        type = Math.sqrt(Math.pow(type, 2));

        switch (type) {
            case 1:
                originX = completeRectangle.tr.x - sideLength;
                originY = completeRectangle.tr.y - sideLength;
                origin = new Point(originX, originY);
                rectangle = createSquare(origin, sideLength, type);
                completeRectangle.tl = rectangle.tl;
                completeRectangle.tr = rectangle.tr;
                break;
            case 2:
                originX = completeRectangle.tl.x - sideLength;
                originY = completeRectangle.tl.y;
                origin = new Point(originX, originY);

                rectangle = createSquare(origin, sideLength, type);
                completeRectangle.tl = rectangle.tl;
                completeRectangle.bl = rectangle.bl;
                break;
            case 3:
                originX = completeRectangle.bl.x;
                originY = completeRectangle.bl.y;
                origin = new Point(originX, originY);
                
                rectangle = createSquare(origin, sideLength, type);
                completeRectangle.bl = rectangle.bl;
                completeRectangle.br = rectangle.br;
                break;
            default:
                originX = completeRectangle.br.x;
                originY = completeRectangle.br.y - sideLength;
                origin = new Point(originX, originY);
                rectangle = createSquare(origin, sideLength, type);
                completeRectangle.tr = rectangle.tr;
                completeRectangle.br = rectangle.br;
                break;
        }

        rectangles.push(rectangle);
    }

    rectangles.forEach(rectangle => {
        path = rectangle.render(path);
    });

    let deltaY = 250 - completeRectangle.tl.y;
    let deltaX = 250 - completeRectangle.tl.x;

    console.log('deltaX:', deltaX);
    console.log('deltaY:', deltaY);

    console.log(completeRectangle.getHorizontalSideLength());
    console.log(completeRectangle.getVerticalSideLength());

    return path;
}

function createSquare (origin, sideLength, type) {
    let br = new Point(origin.x + sideLength, origin.y + sideLength),
        bl = new Point(origin.x, origin.y + sideLength),
        tr = new Point(origin.x + sideLength, origin.y);

    return new Rectangle(origin, tr, bl, br, type);
}

function createMoveToPath (path, x, y) {
    return `${path} M${x} ${y}`;
}

function createRectanglePath (path, sideLengthX, sideLengthY, originX, originY) {
    return `${path} V ${sideLengthY} H ${sideLengthX} V ${originY} H ${originX}`;
}

function createSquarePath (path, lineLength, startX, startY) {
    return createRectanglePath(path, lineLength, lineLength, startX, startY)
}

function createArcPath (path, currentRadius, xAxisRotation, x, y) {
    return `${path} A ${currentRadius} ${currentRadius} ${xAxisRotation} 0 0 ${x} ${y}`;
}

function createLinePath (path, x, y) {
    return `${path} L ${x} ${y}`;
}

function lineLength (area) {
    area = area * 4;
    return area / Math.sqrt(PI, 2);
}

function calcHalfAxis (area, a) {
    area = area * 4;
    return area / (PI * a);
}

function createFibonacciSequence (limit) {
    var sequence = [];

    for (let i = 0; i < limit; i++) {
        
        if (i < 2) {
            sequence.push(1);
        } else {
            let nMinusOne = sequence[i-1],
                nMinusTwo = sequence[i-2];
            sequence.push(nMinusOne + nMinusTwo);
        }
    }

    return sequence;
}