function fizzbuzz(n){
    let newarr=[]
    for(let i=1; i<=n ; ++i){
        if(i % 15 ===0){
            newarr.push('FizzBuzz')
        }else if(i % 5 === 0){
            newarr.push('Buzz')
        }else if( i % 3 ===0){
            newarr.push('Fizz')
        }else {
            newarr.push(i)
        }
    }
    return newarr
}