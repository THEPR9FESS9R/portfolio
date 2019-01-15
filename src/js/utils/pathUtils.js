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

function createSquare (origin, sideLength, type) {
    let br = new Point(origin.x + sideLength, origin.y + sideLength),
        bl = new Point(origin.x, origin.y + sideLength),
        tr = new Point(origin.x + sideLength, origin.y);

    return new Rectangle(origin, tr, bl, br, type);
}

export function createMoveToPath (path, x, y) {
    return `${path} M${x} ${y}`;
}

export function createRectanglePath (path, sideLengthX, sideLengthY, originX, originY) {
    return `${path} V ${sideLengthY} H ${sideLengthX} V ${originY} H ${originX}`;
}

export function createSquarePath (path, lineLength, startX, startY) {
    return createRectanglePath(path, lineLength, lineLength, startX, startY)
}

export function createArcPath (path, currentRadius, xAxisRotation, x, y) {
    return `${path} A ${currentRadius} ${currentRadius} ${xAxisRotation} 0 0 ${x} ${y}`;
}

export function createLinePath (path, x, y) {
    return `${path} L ${x} ${y}`;
}
