const isActive = 'is-active'
const $sliderFirst = $('.js-wardrobe__slider-1')
const $sliderSecond = $('.js-wardrobe__slider-2')
const $sliderThird = $('.js-wardrobe__slider-3')
const $info = $('.js-wardrobe__info')
const COUNT_IMG = 3
const COUNT_INTERVAL = 2000

$sliderFirst.next($info).addClass(isActive)

const funcInterval = (slider) => {
  slider.next($info).addClass(isActive)

  const interval = setInterval(() => {
    const $firstImg = slider.find('.js-wardrobe__img').first()
    const $imgActive = slider.find('.js-wardrobe__img.is-active')

    if ($imgActive.next().length === 0) {
      $imgActive.removeClass(isActive)
      $firstImg.addClass(isActive)
    }

    if ($imgActive.next().length === 0) {
      clearInterval(interval)
      slider.next($info).removeClass(isActive)

      return
    }

    $imgActive.next().addClass(isActive)
    $imgActive.prev().prevObject.removeClass(isActive)
  }, COUNT_INTERVAL)
}

const ActiveSlider = {
  step: 0,
  getStep() {
    return this.step
  },
  setStep(num) {
    this.step = num
  },

  playFirstSlider() {
    funcInterval($sliderFirst)
    this.setStep(1)
  },
  playSecondSlider() {
    funcInterval($sliderSecond)
    this.setStep(2)
  },
  playThirdSlider() {
    funcInterval($sliderThird)
    this.setStep(0)
  },
}

setInterval(() => {
  if (ActiveSlider.getStep() === 0) {
    ActiveSlider.playFirstSlider()
  } else if (ActiveSlider.getStep() === 1) {
    ActiveSlider.playSecondSlider()
  } else if (ActiveSlider.getStep() === 2) {
    ActiveSlider.playThirdSlider()
  }
}, COUNT_IMG * COUNT_INTERVAL)
