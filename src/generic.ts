interface IGenericFunc<T> {
    (count:T):T[]
};

let f:IGenericFunc<number> = function(count:number):number[]{
    return [count];
}
console.log(f(1));

