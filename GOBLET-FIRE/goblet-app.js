import html from '../html.js';
import CastName from './goblet-button.js';

function makeTemplate() {
    return html `
        <div id="root"> </div>
        <button id="button">Cast Your Name!</button>
        
        <a href="../ABOUT-US/about-us.html" id=back-button><button>Text</button></a>
        `;
}

export default class Goblet {

    render() {

        const dom = makeTemplate();
        const castName = dom.querySelector('button');
        const textContainer = dom.querySelector('#root');

        castName.addEventListener('click', () =>{

            const castButton = new CastName ();
            textContainer.appendChild(castButton.render());
            castName.classList.add('hidden');
        
        });

        return dom;
    }
}