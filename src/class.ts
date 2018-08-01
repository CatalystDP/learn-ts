export abstract class Person {
    private _id: string;
    protected constructor(protected name: string) {
        this._id = '1';
        this.name = name;
    }
    public abstract getInfo(): any
}
export interface IEmployeeInfo {
    name: string,
    department: string,
    [key: string]: any
};
export class Employee extends Person{
    constructor(name: string, private department: string) {
        super(name);
        this.department = department;
    }
    public getDepartment(): string {
        return this.department;
    }
    public getInfo(): IEmployeeInfo {
        return {
            name: this.name,
            department: this.department
        };
    }
}

function factory<T extends Person>(ctro: {new (...args:any[]):T}):T{
    return new ctro();
}
let p = factory(Employee);