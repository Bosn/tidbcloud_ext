setTimeout(() => {
  $('*[data-mp-event]').each((_, el) => {
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
  })
}, 5000)


export default {}