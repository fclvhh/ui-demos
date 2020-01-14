window.onload = function() {
  class sticky {
    constructor(selector,n) {
      this.element = $(selector)
      this.offset = n || 0
      this.scrollY = window.scrollY
      this.elementTop = this.element.offset().top
      this.stickyPlaceHold()
      this.scrollListener()
    }
    stickyPlaceHold(){
      this.element.wrap('<div class="stickyPlaceholder"></div>')
      this.element.parent().height(this.element.height())
    }
    scrollListener() {
      $(window).on('scroll',()=>{
        if(this.scrollY+this.offset>this.elementTop-this.offset) {
          this.element.addClass('sticky')
          .css({
            top:this.offset
          })
          }else{
            // console.log('hi')
            this.element.removeClass('sticky')
        }
      })
    }
  }
  var topbar = new sticky('#topbar',0)
}