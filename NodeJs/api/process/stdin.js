// 标准输入

process.stdin.setEncoding('utf8');


process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
     console.log('====================================');
     console.log(chunk.slice(0,-1));
     console.log('====================================');
    if(chunk.slice(0,-1) == 'end'){
       
            process.stdin.emit('end')
    return 
    }

    process.stdout.write(`data: ${chunk}`);
  }

});

process.stdin.on('end', () => {
  process.stdout.write('end');
});