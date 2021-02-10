//Interface
//These are for declarations of variables, with their types
//Like Abstract class in Java
interface Point{
  x: number,
  y: number,
  //They can take functions but without its implementation
  draw: () => void
}

//
let drawPpoint = (point: Point) =>{
  //implementation
}



//Class
//Variables and functions that are highly related to enforce cohesion

class Point{
  x: number;
  y: number;
  //They can take functions but without its implementation
  drawInClass(){
    //....implementation
  };
  paintDraw(){
    //..implmentation
  }

}