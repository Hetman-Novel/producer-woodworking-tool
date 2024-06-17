let pageAboutUsTitleTyped = initializeTyped('#page-about-us-title', '#page-about-us-title-strings', 100, 100, 50, 5000, true);

const pageAboutUsBlockTitle = document.getElementById('page-about-us-block-title');
const pageAboutUsTitleStrings = document.getElementById('page-about-us-title-strings');
if (pageAboutUsBlockTitle && pageAboutUsTitleStrings) {
   pageAboutUsBlockTitle.style.height = pageAboutUsTitleStrings.scrollHeight + 'px';
}