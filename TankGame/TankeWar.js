//为了编程方便，定义两个颜色数组
var heroColor = new Array("#BA9658", "#FEF26E");
var enemyColor = new Array("#00A2B5", "#00FEFE");

//子弹类
//type表示：这颗子弹是敌人的，还是自己的
//tank表示对象：说明这颗子弹属于哪个坦克
function Bullet(x, y, direct, speed, type, tank) {
    this.x = x;
    this.y = y;
    this.direct = direct;
    this.speed = speed;
    this.timer = null;
    this.isLive = true;
    this.type = type;
    this.tank = tank;
    this.run = function run() {

        //在改变这个子弹的坐标时，先判断新子弹是否已经到边界
        if (this.x <= 0 || this.x >= 1000 || this.y <= 0 || this.y >= 600 || this.isLive == false) {
            //子弹要停止
            window.clearInterval(this.timer);
            //子弹死亡
            this.isLive = false;

            //敌人的子弹
            if (this.type = "enemy"&&this.type!=null&&this.type!=undefined) {
                //alert("KO");
                this.tank.bulletIsLive = false;
            }
        }
        else {
            //修改坐标
            switch (this.direct) {
                case 0:
                    this.y -= this.speed;
                    break;
                case 1:
                    this.x += this.speed;
                    break;
                case 2:
                    this.y += this.speed;
                    break;
                case 3:
                    this.x -= this.speed;
                    break;
            }
            document.getElementById("info").innerText = "子弹x=" + this.x + " 子弹y=" + this.y;
        }
    }
}


//定义一个炸弹类
function Bomb(x, y) {
    this.x = x;
    this.y = y;
    this.isLive = true;         //炸弹默认是活的
    this.blood = 9;             //炸弹有一个生命值
    //减生命值
    this.bloodDown = function () {
        if (this.blood > 0) {
            this.blood--;
        }
        else {
            this.isLive = false;        //炸弹死亡
        }
    }
}


//定义一个父类Tank
//js中，是通过对象冒充实现继承的
function Tank(x, y, direct, color) {
    this.x = x;
    this.y = y;
    this.speed = 1;         //坦克移动速度
    this.isLive = true;
    this.direct = direct;
    this.color = color;     //一个坦克需要两种颜色
    //每一个对象都会有同样的属性和方法，如果具体的某一个对象的属性变了，则调用该对象的方法即可
    //上移                        
    this.moveUp = function () {
        this.y -= this.speed;
        this.direct = 0;
    }
    //右移
    this.moveRight = function () {
        this.x += this.speed;
        this.direct = 1;
    }
    //下移
    this.moveDown = function () {
        this.y += this.speed;
        this.direct = 2;
    }
    //左移
    this.moveLeft = function () {
        this.x -= this.speed;
        this.direct = 3;
    }
}

//我的坦克
function Hero(x, y, direct, color) {
    //作用：通过对象冒充，达到继承的效果
    this.tank = Tank;
    this.tank(x, y, direct, color);

    //增加一个函数，射击敌人坦克
    this.shotEnemy = function () {
        //创建子弹,子弹的位置应该和hero有关系，并且和hero的方向有关
        //this.x就射当前hero的横坐标
        switch (this.direct) {
            case 0:
                heroBullet = new Bullet(this.x + 9, this.y, this.direct, 2);
                break;
            case 1:
                heroBullet = new Bullet(this.x + 30, this.y + 9, this.direct, 2);
                break;
            case 2:
                heroBullet = new Bullet(this.x + 9, this.y + 30, this.direct, 2);
                break;
            case 3:
                heroBullet = new Bullet(this.x, this.y + 9, this.direct, 2);
                break;
        }
        //heroBullet = new Bullet(this.x,this.y,this.direct);

        //把这个子弹对象放入到数组中去 ->push函数
        heroBullets.push(heroBullet);

        //调用子弹的run方法
        var timer = window.setInterval("heroBullets[" + (heroBullets.length - 1) + "].run()", 80);
        //把这个timer赋给这个子弹（js对象是引用传递！）
        heroBullets[heroBullets.length - 1].timer = timer;
    }
}

//定义敌人的坦克
function EnemyTank(x, y, direct, color) {
    //也通过对象冒充，来继承Tank
    this.tank = Tank;
    this.count = 0;
    this.bulletIsLive = true;

    this.tank(x, y, direct, color);

    this.run = function run() {
        switch (this.direct) {
            case 0:
                if (this.y > 0) {
                    this.y -= this.speed;
                }
                break;
            case 1:
                if (this.x + 30 < 1000) {
                    this.x += this.speed;
                }
                break;
            case 2:
                if (this.y + 30 < 600) {
                    this.y += this.speed;
                }
                break;
            case 3:
                if (this.x > 0) {
                    this.x -= this.speed;
                }
                break;
        }
        //改变方向，走30次改变方向
        if (this.count > 30) {
            this.direct = Math.round(Math.random() * 3);          //随机生成0，1,2,3
            this.count = 0;
        }
        this.count++;

        //判断子弹是否已经死亡,子弹已经死亡，则新增一颗子弹
        if (this.bulletIsLive == false&&this.isLive) {
            //新增子弹考虑当前的坦克的方向
            switch (this.direct) {
                case 0:
                    etBullet = new Bullet(this.x + 9, this.y, this.direct, 2, "enemy", this);
                    break;
                case 1:
                    etBullet = new Bullet(this.x + 30, this.y + 9, this.direct, 2, "enemy", this);
                    break;
                case 2:
                    etBullet = new Bullet(this.x + 9, this.y + 30, this.direct, 2, "enemy", this);
                    break;
                case 3:
                    etBullet = new Bullet(this.x, this.y + 9, this.direct, 2, "enemy", this);
                    break;
            }
            //把子弹放入数组中
            enemyBullets.push(etBullet);
            //启动新子弹
            var mytimer = window.setInterval("enemyBullets[" + (enemyBullets.length - 1) + "].run()", 50);
            enemyBullets[enemyBullets.length - 1].timer = mytimer;

            this.bulletIsLive = true;
        }

    }

}


//绘制出自己的子弹,也可以把该函数封装到Hero类中
function drawHeroBullet() {
    //画出所有的子弹
    for (var i = 0; i < heroBullets.length; i++) {
        var heroBullet = heroBullets[i];            //循环取出子弹，绘制所有的子弹
        if (heroBullet != null && heroBullet.isLive) {
            cxt.fillStyle = "#FEF26E";
            cxt.fillRect(heroBullet.x, heroBullet.y, 2, 2);
        }
    }
}

//画出敌人的子弹
function drawEnemyBullet() {
    for (var i = 0; i < enemyBullets.length; i++) {
        var enemyBullet = enemyBullets[i];
        if (enemyBullet.isLive) {
            //cxt.fillStyle = enemyBullet.color[1];
            cxt.fillStyle = "#00FEFE";
            cxt.fillRect(enemyBullet.x, enemyBullet.y, 2, 2);
        }
    }
}


//把绘制坦克封装成一个函数，将可以作为（对象）成员函数
//这个函数可以画自己的坦克，也可以画敌人的坦克，tank就是一个对象
function drawTank(tank) {

    //只有坦克的this.isLive==ture才能画出当前的坦克
    if (tank.isLive) {

        //考虑方向
        switch (tank.direct) {
            case 0:
            case 2:
                //设置颜色
                cxt.fillStyle = tank.color[0];
                cxt.fillRect(tank.x, tank.y, 5, 30);
                cxt.fillRect(tank.x + 15, tank.y, 5, 30);
                cxt.fillRect(tank.x + 6, tank.y + 5, 8, 20);
                //坦克盖子
                cxt.fillStyle = tank.color[1];
                cxt.arc(tank.x + 10, tank.y + 15, 4, 0, Math.PI * 2, true);
                cxt.fill();

                //画出炮筒
                cxt.strokeStyle = tank.color[1];
                cxt.lineWidth = 1.5;
                cxt.beginPath();
                cxt.moveTo(tank.x + 10, tank.y + 15);
                if (tank.direct == 0) {
                    cxt.lineTo(tank.x + 10, tank.y);
                }
                else if (tank.direct == 2) {
                    cxt.lineTo(tank.x + 10, tank.y + 30);
                }
                cxt.closePath();
                cxt.stroke();
                break;
            case 1:
            case 3:
                //设置颜色
                cxt.fillStyle = tank.color[0];
                cxt.fillRect(tank.x, tank.y, 30, 5);
                cxt.fillRect(tank.x, tank.y + 15, 30, 5);
                cxt.fillRect(tank.x + 5, tank.y + 6, 20, 8);
                //坦克盖子
                cxt.fillStyle = tank.color[1];
                cxt.arc(tank.x + 15, tank.y + 10, 4, 0, Math.PI * 2, true);
                cxt.fill();

                //画出炮筒
                cxt.strokeStyle = tank.color[1];
                cxt.lineWidth = 1.5;
                cxt.beginPath();
                cxt.moveTo(tank.x + 15, tank.y + 10);
                if (tank.direct == 1) {
                    cxt.lineTo(tank.x + 30, tank.y + 10);
                }
                else if (tank.direct == 3) {
                    cxt.lineTo(tank.x, tank.y + 10);
                }
                cxt.closePath();
                cxt.stroke();
                break;
        }
    }
}

//判断我的子弹（多个）是否击中敌人的坦克（多个）
//思路：循环取出我的子弹，单个去判断我的子弹与循环取出的敌人的坦克的坐标位置是否存在重叠部分
function isHitEnemyTank() {
    //取出我的每一颗子弹
    for (var i = 0; i < heroBullets.length; i++) {
        var heroBullet = heroBullets[i];
        if (heroBullet.isLive) {
            //取出每一个敌人的坦克
            for (var j = 0; j < enemyTanks.length; j++) {
                var enemyTank = enemyTanks[j];
                if (enemyTank.isLive) {
                    //根据敌人坦克的方向判断
                    switch (enemyTank.direct) {
                        case 0:
                        case 2:
                            if (heroBullet.x >= enemyTank.x && heroBullet.x <= enemyTank.x + 20 && heroBullet.y >= enemyTank.y && heroBullet.y <= enemyTank.y + 30) {
                                //把坦克的isLive设置为false，即死亡
                                //enemyTank.isLive == false;
                                enemyTanks[j].isLive = false;
                                //把我的子弹设置为死亡
                                heroBullet.isLive = false;

                                //创建一个炸弹
                                var bomb = new Bomb(enemyTank.x, enemyTank.y);
                                heroBombs.push(bomb);       //把炸弹放入到heroBombs数组中
                            }
                            break;
                        case 1:
                        case 3:
                            if (heroBullet.x >= enemyTank.x && heroBullet.x <= enemyTank.x + 30 && heroBullet.y >= enemyTank.y && heroBullet.y <= enemyTank.y + 20) {
                                //把坦克的isLive设置为false，即死亡
                                //enemyTank.isLive == false;
                                enemyTanks[j].isLive = false;
                                //把我的子弹设置为死亡
                                heroBullet.isLive = false;

                                //创建一个炸弹
                                var bomb = new Bomb(enemyTank.x, enemyTank.y);
                                heroBombs.push(bomb);       //把炸弹放入到heroBombs数组中
                            }
                            break;
                    }
                }
            }
        }
    }
}

//画出敌人被炸弹炸死的效果
function drawEnemyBomb() {
    for (var i = 0; i < heroBombs.length; i++) {
        //取出每一个炸弹
        var bomb = heroBombs[i];
        if (bomb.isLive) {
            //根据当前炸弹的生命值，来画出这个炸弹不同生命值的图片
            if (bomb.blood > 6) {
                var img1 = new Image();
                img1.src = "source/bomb_1.gif";
                var x = bomb.x;
                var y = bomb.y;
                img1.onload = function () {
                    cxt.drawImage(img1, x, y, 30, 30);
                }
            }
            else if (bomb.blood > 3) {
                var img2 = new Image();
                img2.src = "source/bomb_2.gif";
                var x = bomb.x;
                var y = bomb.y;
                img2.onload = function () {
                    cxt.drawImage(img2, x, y, 30, 30);
                }
            }
            else {
                var img3 = new Image();
                img3.src = "source/bomb_3.gif";
                var x = bomb.x;
                var y = bomb.y;
                img3.onload = function () {
                    cxt.drawImage(img3, x, y, 30, 30);
                }
            }
            //减血
            bomb.bloodDown();
            if (bomb.blood <= 0) {
                //把这个炸弹从数组中去掉
                heroBombs.splice(i, 1);
            }
        }
    }
}
