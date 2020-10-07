/*영화 이미지 썸네일을 정의한다.*/
class Thumbnail{
    constructor(container, width, height, bd, src, x){
        this.div = document.createElement("div");
        this.width = width;
        this.height = height;
        this.x = x;
        this.bd = bd; // 보더 두께
        this.img = document.createElement("img");
        this.src = src;
        this.container = container;//어디에 넣을지 컨테이너를 동적으로 받자
        var me =this;

        //스타일 부여
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.position = "absolute";
        this.div.style.left = this.x+"px"
        this.div.style.boxSizing = "border-box";
        this.div.style.border =  this.bd+"px solid white";
        
        this.img.style.width = this.width-2*(this.bd) + "px";
        this.img.style.height = this.height-2*(this.bd) + "px";
        this.img.src = this.src;

        //이미지에 이벤트 구현하기
        this.img.addEventListener("click", function(){
            //이벤트 구현 시 사용된는 익명함수 내에서 this를 사용하게 되면,
            //객체의 인스턴스를 가리키게 되는 것이 아니라, 익명함수의 {}영역을 가리키게 된다.
            var index = thumbArray.indexOf(me);
            console.log(thumbArray.indexOf(me));
            getDetail(index);

            //포인터의 targetX값을 나의 좌표와 일치
            pointer.targetX = x;

        });
        //조립
        this.div.appendChild(this.img)//div에 이미지 넣기
        this.container.appendChild(this.div);

    }

}