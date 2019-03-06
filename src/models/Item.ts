export class Item {
    description: string[];
    isLend: boolean;

    constructor(public name: string, public borrower: string) {
        this.isLend = false;
    }
}