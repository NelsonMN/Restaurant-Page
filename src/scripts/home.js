import french from '../images/French Onion Soup.jpeg'

function createHome() {
    const home = document.createElement('div');
    home.classList.add('info')

    const paragraph = document.createElement('p');
    paragraph.classList.add('about');
    paragraph.textContent = 'One of the finest French restaurants in all of North America.'

    const soup = new Image();
    soup.classList.add('soup')
    soup.src = french;

    const paragraph1 = document.createElement('p');
    paragraph1.classList.add('about')
    paragraph1.textContent = 'Inspired by the bistro genre, our menu celebrates timeless French cooking with dishes that celebrate traditional European techniques.'

    home.append(paragraph);
    home.append(soup)
    home.append(paragraph1);

    return home
    }

const prepareHome = () => {
    const main = document.querySelector(".main");
    main.appendChild(createHome());
}

export default prepareHome