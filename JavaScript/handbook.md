# 笔记

1. 解释事件委托
>  事件委托是一种涉及将事件侦听器添加到父元素而不是将它们添加到后代元素的技术。
只要事件由于事件冒泡而触发后代元素，监听器就会触发。
这种技术的好处是;    
  > -1- 由于父元素只需要一个单独的处理程序，而不必在每个后代上附加事件处理程序，内存占用量就会减少。     
  > -2- 不需要从被删除的元素中解****除绑定处理程序，并将新事件绑定到新元素。   
  > -3- 减少浏览器的重绘重排
2. 解释this在js的运用 
>  对此没有简单的解释;
它是javascript中最令人困惑的概念之一。
我的解释是这个值取决于函数的调用方式。
我在网上阅读了很多解释，并且我发现arnav aggrawal的解释是最清楚的。
以下规则适用：
如果在调用函数时使用new关键字，则函数内部是一个全新的对象。
如果apply，call或bind用于调用/创建一个函数，则函数内部是作为参数传入的对象。
如果一个函数被调用为一个方法，比如obj.method（） - 这是该函数属性的对象。
如果一个函数作为一个自由函数调用被调用，意味着它在没有上述任何条件的情况下被调用，那么这是全局对象。
在浏览器中，它是窗口对象。
如果在严格模式下（'使用严格'），这将是未定义的而不是全局对象。
如果多个上述规则适用，则较高的规则将胜出，并将设置该值。
如果函数是es2015箭头函数，它将忽略上面的所有规则，并在创建时接收其周围范围的此值。   
参考资料：[彻底理解js中this的指向，不必硬背](https://www.cnblogs.com/pssp/p/5216085.html);

3. 解释原型继承的工作原理
>  所有javascript对象都有一个prototype属性，这是对另一个对象的引用。
当在对象上访问属性时，如果在该对象上未找到该属性，则JavaScript引擎会查看该对象的原型和原型的原型等，直到它找到在其中一个原型上定义的属性，或者直到它
到达原型链的末端。
这种行为模拟经典继承，但它实际上比代理更多的是继承。