import Lightbox from './photoswipe_lightbox.esm.min.js'

const photoswipeActivations = document.getElementsByClassName('photoswipe-activation')

for (let activation = 0; activation < photoswipeActivations.length; activation++) {
  const thisActivation = photoswipeActivations[activation]
  const options = {
    children: thisActivation.getAttribute('child-selector'),
    gallery: thisActivation.getAttribute('gallery-selector'),
    pswpModule: () => import('/assets/js/photoswipe.esm.min.js')
  }

  const lightbox = new Lightbox(options)

  lightbox.on('uiRegister', function () {
    lightbox.pswp.ui.registerElement({
      appendTo: 'root',
      html: 'Caption Text',
      isButton: false,
      name: 'custom-caption',
      onInit: (el, pswp) => {
        lightbox.pswp.on('change', () => {
          const currentSlideElement = lightbox.pswp.currSlide.data.element
          const customCaptionElements = document.getElementsByClassName('pswp__custom-caption')
          const hiddenCaption = currentSlideElement.querySelector('.caption')
          let captionHTML = ''

          if (hiddenCaption === '' || hiddenCaption === null) {
            for (let counter = 0; counter < customCaptionElements.length; counter++) {
              customCaptionElements[counter].classList.add('invisible')
            }
          } else {
            for (let counter = 0; counter < customCaptionElements.length; counter++) {
              customCaptionElements[counter].classList.remove('invisible')
            }

            if (currentSlideElement) {
              captionHTML = hiddenCaption.innerHTML
            }
          }

          el.innerHTML = captionHTML
        })
      },
      order: 9
    })
  })

  lightbox.init()
}
