/*
 *  node-event 构建原理
 *
 */


function Person(name) {
  this.name = name;
  this._events = {}; //事件列表
}

//  注册监听
Person.prototype.on = function (eventName, callback) {
    // 判断当前eventName是否已经注册
  if (this._events[eventName]) {
    //   如果已经注册 就在注册事件中添加当前指定的回调函数
    this._evnets[eventName].push(callback)
  } else {
    //   否则就直接添加一个回调函数数组
    //   *** 保持EventName事件对应多个回调：可能用户注册了多次但是使用的不是同一个回调
    this._events[eventName] = [callback];
  }
}
// 触发事件
Person.prototype.emit = function (eventName){
    // 触发的时候如果用户传了参数的
    // 获取除了默认的eventName的其他参数
     let args = Array.prototype.splice.call(arguments,1);
    this._events[eventName].forEach(i=>{
        // 执行函数并将参数作为数组传入
        // *** 因为用户传入的参数只能用数组拿到 所以要用apply返回回去
         i.apply(this,args)
    })

};

let girl = new Person();
girl.on('注册',function (parmas) {
    console.log('====================================');
    console.log('我是注册',parmas);
    console.log('====================================');
})


girl.emit('注册',function () {
    console.log('====================================');
    console.log("我是触发");
    console.log('====================================');
},'fuck')


//
