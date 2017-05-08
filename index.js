/*eslint global-require: 0*/

/**
 * Turf is a modular geospatial analysis engine written in JavaScript. It performs geospatial
 * processing tasks with GeoJSON data and can be run on a server or in a browser.
 *
 * @module turf
 * @summary Geospatial analysis for JavaScript
 */
var helpers = require('@turf/helpers');
var invariant = require('@turf/invariant');
var meta = require('@turf/meta');

var turf = {
    isolines: require('@turf/isolines'),
    convex: require('@turf/convex'),
    within: require('@turf/within'),
    concave: require('@turf/concave'),
    difference: require('@turf/difference'),
    dissolve: require('@turf/dissolve'),
    collect: require('@turf/collect'),
    flip: require('@turf/flip'),
    simplify: require('@turf/simplify'),
    bezier: require('@turf/bezier'),
    tag: require('@turf/tag'),
    sample: require('@turf/sample'),
    envelope: require('@turf/envelope'),
    square: require('@turf/square'),
    circle: require('@turf/circle'),
    midpoint: require('@turf/midpoint'),
    buffer: require('@turf/buffer'),
    center: require('@turf/center'),
    centerOfMass: require('@turf/center-of-mass'),
    centroid: require('@turf/centroid'),
    combine: require('@turf/combine'),
    distance: require('@turf/distance'),
    explode: require('@turf/explode'),
    bbox: require('@turf/bbox'),
    tesselate: require('@turf/tesselate'),
    bboxPolygon: require('@turf/bbox-polygon'),
    inside: require('@turf/inside'),
    intersect: require('@turf/intersect'),
    nearest: require('@turf/nearest'),
    planepoint: require('@turf/planepoint'),
    random: require('@turf/random'),
    tin: require('@turf/tin'),
    union: require('@turf/union'),
    bearing: require('@turf/bearing'),
    destination: require('@turf/destination'),
    kinks: require('@turf/kinks'),
    pointOnSurface: require('@turf/point-on-surface'),
    area: require('@turf/area'),
    along: require('@turf/along'),
    lineDistance: require('@turf/line-distance'),
    lineSlice: require('@turf/line-slice'),
    lineSliceAlong: require('@turf/line-slice-along'),
    pointOnLine: require('@turf/point-on-line'),
    pointGrid: require('@turf/point-grid'),
    squareGrid: require('@turf/square-grid'),
    triangleGrid: require('@turf/triangle-grid'),
    hexGrid: require('@turf/hex-grid'),
    idw: require('@turf/idw'),
    truncate: require('@turf/truncate'),
    flatten: require('@turf/flatten'),
    lineIntersect: require('@turf/line-intersect'),
    mask: require('@turf/mask'),
    lineChunk: require('@turf/line-chunk'),
    unkinkPolygon: require('@turf/unkink-polygon'),
    greatCircle: require('@turf/great-circle'),
    lineSegment: require('@turf/line-segment'),
    lineSplit: require('@turf/line-split'),
    lineArc: require('@turf/line-arc'),
    polygonToLineString: require('@turf/polygon-to-linestring'),
    lineStringToPolygon: require('@turf/linestring-to-polygon'),
    bboxClip: require('@turf/bbox-clip'),
    lineOverlap: require('@turf/line-overlap'),
    sector: require('@turf/sector'),
    point: helpers.point,
    polygon: helpers.polygon,
    lineString: helpers.lineString,
    multiPoint: helpers.multiPoint,
    multiPolygon: helpers.multiPolygon,
    multiLineString: helpers.multiLineString,
    feature: helpers.feature,
    featureCollection: helpers.featureCollection,
    geometryCollection: helpers.geometryCollection,
    radiansToDistance: helpers.radiansToDistance,
    distanceToRadians: helpers.distanceToRadians,
    distanceToDegrees: helpers.distanceToDegrees,
    bearingToAngle: helpers.bearingToAngle,
    getCoord: invariant.getCoord,
    getCoords: invariant.getCoords,
    geojsonType: invariant.geojsonType,
    featureOf: invariant.featureOf,
    collectionOf: invariant.collectionOf,
    containsNumber: invariant.containsNumber,
    getGeom: invariant.getGeom,
    getGeomType: invariant.getGeomType,
    coordEach: meta.coordEach,
    coordReduce: meta.coordReduce,
    propEach: meta.propEach,
    propReduce: meta.propReduce,
    featureEach: meta.featureEach,
    featureReduce: meta.featureReduce,
    coordAll: meta.coordAll,
    geomEach: meta.geomEach,
    geomReduce: meta.geomReduce
};

module.exports = turf;
