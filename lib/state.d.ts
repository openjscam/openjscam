import * as THREE from 'three';
import { Plane, Unit } from './constants';
import Coordinate from './coordinate';
import PostProcessor from './postprocessors/postprocessor';
import Transformation from './transformations/transformation';
export default class State {
    postProcessor: PostProcessor;
    constructor(postProcessor: PostProcessor);
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
    applyTransformations(coordinate: Coordinate, transformations?: Transformation[] | null): Coordinate;
    applyTransformation(coord: Coordinate, transformation: Transformation): Coordinate;
    setPostProcessor(postProcessor: PostProcessor): void;
    setTool(tool: number): void;
    setUnits(units: Unit): void;
    setFeedRate(feedRate: number): void;
    setSpeed(speed: number): void;
    cut(coordinate: Coordinate): void;
    icut(offset: Coordinate): void;
    rapid(coordinate: Coordinate): void;
    irapid(offset: Coordinate): void;
    dwell(duration: number): void;
    arc(offset: Coordinate, angle: number, plane?: Plane): void;
    ellipse(radiusX: number, radiusY: number, offsetZ: number | undefined, angle: number, angleStart?: number, points?: number, plane?: Plane): void;
    translate(offset: Coordinate, cb?: () => void): void;
    rotate(angle: number, cb?: () => void): void;
    scale(scales: Coordinate, cb?: () => void): void;
    write(command: string): void;
    writeBatch(commands: string[]): void;
    save(path: string): void;
    log(): void;
    toString(): string;
}