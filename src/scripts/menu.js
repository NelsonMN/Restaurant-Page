import caesar from '../images/Caesar Salad.jpeg'
import steak from '../images/Steak Tartare.jpeg'
import french from '../images/French Onion Soup.jpeg'
import boeuf from '../images/Boeuf Bourguignon.jpeg'
import coq from '../images/Coq Au Vin.jpeg'
import tagliatelle from '../images/Tagliatelle.jpeg'
import lemon from '../images/Lemon Tart.jpeg'
import crème from '../images/Crème Brûlée.jpeg'

function makeMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu', 'info')
    
    // Apps
    const imgSources = {
        'caesar': caesar,
        'steak': steak,
        'french': french,
        'boeuf': boeuf,
        'coq': coq,
        'tagliatelle': tagliatelle,
        'lemon': lemon,
        'crème': crème
    };

    const createTitle = (name) => {
        const title = document.createElement('h2');
        title.classList.add('food-titles');
        title.textContent = name;
        menu.append(title)
    };

    const addFood = (name) => {
        const food = document.createElement('div');
        food.classList.add('food');

        const foodImage = new Image();
        foodImage.classList.add('food-img');
        foodImage.src = imgSources[name.toLowerCase().split(' ')[0]];
        foodImage.alt = name;
        
        const foodName = document.createElement('h4');
        foodName.textContent = name;
         
        menu.appendChild(food)
        food.append(foodImage)
        food.append(foodName)
    };

    createTitle('Appetizers')
    addFood('Caesar Salad')
    addFood('Steak Tartare')
    addFood('French Onion Soup')

    createTitle('Mains')
    addFood('Boeuf Bourguignon')
    addFood('Coq Au Vin')
    addFood('Tagliatelle')

    createTitle('Desserts')
    addFood('Lemon Tart')
    addFood('Crème Brûlée')

    const main = document.querySelector(".main");
    main.append(menu)

    return menu
}

const prepareMenu = () => {
    const main = document.querySelector(".main");
    main.appendChild(makeMenu());
};

export default prepareMenu