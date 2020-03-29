const test = require('ava')
const helloWorld = require('../functions/hello-world')

test('Tests run', (t) => {
    t.is(true, true)
})

test('Hello world runs', async (t) => {
    await t.notThrowsAsync(helloWorld.function('event', 'context'))
})

test('Hello world returns expected', async (t) => {
    const res = await helloWorld.function('event', 'context')
    t.true(res.statusCode === 200)
    t.true(typeof res.body === 'string')
    const body = JSON.parse(res.body)
    t.true(body.message === 'hello world')
})