
var oUl=document.getElementById('oUl');
var aLi=document.querySelectorAll('#ul>li');
/*分页器*/ 
function  lin(num){
    $("body").animate({scrollTop:num},600);
    press();
}

/*skill*/ 
var oLong=document.getElementsByClassName("long");
var arr=[];
function press(){
	for(var i=0;i<oLong.length;i++){
		arr.push(oLong[i].children[0].offsetWidth);
		oLong[i].children[0].style.transition='0s';
		oLong[i].children[0].style.width='0px';
		setTimeout(()=>{
		for(var i=0;i<oLong.length;i++){
			oLong[i].children[0].style.transition='0.6s 0.5s';
			oLong[i].children[0].style.width=arr[i]+'px';
		}
	},1)
}	
}
press()

/*works*/
var oP=document.querySelectorAll('.oneInner>p');
oP[0].onclick=function(){
	window.open('others/mother/index.html','_blank')
}
oP[1].onclick=function(){
	window.open('others/jsq.html','_blank')
}
oP[2].onclick=function(){
	window.open('others/xml/index.html','_blank')
}
oP[3].onclick=function(){
	window.open('others/tz/sz.html','_blank')
}
oP[4].onclick=function(){
	window.open('others/boom/boom.html','_blank')
}
oP[5].onclick=function(){
	window.open('others/pbl.html','_blank')
}
/*返回顶部*/ 
$(".returTop").click(function(){
	 $("body").animate({scrollTop:1},1000);
})

/*end*/ 






