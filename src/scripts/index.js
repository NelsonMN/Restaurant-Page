import './styles.css'; 
import prepareHome from './home';
import prepareMenu from './menu';

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

    home.addEventListener('click', function load() {
        const main = document.querySelector('.main')
        main.textContent = '';
        prepareHome()
    });

    const menu = document.createElement('button');
    menu.textContent = 'Menu'

    menu.addEventListener('click', () => {
        const main = document.querySelector('.main')
        main.textContent = '';
        prepareMenu()
    });

    const contact = document.createElement('button');
    contact.textContent = 'Contact'

    nav.append(home, menu, contact)

    return nav
}


const createMain = () => {
    const main = document.createElement('div');
    main.classList.add('main');
    content.append(main);

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
    prepareHome();
}

CreateWebsite()