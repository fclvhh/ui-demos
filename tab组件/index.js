// window.onload = function() {
//   function Tabs(selector) {
//     let rootElement = $(selector)
//     // 功能实现
//     rootElement.on('click','li',function(e) {
//       let activeElement = $(e.target)
//       let index = activeElement.index()
//       activeElement.addClass('active').siblings().removeClass('active')
//       let content = activeElement.closest('.tabs').find('.tabs-content > li').eq(index)
//       console.log(content)
//       content.addClass('active').siblings().removeClass('active')
//       console.log(1)
      
//     })
//     //初始化状态
//     function init() {
//       rootElement.each(function(index,element){
//         $(element).children('.tabs-bar').find("li").eq(0).trigger('click')
//       })
//     }
//     init()
//   }
//  Tabs('.tabs')
// }
//


window.onload = function() {
  class Tbas {
    constructor(selector) {
      this.rootElement = $(selector)
      this.bindEvents()
      this.init()
    }
    init() {
      this.rootElement.each(function(index,element){
                $(element).children('.tabs-bar').find("li").eq(0).trigger('click')
        })
    }
    bindEvents() {
      this.rootElement.on('click','li',function(e) {
              let activeElement = $(e.target)
               let index = activeElement.index()
               activeElement.addClass('active').siblings().removeClass('active')
               let content = activeElement.closest('.tabs').find('.tabs-content > li').eq(index)
               console.log(content)
               content.addClass('active').siblings().removeClass('active')
               console.log(1)
      })
    }
  }
  var tabs = new Tbas('.tabs')
}