// function classDecorator<T>(ctor: { new(...args: any[]): any }) {
//     return class extends ctor {
//         private a: string;
//         constructor(...args: any[]) {
            
//             super(...args);
//             this.a = '1';
//             new T();
//         }
//     }
// }
// @classDecorator
// class A {

// }
// let a:any  = new A();
// console.log(a.a);