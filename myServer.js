/**
 * Created by ann on 15/9/19.
 */
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var baseUrl = 'public/api/';
var app = express();
var filename = '';
var jsonObj = null;


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
app.set("jsonp callback", true);


//设置提交给/test对应的内容
app.get('/test', function (req, res) {
    var data = req.query.data;

    fs.appendFile(filename, data, function (err) {
        if (err) throw err;
        console.log("It's saved!");
    });

    res.status(200).jsonp("Hello");
});


//测试 先读取文件内容并且将得到的内容存储到jsonObj对象中
app.get('/test3', function (req, res) {
    //文件读取数据的相关过程
    filename = baseUrl + req.query.title;

    fs.exists(filename, function (exists) {
        if (exists) {
            //如果文件是存在的我们通过stat 方法拿到file相关信息
            //ToDO: 为什么使用了w+ 读取数据后，文件内容全没了改成了a+ 就好了
            fs.stat(filename, function (err, stats) {
                fs.open(filename, "a+", function (err, fd) {
                    //这里注意 如果stats.size=0 表示是一个死循环
                    if (stats.size == 0) {
                        //说明是一个空文件
                        jsonObj = {};
                        return;
                    }

                    var buffer = new Buffer(stats.size);
                    //fs.read(fd, buffer, offset, length, position, callback);
                    //fd 指的是文档标识符
                    fs.read(fd, buffer, 0, buffer.length, null, function (err, bytesRead, buffer) {
                        //buffer.toString(encoding, start, end);
                        var data_str = buffer.toString('utf8', 0, buffer.length);
                        //读取到了所有的文件内容得到的是字符串
                        //Todo: 字符串和json 对象的相互转换 JSON.parse(string) JSON.stringify(obj) 注意这里的json要全大写
                        jsonObj = JSON.parse(data_str);
                        fs.close(fd);
                    });
                });
            });
        }
    });

    res.status(200).jsonp("Hello");
});

app.get('/test4', function (req, res) {
    //将得到的json字符串先转换为对象Obj
    var appendData = JSON.parse(req.query.data);
    var oldData = jsonObj;

    //如果这个oldData 原本就是空的不存在任何Key
    if(Object.keys(oldData).length == 0){
            oldData = appendData;
    }else{
        //如果oldData 原本就不是空的，则合并两个对象
        for (key in oldData) {
            //因为key 是一个string 所以我之前老是通过appnedData.key来取数据
            //根本没有办法得到数据
            if (appendData[key]) {
                var oldArr = oldData[key];
                var newArr = appendData[key];
                var mixArr = concatArr(oldArr, newArr);
                //添加过新数据的oldData
                oldData[key] = mixArr;
            }
        }
    }

    //将json对象转换为字符串
    var writeStr = JSON.stringify(oldData);
    fs.exists(filename, function (exists) {
        if (exists) {
            //fd 代表file description
            fs.open(filename, 'w+', function (err, fd) {
                if (err) throw err;
                //注意这里： 写入的数据一定要是string 类型
                fs.write(fd, writeStr, 0, 'utf8', function (err) {
                    if (err)throw err;
                    fs.close(fd);
                });


            });
        }
    });
    res.status(200).jsonp("read and write data....");
});

app.get('/test2', function (req, res) {
    filename = baseUrl + req.query.title;
    fs.open(filename, 'w+', function () {
        console.log('ok....');
    });
    res.status(200).jsonp('ok');
});

app.listen(3000);


/**
 * @param1 arr1 数组1
 * @param2 arr2 数组2
 * 合并两个数组并且去掉重复内容的方法
 */
var concatArr = function (arr1, arr2) {
    var arr3 = arr1.concat(arr2);

    arr3.filter(function (elem, pos) {
        return arr3.indexOf(elem) == pos;
    });
    return arr3;
};
