setTimeout(()=>{
     console.log('Hello')
})
setTimeout(()=>{
     console.log('Hello')
},2000)

setTimeout("console.log('Hello world')")
setTimeout("console.log('Hello world');let i=200; console.log(i)")

const timer = setTimeout(()=>{
     console.log("LLLLLL")
},2000)

// clearTimeout(time)
clearInterval(timer)


const timer2 = setInterval(()=>{
     console.log('Fooo')
},2000)
// clearInterval(timer2)
clearTimeout(timer2)
