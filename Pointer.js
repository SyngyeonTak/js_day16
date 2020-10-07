/*썸네일 선택 시 따라다닐 포인터 정의*/
class Pointer{
    constructor(container, width, height, bd, x, y, targetX){
        this.div = document.createElement("div");
        this.width = width;
        this.height = height;
        this.bd = bd;//보더두께
        this.x = x;
        this.y = y;
        this.a = 0.1;
        this.targetX = targetX;
        this.container = container;

        this.div.style.width = this.width+"px";
        this.div.style.height = this.height+"px";
        this.div.style.border = this.bd+"px solid red";
        this.div.style.boxSizing = "border-box";
        this.div.style.position = "absolute";
        this.div.style.left = this.x+"px";
        this.div.style.top = this.y+"px";
        
        this.container.appendChild(this.div);

    }
    tick(){
        // console.log("포인터의 tick()..")

        //포인터위치 = 기존위치 + a*(목표지점 - 기존위치);
        this.x = this.x + this.a*(this.targetX - this.x);
    }
    render(){
        // console.log("포인터의 render()..")
        this.div.style.left = this.x + "px";
    }
}