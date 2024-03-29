const { timer, Subscription } = require('rxjs')

const obs = timer(3000, 500)

const sub1 = obs.subscribe(number => {
    console.log(`#1 Number: ${number}`);
})
const sub2 = obs.subscribe(number => {
    console.log(`#2 Number: ${number}`);
})

const sub = new Subscription()
sub.add(sub1)
sub.add(sub2)

setTimeout(() => {
    sub.unsubscribe()
}, 5000);