// 過濾器 時間格式化
// Vue.filter("過濾器的名稱",function(){})
Vue.filter("dateFormat", function (dateStr, pattern = "") {
  //根據給的時間字符串，得到特定時間
  var dt = new Date(dateStr);
  //得到 yyyy-mm-dd
  var y = dt.getFullYear();
  var m = dt.getMonth() + 1; //因為月份從 0 開始所以須加 1
  var d = dt.getDate();
  // return y + '-' + m + '-' + d
  // return `${y}-${m}-${d}`

  if (pattern.toLowerCase() === "yyyy-mm-dd") {
    return `${y}-${m}-${d}`;
  } else {
    var hh = dt.getHours();
    var mm = dt.getMinutes();
    var ss = dt.getSeconds();

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
  }
});
// 自己定義全局案件修飾符 1.X
Vue.config.keyCodes.f2 = 113;
// 使用 Vue.directive() 定義全局指令
Vue.directive("focus", {
  bind: function (el) {}, //綁定的時候，只執行一次
  //插入到 DOM 的時候會執行 inserted，只執行一次
  inserted: function (el) {
    el.focus();
  },
  update: function () {}, //完成更新的時候會執行，可能會觸發多次
});
// 自訂義顏色
Vue.directive("color", {
  bind: function (el, binding) {
    el.style.color = binding.value;
  },
});

var vm = new Vue({
  el: "#app",
  data: {
    mag: "文字",
    oldid: "",
    name: "",
    keywords: "",
    lists: [
      { id: 1, name: "平板電腦", time: new Date() },
      { id: 2, name: "手機", time: new Date() },
      { id: 3, name: "桌上型", time: new Date() },
    ],
  },
  // 方法
  methods: {
    //新增
    add() {
      var product = { id: this.oldid, name: this.name, time: new Date() };
      this.lists.push(product);
      this.oldid = this.name = "";
    },
    // 刪除
    del(i) {
      var index = this.lists.findIndex((item) => {
        if (i == i) {
          return true;
        }
      });

      this.lists.splice(i, 1);
    },
    //搜尋關鍵字
    search(keywords) {
      // forEach   some   filter   findIndex   屬於數據方法，會對數組每一項進行相關操作
      return this.lists.filter((item) => {
        // string.prototype.includes('要包含的字符串')
        // 如果包含，返回 true ，否則 false
        if (item.name.includes(keywords)) {
          return item;
        }
      });
    },
  },
  // 過濾器
  filters: {},
});
