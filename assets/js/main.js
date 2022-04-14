// select main elements
const body = document.querySelector('body');
const menuDiv = document.createElement('div');
// Wrap every letter in a span
const textWrapper = document.querySelector('.ml13');
menuDiv.className = 'menu-content';
menuDiv.style.display = 'none';

const htmlContent = `<img class="x-menu" src="./assets/images/Icon-Cancel.svg"  alt="cancel image"></img>
      <ul class="menu-list-item">
        <li class="about"><a class="menu-list-items" href="./about.html">About</a></li>
        <li class="programm"><a class="menu-list-items" href="./">Home</a></li>
        <li class="join"><a class="menu-list-items" href="#join">Join</a></li>
        <li class="sponsor"><a class="menu-list-items" href="#partners">Sponsor</a></li>
        <li class="news"><a class="menu-list-items" href="#guest">Guest</a></li>
        <li class="namm-2020"><a class="menu-list-items" href="./ticket_purchae.html">Events254 Arena</a></li>
      </ul>`;

menuDiv.innerHTML = htmlContent;
body.appendChild(menuDiv);
const cancelImage = menuDiv.querySelector('img');
cancelImage.className = 'x-menu';
cancelImage.src = './assets/images/Icon-Cancel.svg';
cancelImage.alt = 'cancel icon';

const menuIcon = document.querySelector('.toggle-btn');
menuIcon.addEventListener('click', () => {
  menuDiv.style.display = 'flex';
  document.getElementById('header').style.filter = 'blur(0.3125rem)';
});

cancelImage.addEventListener('click', () => {
  menuDiv.style.display = 'none';
  document.getElementById('header').style.filter = 'none';
});

const itemLists = document.querySelectorAll('.menu-list-items');
itemLists.forEach((item) => {
  item.addEventListener('click', () => {
    menuDiv.style.display = 'none';
    document.getElementById('header').style.filter = 'none';
  });
});

// generate dynamic data from object to the html page
const featuredSpeakers = [
  {
    image: './assets/images/speakers/bulale.jpg',
    name: 'Bulale',
    speakerInfo:
      'CEO The RB Company',
    description:
      'CEO The RB Company, Founder The Naked Truth, Minister of the Gospel Author,Actor,Father, Host: The OH MEN Show (Switch TV) Panelist THE VENT (NRG RADIO, motivational speaker and advisor',
  },

  {
    image: './assets/images/speakers/jalas.jpg',
    name: 'Felix Odiwour',
    speakerInfo: 'Kenyan radio presenter and comedian',
    description:
      'Felix Odiwour, more popularly known as Jalango, or Jalas in short, is a Kenyan radio presenter, comedy actor, events master of ceremonies and talk show host. Jalas was born on April 27, 1983, in Homa Bay.',
  },

  {
    image: './assets/images/speakers/sauti-soul.jpg',
    name: 'Sauti Soul',
    speakerInfo: 'Sauti Sol is a Kenyan afro-pop band',
    description:
      'Sauti Sol is a Kenyan afro-pop band formed in Nairobi, Kenya, by vocalists Bien-Aimé Baraza, Willis Chimano and Savara Mudigi in 2005. Initially an a cappella group, guitarist Polycarp Otieno joined before they named themselves Sauti Sol.',
  },

  {
    image: './assets/images/speakers/olomide.jpg',
    name: 'Koffi Olomide',
    speakerInfo: 'Congolese Soukus singer, dancer, producer, and composer.',
    description:
      'Antoine Christophe Agbepa Mumba, known professionally as Koffi Olomidé, is a Congolese Soukus singer, dancer, producer, and composer. He has had several gold records in his career. He is the founder of the Quartier Latin International orchestra with many notable artists, including Fally Ipupa and Ferré Gola.',
  },

  {
    image: './assets/images/speakers/davido.jpg',
    name: 'Davido',
    speakerInfo: 'American-born Nigerian singer, songwriter and record producer.',
    description:
      'David Adedeji Adeleke, popularly known as Davido, is a American-born Nigerian singer, songwriter, and record producer. Davido blends traditional African elements with global mainstream pop.',
  },

  {
    image: './assets/images/speakers/jones.jpg',
    name: 'Khaligraph Jones',
    speakerInfo: 'Kenyan rapper known for his hit singles',
    description:
      'Brian Ouko Omollo, popularly known by his stage name Khaligraph Jones and often referred to as Papa Jones, is a Kenyan rapper known for his hit singles "Mazishi" and "Yego".He released his debut full-length studio album Testimony 1990 in June 2018',
  },

  {
    image: './assets/images/speakers/ferre-agola.jpg',
    name: 'Ferre Agolla',
    speakerInfo: 'Ferre Gola signed by Sony Music ',
    description:
      'Renowned Congolese singer, dancer and songwriter Ferre Gola has become the latest addition to the Sony Music Entertainment Africa Family.',
  },

  {
    image: './assets/images/speakers/ndambuki.jpg',
    name: 'Daniel Ndambuki',
    speakerInfo: 'Kenyan comedian who hosts the comedy television show',
    description:
      'Daniel Ndambuki famously known as Churchill is a Kenyan comedian who hosts the comedy television show Churchill Show on TV47 Kenya Kenya on Sundays. ',
  },
];

const speakerProfile = document.querySelector('.fs-container-grid');

function createSpeaker(item) {
  return `<li class="fs-frames-2">
              <div class="speaker-profile">
              <div class="image-wrapper">
                  <img class="speaker-image" src="${item.image}" alt="">
                </div>
                <div class="speaker-contents">
                  <h6 class="speaker-name fw-bold">${item.name}</h6>
                  <p class="speaker-info color-2">
                    <i>${item.speakerInfo}</i>
                  </p>
                  <div class="break-line"></div>
                  <p class="speaker-description">${item.description}</p>
                </div>
              </div>
            </li> `;
}

speakerProfile.innerHTML = featuredSpeakers
  .map((item) => createSpeaker(item))
  .join('');

// animation
// Wrap every letter in a span
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// eslint-disable-next-line no-undef
anime.timeline({ loop: true })
  .add({
    targets: '.ml13 .letter',
    translateY: [100, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 1400,
    delay: (el, i) => 300 + 30 * i,
  }).add({
    targets: '.ml13 .letter',
    translateY: [0, -100],
    opacity: [1, 0],
    easing: 'easeInExpo',
    duration: 1200,
    delay: (el, i) => 100 + 30 * i,
  });