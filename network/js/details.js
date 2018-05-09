

//json数据


var num = location.href.split("?")[1];
console.log(num)
var obj = [
	{
		"id":"01",
		"tian":"甜美公主",
		"imga":"../img/hua1.jpg",
		"imgb":"../img/hua2.jpg",
		"imgc":"../img/hua3.jpg",
		"imgd":"../img/hua4.jpg",
		"img1":"../img/hua1-1.jpg",
		"img2":"../img/hua2-2.jpg",
		"img3":"../img/hua3-3.jpg",
		"img4":"../img/hua4-4.jpg",
		"table":"甜美公主----白玫瑰22枝，粉佳人粉玫瑰14枝，粉色桔梗5枝",
		"destID":"鲜花编号:9012154",
		"cailiao":"各色玫瑰共36枝：白玫瑰22枝，粉佳人粉玫瑰14枝；粉色桔梗5枝，尤加利0.5扎",
		"baozhuan":"绿色/浅绿色双面人造纸，白咖罗纹带花结",
		"huayu":"再多一点点距离，我就能靠近你。清晰甜美的空气里，爱你到不能呼吸",
		"fusong":"下单填写留言，即免费赠送精美贺卡！",
		"peisong":"全国 （可配送至全国2000多城市，市区免配送费）",
		"shuoming":"大城市至少提前1天订购，中小城市订购前请咨询客服",
		"price":"花礼价：¥378"
	},
	{
		"id":"02",
		"tian":"甜美公主",
		"imga":"../img/hua5.jpg",
		"imgb":"../img/hua6.jpg",
		"imgc":"../img/hua7.jpg",
		"imgd":"../img/hua8.jpg",
		"img1":"../img/hua5-5.jpg",
		"img2":"../img/hua6-6.jpg",
		"img3":"../img/hua7-7.jpg",
		"img4":"../img/hua8-8.jpg",
		"table":"甜美公主----白玫瑰22枝，粉佳人粉玫瑰14枝，粉色桔梗5枝",
		"destID":"鲜花编号:9012154",
		"cailiao":"各色玫瑰共36枝：白玫瑰22枝，粉佳人粉玫瑰14枝；粉色桔梗5枝，尤加利0.5扎",
		"baozhuan":"绿色/浅绿色双面人造纸，白咖罗纹带花结",
		"huayu":"再多一点点距离，我就能靠近你。清晰甜美的空气里，爱你到不能呼吸",
		"fusong":"下单填写留言，即免费赠送精美贺卡！",
		"peisong":"全国 （可配送至全国2000多城市，市区免配送费）",
		"shuoming":"大城市至少提前1天订购，中小城市订购前请咨询客服",
		"price":"花礼价：¥378"
	},
	{
		"id":"03",
		"tian":"甜美公主",
		"imga":"../img/hua9.jpg",
		"imgb":"../img/hua10.jpg",
		"imgc":"../img/hua11.jpg",
		"imgd":"../img/hua12.jpg",
		"img1":"../img/hua9-9.jpg",
		"img2":"../img/hua10-10.jpg",
		"img3":"../img/hua11-11.jpg",
		"img4":"../img/hua12-12.jpg",
		"table":"甜美公主----白玫瑰22枝，粉佳人粉玫瑰14枝，粉色桔梗5枝",
		"destID":"鲜花编号:9012154",
		"cailiao":"各色玫瑰共36枝：白玫瑰22枝，粉佳人粉玫瑰14枝；粉色桔梗5枝，尤加利0.5扎",
		"baozhuan":"绿色/浅绿色双面人造纸，白咖罗纹带花结",
		"huayu":"再多一点点距离，我就能靠近你。清晰甜美的空气里，爱你到不能呼吸",
		"fusong":"下单填写留言，即免费赠送精美贺卡！",
		"peisong":"全国 （可配送至全国2000多城市，市区免配送费）",
		"shuoming":"大城市至少提前1天订购，中小城市订购前请咨询客服",
		"price":"花礼价：¥378"
	},
	{
		"id":"04",
		"tian":"甜美公主",
		"imga":"../img/hua13.jpg",
		"imgb":"../img/hua14.jpg",
		"imgc":"../img/hua15.jpg",
		"imgd":"../img/hua1116.jpg",
		"img1":"../img/hua13-13.jpg",
		"img2":"../img/hua14-14.jpg",
		"img3":"../img/hua15-15.jpg",
		"img4":"../img/hua16-16.jpg",
		"table":"甜美公主----白玫瑰22枝，粉佳人粉玫瑰14枝，粉色桔梗5枝",
		"destID":"鲜花编号:9012154",
		"cailiao":"各色玫瑰共36枝：白玫瑰22枝，粉佳人粉玫瑰14枝；粉色桔梗5枝，尤加利0.5扎",
		"baozhuan":"绿色/浅绿色双面人造纸，白咖罗纹带花结",
		"huayu":"再多一点点距离，我就能靠近你。清晰甜美的空气里，爱你到不能呼吸",
		"fusong":"下单填写留言，即免费赠送精美贺卡！",
		"peisong":"全国 （可配送至全国2000多城市，市区免配送费）",
		"shuoming":"大城市至少提前1天订购，中小城市订购前请咨询客服",
		"price":"花礼价：¥378"
	},
	{
		"id":"05",
		"tian":"甜美公主",
		"imga":"../img/hua17.jpg",
		"imgb":"../img/hua18.jpg",
		"imgc":"../img/hua19.jpg",
		"imgd":"../img/hua20.jpg",
		"img1":"../img/hua17-17.jpg",
		"img2":"../img/hua18-18.jpg",
		"img3":"../img/hua19-19.jpg",
		"img4":"../img/hua20-20.jpg",
		"table":"甜美公主----白玫瑰22枝，粉佳人粉玫瑰14枝，粉色桔梗5枝",
		"destID":"鲜花编号:9012154",
		"cailiao":"各色玫瑰共36枝：白玫瑰22枝，粉佳人粉玫瑰14枝；粉色桔梗5枝，尤加利0.5扎",
		"baozhuan":"绿色/浅绿色双面人造纸，白咖罗纹带花结",
		"huayu":"再多一点点距离，我就能靠近你。清晰甜美的空气里，爱你到不能呼吸",
		"fusong":"下单填写留言，即免费赠送精美贺卡！",
		"peisong":"全国 （可配送至全国2000多城市，市区免配送费）",
		"shuoming":"大城市至少提前1天订购，中小城市订购前请咨询客服",
		"price":"花礼价：¥378"
	},
	{
		"id":"06",
		"tian":"甜美公主",
		"imga":"../img/hua21.jpg",
		"imgb":"../img/hua22.jpg",
		"imgc":"../img/hua23.jpg",
		"imgd":"../img/hua24.jpg",
		"img1":"../img/hua21-21.jpg",
		"img2":"../img/hua22-22.jpg",
		"img3":"../img/hua23-23.jpg",
		"img4":"../img/hua24-24.jpg",
		"table":"甜美公主----白玫瑰22枝，粉佳人粉玫瑰14枝，粉色桔梗5枝",
		"destID":"鲜花编号:9012154",
		"cailiao":"各色玫瑰共36枝：白玫瑰22枝，粉佳人粉玫瑰14枝；粉色桔梗5枝，尤加利0.5扎",
		"baozhuan":"绿色/浅绿色双面人造纸，白咖罗纹带花结",
		"huayu":"再多一点点距离，我就能靠近你。清晰甜美的空气里，爱你到不能呼吸",
		"fusong":"下单填写留言，即免费赠送精美贺卡！",
		"peisong":"全国 （可配送至全国2000多城市，市区免配送费）",
		"shuoming":"大城市至少提前1天订购，中小城市订购前请咨询客服",
		"price":"花礼价：¥378"
	},
	{
		"id":"07",
		"tian":"甜美公主",
		"imga":"../img/hua25.jpg",
		"imgb":"../img/hua26.jpg",
		"imgc":"../img/hua27.jpg",
		"imgd":"../img/hua28.jpg",
		"img1":"../img/hua25-25.jpg",
		"img2":"../img/hua26-26.jpg",
		"img3":"../img/hua27-27.jpg",
		"img4":"../img/hua28-28.jpg",
		"table":"甜美公主----白玫瑰22枝，粉佳人粉玫瑰14枝，粉色桔梗5枝",
		"destID":"鲜花编号:9012154",
		"cailiao":"各色玫瑰共36枝：白玫瑰22枝，粉佳人粉玫瑰14枝；粉色桔梗5枝，尤加利0.5扎",
		"baozhuan":"绿色/浅绿色双面人造纸，白咖罗纹带花结",
		"huayu":"再多一点点距离，我就能靠近你。清晰甜美的空气里，爱你到不能呼吸",
		"fusong":"下单填写留言，即免费赠送精美贺卡！",
		"peisong":"全国 （可配送至全国2000多城市，市区免配送费）",
		"shuoming":"大城市至少提前1天订购，中小城市订购前请咨询客服",
		"price":"花礼价：¥378"
	},
	{
		"id":"08",
		"tian":"甜美公主",
		"imga":"../img/hua29.jpg",
		"imgb":"../img/hua30.jpg",
		"imgc":"../img/hua31.jpg",
		"imgd":"../img/hua32.jpg",
		"img1":"../img/hua29-29.jpg",
		"img2":"../img/hua30-30.jpg",
		"img3":"../img/hua31-31.jpg",
		"img4":"../img/hua32-32.jpg",
		"table":"甜美公主----白玫瑰22枝，粉佳人粉玫瑰14枝，粉色桔梗5枝",
		"destID":"鲜花编号:9012154",
		"cailiao":"各色玫瑰共36枝：白玫瑰22枝，粉佳人粉玫瑰14枝；粉色桔梗5枝，尤加利0.5扎",
		"baozhuan":"绿色/浅绿色双面人造纸，白咖罗纹带花结",
		"huayu":"再多一点点距离，我就能靠近你。清晰甜美的空气里，爱你到不能呼吸",
		"fusong":"下单填写留言，即免费赠送精美贺卡！",
		"peisong":"全国 （可配送至全国2000多城市，市区免配送费）",
		"shuoming":"大城市至少提前1天订购，中小城市订购前请咨询客服",
		"price":"花礼价：¥378"
	}

]

var oWar = document.getElementById("wrapper-mian");
console.log(oWar)
var str = "";
for(var i = 0;i<obj.length;i++){
	if(obj[i].id == num){
		str +=`<div id="mian" data-id="${obj[i].id}">
		<div class="sy">
			<h4>首页</h4><p> > 鲜花 > </p><span>${obj[i].tian}</span>
		</div>
		<div id="box">
			<div id="list">

				<div id="boxImg1">
				<div id="mask"></div>
					<img src="${obj[i].imga}" class="middle" width="430" height="470">
				</div>
				<div id="cont">
					<img src="${obj[i].imga}" class="miaale" width="860" height="940">
				</div>
				<div id="boxImg2">
					<img src="${obj[i].img1}" class="small"  data-url="${obj[i].imga}">
					<img src="${obj[i].img2}" class="small"  data-url="${obj[i].imgb}">
					<img src="${obj[i].img3}" class="small"  data-url="${obj[i].imgc}">
					<img src="${obj[i].img4}" class="small"  data-url="${obj[i].imgd}">
				</div>
			</div>

			<div id="dast">
				<h3>${obj[i].table}</h3>
				<ul class="u1">
					<li>
						<span>类别:</span>
						<p>${obj[i].destID}</p>
					</li>
					<li>
						<span>材料:</span>
						<p>${obj[i].cailiao}</p>
					</li>
					<li>
						<span>包装:</span>
						<p>${obj[i].baozhuan}</p>
					</li>
					<li>
						<span>花语:</span>
						<p>${obj[i].huayu}</p>
					</li>
					<li>
						<span>附送:</span>
						<p>下单填写留言，即免费赠送精美贺卡！</p>
					</li>
					<li>
						<span>配送:</span>
						<p>全国 （可配送至全国2000多城市，市区免配送费）</p>
					</li>
					<li>
						<span>至配送:</span>
						<p>请选择</p>
					</li>
					<li>
						<span>说明:</span>
						<p class="p1">大城市至少提前1天订购，中小城市订购前请咨询客服</p>
					</li>
				</ul>
				<ul class="u2">
					<li>
						<span>市场价：¥485</span>
					</li>
					<li>
						<p>${obj[i].price}</p>
					</li>
					<div id="nct">
						<ul>
							<li>促销信息:</li>
							<li><img src="../img/nth.jpg" alt=""></li>
							<li>¥370</li>
							<li>去APP购买</li>
							<li>去微信购买</li>
						</ul>
					</div>
					<button id="but">立即购买</button><button class="button">收藏</button>
				</ul>
				
			</div>
		<div>
	</div>`
	}
}
	oWar.innerHTML = str;










//图片切换
var oList = document.getElementById("list");
var oMiddle = document.querySelector(".middle");
var aSmall = document.querySelectorAll(".small");
var oMask = document.getElementById("mask");
var oCont = document.getElementById("cont");
var boxImg1 = document.getElementById("boxImg1");
var oMiaale = document.querySelector(".miaale")


for(var i =0;i<aSmall.length;i++){
	aSmall[i].onmouseover = function(){
		var attr = this.getAttribute("data-url");
		oMiddle.src = attr;
		oMiaale.src = attr;
	}
}

//图片放大镜


boxImg1.onmouseover = function(){
	oMask.style.display = "block";
	oCont.style.display = "block";

	this.onmousemove = function(e){
		var e = e || event;

		var l = e.clientX - this.offsetWidth/2+60;
		var t = e.clientY - this.offsetHeight/2;

		if(l>=boxImg1.offsetWidth - oMask.offsetWidth){
			l = boxImg1.offsetWidth - oMask.offsetWidth;
		}else if(l<0){
			l = 0;
		}

		if(t>=boxImg1.offsetHeight - oMask.offsetHeight){
			t = boxImg1.offsetHeight - oMask.offsetHeighth;
		}else if(t<0){
			t = 0;
		}

		oMask.style.left = l+'px';
		oMask.style.top = t+'px';

		oMiaale.style.left = -2*l+'px';
		oMiaale.style.top = -2*t+'px';
	}
}

boxImg1.onmouseout = function(){
	oMask.style.display = "none";
	oCont.style.display = "none";
}



var oBut = document.getElementById("but");
oBut.onclick = function(){
	var mun = this.parentNode.parentNode.parentNode.parentNode.getAttribute("data-id");
	location.href = "cart.html?"+num;
}
