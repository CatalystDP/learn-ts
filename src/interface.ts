interface IShape {
    width: number,
    height: number,
    [key: string]: any
};
interface IShapeCallback {
    (shape: IShape): void,
    cbName: string
}
function createShape(shape: IShape, cb?: IShapeCallback): void {
    console.log('shape ', shape);
    console.log('zIndex ', shape.zIndex);
    cb && cb(shape);
}
createShape({
    width: 100,
    height: 400,
    zIndex: 99,
}, <IShapeCallback>function cb(shape: IShape) {
    console.log('shape callback', shape);
});

let shape1: IShape = <IShape>{};

interface IEventHandler{
    clickHandler?(this:IEventHandler,type:string,...args:any[]): void
}
interface IHandlers{
    [key:string]:IEventHandler
};
let element = {
    handlers:<IHandlers>{} ,
    addClickListener(handler:IEventHandler){
        element.handlers['click'] = handler;
        typeof handler.clickHandler==='function' && handler.clickHandler('click'); 
    }
};
interface IShapeConstructor{
    new (width:number,height:number):IShape;
}
function shapeFactory(ctor:IShapeConstructor){
    return new ctor(1,2);
}