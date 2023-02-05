export const createCardItem = obj => {
  const {
    tags,
    webformatURL,
    likes,
    views,
    comments,
    downloads,
    largeImageURL,
  } = obj;
  return `<div class="photo-card">
  <a href="${largeImageURL}">
  <img src="${webformatURL}" alt="${tags}" height="200" 
 width='330'  loading="lazy" /></a>
  <div class="info">
    <p class="info-item">
      <b>Likes<br>${likes}</b>
    </p>
    <p class="info-item">
      <b>Views<br>${views}</b>
    </p>
    <p class="info-item">
      <b>Comments<br>${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads<br>${downloads}</b>
    </p>
  </div>
</div>`;
};
