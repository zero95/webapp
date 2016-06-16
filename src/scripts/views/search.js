// 引入模板
var searchTpl = require('../tpl/search.string');

// 定义一个视图
SPA.defineView('search', {
  // 将模板写在body里
  html: searchTpl,

  plugins: [
    'delegated', {
      name: 'avalon',
      options: function (vm) {
        vm.keyword = '';
        vm.searchList = [];
      }
    }
  ],

  bindActions: {

  },

  bindEvents: {
    show: function () {
      var vm = this.getVM();
      vm.$watch('keyword', function (newValue, oldValue) {
        $.ajax({
          url: '/api/getSearchList.php',
          data: {
            keyword: newValue
          },
          success: function (res) {
            vm.searchList = res.data;
          }
        })
      });
    }
  }
});
