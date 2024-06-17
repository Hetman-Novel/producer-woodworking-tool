let pageServicesTitleTyped = initializeTyped('#page-service-title', '#page-service-title-strings', 100, 100, 50, 5000, true);
let pageServicesSectionTitleTyped = initializeTyped('#page-service-section-title', '#page-service-section-title-strings', 100, 100, 50, 5000, true);

const pageServiceBlockTitle = document.getElementById('page-service-block-title');
const pageServiceTitleStrings = document.getElementById('page-service-title-strings');
if (pageServiceBlockTitle && pageServiceTitleStrings) {
   pageServiceBlockTitle.style.height = pageServiceTitleStrings.scrollHeight + 'px';
}

const pageServiceSectionBlockTitle = document.getElementById('page-service-section-block-title');
const pageServiceSectionTitleStrings = document.getElementById('page-service-section-title-strings');
if (pageServiceSectionBlockTitle && pageServiceSectionTitleStrings) {
   pageServiceSectionBlockTitle.style.height = pageServiceSectionTitleStrings.scrollHeight + 'px';
}