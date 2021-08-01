const $item = $('.js_about__item');
const $img = $('.js_about__img');
const $filterDouble = $('.js_about__filter_double');
const isActive = 'isActive';
const block1 = 'about__block-1';
const block2 = 'about__block-2';
const block3 = 'about__block-3';

$item.first().addClass(isActive);
$img.attr('src', './img/about__img_black_1.webp');

$item.click(function onChangeItem() {
  const $this = $(this);
  console.log(' $this', $this.attr('id'));

  if ($this.hasClass(isActive)) {
    return;
  }

  $item.removeClass(isActive);
  $this.addClass(isActive);
  $filterDouble.removeClass(isActive);

  if ($this.attr('id') === block1) {
    $img.attr('src', './img/about__img_black_1.webp');
  }

  if ($this.attr('id') === block2) {
    $filterDouble.addClass(isActive);
    $img.attr('src', './img/about__img_white_1.webp');
  }

  if ($this.attr('id') === block3) {
    // $img.attr('src', './img/about__img_black_1.webp');
  }
});
