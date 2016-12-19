# JQuery版本4.5

在3的基础上实现了删除功能（点击删除键）

## 代码实现

在3的基础上，新加了一个事件监听，button的按下将会触发以下操作。

第一步：获取要删除的tab的id 

第二步：发送delete请求(仅部分浏览器支持)

## 服务器端接口说明

接口地址：http://115.159.184.76:3001/api/comments

参考资料：[ajax中文文档](http://jquery.cuishifeng.cn/jQuery.Ajax.html)

接口功能：

- delete删除指定tab
