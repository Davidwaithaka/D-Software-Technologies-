document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us!');
});

const services = [
    {
        title: "Website Creation",
        description: "We create stunning and responsive websites.",
        image: "web.jpeg"
    },
    {
        title: "Poster Design",
        description: "Eye-catching posters for all your needs.",
        image: "poster.jpeg"
    },
    {
        title: "Software Development",
        description: "Custom software solutions tailored to your business.",
        image: "software.jpeg"
    },
    {
        title: "Technical Support",
        description: "Reliable technical support for all your devices.",
        image: "technical.jpeg"
    },
    {
        title: "Computer Support",
        description: "Comprehensive support for all computer-related issues.",
        image: "computer.jpeg"
    }
];

let currentServiceIndex = 0;

function rotateServices() {
    const serviceContainer = document.getElementById('rotating-service');
    const service = services[currentServiceIndex];
    serviceContainer.innerHTML = `
        <div class="service">
            <h3>${service.title}</h3>
            <img src="${service.image}" alt="${service.title}">
            <p>${service.description}</p>
        </div>
    `;
    currentServiceIndex = (currentServiceIndex + 1) % services.length;
}

setInterval(rotateServices, 3000); // Change service every 3 seconds

// Initialize the first service
rotateServices();
