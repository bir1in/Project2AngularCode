export class Planet{
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    // residents: string[];
    // films: string[];
    // created: string;
    // edited: string;
    // url: string;
    constructor(name: string, rotation_period: string, orbital_period: string, diameter: string, climate: string, gravity: string, terrain: string, surface_water: string, population: string) {
        this.name = name;
        this.rotation_period = rotation_period;
        this.orbital_period = orbital_period;
        this.diameter = diameter;
        this.climate = climate;
        this.gravity = gravity;
        this.terrain = terrain;
        this.surface_water = surface_water;
        this.population = population;
    }
}