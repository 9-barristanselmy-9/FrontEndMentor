

const scale =1.5;


graph = document.querySelector(".chart");

var span =graph.children;



fetch("data.json")
.then(response => response.json())
.then(data => {
    for(let i=0;i<data.length;i++){
        if(data[i].amount >=50){
            span[i].style.backgroundColor ="hsl(186, 34%, 60%)";
            span[i].style.height = `${data[i].amount*scale}px`;
        }else{
            span[i].style.height = `${data[i].amount*scale}px`;
            span[i].style.backgroundColor ="hsl(10, 79%, 65%)";

        }
    }
    
})