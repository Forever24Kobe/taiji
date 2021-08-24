let html = document.querySelector("#html")
let style = document.querySelector("#style")
let string = `
/*你好，我是一名前端新人
接下来我要加样式了
我要加的样式是**/
body{
    color: white;
    background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
}
#bagua{
    border:1px solid red;
    height:200px;
    width:200px;
    border-radius:50%;
}
/*接下来将圆放在屏幕右上方**/

/*接下来就是见证奇迹的时刻**/
#bagua{
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);

}
#bagua::before{
    content:'';
    display:block;
    height:100px;
    width:100px;
    border-radius:50%;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#bagua::after{
    content:'';
    display:block;
    height:100px;
    width:100px;
    border-radius:50%;
    top:50%;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let string2 = "";
let n = 0;

html.innerHTML = string.substring(0, n)

let step = () => {
    setTimeout(() => {
        n = n + 1;
        if (string[n] === "\n") {
            string2 += '<br>'
        } else if (string[n] === " ") {
            string2 += '&nbsp'
        } else {
            string2 += string[n]
        }
        html.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0, 99999)
        html.scrollTo(0, 999999)
        if (n < string.length - 1) {
            step();
        }
    }, 50);

}

step();
