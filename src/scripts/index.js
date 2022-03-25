import './styles.css'; 
import prepareHome from './home';
import Caesar from '../images/caesar.jpeg'
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

    home.addEventListener('click', prepareHome);

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
    
    const apps = document.createElement('div');
    apps.classList.add('apps')
    
    // Apps

    const appsTitle = document.createElement('h2');
    appsTitle.classList.add('apps-titles');
    appsTitle.textContent = `Hors d’Oeuvres`;

    const appOne = document.createElement('div')
    appOne.classList.add('app')
    const caesar = new Image();
    caesar.classList.add('food-img');
    caesar.src = Caesar

    const appTwo = document.createElement('div')
    appTwo.classList.add('app')
    const caesarTwo = new Image();
    caesarTwo.classList.add('food-img');
    caesarTwo.src = Caesar

    const appThree = document.createElement('div')
    appThree.classList.add('app')
    const caesarThree = new Image();
    caesarThree.classList.add('food-img');
    caesarThree.src = Caesar

    main.append(menu)
    menu.append(apps)

    apps.append(appsTitle)
    apps.append(appOne)
    appOne.append(caesar)
    apps.append(appTwo)
    appTwo.append(caesarTwo)
    apps.append(appThree)
    appThree.append(caesarThree)


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