/*달력을 구성하는 하나의 칸을 정의*/
class Cell{
    constructor(container, width, height, text){
        this.div = document.createElement("div");
        this.width = width;
        this.height = height;
        this.text = text;
        this.container = container;

        this.div.style.width = this.width+"px";
        this.div.style.height = this.height+"px";
        this.div.style.background = "yellow";
        this.div.style.border = "1px solid orange";
        this.div.style.boxSizing = "border-box";
        this.div.style.float = "left";
        this.div.innerHTML = "<h4>"+this.text+"</h4>";


        this.container.appendChild(this.div);

    }
}