var app=angular.module("myApp",["ui.router","login","regist","main","usercenter","details","goodsxiangqing","shopcart"]);
app.service("baseService", ["$window", function($window) {
    var _status = {};

    _status.setLogin = function(key, value) {
        $window.localStorage.setItem(key, value);
    }
    _status.getLogin = function(key) {
        return $window.localStorage.getItem(key);
    }
    return _status;
}]);
app.config(["$stateProvider","$urlRouterProvider","$sceDelegateProvider",
	function($stateProvider,$urlRouterProvider,$sceDelegateProvider) {
		/*设置白名单*/
		$sceDelegateProvider.resourceUrlWhitelist([
            	"self",
            	"http://datainfo.duapp.com/**"
        ])
		/*默认访问首页*/
		$urlRouterProvider.otherwise("/main");
		$stateProvider
		.state({/*首页*/
			name:"main",
			url:"/main",
			template:"<main-com></main-com>"
		}).state({/*注册页*/
			name:"regist",
			url:"/regist",
			template:"<regist-com></regist-com>"
		}).state({/*登录页*/
			name:"login",
			url:"/login",
			template:"<login-com></login-com>"
		}).state({ /*用户中心*/
			name:"usercenter",
			url:"/usercenter",
			template:"<usercenter-com></usercenter-com>"
		}).state({/*分类查找*/
			name:"goodsxiangqing",
			url:"/goodsxiang",
			template:"<goods-xiang></goods-xiang>",
			params:{classID:null}
		}).state({ /*详情页*/
			name:"goodsxiangqing.details",
			url:"/details",
			template:"<details-com></details-com>",
			params:{classID:null}
		}).state({/*购物车*/
			name:"shopcart",
			url:"/shopcart",
			template:"<shopcart-com></shopcart-com>"
		})
	}])
app.controller("myCtrl",["$scope","$http",
	function($scope,$http){
	
		$scope.goodes=[];
		/*console.log(">>>>>>>>", $stateParams.classID);*/
		$http({
			method:"GET",
			url:"http://datainfo.duapp.com/shopdata/getclass.php",
		}).then(
			function success(resp){
				console.log("请求成功", resp);
				$scope.goodes=resp.data;
			},function error(resp){
				alert("系统繁忙请稍后再试")
			}
		)
	
	
	
	
	//获取商品名字
		$http({
	            method:"JSONP",
	            url:"http://datainfo.duapp.com/shopdata/getGoods.php",
	        }).then(
	            function(resp) {
	                console.log("请求成功",resp);
	                $scope.goods = resp.data;
	            },function(resp) {
	                console.log("失败",resp);
	            }
	        );
	        }
]);
app.filter("goodsLength",function(){
	return function(name,num){
		if(name==""){
			return "";
		}
		return name.substring(0,num)
	}
})