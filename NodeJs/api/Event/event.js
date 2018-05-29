/*
 *  源码解析event对象 
 */

// 创建时间监听函数
 function EventEmitter() {
    //  调用init对象
    // TODO: 为什么要如此处理init 调用call来指向init
    // this.init() 直接调用this内部没有init()
    EventEmitter.init.call(this);
 }

 module.exports = EventEmitter


 EventEmitter.init = function(){
    //  console.log('我是this:',this);
    console.log('====================================');
    console.log('w shi log');
    console.log('====================================');
     
 }