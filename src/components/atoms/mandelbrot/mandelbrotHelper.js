console.clear();


/*
    c = a + bi
*/
class ComplexNumber {

    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    squared() {
        // (a + bi)*(a + bi)  =
        // a² + a*bi + a*bi + b²i²  =
        // a² + 2abi - b²  =
        // (a² - b²) + 2abi
        const a = this.a,
              b = this.b,
              newA = a*a - b*b,
              newB = 2*a*b;

        return new ComplexNumber(newA, newB);
    }

    add(c) {
        // (a + bi) + (A + Bi)  =
        // (a + A) + (b + B)i
        return new ComplexNumber(this.a + c.a, this.b + c.b);
    }
}


/* Usage:
    var cb = new CanvasPixelBuffer(myCanvas);
    cb.setPixel(10,20, 100);
    cb.setPixel(11,21, 100);
    cb.render();    
*/
class CanvasPixelBuffer {
    
    constructor(canvas, w, h) {
        this.w = canvas.width  = (w || canvas.width);
        this.h = canvas.height = (h || canvas.height);
        this.targetContext = canvas.getContext('2d');
        this.targetData    = this.targetContext.getImageData(0,0, this.w,this.h);
    }

    //http://stackoverflow.com/questions/13917139/fastest-way-to-iterate-pixels-in-a-canvas-and-copy-some-of-them-in-another-one
    setPixel(x, y, rgb) {
        const index = (y * this.w + x) * 4, //Index of the current pixel
              data = this.targetData.data;

        data[index]     = rgb[0]; //r
        data[index + 1] = rgb[1]; //g
        data[index + 2] = rgb[2]; //b
        data[index + 3] = (rgb.length > 3) ? rgb[3] : 255;   //a
    }
    
    render() {
        this.targetContext.putImageData(this.targetData, 0,0);
    }
}


function mandelbrot(iterations, area, viewportSize) {

    function testNumber(a, b) {
        //Create the main iterated Mandelbrot set function f(z):
        const c = new ComplexNumber(a, b);
        function f(z) {
            return z.squared().add(c);
        }

        let n = 0, z = c;
        for(let i = 1; i <= iterations; i++) {
            z = f(z);
            if( (Math.abs(z.a) > 2) || (Math.abs(z.b) > 2) ) {
                n = i;
                break;
            }
        }
        return n;
    }
    
    const viewW = viewportSize[0],
          viewH = viewportSize[1],
          zoom    = area.size[0] / viewW,
          offsetA = area.topLeft[0],
          offsetB = area.topLeft[1],
          set = [];

    let a, b, n;
    for(let y = 0; y < viewH; y++) {
        const row = []
        set.push(row);

        for(let x = 0; x < viewW; x++) {

            a = (x * zoom) + offsetA;
            b = (y * zoom) + offsetB;
            n = testNumber(a, b);

            row.push(n);
        }
    }

    return set;
}


export default function createPath (size, canvas) {
    const maxIters = 30,
    viewBox = {
        topLeft: [-2.3, -1.201],
        size: [3.5, null],
    };

    const w = size,
        h = size,
        colors = ['#ffff00','#cbff00','#8dff00','#00ff00','#40ff78','#43ffbd','#00ffff','#55b6ff','#506dff','#0000ff','#8a00ff','#c900ff','#ff00ff','#ff00ae','#ff0060','#ff0000','#ff7f00','#ffc200']
                .map(hex => hex.slice(1).match(/(..)/g).map(x => parseInt(x, 16)));

    const buffer = new CanvasPixelBuffer(canvas, w, h);

    const set = mandelbrot(maxIters, viewBox, [w, h]);
    let n;
    for(let y = 0; y < h; y++) {
    for(let x = 0; x < w; x++) {
        n = set[y][x];
        buffer.setPixel(x, y, (n === 0) ? [0, 0, 0] : colors[(n - 1) % colors.length]);
    }
    }
    buffer.render();   
}