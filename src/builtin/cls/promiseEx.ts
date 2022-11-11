const promise = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

promise.then();
