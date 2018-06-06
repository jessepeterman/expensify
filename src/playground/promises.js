const promise = new Promise((resolve, reject) => {
   resolve('Saved data');
  reject('Something went wrong!');
});

console.log('before');

promise.then((data)=>{
  console.log('1', data);
}).catch((error) => {
  console.log('error: ', error);
});

console.log('after');

