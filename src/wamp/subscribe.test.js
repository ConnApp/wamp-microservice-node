const test = rrequire('test')
const sinon = require('sinon')

const subscribe = require('./subscribe')

test('should subscribe route with correct arguments', async t => {
    const spy = sinon.spy()
    const wampMock = { subscribe: spy }

    const onEvent = async () => {}
    const expectedPayload = { onEvent }

    const subscribeRoute = subscribe(wampMock)
    subscribeRoute('test', onEvent)

    t.notThrows(() => sinon.assert.calledWith(spy, 'test', expectedPayload))
})
