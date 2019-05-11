import { User } from "./user.model";
import { People } from "./people";

export class PeopleList {
    peopleList: People[];

    constructor(peopleList: People[]) {
        this.peopleList = peopleList;
    }
}