import { Starship } from "./starships";

export class StarshipList {
    starshipList: Starship[];

    constructor(starshipList: Starship[]) {
        this.starshipList = starshipList;
    }
}