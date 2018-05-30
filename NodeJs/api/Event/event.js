let eventEmitter = require('events');
let util = require('util');


/*
 *  evnet
 *  
 */

 function  Bell (name) {
      this.name = name;
 }

//  girl 继承eventEmitter
 util.inherits(Bell,eventEmitter);
var j = new Bell('jin');

const fn = ()=>{
    console.log('====================================');
   console.log('我是监听的函数');
   console.log('====================================');
};
// 
j.on('ring',fn);


// 
j.on('ring',function(){
   console.log('====================================');
   console.log('收到礼物');
   console.log('====================================');
});

j.addListener('ring',function(p){
    console.log('====================================');
    console.log('收到礼物addListenter',p);
    console.log('====================================');
 });



// once 只触发一次
j.once('drop',function (p) {
     console.log('====================================');
     console.log('fuck',p);
     console.log('====================================');
});


j.emit('ring','我应该触发了吧？')
j.emit('drop','nihao');//只会执行第一次的监听  ---执行后就移除该事件
j.emit('drop','mam');

// 移除指定的回调监听
j.removeListener('ring',fn)
j.emit('ring')

// 移除所有的监听事件
// j.removeAllListeners('ring')
j.emit('ring','我有没有被触发')


console.log('====================================');
console.log('还剩'+j.eventNames()+'事件');//返回事件中注册的事件
console.log('====================================');