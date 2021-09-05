import { Canard } from '../interfaces/Canard';
import { AdaptateurDindon } from '../adaptateurs/AdaptateurDindon';
import { DindonSauvage } from './DindonSauvage';
import { Colvert } from './Colvert';

export class App {
    static testerCanard(canard: Canard) {
        canard.cancaner();
        canard.voler();
    }

    dindon() {
        const dindon: DindonSauvage = new DindonSauvage();

        return dindon.voler();
    }

    canard() {
        const canard: Colvert = new Colvert();
        App.testerCanard(canard);
        
        return canard.voler();
    }

    adapterDindon() {
        const dindon: DindonSauvage = new DindonSauvage();
        const adaptateurDindon = new AdaptateurDindon(dindon);
        App.testerCanard(adaptateurDindon);

        return adaptateurDindon.voler();
    }
    
}
