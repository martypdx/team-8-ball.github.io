import html from '../html.js';
import userApi from '../result-api.js';


// "Get All Results" which returns a user???
// let user = resultsApi.getAll();

function makeTemplate() {
    return html`
        <div id="quiz-icon">
            <a href="../QUIZ-HOUSE/house-quiz.html" id="map-house"><img src="../ASSETS/Hogwarts-Logo-PNG-Transparent.png" alt="Hogwarts Crest"></a>
            <a href="../QUIZ-PATRONUS/patronus-quiz.html" id="map-patronus" ><img src="../ASSETS/group-patronus.jpg" alt="Group of Patronus"></a>
            <a href="../QUIZ-WAND/wand-quiz.html" id="map-wand"><img  src="../ASSETS/Three-wands.png" alt="a trio of wands"></a>
            <a href="../QUIZ-CAREER/career-quiz.html" id="map-career"><img  src="../ASSETS/ministry-magic.png" alt="Ministry of Magic Seal"></a>
            <a href="../END-STORY/end-story.html" id="map-door"><img src="../ASSETS/fancier-door.png" alt="A Secret Door - Your Future?"></a>
            <a href="../QUIZ-QUIDDITCH/quidditch-quiz.html" id="map-snitch"><img src="../ASSETS/kisspng-snitch.png" alt="the Goblet of Fire"></a>
            <p id="instructions">Choose your path. Will you find the hidden door?</p>
        </div>
        `;
}

export default class App {
    constructor(){
        // This reads much better. Get a user.
        this.user = userApi.get();
    }

    render() {
        const dom = makeTemplate();
        let door = dom.querySelector('#map-door');
        
        // let house = dom.querySelector('#map-house');
        // let patronus = dom.querySelector('#map-patronus');
        // let wand = dom.querySelector('#map-wand');
        // let career = dom.querySelector('#map-career');
        // let quidditch = dom.querySelector('#map-snitch');
        
        let instructions = dom.querySelector('#instructions');

        door.classList.add('hidden');

        // Consider a more dynamic approach:
        const locations = ['house', 'patronus', 'wand', 'career', 'quidditch'];

        locations.forEach(location => {
            if(this.user[location]) {
                const link = dom.querySelector('#map-' + location);
                link.classList.add('hidden');
            }
        });

        // if(this.user.house) {
        //     house.classList.add('hidden');
        // }
        // if(this.user.patronus) {
        //     patronus.classList.add('hidden');
        // }
        // if(this.user.wand) {
        //     wand.classList.add('hidden');
        // }
        // if(this.user.career) {
        //     career.classList.add('hidden');
        // }
        // if(this.user.quidditch) {
        //     quidditch.classList.add('hidden');
        // }

        if(locations.every(location => this.user[location])) {
            door.classList.remove('hidden'); 
            instructions.classList.add('hidden');    
        }

        // if(this.user.career && this.user.wand && this.user.house && this.user.patronus && this.user.quidditch) { 
        //     door.classList.remove('hidden'); 
        //     instructions.classList.add('hidden');
        // }

        return dom;
    }
}
