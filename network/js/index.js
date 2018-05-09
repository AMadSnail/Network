var oBox = document.getElementById("box");
var oList = document.getElementById("list");

var str = "";

var obj = [
	{
		"id":"01",
		"img":"../img/net1.jpg",
		"price":"¥378",
		"tatle":"鲜花/甜美公主-白玫瑰22枝，粉佳人粉..."
	},
	{
		"id":"02",
		"img":"../img/net2.jpg",
		"price":"¥378",
		"tatle":"鲜花/甜美公主-白玫瑰22枝，粉佳人粉..."
	},
	{
		"id":"03",
		"img":"../img/net3.jpg",
		"price":"¥378",
		"tatle":"鲜花/甜美公主-白玫瑰22枝，粉佳人粉..."
	},
	{
		"id":"04",
		"img":"../img/net4.jpg",
		"price":"¥378",
		"tatle":"鲜花/甜美公主-白玫瑰22枝，粉佳人粉..."
	},
	{
		"id":"05",
		"img":"../img/net5.jpg",
		"price":"¥378",
		"tatle":"鲜花/甜美公主-白玫瑰22枝，粉佳人粉..."
	},
	{
		"id":"06",
		"img":"../img/net6.jpg",
		"price":"¥378",
		"tatle":"鲜花/甜美公主-白玫瑰22枝，粉佳人粉..."
	},
	{
		"id":"07",
		"img":"../img/net7.jpg",
		"price":"¥378",
		"tatle":"鲜花/甜美公主-白玫瑰22枝，粉佳人粉..."
	},
	{
		"id":"08",
		"img":"../img/net8.jpg",
		"price":"¥378",
		"tatle":"鲜花/甜美公主-白玫瑰22枝，粉佳人粉..."
	}
]


for(var i = 0;i<obj.length;i++){
	str+=`<ul id="list" data-id="${obj[i].id}">
			<li>
				<img src="${obj[i].img}" />
			</li>
			<li>
				<p>${obj[i].price}</p>
			</li>
			<li>
				<a href="##" class="tel">${obj[i].tatle}</a>
			</li>
			<li>
				<span>收藏</span><span class="sp">加入购物车</span>
			</li>
		</ul>`
}

oBox.innerHTML = str;
oBox.onclick = function(e){
	var e = e || event;
	var target = e.target || e.srcElement;
	if(target.tagName=="A" && target.className=="tel"){
		var num = target.parentNode.parentNode.getAttribute("data-id");
		console.log(num)
		location.href = "details.html?"+num;
	}
	if(target.tagName =="SPAN" && target.className =="sp"){
		var sum = target.parentNode.parentNode.getAttribute("data-id");
		location.href = "details.html?"+sum;
	}
}




	
