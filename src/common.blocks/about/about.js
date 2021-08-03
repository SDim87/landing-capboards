const $item = $('.js_about__item');
const $img = $('.js_about__img');
const $filterDouble = $('.js_about__filter_double');
const $filterColor = $('.js_about__filter_color');
const $btnPlace = $('.js_about__place');
const $btnColor = $('.js-about__color');
const isActive = 'isActive';
const block1 = 'about__block-1';
const block2 = 'about__block-2';
const block3 = 'about__block-3';

const State = {
  prop: {
    place: 1,
    color: 'white',
  },
  getProp() {
    return this.prop;
  },
  setPlace(place) {
    this.prop.place = place;
  },
  setColor(color) {
    this.prop.color = color;
  },
  getImage() {
    return $img.attr(
      'src',
      `./img/about__img_${this.prop.color}_${this.prop.place}.webp`,
    );
  },
};

$item.first().addClass(isActive);

$item.click(function onChangeItem() {
  const $this = $(this);

  if ($this.hasClass(isActive)) return;

  $item.removeClass(isActive);
  $this.addClass(isActive);
  $filterDouble.removeClass(isActive);
  $filterColor.removeClass(isActive);

  if ($this.attr('id') === block1) {
    $img.attr('src', './img/about__img_black_1.webp');
  }

  if ($this.attr('id') === block2) {
    if (!$btnPlace.hasClass(isActive)) {
      $btnPlace.first().addClass(isActive);
    }

    $filterDouble.addClass(isActive);

    State.getImage();
  }

  if ($this.attr('id') === block3) {
    if (!$btnColor.hasClass(isActive)) {
      $btnColor.first().addClass(isActive);
    }

    $filterColor.addClass(isActive);

    State.getImage();
  }
});

$btnPlace.click(function onBtnPlace() {
  const $this = $(this);

  $btnPlace.removeClass(isActive);
  $this.addClass(isActive);
  const numberPlace = $this.attr('data-place');

  State.setPlace(numberPlace);
  State.getImage();
});

$btnColor.click(function onBtnPlace() {
  const $this = $(this);

  $btnColor.removeClass(isActive);
  $this.addClass(isActive);
  const color = $this.attr('data-color');

  State.setColor(color);
  State.getImage();
});
