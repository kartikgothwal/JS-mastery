console.log("Hello world 1");
 setTimeout(()=>{
        console.log("Timeout 1")
    })
const data = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise 1 resolved")
    })
})
data.then((res)=>{
    console.log(res)
})
 console.log(Promise.resolve("Promise 2 resolve"))

console.log(Promise.resolve(getData()))

async function getData(){
    return "Get Data promise"
}