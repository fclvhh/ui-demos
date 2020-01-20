window.onload = function() {
  class Dialog {
    constructor(options) {
      this.options = options
      this.init()
    }
    init() {
      let {title,content,buttons} = this.options
      // 创建dialog的按钮
      console.log(1)
      let $buttons = buttons.map((buttonOption)=>{
        console.log(2)
        let $b = $('<button></button>')
        $b.text(buttonOption.text)
        $b.on('click',buttonOption.action)
        return $b
      })
      var template = `
      <div class="frankDialog">
        <div class="frankDialog-wrapper">
          <header class="frankDialog-header">${title}</header>
          <main class="frankDialog-main">${content}</main>
          <footer class="frankDialog-footer"></footer>
        </div>
      </div>
      `
      var $dialog = $(template)
      //把按钮插入到$dialog元素中
      $buttons.forEach(($button)=>{
        $dialog.find('footer').append($button)
      })
      this.$dialog = $dialog
    }
    open() {
      this.$dialog.appendTo('body')
    }
    close() {
      this.$dialog.detach()
    }
  }
  $("#xxx").on('click',function() {
    console.log('hi')
    var dialog = new Dialog({
      title: '标题',
      content: '<b>欢迎</b>',
      buttons: [{
        text: '确定',
        action: function() {
          setTimeout(() => {
            dialog.close()
            console.log('ddd')
          }, 1000)
        }
      }, 
      {
        text: '取消',
        action: function() {
          dialog.close()
        }
      }, ]
    })
    dialog.open()
  })
}