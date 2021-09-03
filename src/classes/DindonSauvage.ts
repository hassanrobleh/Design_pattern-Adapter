import { Dindon } from './../interfaces/Dindon';

export class DindonSauvage implements Dindon {

    glouglouter() {
        console.log("Glouglou");
    }

    voler() {
        console.log("Je ne vole pas loin");
    }

}