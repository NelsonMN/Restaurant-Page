function makeContact() {
    const contact = document.createElement('div');
    contact.classList.add('info')

    const title = document.createElement('h2');
    title.classList.add('contact');
    title.textContent = 'Contact Us!'

    const personContainer = document.createElement('div')
    personContainer.classList.add('people')

    const addContact = (name, title, number, email) => {
        
        const person = document.createElement('div')
        person.classList.add('person')
        const nameElement = document.createElement('h3')
        nameElement.textContent = name
        const titleElement = document.createElement('h4')
        titleElement.textContent = title
        const phoneElement = document.createElement('h4')
        phoneElement.textContent = number
        const emailElement = document.createElement('h4')
        emailElement.textContent = email

        contact.append(personContainer)
        personContainer.append(person)
        person.append(nameElement)
        person.append(titleElement)
        person.append(phoneElement)
        person.append(emailElement)

        return person
    }
    
    contact.append(title);

    addContact('Camille', 'Manager', '555-555-5550', 'realCamille@notfake.com')
    addContact('François', 'Head Chef', '555-555-5551', 'realFrançois@notfake.com')
    addContact('NelsonMM', 'Owner', '555-555-5552', 'realNelson@notfake.com')

    const mapHolder = document.createElement('div')
    const map = document.createElement('iframe')
    map.classList.add('map')
    map.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10499.966498430253!2d2.2944813!3d48.8583701!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sca!4v1648476019475!5m2!1sen!2sca"
    map.allowfullscreen = ""; 
    map.loading = "lazy"; 
    map.referrerpolicy="no-referrer-when-downgrade"

    mapHolder.append(map)
    mapHolder.classList.add('map-holder')
    contact.append(mapHolder)

    return contact
}

const prepareContact = () => {
    const main = document.querySelector(".main");
    main.appendChild(makeContact());
}

export default prepareContact