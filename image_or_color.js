 var appModule = angular.module('image-or-color', []);
   appModule
    .directive('imageOrColor', [ function () {
   		//http://stackoverflow.com/a/1484514/2147627
   		function getRandomColor() {
		    var letters = '0123456789ABCDEF';
		    var color = '#';
		    for (var i = 0; i < 6; i++ ) {
		        color += letters[Math.floor(Math.random() * 16)];
		    }
		    return color;
		}

		return {
			restrict: 'EAC',
			link:function(scope,element,attr,ctrl){  
				console.log('sssa dd');
				if(!attr.img){	
	                if(attr.color){				       
		                element.css({
		                    backgroundColor:attr.color
		                });
	                }else{				       
		                element.css({
		                    backgroundColor:getRandomColor()
		                });
	                }
				}else{			       
	                element.css({
	                   backgroundImage: 'url(' + attr.img +')',
	                });
				}    

			}
		};
	}]);