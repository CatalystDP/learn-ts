interface IShape {
    width: number,
    height: number,
    [key: string]: any
};
interface IShapeCallback {
    (shape: IShape): void
}
function createShape(shape: IShape,cb?:IShapeCallback): void {
    console.log('shape ', shape);
    console.log('zIndex ', shape.zIndex);
    cb && cb(shape);
}
createShape({
    width: 100,
    height: 400,
    zIndex: 99,
},function(shape:IShape){
    console.log('shape callback',shape);
});