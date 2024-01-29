function waitFor(time = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), time);
    })
}

function returnValue() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(10)
        }, 5000);
    })
}

async function exec() {

    let value = await returnValue()

    await waitFor()
    console.log(`Running time ${value}...`)
    await waitFor()
    console.log(`Running time ${value + 1}...`)
    await waitFor()
    console.log(`Running time ${value + 2}...`)

    return value + 3
}

exec().then(console.log)