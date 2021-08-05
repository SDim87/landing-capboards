// Переключение табов
$(document).ready(() => {
  const $tabItem = $('.tabs__item')
  const tabActive = 'is-active'
  const modVisible = 'is-visible'

  $tabItem.click(function clickTab() {
    const tabId = $(this).attr('data-tab')

    $tabItem.removeClass(tabActive)
    $('.js-tabs__content.is-visible').removeClass(modVisible)

    $(this).addClass(tabActive)
    $('#' + tabId).addClass(modVisible) // eslint-disable-line
  })
})
