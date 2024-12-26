setTimeout("console.log('Hello, World!')", 1000, "djdj", 'zkkd');

setTimeout("console.log('Hello, World!')");

const timer1 = setTimeout(()=>{
     console.log('setTimeout', new Date());
    }, 1000);
 
    clearInterval(timer1);
const timer2 = setInterval(()=>{
     console.log('setInterval', new Date());
    }, 1000);
 clearInterval(timer2);
