export const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My img');
  imgElem.src = imgSrc;

  const pageElem = document.querySelector('.page');
  pageElem.append(imgElem);

  const onImgLoad = () => {
    callback(null, imgElem);
  };

  imgElem.addEventListener('load', onImgLoad);

  const onImgLoadError = () => {
    callback('Image load is failed');
  };

  imgElem.addEventListener('error', onImgLoadError);
};

// callack function
const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }

  const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');

  sizeElem.textContent = `${width} x ${height}`;
};

// examples
// addImage(
//   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
//   onImageLoaded,
// );
