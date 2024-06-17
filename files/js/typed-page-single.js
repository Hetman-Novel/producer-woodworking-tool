let pageSingleTitleTyped = initializeTyped('#page-single-title', '#page-single-title-strings', 100, 100, 50, 5000, true);

const pageSingleBlockTitle = document.getElementById('page-single-block-title');
const pageSingleTitleStrings = document.getElementById('page-single-title-strings');
if (pageSingleBlockTitle && pageSingleTitleStrings) {
   pageSingleBlockTitle.style.height = pageSingleTitleStrings.scrollHeight + 'px';
}