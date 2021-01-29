;(function(){
  // jQuery核心对象新增方法
  // 扩展$的方法
  jQuery.extend({
    // 两个数值返回最小值
    min: function(a, b){
      return a > b ? b : a
    },
    max: function(a, b){
      return a > b ? a : b
    },

    leftTrim: function(str){
      return str.replace(/^\s+/, '')
    },
    rightTrim: function(str){
      return str.replace(/\s+$/, '')
    }
  })

  // 扩展jQuery对象方法
  jQuery.fn.extend({
    checkAll: function(){ // this 是jQuery对象
      this.prop('checked', true)
    },
    unCheckAll: function(){
      this.prop('checked', false)
    },
    reverseCheck: function(){  
      this.each(function(){  // this 是jQuery对象
        this.checked = !this.checked  // this 是遍历出来的DOM对象
      })
    }
  })
})()