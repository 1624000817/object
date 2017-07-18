var main = angular.module("main", []);
main.component("mainCom",{
	templateUrl:"component/main/main.html",
	controller:["$scope","$http",
	function($scope,$http){
		/*衬衫*/
		$http({
			method:"JSONP",
			url:"http://datainfo.duapp.com/shopdata/getGoods.php",
			params:{
				classID:1,
				linenumber:6
			}
		}).then(
			function success(resp){
				console.log(resp)
				$scope.goodesfir=resp.data;
			},function error(resp){
				console.log("请求失败")
			}
		)
		/*礼服*/
		$http({
			method:"JSONP",
			url:"http://datainfo.duapp.com/shopdata/getGoods.php",
			params:{
				classID:2,
				linenumber:6
			}
		}).then(
			function success(resp){
				console.log(resp)
				$scope.goodessec=resp.data;
			},function error(resp){
				console.log("请求失败")
			}
		)
		/*棉服*/
		$http({
			method:"JSONP",
			url:"http://datainfo.duapp.com/shopdata/getGoods.php",
			params:{
				classID:3,
				linenumber:6
			}
		}).then(
			function success(resp){
				console.log(resp)
				$scope.goodesthr=resp.data;
			},function error(resp){
				console.log("请求失败")
			}
		)
		/*卫衣*/
		$http({
			method:"JSONP",
			url:"http://datainfo.duapp.com/shopdata/getGoods.php",
			params:{
				classID:5,
				linenumber:6
			}
		}).then(
			function success(resp){
				console.log(resp)
				$scope.goodesfour=resp.data;
			},function error(resp){
				console.log("请求失败")
			}
		)
		/*热销*/
		$http({
			method:"JSONP",
			url:"http://datainfo.duapp.com/shopdata/getGoods.php",
			params:{
				classID:0,
				linenumber:9
			}
		}).then(
			function success(resp){
				console.log(resp)
				$scope.goodesfive=resp.data;
			},function error(resp){
				console.log("请求失败")
			}
		)
		/*衬衫*/
		$http({
			method:"JSONP",
			url:"http://datainfo.duapp.com/shopdata/getGoods.php",
			params:{
				classID:1,
				linenumber:8
			}
		}).then(
			function success(resp){
				console.log(resp)
				$scope.goodessix=resp.data;
			},function error(resp){
				console.log("请求失败")
			}
		)
		/*衬衫*/
		$http({
			method:"JSONP",
			url:"http://datainfo.duapp.com/shopdata/getGoods.php",
			params:{
				classID:3,
				linenumber:8
			}
		}).then(
			function success(resp){
				console.log(resp)
				$scope.goodesseven=resp.data;
			},function error(resp){
				console.log("请求失败")
			}
		)
	}]
})
/*长度过滤器*/
main.filter("namefilter",function(){
	return function(value,num){
		if(value==""){
			return ""
		}
		value=value.substring(0,num);
		return value
	}
});