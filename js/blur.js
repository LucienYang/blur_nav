$(function() {
	var duplicate = $(".mainContent").clone();
	var contentBlurred = $("<div></div>");
	$(contentBlurred).append(duplicate);
	$(contentBlurred).addClass('content-blurred');
	$("#header").append(contentBlurred);
	var translation;
	$(window).bind("scroll", function(){
	    var top = $(this).scrollTop(); // 当前窗口的滚动距离
	    translation = 'translate3d(0,' + (-top + 'px') + ',0)';
	    $(duplicate).css({"-webkit-transform":translation,"-moz-transform":translation,"transform":translation});
	});

	$(".imgContainer").on("mouseover", function(e){
		var index = $(".contentBody .imgContainer").index($(this)); 
		var headerIndex = index-$("#header .imgContainer").length;
		if(!$(this).find("img").hasClass("img-blurred")){
			$(this).next(".imgContainerText").show();
			$("#header .imgContainer:eq("+headerIndex+")").next(".imgContainerText").show();
			$("#header .imgContainer:eq("+headerIndex+")").addClass("imgContainer-bgcolor");
			$("#header .imgContainer:eq("+headerIndex+")").find("img").addClass("img-blurred");
			$(this).addClass("imgContainer-bgcolor");
			$(this).find("img").addClass("img-blurred");
		}
	})
	$(".imgContainerWrapper").on("mouseleave", function(e){
		$(this).find(".imgContainerText").hide();
		$(".imgContainer").removeClass("imgContainer-bgcolor");
		$(".imgContainer").find("img").removeClass("img-blurred");
		$(".imgContainer").find("img").removeClass("img-blurred");
		$(".imgContainer").removeClass("imgContainer-bgcolor");
	})
})