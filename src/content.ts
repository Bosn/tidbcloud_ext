
function bindEventsToElementsWithMpEvent() {
  $('*[data-mp-event]').each((_, el) => {
    if ($(el).data('__done')) {
      return
    }
    const eventName = $(el).data('mp-event')
    const content = `
        <div class="__ext_tooltip">
          <div class="__ext_tooltip_title">MixPanel event name</div>
          <div class="__ext_tooltip_value">
            ${eventName}
            <img
              class="__ext_tooltip_icon"
              src="${chrome.runtime.getURL('images/copy.png')}"
              onClick="__copyTextToClipboard("${eventName}"); "
            />
          </div>
        </div>
        `;
    ($(el) as any).popover({
      title: null,
      content,
      trigger: 'hover',
    })
    $(el).data('__done', true)
  })
}

setInterval(() => {
  bindEventsToElementsWithMpEvent()
}, 1000)


export default {}