import Test from 'ava'

Test.before(async (test) => {
  test.context.index = await import('../index.js')
})

;[
  'Scenario'
].forEach((name) => {

  Test(name, (test) => {
    test.truthy(test.context.index[name])
  })
  
})
