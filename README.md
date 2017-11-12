还是先看效果图：
![静态效果图.png](http://upload-images.jianshu.io/upload_images/1784147-f0bd55fe743512bb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![GIF.gif](http://upload-images.jianshu.io/upload_images/1784147-35a333c8ac028ba4.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
页面布局：
* 顶部高斯模糊导航条
* 页面主体

在线demo:[https://lucienyang.github.io/blurNav/](https://lucienyang.github.io/blurNav/)

# 导航条动态高斯模糊实现原理
> 第一步，将页面主体内容clone到navbar中，然后使用css3 -webkit-filter滤镜对内容做高斯模糊
> 第二部，监听页面滚动事件，计算出scrollTop，将navbar中的内容做同步滚动，同步滚动使用的方法是transform下面的translateY样式，对Y轴做同步偏移

代码片段如下：
```javascript
    var duplicate = $(".mainContent").clone();
	var contentBlurred = $("<div></div>");
	$(contentBlurred).append(duplicate);
	$(contentBlurred).addClass('content-blurred');
	$("#header").append(contentBlurred);
	var translation;
	$(window).bind("scroll", function(){
	    var top = $(this).scrollTop(); // 当前窗口的滚动距离
	    translation = 'translateY(' + (-top + 'px') + ')';
	    $(duplicate).css({"-webkit-transform":translation,"-moz-transform":translation,"transform":translation});
	});
```
# 内容图片动态高斯模糊实现原理
> 鼠标mouseover时候，对img标签加上 -webkit-filter滤镜样式，mouseleave时候再移除掉

---------
简书链接：[http://www.jianshu.com/p/e65ae2fd8aea](http://www.jianshu.com/p/e65ae2fd8aea)