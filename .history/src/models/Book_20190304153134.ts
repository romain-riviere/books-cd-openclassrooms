export class Appareil {
    description: string[];
    isOn: boolean;

    constructor(public name: string) {
        this.isOn = false;
    }
}