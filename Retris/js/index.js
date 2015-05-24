//初始化为null的小方块所在数组的位置
var a1 = null, a2 = null, a3 = null, a4 = null, b1 = null, b2 = null, b3 = null, b4 = null, c1 = null, c2 = null, c3 = null, c4 = null, d1 = null, d2 = null, d3 = null, d4 = null;
//初始化为空的小方块类
var aa1 = null, aa2 = null, aa3 = null, aa4 = null, bb1 = null, bb2 = null, bb3 = null, bb4 = null, cc1 = null, cc2 = null, cc3 = null, cc4 = null, dd1 = null, dd2 = null, dd3 = null, dd4 = null;

function setRowCell(obj) {
    //对应于小方块类所在数组的位置
    a1 = { x: (obj.x + 20) / 20 - 1, y: (obj.y + 20) / 20 - 1 };       //第一行，第一列
    a2 = { x: (obj.x + 40) / 20 - 1, y: (obj.y + 20) / 20 - 1 };       //第一行，第二列
    a3 = { x: (obj.x + 60) / 20 - 1, y: (obj.y + 20) / 20 - 1 };       //第一行，第三列
    a4 = { x: (obj.x + 80) / 20 - 1, y: (obj.y + 20) / 20 - 1 };       //第一行，第四列
    b1 = { x: (obj.x + 20) / 20 - 1, y: (obj.y + 40) / 20 - 1 };       //第二行，第一列
    b2 = { x: (obj.x + 40) / 20 - 1, y: (obj.y + 40) / 20 - 1 };       //第二行，第二列
    b3 = { x: (obj.x + 60) / 20 - 1, y: (obj.y + 40) / 20 - 1 };       //第二行，第三列
    b4 = { x: (obj.x + 80) / 20 - 1, y: (obj.y + 40) / 20 - 1 };       //第二行，第四列
    c1 = { x: (obj.x + 20) / 20 - 1, y: (obj.y + 60) / 20 - 1 };       //第三行，第一列
    c2 = { x: (obj.x + 40) / 20 - 1, y: (obj.y + 60) / 20 - 1 };       //第三行，第二列
    c3 = { x: (obj.x + 60) / 20 - 1, y: (obj.y + 60) / 20 - 1 };       //第三行，第三列
    c4 = { x: (obj.x + 80) / 20 - 1, y: (obj.y + 60) / 20 - 1 };       //第三行，第四列
    d1 = { x: (obj.x + 20) / 20 - 1, y: (obj.y + 80) / 20 - 1 };       //第四行，第一列
    d2 = { x: (obj.x + 40) / 20 - 1, y: (obj.y + 80) / 20 - 1 };       //第四行，第二列
    d3 = { x: (obj.x + 60) / 20 - 1, y: (obj.y + 80) / 20 - 1 };       //第四行，第三列
    d4 = { x: (obj.x + 80) / 20 - 1, y: (obj.y + 80) / 20 - 1 };       //第四行，第四列
    //小方块类
    aa1 = new fangkuai(obj.x, obj.y, obj.x + 18, obj.y + 18, obj.color);              //第一行
    aa2 = new fangkuai(obj.x + 20, obj.y, obj.x + 38, obj.y + 18, obj.color);
    aa3 = new fangkuai(obj.x + 40, obj.y, obj.x + 58, obj.y + 18, obj.color);
    aa4 = new fangkuai(obj.x + 60, obj.y, obj.x + 78, obj.y + 18, obj.color);
    bb1 = new fangkuai(obj.x, obj.y + 20, obj.x + 18, obj.y + 38, obj.color);         //第二行
    bb2 = new fangkuai(obj.x + 20, obj.y + 20, obj.x + 38, obj.y + 38, obj.color);
    bb3 = new fangkuai(obj.x + 40, obj.y + 20, obj.x + 58, obj.y + 38, obj.color);
    bb4 = new fangkuai(obj.x + 60, obj.y + 20, obj.x + 78, obj.y + 38, obj.color);
    cc1 = new fangkuai(obj.x, obj.y + 40, obj.x + 18, obj.y + 58, obj.color);         //第三行
    cc2 = new fangkuai(obj.x + 20, obj.y + 40, obj.x + 38, obj.y + 58, obj.color);
    cc3 = new fangkuai(obj.x + 40, obj.y + 40, obj.x + 58, obj.y + 58, obj.color);
    cc4 = new fangkuai(obj.x + 60, obj.y + 40, obj.x + 78, obj.y + 58, obj.color);
    dd1 = new fangkuai(obj.x, obj.y + 60, obj.x + 18, obj.y + 78, obj.color);         //第四行
    dd2 = new fangkuai(obj.x + 20, obj.y + 60, obj.x + 38, obj.y + 78, obj.color);
    dd3 = new fangkuai(obj.x + 40, obj.y + 60, obj.x + 58, obj.y + 78, obj.color);
    dd4 = new fangkuai(obj.x + 60, obj.y + 60, obj.x + 78, obj.y + 78, obj.color);
}

//小方块类
function fangkuai(x1, y1, x2, y2, color) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.color = color;
}

//俄罗斯方块类
function teris(typeId, direct, color, x, y) {
    this.typeId = typeId;
    this.direct = direct;
    this.color = color;
    this.tiemr = null;
    this.x = x;
    this.y = y;
    //左移动
    this.moveLeft = function () {
        setRowCell(this);//初始化当前类型的小方块类，主要是颜色不同
        switch (this.typeId) {
            case 0:
                if (this.x > 0) {
                    if (mapConent[a1.x - 1][a1.y] == null && mapConent[b1.x - 1][b1.y] == null) {
                        this.x -= 20;
                    }
                }
                break;
            case 1:
                switch (this.direct) {
                    case 0:
                    case 2:
                        if (this.x + 20 > 0) {
                            if (mapConent[a2.x - 1][a2.y] == null && mapConent[b2.x - 1][b2.y] == null && mapConent[c2.x - 1][c2.y] == null && mapConent[d2.x - 1][d2.y] == null) {
                                this.x -= 20;
                            }
                        }
                        break;
                    case 1:
                    case 3:
                        if (this.x > 0) {
                            if (mapConent[a1.x - 1][a1.y] == null) {
                                this.x -= 20;
                            }
                        }
                        break;
                }
                break;
            case 2:
                if (this.x > 0) {
                    switch (this.direct) {
                        case 0:
                            if (mapConent[a2.x - 1][a2.y] == null && mapConent[b1.x - 1][b1.y] == null) {
                                this.x -= 20;
                            }
                            break;
                        case 1:
                            if (mapConent[a1.x - 1][a1.y] == null && mapConent[b1.x - 1][b1.y] == null && mapConent[c1.x - 1][c1.y] == null) {
                                this.x -= 20;
                            }
                            break;
                        case 2:
                            if (mapConent[a1.x - 1][a1.y] == null && mapConent[b2.x - 1][b2.y] == null) {
                                this.x -= 20;
                            }
                            break;
                        case 3:
                            if (mapConent[a2.x - 1][a2.y] == null && mapConent[b1.x - 1][b1.y] == null && mapConent[c2.x - 1][c2.y] == null) {
                                this.x -= 20;
                            }
                            break;
                    }
                }
                break;
            case 3:
                if (this.x > 0) {
                    switch (this.direct) {
                        case 0:
                            if (mapConent[a1.x - 1][a1.y] == null && mapConent[b1.x - 1][b1.y] == null) {
                                this.x -= 20;
                            }
                            break;
                        case 1:
                            if (mapConent[a1.x - 1][a1.y] == null && mapConent[b1.x - 1][b1.y] == null && mapConent[c1.x - 1][c1.y] == null) {
                                this.x -= 20;
                            }
                            break;
                        case 2:
                            if (mapConent[a1.x - 1][a1.y] == null && mapConent[b3.x - 1][b3.y] == null) {
                                this.x -= 20;
                            }
                            break;
                        case 3:
                            if (mapConent[a2.x - 1][a2.y] == null && mapConent[b2.x - 1][b2.y] == null && mapConent[c1.x - 1][c1.y] == null) {
                                this.x -= 20;
                            }
                            break;
                    }
                }
                break;
            case 4:
                if (this.x > 0) {
                    switch (this.direct) {
                        case 0:
                            if (mapConent[a3.x - 1][a3.y] == null && mapConent[b1.x - 1][b1.y] == null) {
                                this.x -= 20;
                            }
                            break;
                        case 1:
                            if (mapConent[a1.x - 1][a1.y] == null && mapConent[b1.x - 1][b1.y] == null && mapConent[c1.x - 1][c1.y] == null) {
                                this.x -= 20;
                            }
                            break;
                        case 2:
                            if (mapConent[a1.x - 1][a1.y] == null && mapConent[b1.x - 1][b1.y] == null) {
                                this.x -= 20;
                            }
                            break;
                        case 3:
                            if (mapConent[a1.x - 1][a1.y] == null && mapConent[b2.x - 1][b2.y] == null && mapConent[c2.x - 1][c2.y] == null) {
                                this.x -= 20;
                            }
                            break;
                    }
                }
                break;
            case 5:
                if (this.x > 0) {
                    switch (this.direct) {
                        case 0:
                        case 2:
                            if (mapConent[a2.x - 1][a2.y] == null && mapConent[b1.x - 1][b1.y] == null && mapConent[c1.x - 1][c1.y] == null) {
                                this.x -= 20;
                            }
                            break;
                        case 1:
                        case 3:
                            if (mapConent[a1.x - 1][a1.y] == null && mapConent[b2.x - 1][b2.y] == null) {
                                this.x -= 20;
                            }
                            break;
                    }
                }
                break;
            case 6:
                if (this.x > 0) {
                    switch (this.direct) {
                        case 0:
                        case 2:
                            if (mapConent[a1.x - 1][a1.y] == null && mapConent[b1.x - 1][b1.y] == null && mapConent[c2.x - 1][c2.y] == null) {
                                this.x -= 20;
                            }
                            break;
                        case 1:
                        case 3:
                            if (mapConent[a2.x - 1][a2.y] == null && mapConent[b1.x - 1][b1.y] == null) {
                                this.x -= 20;
                            }
                            break;
                    }
                }
                break;
            default:
                break;
        }
    }
    //变换方向
    this.changeDirect = function () {
        setRowCell(this);

        switch (this.typeId) {
            case 0:

                break;
            case 1:
                switch (this.direct) {
                    case 0:
                    case 2:
                        if (this.x >= 0 && this.x < 140) {
                            if (mapConent[a2.x - 1][a2.y] == null && mapConent[a2.x + 1][a2.y] == null && mapConent[a2.x + 2][a2.y] == null) {
                                if (this.direct < 3)
                                    this.direct++;
                                else
                                    this.direct = 0;
                            }
                        }
                        break;
                    case 1:
                    case 3:
                        if (this.x >= 0 && this.x < 140 && this.y + 60 < 440) {
                            if (mapConent[b2.x][b2.y] == null && mapConent[c2.x][c2.y] == null && mapConent[d2.x][d2.y] == null) {
                                if (this.direct < 3)
                                    this.direct++;
                                else
                                    this.direct = 0;
                            }
                        }
                        break;
                }
                break;
            case 2:
                switch (this.direct) {
                    case 0:
                        if (this.y + 40 < 440) {
                            if (mapConent[a1.x][a1.y] == null && mapConent[c1.x][c1.y] == null) {
                                if (this.direct < 3)
                                    this.direct++;
                                else
                                    this.direct = 0;
                            }
                        }
                        break;
                    case 1:
                        if (this.x + 40 < 200) {
                            if (mapConent[a2.x][a2.y] == null && mapConent[a3.x][a3.y] == null) {
                                if (this.direct < 3)
                                    this.direct++;
                                else
                                    this.direct = 0;
                            }
                        }
                        break;
                    case 2:
                        if (this.y + 40 < 440) {
                            if (mapConent[b1.x][b1.y] == null && mapConent[c2.x][c2.y] == null) {
                                if (this.direct < 3)
                                    this.direct++;
                                else
                                    this.direct = 0;
                            }
                        }
                        break;
                    case 3:
                        if (this.x + 40 < 200) {
                            if (mapConent[b3.x][b3.y] == null) {
                                if (this.direct < 3)
                                    this.direct++;
                                else
                                    this.direct = 0;
                            }
                        }
                        break;
                }
                break;
            case 3:
                switch (this.direct) {
                    case 0:
                        if (this.y + 40 < 440) {
                            if (mapConent[a2.x][a2.y] == null && mapConent[c1.x][c1.y] == null) {
                                if (this.direct < 3)
                                    this.direct++;
                                else
                                    this.direct = 0;
                            }
                        }
                        break;
                    case 1:
                        if (this.x + 40 < 200) {
                            if (mapConent[a3.x][a3.y] == null && mapConent[b3.x][b3.y] == null) {
                                if (this.direct < 3)
                                    this.direct++;
                                else
                                    this.direct = 0;
                            }
                        }
                        break;
                    case 2:
                        if (this.y + 40 < 440) {
                            if (mapConent[b2.x][b2.y] == null && mapConent[c1.x][c1.y] == null && mapConent[c2.x][c2.y] == null) {
                                if (this.direct < 3)
                                    this.direct++;
                                else
                                    this.direct = 0;
                            }
                        }
                        break;
                    case 3:
                        if (this.x + 40 < 200) {
                            if (mapConent[a1.x][a1.y] == null && mapConent[b1.x][b1.y] == null && mapConent[b3.x][b3.y] == null) {
                                if (this.direct < 3)
                                    this.direct++;
                                else
                                    this.direct = 0;
                            }
                        }
                        break;
                }
                break;
            case 4:
                switch (this.direct) {
                    case 0:
                        if (this.y + 40 < 440) {
                            if (mapConent[a1.x][a1.y] == null && mapConent[c1.x][c1.y] == null && mapConent[c2.x][c2.y] == null) {
                                if (this.direct < 3)
                                    this.direct++;
                                else
                                    this.direct = 0;
                            }
                        }
                        break;
                    case 1:
                        if (this.x + 40 < 200) {
                            if (mapConent[a2.x][a2.y] == null && mapConent[a3.x][a3.y] == null) {
                                if (this.direct < 3)
                                    this.direct++;
                                else
                                    this.direct = 0;
                            }
                        }
                        break;
                    case 2:
                        if (this.y + 40 < 440) {
                            if (mapConent[b2.x][b2.y] == null && mapConent[c2.x][c2.y] == null) {
                                if (this.direct < 3)
                                    this.direct++;
                                else
                                    this.direct = 0;
                            }
                        }
                        break;
                    case 3:
                        if (this.x + 40 < 200) {
                            if (mapConent[a3.x][a3.y] == null && mapConent[b1.x][b1.y] == null && mapConent[b3.x][b3.y] == null) {
                                if (this.direct < 3)
                                    this.direct++;
                                else
                                    this.direct = 0;
                            }
                        }
                        break;
                }
                break;
            case 5:
                switch (this.direct) {
                    case 0:
                    case 2:
                        if (this.x + 40 < 200) {
                            if (mapConent[a1.x][a1.y] == null && mapConent[b3.x][b3.y] == null) {
                                if (this.direct < 3)
                                    this.direct++;
                                else
                                    this.direct = 0;
                            }
                        }
                        break;
                    case 1:
                    case 3:
                        if (this.y + 40 < 440) {
                            if (mapConent[b1.x][b1.y] == null && mapConent[c1.x][c1.y] == null) {
                                if (this.direct < 3)
                                    this.direct++;
                                else
                                    this.direct = 0;
                            }
                        }
                        break;
                }
                break;
            case 6:
                switch (this.direct) {
                    case 0:
                    case 2:
                        if (this.x + 40 < 200) {
                            if (mapConent[a2.x][a2.y] == null && mapConent[a3.x][a3.y] == null) {
                                if (this.direct < 3)
                                    this.direct++;
                                else
                                    this.direct = 0;
                            }
                        }
                        break;
                    case 1:
                    case 3:
                        if (this.y + 40 < 440) {
                            if (mapConent[a1.x][a1.y] == null && mapConent[c2.x][c2.y] == null) {
                                if (this.direct < 3)
                                    this.direct++;
                                else
                                    this.direct = 0;
                            }
                        }
                        break;
                }
                break;
        }

    }
    //右移动
    this.moveRight = function () {
        setRowCell(this);

        switch (this.typeId) {
            case 0:
                //alert(this);
                if (this.x + 40 < 200) {
                    if (mapConent[a2.x + 1][a2.y] == null && mapConent[b2.x + 1][b2.y] == null) {
                        this.x += 20;
                    }
                }
                break;
            case 1:
                switch (this.direct) {
                    case 0:
                    case 2:
                        if (this.x + 40 < 200) {
                            if (mapConent[a2.x + 1][a2.y] == null && mapConent[b2.x + 1][b2.y] == null && mapConent[c2.x + 1][c2.y] == null && mapConent[d2.x + 1][d2.y] == null) {
                                this.x += 20;;
                            }
                        }
                        break;
                    case 1:
                    case 3:
                        if (this.x + 80 < 200) {
                            if (mapConent[a4.x + 1][a4.y] == null) {
                                this.x += 20;
                            }
                        }
                        break;
                }
                break;
            case 2:
                switch (this.direct) {
                    case 0:
                        if (this.x + 60 < 200) {
                            if (mapConent[a2.x + 1][a2.y] == null && mapConent[b3.x + 1][b3.y] == null) {
                                this.x += 20;
                            }
                        }
                        break;
                    case 1:
                        if (this.x + 40 < 200) {
                            if (mapConent[a1.x + 1][a1.y] == null && mapConent[b2.x + 1][b2.y] == null && mapConent[c1.x + 1][c1.y] == null) {
                                this.x += 20;
                            }
                        }
                        break;
                    case 2:
                        if (this.x + 60 < 200) {
                            if (mapConent[a3.x + 1][a3.y] == null && mapConent[b2.x + 1][b2.y] == null) {
                                this.x += 20;
                            }
                        }
                        break;
                    case 3:
                        if (this.x + 40 < 200) {
                            if (mapConent[a2.x + 1][a2.y] == null && mapConent[b2.x + 1][b2.y] == null && mapConent[c2.x + 1][c2.y] == null) {
                                this.x += 20;
                            }
                        }
                        break;
                }
                break;
            case 3:
                switch (this.direct) {
                    case 0:
                        if (this.x + 60 < 200) {
                            if (mapConent[a1.x + 1][a1.y] == null && mapConent[b3.x + 1][b3.y] == null) {
                                this.x += 20;
                            }
                        }
                        break;
                    case 1:
                        if (this.x + 40 < 200) {
                            if (mapConent[a2.x + 1][a2.y] == null && mapConent[b1.x + 1][b1.y] == null && mapConent[c1.x + 1][c1.y] == null) {
                                this.x += 20;
                            }
                        }
                        break;
                    case 2:
                        if (this.x + 60 < 200) {
                            if (mapConent[a3.x + 1][a3.y] == null && mapConent[b3.x + 1][b3.y] == null) {
                                this.x += 20;
                            }
                        }
                        break;
                    case 3:
                        if (this.x + 40 < 200) {
                            if (mapConent[a2.x + 1][a2.y] == null && mapConent[b2.x + 1][b2.y] == null && mapConent[c2.x + 1][c2.y] == null) {
                                this.x += 20;
                            }
                        }
                        break;
                }
                break;
            case 4:
                switch (this.direct) {
                    case 0:
                        if (this.x + 60 < 200) {
                            if (mapConent[a3.x + 1][a3.y] == null && mapConent[b3.x + 1][b3.y] == null) {
                                this.x += 20;
                            }
                        }
                        break;
                    case 1:
                        if (this.x + 40 < 200) {
                            if (mapConent[a1.x + 1][a1.y] == null && mapConent[b1.x + 1][b1.y] == null && mapConent[c2.x + 1][c2.y] == null) {
                                this.x += 20;
                            }
                        }
                        break;
                    case 2:
                        if (this.x + 60 < 200) {
                            if (mapConent[a3.x + 1][a3.y] == null && mapConent[b1.x + 1][b1.y] == null) {
                                this.x += 20;
                            }
                        }
                        break;
                    case 3:
                        if (this.x + 40 < 200) {
                            if (mapConent[a2.x + 1][a2.y] == null && mapConent[b2.x + 1][b2.y] == null && mapConent[c2.x + 1][c2.y] == null) {
                                this.x += 20;
                            }
                        }
                        break;
                }
                break;
            case 5:
                switch (this.direct) {
                    case 0:
                    case 2:
                        if (this.x + 40 < 200) {
                            if (mapConent[a2.x + 1][a2.y] == null && mapConent[b2.x + 1][b2.y] == null && mapConent[c1.x + 1][c1.y] == null) {
                                this.x += 20;
                            }
                        }
                        break;
                    case 1:
                    case 3:
                        if (this.x + 60 < 200) {
                            if (mapConent[a2.x + 1][a2.y] == null && mapConent[b3.x + 1][b3.y] == null) {
                                this.x += 20;
                            }
                        }
                        break;
                }
                break;
            case 6:
                switch (this.direct) {
                    case 0:
                    case 2:
                        if (this.x + 40 < 200) {
                            if (mapConent[a1.x + 1][a1.y] == null && mapConent[b2.x + 1][b2.y] == null && mapConent[c2.x + 1][c2.y] == null) {
                                this.x += 20;
                            }
                        }
                        break;
                    case 1:
                    case 3:
                        if (this.x + 60 < 200) {
                            if (mapConent[a3.x + 1][a3.y] == null && mapConent[c2.x + 1][c2.y] == null) {
                                this.x += 20;
                            }
                        }
                        break;
                }
                break;
        }
    }
    //下移动
    this.moveDown = function () {
        setRowCell(this);
        switch (this.typeId) {
            case 0:
                if (this.y + 40 < 440) {
                    if (mapConent[b1.x][b1.y + 1] == null && mapConent[b2.x][b2.y + 1] == null) {
                        this.y += 20;
                    }
                    else {
                        mapConent[a1.x][a1.y] = aa1;
                        mapConent[a2.x][a2.y] = aa2;
                        mapConent[b1.x][b1.y] = bb1;
                        mapConent[b2.x][b2.y] = bb2;
                        window.clearInterval(this.tiemr);           //清除计时器
                        nextRetris = createTeris(nextRetris);
                    }
                }
                else {
                    mapConent[a1.x][a1.y] = aa1;
                    mapConent[a2.x][a2.y] = aa2;
                    mapConent[b1.x][b1.y] = bb1;
                    mapConent[b2.x][b2.y] = bb2;
                    window.clearInterval(this.tiemr);           //清除计时器
                    nextRetris = createTeris(nextRetris);
                }
                break;
            case 1:
                switch (this.direct) {
                    case 0:
                    case 2:
                        if (this.y + 80 < 440) {
                            if (mapConent[d2.x][d2.y + 1] == null) {
                                this.y += 20;
                            }
                            else {
                                mapConent[a2.x][a2.y] = aa2;
                                mapConent[b2.x][b2.y] = bb2;
                                mapConent[c2.x][c2.y] = cc2;
                                mapConent[d2.x][d2.y] = dd2;
                                window.clearInterval(this.tiemr);           //清除计时器
                                nextRetris = createTeris(nextRetris);
                            }
                        }
                        else {
                            mapConent[a2.x][a2.y] = aa2;
                            mapConent[b2.x][b2.y] = bb2;
                            mapConent[c2.x][c2.y] = cc2;
                            mapConent[d2.x][d2.y] = dd2;
                            window.clearInterval(this.tiemr);           //清除计时器
                            nextRetris = createTeris(nextRetris);
                        }
                        break;
                    case 1:
                    case 3:
                        if (this.y + 20 < 440) {
                            if (mapConent[a1.x][a1.y + 1] == null && mapConent[a2.x][a2.y + 1] == null && mapConent[a3.x][a3.y + 1] == null && mapConent[a4.x][a4.y + 1] == null) {
                                this.y += 20;
                            }
                            else {
                                mapConent[a1.x][a1.y] = aa1;
                                mapConent[a2.x][a2.y] = aa2;
                                mapConent[a3.x][a3.y] = aa3;
                                mapConent[a4.x][a4.y] = aa4;
                                window.clearInterval(this.tiemr);           //清除计时器
                                nextRetris = createTeris(nextRetris);
                            }
                        }
                        else {
                            mapConent[a1.x][a1.y] = aa1;
                            mapConent[a2.x][a2.y] = aa2;
                            mapConent[a3.x][a3.y] = aa3;
                            mapConent[a4.x][a4.y] = aa4;
                            window.clearInterval(this.tiemr);           //清除计时器
                            nextRetris = createTeris(nextRetris);
                        }
                        break;
                }
                break;
            case 2:
                switch (this.direct) {
                    case 0:
                        if (this.y + 40 < 440) {
                            if (mapConent[b1.x][b1.y + 1] == null && mapConent[b2.x][b2.y + 1] == null && mapConent[b3.x][b3.y + 1] == null) {
                                this.y += 20;
                            }
                            else {
                                mapConent[a2.x][a2.y] = aa2;
                                mapConent[b1.x][b1.y] = bb1;
                                mapConent[b2.x][b2.y] = bb2;
                                mapConent[b3.x][b3.y] = bb3;
                                window.clearInterval(this.tiemr);           //清除计时器
                                nextRetris = createTeris(nextRetris);
                            }
                        }
                        else {
                            mapConent[a2.x][a2.y] = aa2;
                            mapConent[b1.x][b1.y] = bb1;
                            mapConent[b2.x][b2.y] = bb2;
                            mapConent[b3.x][b3.y] = bb3;
                            window.clearInterval(this.tiemr);           //清除计时器
                            nextRetris = createTeris(nextRetris);
                        }
                        break;
                    case 1:
                        if (this.y + 60 < 440) {
                            if (mapConent[c1.x][c1.y + 1] == null && mapConent[b2.x][b2.y + 1] == null) {
                                retris.y += 20;
                            }
                            else {
                                mapConent[a1.x][a1.y] = aa1;
                                mapConent[b1.x][b1.y] = bb1;
                                mapConent[b2.x][b2.y] = bb2;
                                mapConent[c1.x][c1.y] = cc1;
                                window.clearInterval(this.tiemr);           //清除计时器
                                nextRetris = createTeris(nextRetris);
                            }
                        }
                        else {
                            mapConent[a1.x][a1.y] = aa1;
                            mapConent[b1.x][b1.y] = bb1;
                            mapConent[b2.x][b2.y] = bb2;
                            mapConent[c1.x][c1.y] = cc1;
                            window.clearInterval(this.tiemr);           //清除计时器
                            nextRetris = createTeris(nextRetris);
                        }
                        break;
                    case 2:
                        if (this.y + 40 < 440) {
                            if (mapConent[a1.x][a1.y + 1] == null && mapConent[b2.x][b2.y + 1] == null && mapConent[a3.x][a3.y + 1] == null) {
                                this.y += 20;
                            }
                            else {
                                mapConent[a1.x][a1.y] = aa1;
                                mapConent[a2.x][a2.y] = aa2;
                                mapConent[a3.x][a3.y] = aa3;
                                mapConent[b2.x][b2.y] = bb2;
                                window.clearInterval(this.tiemr);           //清除计时器
                                nextRetris = createTeris(nextRetris);
                            }
                        }
                        else {
                            mapConent[a1.x][a1.y] = aa1;
                            mapConent[a2.x][a2.y] = aa2;
                            mapConent[a3.x][a3.y] = aa3;
                            mapConent[b2.x][b2.y] = bb2;
                            window.clearInterval(this.tiemr);           //清除计时器
                            nextRetris = createTeris(nextRetris);
                        }

                        break;
                    case 3:
                        if (this.y + 60 < 440) {
                            if (mapConent[b1.x][b1.y + 1] == null && mapConent[c2.x][c2.y + 1] == null) {
                                this.y += 20;
                            }
                            else {
                                mapConent[a2.x][a2.y] = aa2;
                                mapConent[b1.x][b1.y] = bb1;
                                mapConent[b2.x][b2.y] = bb2;
                                mapConent[c2.x][c2.y] = cc2;
                                window.clearInterval(this.tiemr);           //清除计时器
                                nextRetris = createTeris(nextRetris);
                            }
                        }
                        else {
                            mapConent[a2.x][a2.y] = aa2;
                            mapConent[b1.x][b1.y] = bb1;
                            mapConent[b2.x][b2.y] = bb2;
                            mapConent[c2.x][c2.y] = cc2;
                            window.clearInterval(this.tiemr);           //清除计时器
                            nextRetris = createTeris(nextRetris);
                        }
                        break;
                }
                break;
            case 3:
                switch (this.direct) {
                    case 0:
                        if (this.y + 40 < 440) {
                            if (mapConent[b1.x][b1.y + 1] == null && mapConent[b2.x][b2.y + 1] == null && mapConent[b3.x][b3.y + 1] == null) {
                                this.y += 20;
                            }
                            else {
                                mapConent[a1.x][a1.y] = aa1;
                                mapConent[b1.x][b1.y] = bb1;
                                mapConent[b2.x][b2.y] = bb2;
                                mapConent[b3.x][b3.y] = bb3;
                                window.clearInterval(this.tiemr);           //清除计时器
                                nextRetris = createTeris(nextRetris);
                            }
                        }
                        else {
                            mapConent[a1.x][a1.y] = aa1;
                            mapConent[b1.x][b1.y] = bb1;
                            mapConent[b2.x][b2.y] = bb2;
                            mapConent[b3.x][b3.y] = bb3;
                            window.clearInterval(this.tiemr);           //清除计时器
                            nextRetris = createTeris(nextRetris);
                        }
                        break;
                    case 1:
                        if (this.y + 60 < 440) {
                            if (mapConent[c1.x][c1.y + 1] == null && mapConent[a2.x][a2.y + 1] == null) {
                                this.y += 20;
                            }
                            else {
                                mapConent[a1.x][a1.y] = aa1;
                                mapConent[a2.x][a2.y] = aa2;
                                mapConent[b1.x][b1.y] = bb1;
                                mapConent[c1.x][c1.y] = cc1;
                                window.clearInterval(this.tiemr);           //清除计时器
                                nextRetris = createTeris(nextRetris);
                            }
                        }
                        else {
                            mapConent[a1.x][a1.y] = aa1;
                            mapConent[a2.x][a2.y] = aa2;
                            mapConent[b1.x][b1.y] = bb1;
                            mapConent[c1.x][c1.y] = cc1;
                            window.clearInterval(this.tiemr);           //清除计时器
                            nextRetris = createTeris(nextRetris);
                        }
                        break;
                    case 2:
                        if (this.y + 40 < 440) {
                            if (mapConent[a1.x][a1.y + 1] == null && mapConent[a2.x][a2.y + 1] == null && mapConent[b3.x][b3.y + 1] == null) {
                                this.y += 20;
                            }
                            else {
                                mapConent[a1.x][a1.y] = aa1;
                                mapConent[a2.x][a2.y] = aa2;
                                mapConent[a3.x][a3.y] = aa3;
                                mapConent[b3.x][b3.y] = bb3;
                                window.clearInterval(this.tiemr);           //清除计时器
                                nextRetris = createTeris(nextRetris);
                            }
                        }
                        else {
                            mapConent[a1.x][a1.y] = aa1;
                            mapConent[a2.x][a2.y] = aa2;
                            mapConent[a3.x][a3.y] = aa3;
                            mapConent[b3.x][b3.y] = bb3;
                            window.clearInterval(this.tiemr);           //清除计时器
                            nextRetris = createTeris(nextRetris);
                        }

                        break;
                    case 3:
                        if (this.y + 60 < 440) {
                            if (mapConent[c1.x][c1.y + 1] == null && mapConent[c2.x][c2.y + 1] == null) {
                                this.y += 20;
                            }
                            else {
                                mapConent[a2.x][a2.y] = aa2;
                                mapConent[b2.x][b2.y] = bb2;
                                mapConent[c1.x][c1.y] = cc1;
                                mapConent[c2.x][c2.y] = cc2;
                                window.clearInterval(this.tiemr);           //清除计时器
                                nextRetris = createTeris(nextRetris);
                            }
                        }
                        else {
                            mapConent[a2.x][a2.y] = aa2;
                            mapConent[b2.x][b2.y] = bb2;
                            mapConent[c1.x][c1.y] = cc1;
                            mapConent[c2.x][c2.y] = cc2;
                            window.clearInterval(this.tiemr);           //清除计时器
                            nextRetris = createTeris(nextRetris);
                        }
                        break;
                }
                break;
            case 4:
                switch (this.direct) {
                    case 0:
                        if (this.y + 40 < 440) {
                            if (mapConent[b1.x][b1.y + 1] == null && mapConent[b2.x][b2.y + 1] == null && mapConent[b3.x][b3.y + 1] == null) {
                                this.y += 20;
                            }
                            else {
                                mapConent[a3.x][a3.y] = aa3;
                                mapConent[b1.x][b1.y] = bb1;
                                mapConent[b2.x][b2.y] = bb2;
                                mapConent[b3.x][b3.y] = bb3;
                                window.clearInterval(this.tiemr);           //清除计时器
                                nextRetris = createTeris(nextRetris);
                            }
                        }
                        else {
                            mapConent[a3.x][a3.y] = aa3;
                            mapConent[b1.x][b1.y] = bb1;
                            mapConent[b2.x][b2.y] = bb2;
                            mapConent[b3.x][b3.y] = bb3;
                            window.clearInterval(this.tiemr);           //清除计时器
                            nextRetris = createTeris(nextRetris);
                        }
                        break;
                    case 1:
                        if (this.y + 60 < 440) {
                            if (mapConent[c1.x][c1.y + 1] == null && mapConent[c2.x][c2.y + 1] == null) {
                                this.y += 20;
                            }
                            else {
                                mapConent[a1.x][a1.y] = aa1;
                                mapConent[b1.x][b1.y] = bb1;
                                mapConent[c1.x][c1.y] = cc1;
                                mapConent[c2.x][c2.y] = cc2;
                                window.clearInterval(this.tiemr);           //清除计时器
                                nextRetris = createTeris(nextRetris);
                            }
                        }
                        else {
                            mapConent[a1.x][a1.y] = aa1;
                            mapConent[b1.x][b1.y] = bb1;
                            mapConent[c1.x][c1.y] = cc1;
                            mapConent[c2.x][c2.y] = cc2;
                            window.clearInterval(this.tiemr);           //清除计时器
                            nextRetris = createTeris(nextRetris);
                        }
                        break;
                    case 2:
                        if (this.y + 40 < 440) {
                            if (mapConent[b1.x][b1.y + 1] == null && mapConent[a2.x][a2.y + 1] == null && mapConent[a3.x][a3.y + 1] == null) {
                                this.y += 20;
                            }
                            else {
                                mapConent[a1.x][a1.y] = aa1;
                                mapConent[a2.x][a2.y] = aa2;
                                mapConent[a3.x][a3.y] = aa3;
                                mapConent[b1.x][b1.y] = bb1;
                                window.clearInterval(this.tiemr);           //清除计时器
                                nextRetris = createTeris(nextRetris);
                            }
                        }
                        else {
                            mapConent[a1.x][a1.y] = aa1;
                            mapConent[a2.x][a2.y] = aa2;
                            mapConent[a3.x][a3.y] = aa3;
                            mapConent[b1.x][b1.y] = bb1;
                            window.clearInterval(this.tiemr);           //清除计时器
                            nextRetris = createTeris(nextRetris);
                        }

                        break;
                    case 3:
                        if (this.y + 60 < 440) {
                            if (mapConent[a1.x][a1.y + 1] == null && mapConent[c2.x][c2.y + 1] == null) {
                                this.y += 20;
                            }
                            else {
                                mapConent[a1.x][a1.y] = aa1;
                                mapConent[a2.x][a2.y] = aa2;
                                mapConent[b2.x][b2.y] = bb2;
                                mapConent[c2.x][c2.y] = cc2;
                                window.clearInterval(this.tiemr);           //清除计时器
                                nextRetris = createTeris(nextRetris);
                            }
                        }
                        else {
                            mapConent[a1.x][a1.y] = aa1;
                            mapConent[a2.x][a2.y] = aa2;
                            mapConent[b2.x][b2.y] = bb2;
                            mapConent[c2.x][c2.y] = cc2;
                            window.clearInterval(this.tiemr);           //清除计时器
                            nextRetris = createTeris(nextRetris);
                        }
                        break;
                }
                break;
            case 5:
                switch (this.direct) {
                    case 0:
                    case 2:
                        if (this.y + 60 < 440) {
                            if (mapConent[c1.x][c1.y + 1] == null && mapConent[b2.x][b2.y + 1] == null) {
                                this.y += 20;
                            }
                            else {
                                mapConent[a2.x][a2.y] = aa2;
                                mapConent[b1.x][b1.y] = bb1;
                                mapConent[b2.x][b2.y] = bb2;
                                mapConent[c1.x][c1.y] = cc1;
                                window.clearInterval(this.tiemr);           //清除计时器
                                nextRetris = createTeris(nextRetris);
                            }
                        }
                        else {
                            mapConent[a2.x][a2.y] = aa2;
                            mapConent[b1.x][b1.y] = bb1;
                            mapConent[b2.x][b2.y] = bb2;
                            mapConent[c1.x][c1.y] = cc1;
                            window.clearInterval(this.tiemr);           //清除计时器
                            nextRetris = createTeris(nextRetris);
                        }
                        break;
                    case 1:
                    case 3:
                        if (this.y + 40 < 440) {
                            if (mapConent[a1.x][a1.y + 1] == null && mapConent[b2.x][b2.y + 1] == null && mapConent[b3.x][b3.y + 1] == null) {
                                this.y += 20;
                            }
                            else {
                                mapConent[a1.x][a1.y] = aa1;
                                mapConent[a2.x][a2.y] = aa2;
                                mapConent[b2.x][b2.y] = bb2;
                                mapConent[b3.x][b3.y] = bb3;
                                window.clearInterval(this.tiemr);           //清除计时器
                                nextRetris = createTeris(nextRetris);
                            }
                        }
                        else {
                            mapConent[a1.x][a1.y] = aa1;
                            mapConent[a2.x][a2.y] = aa2;
                            mapConent[b2.x][b2.y] = bb2;
                            mapConent[b3.x][b3.y] = bb3;
                            window.clearInterval(this.tiemr);           //清除计时器
                            nextRetris = createTeris(nextRetris);
                        }
                        break;
                }
                break;
            case 6:
                switch (this.direct) {
                    case 0:
                    case 2:
                        if (this.y + 60 < 440) {
                            if (mapConent[b1.x][b1.y + 1] == null && mapConent[c2.x][c2.y + 1] == null) {
                                this.y += 20;
                            }
                            else {
                                addMapConent(a1.x, a1.y, aa1);
                                addMapConent(b1.x, b1.y, bb1);
                                addMapConent(b2.x, b2.y, bb2);
                                addMapConent(c2.x, c2.y, cc2);

                                window.clearInterval(this.tiemr);           //清除计时器
                                nextRetris = createTeris(nextRetris);
                            }
                        }
                        else {
                            addMapConent(a1.x, a1.y, aa1);
                            addMapConent(b1.x, b1.y, bb1);
                            addMapConent(b2.x, b2.y, bb2);
                            addMapConent(c2.x, c2.y, cc2);
                            window.clearInterval(this.tiemr);           //清除计时器
                            nextRetris = createTeris(nextRetris);
                        }
                        break;
                    case 1:
                    case 3:
                        if (this.y + 40 < 440) {
                            if (mapConent[b1.x][b1.y + 1] == null && mapConent[b2.x][b2.y + 1] == null && mapConent[a3.x][a3.y + 1] == null) {
                                this.y += 20;
                            }
                            else {
                                addMapConent(a2.x, a2.y, aa2);
                                addMapConent(a3.x, a3.y, aa3);
                                addMapConent(b1.x, b1.y, bb1);
                                addMapConent(b2.x, b2.y, bb2);
                                window.clearInterval(this.tiemr);           //清除计时器
                                nextRetris = createTeris(nextRetris);
                            }
                        }
                        else {
                            addMapConent(a2.x, a2.y, aa2);
                            addMapConent(a3.x, a3.y, aa3);
                            addMapConent(b1.x, b1.y, bb1);
                            addMapConent(b2.x, b2.y, bb2);
                            window.clearInterval(this.tiemr);           //清除计时器
                            nextRetris = createTeris(nextRetris);
                        }
                        break;
                }
                break;
        }
    }
}

//把当前移动的方块，其里面的小方块加入到二维数组,优化
function addMapConent(x, y, fj) {
    mapConent[x][y] = fj;
}

//产生某一个类型的方块
function createTeris(typeId) {
    var a = null;
    if (typeId == 1)//代表正方形
        a = 0;
    else
        a = 1;
    if (mapConent[3][a] != null && mapConent[4][a] != null && mapConent[5][a] != null) {
        cxt.clearRect(0, 0, 200, 440);          //清屏
        cxt.fillStyle = "white";
        cxt.font = "30px 华文彩云";
        cxt.fillText("Game Over", 20, 220);
        window.clearInterval(retris.tiemr);
        window.clearInterval(gameTimer);
        retris = null;
        return null;
    }
    switch (typeId) {
        case 0:
            //           DD
            //           DD
            retris = new teris(typeId, 0, "#F0F000", 80, 0);
            var timerMoveDown = window.setInterval("retris.moveDown()", 800);
            retris.tiemr = timerMoveDown;
            break;
        case 1:
            //          DDDD
            retris = new teris(typeId, 1, "#00F0F0", 60, 0);
            var timerMoveDown = window.setInterval("retris.moveDown()", 800);
            retris.tiemr = timerMoveDown;
            break;
        case 2:
            //            D
            //           DDD
            retris = new teris(typeId, 0, "#A000F0", 60, 0);
            var timerMoveDown = window.setInterval("retris.moveDown()", 800);
            retris.tiemr = timerMoveDown;
            break;
        case 3:
            //           D
            //           DDD
            retris = new teris(typeId, 0, "#F0A000", 60, 0);
            var timerMoveDown = window.setInterval("retris.moveDown()", 800);
            retris.tiemr = timerMoveDown;
            break;
        case 4:
            //             D
            //           DDD
            retris = new teris(typeId, 0, "#0000F0", 60, 0);
            var timerMoveDown = window.setInterval("retris.moveDown()", 800);
            retris.tiemr = timerMoveDown;
            break;
        case 5:
            //           DD 
            //            DD
            retris = new teris(typeId, 1, "#F00000", 60, 0);
            var timerMoveDown = window.setInterval("retris.moveDown()", 800);
            retris.tiemr = timerMoveDown;
            break;
        case 6:
            //            DD
            //           DD
            retris = new teris(typeId, 1, "#00F000", 60, 0);
            var timerMoveDown = window.setInterval("retris.moveDown()", 800);
            retris.tiemr = timerMoveDown;
            break;
    }
    return Math.round(Math.random() * 6);         //返回下一个方块类型
}

//每一种方块，以及该种方向，该如何构成该方块
function drawRetris(retris) {
    switch (retris.typeId) {
        case 0:
            drawR(retris.x, retris.y, retris.x + 18, retris.y + 18, retris.color);
            drawR(retris.x + 20, retris.y, retris.x + 38, retris.y + 18, retris.color);
            drawR(retris.x, retris.y + 20, retris.x + 18, retris.y + 38, retris.color);
            drawR(retris.x + 20, retris.y + 20, retris.x + 38, retris.y + 38, retris.color);
            break;
        case 1:
            switch (retris.direct) {
                case 0:
                case 2:
                    drawR(retris.x + 20, retris.y, retris.x + 38, retris.y + 18, retris.color);
                    drawR(retris.x + 20, retris.y + 20, retris.x + 38, retris.y + 38, retris.color);
                    drawR(retris.x + 20, retris.y + 40, retris.x + 38, retris.y + 58, retris.color);
                    drawR(retris.x + 20, retris.y + 60, retris.x + 38, retris.y + 78, retris.color);
                    break;
                case 1:
                case 3:
                    drawR(retris.x, retris.y, retris.x + 18, retris.y + 18, retris.color);
                    drawR(retris.x + 20, retris.y, retris.x + 38, retris.y + 18, retris.color);
                    drawR(retris.x + 40, retris.y, retris.x + 58, retris.y + 18, retris.color);
                    drawR(retris.x + 60, retris.y, retris.x + 78, retris.y + 18, retris.color);
                    break;
            }
            break;
        case 2:
            switch (retris.direct) {
                case 0:
                    drawR(retris.x, retris.y + 20, retris.x + 18, retris.y + 38, retris.color);
                    drawR(retris.x + 20, retris.y + 20, retris.x + 38, retris.y + 38, retris.color);
                    drawR(retris.x + 20, retris.y, retris.x + 38, retris.y + 18, retris.color);
                    drawR(retris.x + 40, retris.y + 20, retris.x + 58, retris.y + 38, retris.color);
                    break;
                case 1:
                    drawR(retris.x, retris.y, retris.x + 18, retris.y + 18, retris.color);
                    drawR(retris.x, retris.y + 20, retris.x + 18, retris.y + 38, retris.color);
                    drawR(retris.x, retris.y + 40, retris.x + 18, retris.y + 58, retris.color);
                    drawR(retris.x + 20, retris.y + 20, retris.x + 38, retris.y + 38, retris.color);
                    break;
                case 2:
                    drawR(retris.x, retris.y, retris.x + 18, retris.y + 18, retris.color);
                    drawR(retris.x + 20, retris.y, retris.x + 38, retris.y + 18, retris.color);
                    drawR(retris.x + 40, retris.y, retris.x + 58, retris.y + 18, retris.color);
                    drawR(retris.x + 20, retris.y + 20, retris.x + 38, retris.y + 38, retris.color);
                    break;
                case 3:
                    drawR(retris.x, retris.y + 20, retris.x + 18, retris.y + 38, retris.color);
                    drawR(retris.x + 20, retris.y, retris.x + 38, retris.y + 18, retris.color);
                    drawR(retris.x + 20, retris.y + 20, retris.x + 38, retris.y + 38, retris.color);
                    drawR(retris.x + 20, retris.y + 40, retris.x + 38, retris.y + 58, retris.color);
                    break;
            }
            break;
        case 3:
            switch (retris.direct) {
                case 0:
                    drawR(retris.x, retris.y, retris.x + 18, retris.y + 18, retris.color);
                    drawR(retris.x, retris.y + 20, retris.x + 18, retris.y + 38, retris.color);
                    drawR(retris.x + 20, retris.y + 20, retris.x + 38, retris.y + 38, retris.color);
                    drawR(retris.x + 40, retris.y + 20, retris.x + 58, retris.y + 38, retris.color);
                    break;
                case 1:
                    drawR(retris.x, retris.y, retris.x + 18, retris.y + 18, retris.color);
                    drawR(retris.x, retris.y + 20, retris.x + 18, retris.y + 38, retris.color);
                    drawR(retris.x, retris.y + 40, retris.x + 18, retris.y + 58, retris.color);
                    drawR(retris.x + 20, retris.y, retris.x + 38, retris.y + 18, retris.color);
                    break;
                case 2:
                    drawR(retris.x, retris.y, retris.x + 18, retris.y + 18, retris.color);
                    drawR(retris.x + 20, retris.y, retris.x + 38, retris.y + 18, retris.color);
                    drawR(retris.x + 40, retris.y, retris.x + 58, retris.y + 18, retris.color);
                    drawR(retris.x + 40, retris.y + 20, retris.x + 58, retris.y + 38, retris.color);
                    break;
                case 3:
                    drawR(retris.x + 20, retris.y, retris.x + 38, retris.y + 18, retris.color);
                    drawR(retris.x + 20, retris.y + 20, retris.x + 38, retris.y + 38, retris.color);
                    drawR(retris.x, retris.y + 40, retris.x + 18, retris.y + 58, retris.color);
                    drawR(retris.x + 20, retris.y + 40, retris.x + 38, retris.y + 58, retris.color);
                    break;
            }
            break;
        case 4:
            switch (retris.direct) {
                case 0:
                    drawR(retris.x + 40, retris.y, retris.x + 58, retris.y + 18, retris.color);
                    drawR(retris.x, retris.y + 20, retris.x + 18, retris.y + 38, retris.color);
                    drawR(retris.x + 20, retris.y + 20, retris.x + 38, retris.y + 38, retris.color);
                    drawR(retris.x + 40, retris.y + 20, retris.x + 58, retris.y + 38, retris.color);
                    break;
                case 1:
                    drawR(retris.x, retris.y, retris.x + 18, retris.y + 18, retris.color);
                    drawR(retris.x, retris.y + 20, retris.x + 18, retris.y + 38, retris.color);
                    drawR(retris.x, retris.y + 40, retris.x + 18, retris.y + 58, retris.color);
                    drawR(retris.x + 20, retris.y + 40, retris.x + 38, retris.y + 58, retris.color);
                    break;
                case 2:
                    drawR(retris.x, retris.y, retris.x + 18, retris.y + 18, retris.color);
                    drawR(retris.x + 20, retris.y, retris.x + 38, retris.y + 18, retris.color);
                    drawR(retris.x + 40, retris.y, retris.x + 58, retris.y + 18, retris.color);
                    drawR(retris.x, retris.y + 20, retris.x + 18, retris.y + 38, retris.color);
                    break;
                case 3:
                    drawR(retris.x + 20, retris.y, retris.x + 38, retris.y + 18, retris.color);
                    drawR(retris.x + 20, retris.y + 20, retris.x + 38, retris.y + 38, retris.color);
                    drawR(retris.x + 20, retris.y + 40, retris.x + 38, retris.y + 58, retris.color);
                    drawR(retris.x, retris.y, retris.x + 18, retris.y + 18, retris.color);
                    break;
            }
            break;
        case 5:
            switch (retris.direct) {
                case 0:
                case 2:
                    drawR(retris.x + 20, retris.y, retris.x + 38, retris.y + 18, retris.color);
                    drawR(retris.x, retris.y + 20, retris.x + 18, retris.y + 38, retris.color);
                    drawR(retris.x + 20, retris.y + 20, retris.x + 38, retris.y + 38, retris.color);
                    drawR(retris.x, retris.y + 40, retris.x + 18, retris.y + 58, retris.color);
                    break;
                case 1:
                case 3:
                    drawR(retris.x, retris.y, retris.x + 18, retris.y + 18, retris.color);
                    drawR(retris.x + 20, retris.y + 20, retris.x + 38, retris.y + 38, retris.color);
                    drawR(retris.x + 20, retris.y, retris.x + 38, retris.y + 18, retris.color);
                    drawR(retris.x + 40, retris.y + 20, retris.x + 58, retris.y + 38, retris.color);
                    break;
            }
            break;
        case 6:
            switch (retris.direct) {
                case 0:
                case 2:
                    drawR(retris.x, retris.y, retris.x + 18, retris.y + 18, retris.color);
                    drawR(retris.x, retris.y + 20, retris.x + 18, retris.y + 38, retris.color);
                    drawR(retris.x + 20, retris.y + 20, retris.x + 38, retris.y + 38, retris.color);
                    drawR(retris.x + 20, retris.y + 40, retris.x + 38, retris.y + 58, retris.color);
                    break;
                case 1:
                case 3:
                    drawR(retris.x, retris.y + 20, retris.x + 18, retris.y + 38, retris.color);
                    drawR(retris.x + 20, retris.y + 20, retris.x + 38, retris.y + 38, retris.color);
                    drawR(retris.x + 20, retris.y, retris.x + 38, retris.y + 18, retris.color);
                    drawR(retris.x + 40, retris.y, retris.x + 58, retris.y + 18, retris.color);
                    break;
            }
            break;
    }
}

//移动数组中所有的方块
function drawfj() {
    for (var i = 0; i < mapConent.length; i++) {
        for (var j = 0; j < mapConent[i].length; j++) {
            if (mapConent[i][j] != null) {
                var fj = mapConent[i][j];
                drawR(fj.x1, fj.y1, fj.x2, fj.y2, fj.color);
            }
        }
    }
}

//画一个小方块
function drawR(x1, y1, x2, y2, color) {
    cxt.beginPath();
    cxt.lineWidth = 2;
    cxt.moveTo(x1, y1);
    cxt.lineTo(x1, y2);
    cxt.lineTo(x2, y2);
    cxt.lineTo(x2, y1);
    cxt.closePath();
    cxt.strokeStyle = "white";
    cxt.stroke();
    cxt.fillStyle = color;      //填充的颜色，#FF0000 红，#00FF00 绿，#0000FF 蓝
    cxt.fill();
}

//检查画布，是否已成一行
function isLine() {
    for (var a = 21; a >= 0; a--) {
        if (mapConent[0][a] != null && mapConent[1][a] != null && mapConent[2][a] != null && mapConent[3][a] != null && mapConent[4][a] != null && mapConent[5][a] != null && mapConent[6][a] != null && mapConent[7][a] != null && mapConent[8][a] != null && mapConent[9][a] != null) {
            mapConent[0][a] = null;
            mapConent[1][a] = null;
            mapConent[2][a] = null;
            mapConent[3][a] = null;
            mapConent[4][a] = null;
            mapConent[5][a] = null;
            mapConent[6][a] = null;
            mapConent[7][a] = null;
            mapConent[8][a] = null;
            mapConent[9][a] = null;
            sum += 10;
            //往下移动
            for (var i = a; i > 0; i--) {
                for (var j = 0; j < mapConent[i].length; j++) {
                    var mc = mapConent[j][i - 1];
                    if (mc != null) {
                        mapConent[j][i] = new fangkuai(mc.x1, mc.y1 + 20, mc.x2, mc.y2 + 20, mc.color);
                        mapConent[j][i - 1] = null;
                    }
                }
            }
        }
    }
}

//画出下一个
function drawImg(index) {
    var Img = new Image();
    Img.src = "img/r" + index + ".png";
    var q1 = 20, q2 = 20, q3 = 60, q4 = 40;
    if (index == 0) {
        q1 = 30;
        q3 = 40;
    }
    else if (index == 1) {
        q1 = 10;
        q3 = 80;
        q4 = 20;        //height
    }
    else if (index == 5 || index == 6) {
        q1 = 30;
        q3 = 40;
        q4 = 60;
    }
    Img.onload = function () {
        cxt_con.drawImage(Img, q1, q2, q3, q4);
    }
    cxt_con.beginPath();
    cxt_con.moveTo(20, 200);
    var txt = "分数：" + sum;
    cxt_con.fillStyle = "white";
    cxt_con.font = "13px 微软雅黑";
    cxt_con.fillText(txt, 10, 200);
    cxt_con.closePath();

}

//开始游戏
function stateGame() {
    if (retris != null)
        clearInterval(retris.tiemr);
    sum = 0;
    nextRetris = 2;
    nextR = null;
    retris = null;
    for (var i = 0; i < 22; i++) {
        mapConent[i] = new Array();
        for (var j = 0; j < 10; j++) {
            mapConent[i][j] = null;
        }
    }
    window.clearInterval(gameTimer);
    nextRetris = createTeris(nextRetris);
    gameTimer = window.setInterval("flashMap()", 50);
    document.getElementById("stop").value = "暂停";
}

//暂停游戏
function stopGame() {
    var txt = document.getElementById("stop").value;
    if (retris != null) {
        if (txt == "暂停") {
            clearInterval(retris.tiemr);            //先停止方块的移动
            window.clearInterval(gameTimer);
            document.getElementById("stop").value = "继续";
        }
        else if (txt == "继续") {
            document.getElementById("stop").value = "暂停";
            retris.tiemr = window.setInterval("retris.moveDown()", 800);
            gameTimer = window.setInterval("flashMap()", 50);
        }
    }
    else
        return;
}




















