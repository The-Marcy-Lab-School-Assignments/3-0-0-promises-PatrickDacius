const resolvedWrapper = (value) => {
  return new Promise((resolve, reject) => {
    resolve(value)
  })
};

const rejectedWrapper = (str) => {
  return Promise.reject(new Error(str))
};

const handleResolvedPromise = (promise) => {
  return promise.then(value => {
    console.log(value);
    return value;
  });
};


const handleResolvedOrRejectedPromise = (promise) => {
  return promise.then(value => {
    console.log(value);
    return value;
  })
    .catch(error => {
      console.error(`Your error message was: ${error.message}`)
      return null
    });

}


const pauseForMs = (milliseconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, milliseconds)
  })
};


module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
