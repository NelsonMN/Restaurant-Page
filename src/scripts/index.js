import './styles.css';
// import './home.js';
// import './menu.js';
// import './contact.js';
import plateImage from '../images/plate.jpeg'

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
}

const createNav = () => {
    const nav = document.createElement('div');
    nav.classList.add('nav')

    const home = document.createElement('button');
    home.textContent = 'Home'

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

    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    content.append(main);
    main.append(mainContent);

    const paragraph = document.createElement('p');
    paragraph.classList.add('about');
    paragraph.textContent = 'One of the finest French restaurants in all of North America.'

    const plate = new Image();
    plate.classList.add('plate')
    plate.src = plateImage;

    const paragraph1 = document.createElement('p');
    paragraph1.classList.add('about')
    paragraph1.textContent = 'Inspired by the bistro genre, our menu celebrates timeless French cooking with dishes that celebrate traditional European techniques.'
    
    mainContent.append(paragraph);
    mainContent.append(plate)
    mainContent.append(paragraph1);

    return mainContent
}

const createFooter = () => {
    const footer = document.createElement('div');
    footer.classList.add('footer');

    const madeBy = document.createElement('a');
    madeBy.href = 'https://github.com/NelsonMN'
    madeBy.textContent = 'Created By: NelsonMM'
    
    footer.append(madeBy)
    content.append(footer)
}

const createPage = (() => {
    createHeader();
    createMain(); 
    createFooter();
})()

// export {createMain, createPage}