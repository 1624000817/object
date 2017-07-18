var shopcart=angular.module("shopcart",[]);
shopcart.component("shopcartCom",{
	templateUrl:"component/shopcart/shopcart.html",
	controller:["baseService", "$scope", "$http","$location","$window",function(baseService,$location,$http,$scope,window){
		var _loginStatus =baseService.getLogin("loginUser");
            console.log(_loginStatus);
            if(_loginStatus != null || _loginStatus != "") {
                $http({
                    method:"JSONP",
                    url:"http://datainfo.duapp.com/shopdata/getCar.php",
                    params:{userID:_loginStatus}
                }).then(
                    function succ(resp) {
                        console.log(resp);
                        $scope.shopcartList = resp.data;
                    },
                    function eror(resp) {
                        console.log("购物车请求失败");
                    }
                );
            }else{
            	$location.path("/login")
            }
	}]
})
