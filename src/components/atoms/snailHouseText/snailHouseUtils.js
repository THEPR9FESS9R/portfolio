export default function createPath (viewboxX = 500, viewboxY = 500, gutter = 2, isReverse = false) {
    let x = viewboxX / 2,
        y = viewboxY / 2,
        currentRadius = 0,
        currentDiameter = 0,
        path = `M${x} ${y}`,
        iterations = Math.floor(viewboxY / gutter),
        // iterations = 2,
        xAxisRotation = 0;

    for (let i = 0; i < iterations; i++) {
        currentDiameter += gutter;
        currentRadius = currentDiameter / 2;
        x = isReverse ? x + currentDiameter : x - currentDiameter;

        path = buildPathString(path, currentRadius, xAxisRotation, x, y);

        currentDiameter += gutter;
        currentRadius = currentDiameter / 2;

        x = isReverse ? x - currentDiameter : x + currentDiameter;

        path = buildPathString(path, currentRadius, xAxisRotation, x, y);
    }

    return path;
}

export function createPathReversed (viewboxX = 500, viewboxY = 500, gutter = 2, isReverse = false) {
    let x = 0,
        y = viewboxY / 2,
        currentDiameter = viewboxX,
        currentRadius = currentDiameter / 2,
        path = `M${x} ${y}`,
        iterations = Math.floor(viewboxY / gutter / 2),
        xAxisRotation = 0;

    x = currentDiameter;

    for (let i = 0; i < iterations; i++) {

        path = buildPathString(path, currentRadius, xAxisRotation, x, y);

        currentDiameter -= gutter;
        currentRadius = currentDiameter / 2;
        x -= currentDiameter;
        path = buildPathString(path, currentRadius, xAxisRotation, x, y);

        currentDiameter -= gutter;
        currentRadius = currentDiameter / 2;
        x = viewboxX - x;
    }

    return path;
}

function buildPathString (path, currentRadius, xAxisRotation, x, y) {
    return `${path} A ${currentRadius} ${currentRadius} ${xAxisRotation} 0 0 ${x} ${y}`;
}