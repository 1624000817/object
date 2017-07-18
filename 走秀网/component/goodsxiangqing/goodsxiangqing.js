	var goodsxiangqing=angular.module("goodsxiangqing",[]);
	goodsxiangqing.component("goodsXiang",{
		templateUrl:"component/goodsxiangqing/goodsxiangqing.html",
		controller:["$scope","$http","$stateParams",function($scope,$http,$stateParams){
			console.log($stateParams.classID);
			//获取商品名字
				$http({
		            method:"JSONP",
		            url:"http://datainfo.duapp.com/shopdata/getGoods.php",
		            params:{
		            	classID:$stateParams.classID,
		            	linenumber:8
		            }
		        }).then(
		            function(resp) {
		                console.log("请求成功", resp);
		                $scope.goodslist = resp.data;
		            },function(resp) {
		                console.log("失败", resp);
		            }
		    	);
		}]
	})