import { Planet } from "./planets";

export class PlanetList {
    planetList: Planet[];

    constructor(planetList: Planet[]) {
        this.planetList = planetList;
    }
}