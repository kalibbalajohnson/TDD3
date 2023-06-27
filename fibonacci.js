function fibonacci(n) {
    if (n <= 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    }
  
    let prev = 0;
    let curr = 1;
  
    for (let i = 2; i <= n; i++) {
      const next = prev + curr;
      prev = curr;
      curr = next;
    }
  
    return curr;
  }

  // function fibonacci(n) {
  //   if (n <= 0) {
  //     return 0;
  //   } else if (n === 1) {
  //     return 1;
  //   }
  
  //   return fibonacci(n - 1) + fibonacci(n - 2);
  // }
  
  
  module.exports = fibonacci;
  