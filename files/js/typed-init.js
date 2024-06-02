function initializeTyped(targetElement, stringsElement, typeSpeed, startDelay, backSpeed, backDelay, loop) {
   return new Typed(targetElement, {
      stringsElement: stringsElement,
      typeSpeed: typeSpeed,
      startDelay: startDelay,
      backSpeed: backSpeed,
      backDelay: backDelay,
      loop: loop,
      showCursor: false,
   });
}

let mainTyped = initializeTyped('#main-title', '#main-title-strings', 70, 500, 50, 5000, true);
let productionTyped = initializeTyped('#production-title', '#production-title-strings', 70, 100, 70, 5000, true);
let serviceTyped = initializeTyped('#service-title', '#service-title-strings', 100, 100, 50, 5000, true);
let whyUsTyped = initializeTyped('#why-us-title', '#why-us-title-strings', 100, 100, 50, 5000, true);
let partnersTyped = initializeTyped('#partners-title', '#partners-title-strings', 100, 100, 50, 5000, true);
let aboutUsTyped = initializeTyped('#about-us-title', '#about-us-title-strings', 100, 100, 50, 5000, true);
let ourCatalogTyped = initializeTyped('#our-catalog-title', '#our-catalog-title-strings', 100, 100, 50, 5000, true);
let galleryTyped = initializeTyped('#gallery-title', '#gallery-title-strings', 100, 100, 50, 5000, true);
   
setTimeout(() => {
}, 600);


const mainBlockTitle = document.getElementById('main-block-title');
const mainTitleStrings = document.getElementById('main-title-strings');
if (mainBlockTitle && mainTitleStrings) {
   mainBlockTitle.style.height = mainTitleStrings.scrollHeight + 50 + 'px';
}

const productionBlockTitle = document.getElementById('production-block-title');
const productionTitleStrings = document.getElementById('production-title-strings');
if (productionBlockTitle && productionTitleStrings) {
   productionBlockTitle.style.height = productionTitleStrings.scrollHeight + 'px';
}

const serviceBlockTitle = document.getElementById('service-block-title');
const serviceTitleStrings = document.getElementById('service-title-strings');
if (serviceBlockTitle && serviceTitleStrings) {
   serviceBlockTitle.style.height = serviceTitleStrings.scrollHeight + 'px';
}

const whyUsBlockTitle = document.getElementById('why-us-block-title');
const whyUsTitleStrings = document.getElementById('why-us-title-strings');
if (whyUsBlockTitle && whyUsTitleStrings) {
   whyUsBlockTitle.style.height = whyUsTitleStrings.scrollHeight + 'px';
}

const partnersBlockTitle = document.getElementById('partners-block-title');
const partnersTitleStrings = document.getElementById('partners-title-strings');
if (partnersBlockTitle && partnersTitleStrings) {
   partnersBlockTitle.style.height = partnersTitleStrings.scrollHeight + 'px';
}

const aboutUsBlockTitle = document.getElementById('about-us-block-title');
const aboutUsTitleStrings = document.getElementById('about-us-title-strings');
if (aboutUsBlockTitle && aboutUsTitleStrings) {
   aboutUsBlockTitle.style.height = aboutUsTitleStrings.scrollHeight + 'px';
}

const ourCatalogBlockTitle = document.getElementById('our-catalog-block-title');
const ourCatalogTitleStrings = document.getElementById('our-catalog-title-strings');
if (ourCatalogBlockTitle && ourCatalogTitleStrings) {
   ourCatalogBlockTitle.style.height = ourCatalogTitleStrings.scrollHeight + 'px';
}

const galleryBlockTitle = document.getElementById('gallery-block-title');
const galleryTitleStrings = document.getElementById('gallery-title-strings');
if (galleryBlockTitle && galleryTitleStrings) {
   galleryBlockTitle.style.height = galleryTitleStrings.scrollHeight + 'px';
}