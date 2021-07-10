import './styles.css';
import { buscarHeroe } from './js/callbacks';

const heroeId = '';


buscarHeroe( heroeId, ( heroe) => {
    console.log(heroe);
})