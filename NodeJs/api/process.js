/* 
 * process模块api学习
 */

let api = process.argv; //列出输入的参数 第一个是node 第二个是调用的文件 第三个是具体的命令

console.log(api,process.moduleLoadList)