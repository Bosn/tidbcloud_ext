function copyTextToClipboard(text: string) {
  //Create a textbox field where we can insert text to. 
  var copyFrom = document.createElement("textarea");

  //Set the text content to be the text you wished to copy.
  copyFrom.textContent = text;

  //Append the textbox field into the body as a child. 
  //"execCommand()" only works when there exists selected text, and the text is inside 
  //document.body (meaning the text is part of a valid rendered HTML element).
  document.body.appendChild(copyFrom);

  //Select all the text!
  copyFrom.select();

  //Execute command
  document.execCommand('copy');

  //(Optional) De-select the text using blur(). 
  copyFrom.blur();

  //Remove the textbox field from the document.body, so no other JavaScript nor 
  //other elements can get access to this.
  document.body.removeChild(copyFrom);
}

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
              data-event-name="${eventName}"
              src="${chrome.runtime.getURL('images/copy.png')}"
            />
          </div>
        </div>
    `;
    const container = document.createElement('div')
    container.innerHTML = content
    ;($(el) as any).popover({
      title: null,
      content: container,
      trigger: 'hover',
    })
    $(el).data('__done', true)
  })
}

setInterval(() => {
  bindEventsToElementsWithMpEvent()
}, 1000)


$(document.body).on('click', '.__ext_tooltip_icon', (e) => {
  const el = $(e.target)
  const eventName = el.data('event-name')
  copyTextToClipboard(eventName)
  el.attr('src', chrome.runtime.getURL('images/copy_done.png'))
})


export default {}