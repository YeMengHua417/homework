/*策略模式*/
function Vip() {
  this.discount = 0.3
}
Vip.prototype.getPrice = function (price) {
  return price * this.discount;
  
};

function Normal() {
  this.discount = 1;

}

Normal.prototype.getPrice = function (price) {
  return price*this.discount;

};

function Context(name,stratgegy,price) {
  this.name = name;
  this.stratgegy = stratgegy;
  this.price = price;
}

Context.prototype.getResult = function () {
  console.log(this.stratgegy.getPrice(this.price))
}

var vip = new  Vip();
var context = new Context('yezi',vip,100);
context.getResult();

// 策略模式最实用的场合就是某个“类”中包含有大量的条件性语句，比如if...else 或者 switch。每一个条件分支都会引起该“类”的特定行为以不同的方式作出改变。以其维
//
//   护一段庞大的条件性语句，不如将每一个行为划分为多个独立的对象。每一个对象被称为一个策略。设置多个这种策略对象，可以改进我们的代码质量，也更好的进行单元测试。

// 观察者模式

var pubsub = {};
var list = [],
    subUid = -1;
// 发布消息
pubsub.publish = function (type, content) {
  if( !list[type] ) {return false}
  var subscriber = list[type];
  len = subscriber? subscriber.length:0;
    while(len--) {
      subscriber[len].func(type,content)

    }
    return true;
  
}

pubsub.subscribe = function (type,func) {
  if(!list[type]){
    list[type] = [];
  }
  var token = (++subUid).toString();
  list[type].push({
    token:token,
    func:func
  })
  return token;
};

q.unsubscribe = function (token) {
  for (var m in list){
    if(list[m]){
      for (var i = 0,j=list[m].length;i<j;i++){
        if(list[m][i].token == token){
          list[m].splice(i,1);
          return token;
        }
      }
    }
  }
  return false;
  
}

var girlA = pubsub.subscribe('js',function (type,content) {
  console.log('girlA订阅的'+type + ": 内容内容为：" + content);
  
})

var girlB = pubsub.subscribe('js', function (type, content) {
  console.log('girlB订阅的'+type + ": 内容内容为：" + content);
});


pubsub.publish('js', '这是一个测试');



var Singleton = (function() {
  var private_property = 0,
    private_method = function () {
      console.log('This is private');
    }

  return {
    prop: 1,
    another_prop: 'value',
    method: function() {
      private_method();
      return private_property;
    }
  }
}());


// 拿结构来讲比较容易

// pub  = {
//   type:［{
//     这里注册每个用户的方法，tokend
//   }，{
//
// }］
// }
// pubSub发布类型和内容，用户接收到后，自己处理内容