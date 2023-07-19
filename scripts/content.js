  !function() {

    setTimeout(() => {
      $('*[data-mp-event]').each((_, el) => {
        const eventName = $(el).data('mp-event')
        $(el).popover({
          title: null,
          content: `<div class="__ext_tooltip">
                        <div class="__ext_tooltip_title">MixPanel event name</div>
                        <div class="__ext_tooltip_value">${eventName}</div>
                    </div>`,
          trigger: 'hover',
        })
      })
    }, 5000)

  }()

  