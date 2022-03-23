import './styles.css';

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
    main.classList.add('main')

    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content')

    content.append(main)
    main.append(mainContent)
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
