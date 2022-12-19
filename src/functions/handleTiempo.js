import { decimal2HHMISS } from "./decimalToDate";

export function handleTiempo(material, vida){
    /*
    console.log(estructura.current.value);
    hp de paredes foundation y techos:
    madera: 250hp decay 3h
    piedra: 500hp decay 5h
    metal: 1000hp decay 8h
    hq: 2000hp decay 12h
    */

    const resource = material.current.value;
    const vidaRestante = vida.current.value;
    let tiempo = 0;
    let vidaTotal = 0;
    let caida = 0;
    switch (resource) {
        case 'wood':
            tiempo = 3;
            vidaTotal = 250;
            caida = (vidaRestante * tiempo) / vidaTotal;
            console.log(decimal2HHMISS(caida));
            break;

        case 'stone':
            tiempo = 5;
            vidaTotal = 500;
            caida = (vidaRestante * tiempo) / vidaTotal;
            console.log(decimal2HHMISS(caida));


            break;

        case 'metal':
            tiempo = 8;
            vidaTotal = 1000;
            caida = (vidaRestante * tiempo) / vidaTotal;
            console.log(decimal2HHMISS(caida));

            break;

        case 'hq':
            tiempo = 12;
            vidaTotal = 2000;
            caida = (vidaRestante * tiempo) / vidaTotal;
            console.log(caida);

            break;
    
        default:
            break;
    }


    
}