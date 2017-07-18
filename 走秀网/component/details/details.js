var details=angular.module("details",[]);
details.component("detailsCom",{
	templateUrl:"component/details/details.html",
	controller:["$scope","$http","$stateParams",
	
	function($stateParams,$http,$scope){
		console.log($stateParams.classID)
		$http({
		            method:"JSONP",
		            url:"http://datainfo.duapp.com/shopdata/getGoods.php",
		            params:{
		            	classID:$stateParams.classID,
		            	classID:2}
		        }).then(
		            function(resp) {
		                console.log("请求成功",resp);
		                $scope.goodslistshop=resp.data;
                        /*$scope.imgsUrl=$scope.goodslistshop[0].imgsUrl;
                        $scope.imgsUrl=eval($scope.imgsUrl);*/
		            },function(resp) {
		                console.log("失败", resp);
		            }
		    	);
	
	}]
	
})

	