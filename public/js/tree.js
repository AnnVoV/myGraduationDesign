var Raphael = require('./comm/raphael-min.js');

var centerPt = {
    x: 150,
    y: 200
};

var centerText = '';

/**
 * @param text 中心叶子上要写的文字内容
 */
var drawCenterText = function (id, text) {
    //根据id获取容器

    centerText = text;

    if (this.r) {
        var r = this.r;
    } else {
        var r = Raphael(id, 300, 400);
    }

    r.text(centerPt.x + 2.5, centerPt.y, text)
        .attr({'font-size': '16px', 'fill': '#fff'});
};
/*
 * func: 绘制树状图的方法
 * @param disR: 各个叶子距离中心点的距离
 * @param radius: 各个叶子的半径
 * @param length: 叶子的个数
 * @param textArr: 叶子上要打上的text
 */
var drawTree = function (id, disR, radius, length, textArr, callback) {
    disR = disR || 110;
    radius = radius || 30;
    //根据id获取容器
    var r = Raphael(id, 300, 400);
    this.r = r;

    r.circle(centerPt.x, centerPt.y, radius + 13)
        .attr({fill: '#209825', stroke: '#13e11d', opacity: 1});

    var startPt = {
        x: centerPt.x,
        y: centerPt.y - disR
    };

    var perDeg = 2 * Math.PI / length;

    var getPos = function (index) {
        return {
            x: startPt.x + disR * Math.sin(perDeg * index) + Math.random() * 5,
            y: startPt.y + disR - disR * Math.cos(perDeg * index) - Math.random() * 30
        }
    };

    for (var i = 0; i < length; i++) {
        var pos = getPos(i);
        //绘制圆形
        r.circle(pos.x, pos.y, radius)
            .data('id', textArr[i])//通过使用data 来设置id
            .attr({fill: '#209825', stroke: '#13e11d', opacity: 1})
            .mouseover(function () {
                var category = this.data("id");
                var fileName = centerText + category;
                callback(fileName);
                //给circle设置动画效果
                this.animate({r: '40', fill: '#60b111', opacity: .8}, 300);
            })
            .mouseout(function () {
                this.animate({r: '30', fill: '#209825', opacity: 1}, 300);
            });
        //raphael 绘制直线的方式也很简单
        var pathStr = "M" + centerPt.x + "," + centerPt.y + ' L' + (pos.x) + "," + (pos.y);

        r.path(pathStr)
            .attr({stroke: '#209825'});

        /* 为circle的字也榜上对应的click方法 */
        r.text(pos.x + 2.5, pos.y, textArr[i])
            .attr({'font-size': '16px', 'fill': '#fff'})
            .mouseover(function () {
                var coords = {
                    x: this.attrs.x,
                    y: this.attrs.y
                };

                var arr = r.getElementsByPoint(coords.x, coords.y);
                var node = findNode(arr);
                node.animate({r: '40', fill: '#60b111', opacity: .8}, 300);

                //Todo: 加上对应的点击跳转事件
                var category = node.data("id");
                var fileName = centerText + category;
                callback(fileName);

            })
            .mouseout(function(){
                var coords = {
                    x: this.attrs.x,
                    y: this.attrs.y
                };

                var arr = r.getElementsByPoint(coords.x, coords.y);
                var node = findNode(arr);
                node.animate({r: '30', fill: '#209825', opacity: 1}, 300);
            });

    }
};


/**
 * 查找点击点附近的node元素
 */
var findNode = function (arr) {
    //又犯了这个错误，数组遍历不能用return,因为数组遍历本来就是会
    //全部遍历一遍执行的
    var result = null;
    arr.forEach(function (value, index) {
        if(value.node.tagName.toLowerCase() == 'circle'){
            result = value;
        }
    });

    return result;
};


module.exports = {
    drawTree: drawTree,
    drawCenterText: drawCenterText
};




