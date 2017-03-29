const allSlides = ['zoom', 'slide', 'fade', 'spin'];

const randomSlide = (slides = [], remainingSlides = allSlides.slice(0)) => {
  const random = Math.round(Math.random() * remainingSlides.length - 1);
  if (remainingSlides[random]) {
    slides.push(remainingSlides.splice(random, 1)[0]);
    return randomSlide(slides, remainingSlides);
  }
  return slides;
};

export default randomSlide;
