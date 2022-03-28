import './styles.css'; 
import prepareHome from './home';
import prepareMenu from './menu';
import prepareContact from './contact'


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
    home.classList.add('nav-button', 'on')
    home.textContent = 'Home';

    home.addEventListener('click', function load(event) {
        if (event.target.classList.contains('on')) return;
        const main = document.querySelector('.main')
        main.textContent = '';
        toggleOnClass(home)
        prepareHome()
    });

    const menu = document.createElement('button');
    menu.classList.add('nav-button')
    menu.textContent = 'Menu'

    menu.addEventListener('click', function load(event) {
        if (event.target.classList.contains('on')) return;
        const main = document.querySelector('.main')
        main.textContent = '';
        toggleOnClass(menu)
        prepareMenu()
    });

    const contact = document.createElement('button')
    contact.classList.add('nav-button');
    contact.textContent = 'Contact'

    contact.addEventListener('click', function load(event) {
        if (event.target.classList.contains('on')) return;
        const main = document.querySelector('.main')
        main.textContent = '';
        toggleOnClass(contact)
        prepareContact()
    });

    nav.append(home, menu, contact)

    return nav
}

const toggleOnClass = (element) => {
    const buttons = document.querySelectorAll('.nav-button')

    buttons.forEach((element) => {
        if (element !== this) {
            element.classList.remove('on')
        }})
    element.classList.add('on')
}


const createMain = () => {
    const main = document.createElement('div');
    main.classList.add('main');

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

(function CreateWebsite() {
    content.appendChild(createHeader());
    content.appendChild(createMain()); 
    content.appendChild(createFooter());
    prepareHome();
})();