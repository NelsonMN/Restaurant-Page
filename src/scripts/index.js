import './styles.css'; 
import prepareHome from './home';
import caesar from '../images/Caesar Salad.jpeg'
// import './menu';
// import './contact';

const content = document.querySelector('.content')

const createHeader = () => {
    const header = document.createElement('div');
    header.classList.add('header');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Maison Selby';

    content.appendChild(header);
    header.appendChild(title);
    header.append(createNav())

    return header
}

const createNav = () => {
    const nav = document.createElement('div');
    nav.classList.add('nav')

    const home = document.createElement('button');
    home.textContent = 'Home'

    home.addEventListener('click', () => {
        const main = document.querySelector('.main')
        main.textContent = '';
        prepareHome()
    });

    const menu = document.createElement('button');
    menu.textContent = 'Menu'

    const contact = document.createElement('button');
    contact.textContent = 'Contact'

    nav.append(home, menu, contact)

    return nav
}

const createMain = () => {
    const main = document.createElement('div');
    main.classList.add('main');
    content.append(main);

    const menu = document.createElement('div');
    menu.classList.add('menu', 'info')
    
    // Apps
    const imgSources = {
        'caesar': caesar
    }

    const appsTitle = document.createElement('h2');
    appsTitle.classList.add('apps-titles');
    appsTitle.textContent = 'Appetizers';
    menu.append(appsTitle)

    const addFood = (name) => {
        const food = document.createElement('div');
        food.classList.add('food');

        const foodImage = new Image();
        foodImage.classList.add('food-img');
        foodImage.src = imgSources[name.toLowerCase().split(' ')[0]]
        foodImage.alt = name;
        
        const foodName = document.createElement('h4');
        foodName.textContent = name;
         
        menu.appendChild(food)
        food.append(foodImage)
        food.append(foodName)

        return food
    };

    addFood('Caesar Salad');

    main.append(menu)
    
    return main
}

const createFooter = () => {
    const footer = document.createElement('div');
    footer.classList.add('footer');

    const madeBy = document.createElement('a');
    madeBy.href = 'https://github.com/NelsonMN'
    madeBy.textContent = 'Created By: NelsonMM'
    
    footer.append(madeBy)
    content.append(footer)

    return footer
}

function CreateWebsite() {
    content.appendChild(createHeader());
    content.appendChild(createMain()); 
    content.appendChild(createFooter());

    // prepareHome();
}

CreateWebsite()