const { Observable } = require("rxjs")

// Promise
const promise = new Promise(resolve => resolve('Promise content'))
promise.then(console.log)

// Observable
const obs = new Observable(subscriber => { 
    subscriber.next('Observable content') 
    subscriber.next('Observable content 2') 
    setTimeout(() => {
        subscriber.next('Observable content 3') 
        subscriber.complete()
    }, 1000)
})
obs.subscribe(console.log)