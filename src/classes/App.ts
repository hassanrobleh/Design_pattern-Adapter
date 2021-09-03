import { Canard } from '../interfaces/Canard';
import { AdaptateurDindon } from '../adaptateurs/AdaptateurDindon';
import { DindonSauvage } from './DindonSauvage';
import { Colvert } from './Colvert';

class App {

    main() {

        const canard: Colvert = new Colvert();
        const dindon: DindonSauvage = new DindonSauvage();
        const adaptateurDindon = new AdaptateurDindon(dindon);

        console.log("Dindon dit ...");
        dindon.glouglouter();
        dindon.voler();

        console.log("\n canard dit ...");
        // App.testerCanard(canard);
        canard.cancaner();
        canard.voler();

        console.log("\n AdaptateurDindon dit...");
        // App.testerCanard(adaptateurDindon);
        adaptateurDindon.cancaner();
        adaptateurDindon.voler();
    }

    // static testerCanard(canard: Canard) {

    //     canard.cancaner();
    //     canard.voler();
    // }
    
}

const app = new App();
app.main();