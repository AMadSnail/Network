

var sum = location.href.split("?")[1];
var war = document.getElementById("warpper-mian");
var str = "";

var obj = [
	{
		"id":01,
		"img":"../img/hua1.jpg",
		"table":"[鲜花]甜美公主一白玫瑰22枝，粉佳人粉玫瑰14枝，粉色桔",
		"oprice":"¥485",
		"price":"¥378"
	},
	{
		"id":02,
		"img":"../img/hua5.jpg",
		"table":"[鲜花]甜美公主一白玫瑰22枝，粉佳人粉玫瑰14枝，粉色桔",
		"oprice":"¥485",
		"price":"¥378"
	},
	{
		"id":03,
		"img":"../img/hua9.jpg",
		"table":"[鲜花]甜美公主一白玫瑰22枝，粉佳人粉玫瑰14枝，粉色桔",
		"oprice":"¥485",
		"price":"¥378"
	},
	{
		"id":04,
		"img":"../img/hua13.jpg",
		"table":"[鲜花]甜美公主一白玫瑰22枝，粉佳人粉玫瑰14枝，粉色桔",
		"oprice":"¥485",
		"price":"¥378"
	},
	{
		"id":05,
		"img":"../img/hua17.jpg",
		"table":"[鲜花]甜美公主一白玫瑰22枝，粉佳人粉玫瑰14枝，粉色桔",
		"oprice":"¥485",
		"price":"¥378"
	},
	{
		"id":06,
		"img":"../img/hua21.jpg",
		"table":"[鲜花]甜美公主一白玫瑰22枝，粉佳人粉玫瑰14枝，粉色桔",
		"oprice":"¥485",
		"price":"¥378"
	},
	{
		"id":07,
		"img":"../img/hua25.jpg",
		"table":"[鲜花]甜美公主一白玫瑰22枝，粉佳人粉玫瑰14枝，粉色桔",
		"oprice":"¥485",
		"price":"¥378"
	},
	{
		"id":08,
		"img":"../img/hua28.jpg",
		"table":"[鲜花]甜美公主一白玫瑰22枝，粉佳人粉玫瑰14枝，粉色桔",
		"oprice":"¥485",
		"price":"¥378"
	}
]

for(var i = 0;i<obj.length;i++){
	if(obj[i].id == sum){
		str += `<div class="mian" data-id="${obj[i].id}">
			<ul id="left">
				<input type="checkbox">
				<img src="${obj[i].img}" />
				<p>${obj[i].table}</p>
			</ul>
			<ul id="right">
				<li>${obj[i].oprice}</li>
				<li class="prc">${obj[i].price}</li>
				<li>
					<a href="##" class="plus">-</a>
					<input type="text" value="1" id="txt">
					<a href="##" class="reduce">+</a>
				</li>
				<li>
					<span id="move">删除</span><br />
					移到我的收藏
				</li>
			</ul>
			
		</div>`
	}
	
}

war.innerHTML = str;


//全选    反选

var check = document.getElementById("check");
var input = document.querySelectorAll("#left>input");


check.onclick = function(){
	for(var i =0;i<input.length;i++){
		if(this.checked){
			input[i].checked = true;
			
		}else{
			input[i].checked = false;
		}
	}
} 


	for(var i = 0;i<input.length;i++){

		input[i].onclick = function(){
		var sun = true;
		for(var k = 0;k<input.length;k++){
			if(!input[k].checked){
				sun = false;
				break;
			}
		}
		if(sun){
			check.checked = true;
		}else{
			check.checked = false;
		}
	}
}



//商品加减

var plus = document.querySelectorAll(".plus");
var reduce = document.querySelectorAll(".reduce");
var txt = document.querySelectorAll("#txt");
// var aSpan = document.querySelectorAll("#cont>ul>li>span");
var oPrc = document.querySelectorAll(".prc");
var txt = document.querySelectorAll("#txt");
var aSpan = document.querySelectorAll("span");
for(var i = 0;i<reduce.length;i++){
	reduce[i].onclick = function(){
		var num =  Number(this.previousElementSibling.value);
		num++;
		this.previousElementSibling.value = num;

		var price = this.parentNode.previousElementSibling.innerHTML.substr(1);

		var zpeice= "¥"+(num*price);
		aSpan[1].innerHTML = zpeice;
		
	}
}


for(var i =0;i<plus.length;i++){
	plus[i].onclick = function(){
		var num =  Number(this.nextElementSibling.value);
		if(num>1){
			num--;
			this.nextElementSibling.value = num;
		}
		var price = this.parentNode.previousElementSibling.innerHTML.substr(1);

		aSpan[1].innerHTML = "¥"+(num*price);
	}
}






//商品删除
var aMove = document.querySelectorAll("#move");
for(var i = 0;i<aMove.length;i++){
	aMove[i].onclick = function(){
		alert("不在考虑考虑了吗？")
		this.parentNode.parentNode.parentNode.remove();
		aSpan[1].innerHTML = "¥0";
	}
}


//返回继续添加

var oCont = document.getElementById("cont");
oCont.onclick = function(e){
	var e = e || event;
	var target = e.target || e.srcElement;
	if(target.tagName == "LI" && target.className == "li1"){
		location.href = "index.html";
	}
}