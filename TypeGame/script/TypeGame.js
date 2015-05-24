
//随机返回一个字符
function GetChar(len) {
    var Chars = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");

    var str = "";             //返回的字符
    while (true) {
        if (str.length == len) {
            break;
        }
        var random = Math.round(Math.random() * 25);
        if (str.indexOf(Chars[random]) != -1) {
            str = "";
        }
        else {
            str = Chars[random];
        }
    }
    return str;
}

//玩家类
function users(name, count) {
    this.name = name;
    this.count = count;
    this.falses = 0;
}

//字符类
function lbls(name, str, x, y, speed, color) {
    this.name = name;
    this.str = str;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.color = color;
    this.isLive = true;             //这个字符是否存活，不出界
}
//产生字符
function createlbl() {
    //var j = Math.round(Math.random() * 25);       //获得0到25的随机数
    var char = GetChar(1);                          //获得随机产生的字符
    var d = Date.now().toString();
    var lbl = new lbls(char + d, char, Math.round(Math.random() * 970), 20, 1, "#00FF00");
    charList.push(lbl);
}

//画出字符
function drawChar() {
    for (var i = 0; i < charList.length; i++) {
        var char = charList[i];
        if (char.isLive) {
            cxt.beginPath();
            cxt.fillStyle = char.color;
            cxt.font = "20px 微软雅黑";
            cxt.fillText(char.str, char.x, char.y, 20);
            cxt.closePath();
        }
    }
}

//字符移动
function lblMove() {
    for (var i = 0; i < charList.length; i++) {
        var char = charList[i];
        if (char.isLive) {
            if (char.y >= 0 && char.y + 20 < 650) {
                char.y += char.speed;
            }
            else {
                char.isLive = false;
                charList.splice(i, 1);
            }
        }
    }
}

//声效
function m_hitting() {
    var music = document.getElementById("m_hitting");
    music.play();
}




















