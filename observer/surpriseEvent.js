const readLine = require('readline')

function getAnswer(answer) {
    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    return new Promise(resolve => {
        rl.question(answer, resp => {
            resolve(resp)
            rl.close()
        })
    })
}

// getAnswer('What is your name?').then(console.log)

function obs(event) {
    if (event.toLowerCase() === 'n') {
        console.log('Keep talking.')
    }
    setTimeout(() => {
        console.log('Turn of the lights.')
        console.log('Silence.')
        console.log('Surprise!')
    }, 2000);
}

function obsTwo(event) {
    if (event.toLowerCase() === 'n') {
        console.log('Ok')
    }
    setTimeout(() => {
        console.log('Watching.');
    }, 1000);
}

async function sub(obss = []) {
    while (true) {
        const resp = await getAnswer('Did the event happen? (Y,N,Q)')
        if (resp.toLowerCase() === 'y') {
            obss.forEach(obs => obs(resp));
            break
        } else if (resp.toLowerCase() === 'n') {
            obss.forEach(obs => obs(resp));
        } else if (resp.toLowerCase() === 'q') {
            break
        }
    }
}

sub([obs, obsTwo])
