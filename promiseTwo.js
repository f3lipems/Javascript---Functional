function waitFor(time = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            console.log('Running promise...')
            resolve()
        }, time);
    })
}

waitFor(3000)
    .then(() => waitFor())
    .then(waitFor())