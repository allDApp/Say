var dappAddress = "n1qXZ5w71LimwixsKmzghFDPeAm4iRrdtzK";
$(function() {
	
	
		var NebPay = require("nebpay"); //https://github.com/nebulasio/nebPay
		var nebpay = new NebPay();

		
		//var dappAddress = "n1xfyB4ZaDAhoXnpoQ9Ta9Fmr37CYwMyoDT";
		var txHash = "06b24ad954ef6649b778925be5e955d5f3c19e2f3d97f0b48fb09cdada4c4309";
		
		
	$("#allword").click(function() {
		$("#detailTitle").text("全部名言 Words");

		var to = dappAddress;
		var value = "0";
		var callFunction = "getwords";
		var callArgs = "[]";
		nebpay.simulateCall(to, value, callFunction, callArgs, {
			listener: function(resp) {
				//console.log(JSON.stringify(resp.result));
				if(resp.result == ""){
					$("#searchresult").html('<div class="panel-body" >暂无记录</div>');
					return;
				}
				var res = JSON.parse(resp.result);
				if(res.length == 0){
					$("#searchresult").html('<div class="panel-body">暂无记录</div>');
					return;
				}

				var tempStr = "";

				for (var i = 0; i < res.length; i++) {
					if (i % 2 == 0) {
						tempStr += '<div class="panel-body"> ';
					} else {
						tempStr += '<div class="panel-footer">';
					}

					//					
					tempStr += '<p>';
					tempStr += res[i].content;
					tempStr += '</p>';
					tempStr += '<p>';
					tempStr += '<small><cite>' + '收录地址:' + res[i].author.substr(2,3) + '</cite></small>';
					tempStr += '<br>';
					tempStr += '<a class="btn" href="javascript:void(0)" id="like" onclick="addMy(';
					tempStr += res[i].index;
					tempStr += ')">收藏</a>';

					tempStr += '</p> </div> ';
				}
				console.log(tempStr);
				$("#searchresult").html(tempStr);
			}
		});

	});
	$("#allword").click();

	$("#Myword").click(function() {
		$("#detailTitle").text("我的收藏 MY Words");



		var to = dappAddress;
		var value = "0";
		var callFunction = "getMy";
		var callArgs = "[]";
		nebpay.simulateCall(to, value, callFunction, callArgs, {
			listener: function(resp) {
				//console.log(JSON.stringify(resp.result));
				if(resp.result == ""){
					$("#searchresult").html('<div class="panel-body">暂时没有记录</div>');
					return;
				}
				var res = JSON.parse(resp.result);
				if(res.length == 0){
					$("#searchresult").html('<div class="panel-body">暂时没有记录</div>');
					return;
				}
				

				var tempStr = "";

				for (var i = 0; i < res.length; i++) {
					if (i % 2 == 0) {
						tempStr += '<div class="panel-body"> ';
					} else {
						tempStr += '<div class="panel-footer">';
					}

					//					
					tempStr += '<p>';
					tempStr += res[i].content;
					tempStr += '</p>';
					tempStr += '<p>';
					tempStr += '<small><cite>' + '收录地址:' + res[i].author + '</cite></small>';
					tempStr += '<br>';
					tempStr += '<a class="btn" href="#" id="reMy" onclick="reMy(';
					tempStr += res[i].index;
					tempStr += ')">取消收藏</a>';
					
					tempStr += '</p> </div> ';
				}
				console.log(tempStr);
				$("#searchresult").html(tempStr);
			}
		});

	});

	$("#create").click(function() {
		$("#detailTitle").text("记录名言 Save Words")

		var tempStr = '';
		tempStr += '<div class="panel-body"> ';
		tempStr += '<form role="form">';
		tempStr += '<div class="form-group">';
		tempStr += '<p>名人名言,预言,经典诗歌,那些不应被遗忘的话。</p>';
		tempStr += '<p>选择类型(名言/预言/诗歌/经典):</p>';
		tempStr += '<textarea class="form-control" rows="1" id="name" >名言</textarea>';
		tempStr += '<p>内容:</p>';
		tempStr += '<textarea class="form-control" rows="10" id="content" >我有一个梦想!</textarea>';
		tempStr += '<p>作者/名言出处:</p>';
		tempStr += '<textarea class="form-control" rows="1" id="auth" >马丁路德金</textarea>';
		tempStr += '<button type="button" class="btn btn-primary" id="savebutton" onclick="save();">上传</button>';		
		tempStr += '</div>';
		tempStr += '</form>';
		tempStr += '</div> ';
		console.log(tempStr);

		$("#searchresult").html(tempStr);
	});

	$("#about").click(function() {
		$("#detailTitle").text("关于")

		var tempStr = '';
		tempStr += ' <blockquote><p>星云链是致力于构建可持续升级良性生态的下一代公链。独创的区块链价值发现体系、前瞻性的激励和共识机制、避免硬分叉的自进化能力</p></blockquote><p>联系作者邮箱：LowEntropy@yahoo.com</p><a href="https://incentive.nebulas.io/cn/signup.html?invite=mPHt9" title="开发者领取130NAS" target="_blank">开发者领取130NAS</a><p>100NAS新应用奖励+10NAS使用邀请码+20NAS邀请人返还。如果你的应用通过了，请与LowEntropy@yahoo.com联系，提供你的开发者ID与钱包地址，我们将返还给您20NAS。</p>';
		console.log(tempStr);

		$("#searchresult").html(tempStr);
	});

	$("#help").click(function() {
		$("#detailTitle").text("帮助")

		var tempStr = '';
		tempStr += '<p>我钱包里一点NAS都没有怎么办,GAS费不够连合约都执行不了</p>'
tempStr += '<a href="http://dapp.gpu360.com/watertap" title="无需手续费领取NAS" target="_blank">无需手续费领取NAS</a>'
tempStr += '<p>我还想多领一点</p>'
tempStr += '<a href="https://nas.biyouduo.com/" title="领取0.0001NAS"target="_blank">领取0.0001NAS</a>'
tempStr += '<p>作为开发者，我想得到更多奖励</p>'
tempStr += '<a href="https://incentive.nebulas.io/cn/signup.html?invite=mPHt9" title="开发者领取130NAS" target="_blank">开发者领取130NAS</a>'
tempStr += '<p>100NAS新应用奖励+10NAS使用邀请码+20NAS邀请人返还。如果你的应用通过了，请与LowEntropy@yahoo.com联系，提供你的开发者ID与钱包地址，我们将返还给您20NAS。</p>'
tempStr += '<p>为什么有时加载不出来，有时发送交易失败？</p>'
tempStr += '<p>请按顺序检查网络状态/钱包插件状态/提交信息是否有特殊字符</p>'
		console.log(tempStr);

		$("#searchresult").html(tempStr);
	});

	$("#wal").click(function() {
		$("#detailTitle").text("钱包")

		var tempStr = '';
		tempStr += '<p>必须使用Chrome内核的浏览器安装插件：</p><a href="https://github.com/ChengOrangeJu/WebExtensionWallet">下载插件钱包</a>'
		console.log(tempStr);

		$("#searchresult").html(tempStr);
	});

});

function addMy(index){
	var NebPay = require("nebpay"); //https://github.com/nebulasio/nebPay
	var nebpay = new NebPay();

	//var dappAddress = "n1nk8EEJcCE2J1fk2wdFCLMkhH8cttrxGJE";
	var txHash = "4cbc74e26f138c57dda5e3a86dc6965a3f11dca7c7735e3164611a0e15ffedba";

		var to = dappAddress;
		var value = "0";
		var callFunction = "addMy";
		var callArgs = "[\"" + index + "\"]";
		nebpay.call(to, value, callFunction, callArgs, {
			listener: function(resp) {
				console.log(JSON.stringify(resp.result));
			}
		});
};

function reMy(index){
	var NebPay = require("nebpay"); //https://github.com/nebulasio/nebPay
	var nebpay = new NebPay();
		var to = dappAddress;
		var value = "0";
		var callFunction = "reMy";
		var callArgs = "[\"" + index + "\"]";
		nebpay.call(to, value, callFunction, callArgs, {
			listener: function(resp) {
				console.log(JSON.stringify(resp.result));
			}
		});
};

function save(){
	var NebPay = require("nebpay"); //https://github.com/nebulasio/nebPay
	var nebpay = new NebPay();
		var content = $("#content").val();
		var name = $("#name").val();
		var auth = $("#auth").val();
		if (content == "") {
			alert("请输入内容。");
			return;
		}
		if (name == "") {
			alert("请输入类型。");
			return;
		}
		if (auth == "") {
			alert("请输入类型。");
			return;
		}
		content= content.replace(/\n/g,"<br>"); 
		name= name.replace(/\n/g,"<br>"); 
		var to = dappAddress;
		var value = "0";
		var callFunction = "save";
		var callArgs = "[\"" + name + ":" + content + "————" +auth +"\"]";
		nebpay.call(to, value, callFunction, callArgs, {
			listener: function Push(resp) {
				console.log("response of push: " + JSON.stringify(resp))
				var respString = JSON.stringify(resp);
				if(respString.search("rejected by user") !== -1){
					alert("关闭交易,取消上传")
				}else if(respString.search("txhash") !== -1){
					alert("上传Hash: " + resp.txhash+"请等待交易确认,如果上传失败请检查内容是否含有特殊字符")
				}
			}
		});
	

};

function ttt(timestamp) {
	var date = new Date(timestamp * 1000);//10*1000，13*0
	Y = date.getFullYear() + '-';
	M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
	D = date.getDate() + ' ';
	h = date.getHours() + ':';
	m = date.getMinutes();
	return Y+M+D+h+m;
}
