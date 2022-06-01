const PARTICLE_COUNT = 5;

const POLAROID = document.querySelector('.polaroid__wrapper')
const PARTICLE_PEN = document.querySelector(".polaroid__particles");

const SHAPES = [
  `<svg viewBox="0 0 448 512" title="square">
  <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z" />
</svg>`,
  `<svg viewBox="0 0 512 512" title="circle">
  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
</svg>`,
  `<svg viewBox="0 0 576 512" title="star">
  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
</svg>`,
  `<svg viewBox="0 0 384 512" title="map-marker-alt">
  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
</svg>`
];

const createParticle = () => {
  const NEW_PARTICLE = document.createElement('div')
  const ROTATION = Math.random() * 360;
  const SPIN = Math.random() * 360 - 180;
  const DISTANCE = Math.random();
  const SCALE = Math.random() * 2 + 1;
  const HUE = Math.random() * 360;
  NEW_PARTICLE.className = 'polaroid__particle'
  NEW_PARTICLE.innerHTML = SHAPES[Math.floor(Math.random() * SHAPES.length)]
  NEW_PARTICLE.style.setProperty('--rotation', ROTATION)
  NEW_PARTICLE.style.setProperty('--distance', DISTANCE)
  NEW_PARTICLE.style.setProperty('--scale', SCALE)
  NEW_PARTICLE.style.setProperty('--hue', HUE)
  NEW_PARTICLE.style.setProperty('--spin', SPIN)
  PARTICLE_PEN.appendChild(NEW_PARTICLE)
};

const genParticles = () => {
  PARTICLE_PEN.innerHTML = ''
  let p = 0;
  while (p < PARTICLE_COUNT) {
    createParticle();
    p++;
  }
}

genParticles()

POLAROID.addEventListener('pointerup', () => genParticles())