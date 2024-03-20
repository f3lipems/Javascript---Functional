function textWithSizeBetween(min, max, error, text) {
    const size = (text || '').trim().length

    if (size < min || size > max) {
        throw error
    }
}

const p1 = { name: 'A', price: 14.99, desc: 0.25 }
textWithSizeBetween(4, 255, 'Invalid Name', p1.name)