import Highway from '@dogstudio/highway';
import Fade from './trasition';

const H = new Highway.Core({
    transitions: {
        default: Fade
    }
});
