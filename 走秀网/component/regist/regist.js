var regist=angular.module("regist",[]);
regist.component("registCom",{
	templateUrl:"component/regist/regist.html",
	controller:["$scope","$http","$location",
		function($scope,$http,$location){
		$scope.regist=function(){
			$http({
				method:"GET",
				url:"http://datainfo.duapp.com/shopdata/userinfo.php",
				params:{
					status:"register",
					userID:$scope.username
				}
			}).then(
			function success(resp){
				console.log("请求成功",resp)
				if(resp.data==1){
					console.log(resp)
					$location.path("/login")
				}else if(resp.data==0){
					console.log(resp)
					$(".err-msg")[0].style="display:block"
				}
			},function error(resp){
				console.log("请求失败")
			})
		}
		$scope.go=function(){
			$http({
				method:"GET",
				url:"http://datainfo.duapp.com/shopdata/userinfo.php",
				params:{
					status:"login",
					userID:$scope.username,
					password:$scope.password
				}
			}).then(
			function success(resp){
				console.log("请求成功",resp)
				if(resp.data instanceof Object){
					$location.path("/main")
				}else{
					$(".err-msg")[2].style="display:block"
				}
			},function error(resp){
				console.log("请求失败")
			})
		}
	}]
})
