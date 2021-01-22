
export default (methods) => methods.reduce((obj: any, key) => {obj[key] = jest.fn()
    return obj
  },{})


