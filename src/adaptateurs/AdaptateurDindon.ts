import { Dindon } from './../interfaces/Dindon';
import { Canard } from './../interfaces/Canard';

export class AdaptateurDindon implements Canard {

    dindon: Dindon;

    constructor(d: Dindon) {
        this.dindon = d
    }

    cancaner() {
        return this.dindon.glouglouter();
    }

    voler() {
        let result = "";
        for (let i = 0; i < 5; i++) {
            result += this.dindon.voler();
        }
        return result;
    }
}