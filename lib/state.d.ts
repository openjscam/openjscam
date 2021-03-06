import * as THREE from 'three';
import { Plane, Unit } from './constants';
import Coordinate from './coordinate';
import PostProcessor from './postprocessors/postprocessor';
import Transformation from './transformations/transformation';
export default class State {
    postProcessor: PostProcessor;
    constructor(postProcessor: PostProcessor);
    resolution: number;
    tool: number | undefined;
    units: Unit | undefined;
    feedRate: number | undefined;
    speed: number | undefined;
    lastCoord: Coordinate;
    lastUntransformedCoord: Coordinate;
    transformations: Transformation[];
    gcode: string[][];
    shapes: (THREE.Vector | THREE.Curve<THREE.Vector>)[];
    reset(): void;
    updateLastCoord(coord: Coordinate): void;
    updateLastUntransformedCoord(coord: Coordinate): void;
    removeRedundantCoords(coord: Coordinate): Coordinate | null;
    applyTransformations(coordinate: Coordinate, transformations?: Transformation[] | null, isIncremental?: boolean): Coordinate;
    applyTransformation(coord: Coordinate, transformation: Transformation, isIncremental?: boolean): Coordinate;
    setPostProcessor(postProcessor: PostProcessor): void;
    setTool(tool: number): void;
    setResolution(resolution: number): void;
    setUnits(units: Unit): void;
    setFeedRate(feedRate: number): void;
    setSpeed(speed: number): void;
    cut(coordinate: Coordinate): void;
    icut(offset: Coordinate): void;
    fillCoordWithLastUntransformedCoord(coordinate: Coordinate): {
        x: number | undefined;
        y: number | undefined;
        z: number | undefined;
    };
    fillCoordWithZeros(coordinate: Coordinate): {
        x: number;
        y: number;
        z: number;
    };
    rapid(coordinate: Coordinate): void;
    irapid(offset: Coordinate): void;
    dwell(duration: number): void;
    hasTransformation(transformationType: Transformation): boolean;
    arc(centerOffset: Coordinate, angle: number, plane?: Plane): void;
    radiusArc(radius: number, startAngle: number, endAngle: number, plane?: Plane): void;
    ellipse(radiusX: number, radiusY: number, offsetZ: number | undefined, angle: number, angleStart?: number, points?: number, plane?: Plane): void;
    rotate(angle: number, cb?: () => void): void;
    scale(scales: Coordinate | number, cb?: () => void): void;
    translate(offset: Coordinate, cb?: () => void): void;
    write(command: string): void;
    writeBatch(commands: string[]): void;
    save(path: string): void;
    log(): void;
    toString(): string;
}
