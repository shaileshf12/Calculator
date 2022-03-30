



var s = ""
document.getElementsByClassName("n")[0].addEventListener("click", function display() {
    s = s.concat(document.getElementsByClassName("n")[0].innerHTML)
    document.getElementById("disp").innerHTML = s
})

document.getElementsByClassName("n")[1].addEventListener("click", function display() {
    s = s.concat(document.getElementsByClassName("n")[1].innerHTML)
    document.getElementById("disp").innerHTML = s
})

document.getElementsByClassName("n")[2].addEventListener("click", function display() {
    s = s.concat(document.getElementsByClassName("n")[2].innerHTML)
    document.getElementById("disp").innerHTML = s
})

document.getElementsByClassName("n")[3].addEventListener("click", function display() {
    s = s.concat(document.getElementsByClassName("n")[3].innerHTML)
    document.getElementById("disp").innerHTML = s
})

document.getElementsByClassName("n")[4].addEventListener("click", function display() {
    s = s.concat(document.getElementsByClassName("n")[4].innerHTML)
    document.getElementById("disp").innerHTML = s
})

document.getElementsByClassName("n")[5].addEventListener("click", function display() {
    s = s.concat(document.getElementsByClassName("n")[5].innerHTML)
    document.getElementById("disp").innerHTML = s
})

document.getElementsByClassName("n")[6].addEventListener("click", function display() {
    s = s.concat(document.getElementsByClassName("n")[6].innerHTML)
    document.getElementById("disp").innerHTML = s
})

document.getElementsByClassName("n")[7].addEventListener("click", function display() {
    s = s.concat(document.getElementsByClassName("n")[7].innerHTML)
    document.getElementById("disp").innerHTML = s
})

document.getElementsByClassName("n")[8].addEventListener("click", function display() {
    s = s.concat(document.getElementsByClassName("n")[8].innerHTML)
    document.getElementById("disp").innerHTML = s
})

document.getElementsByClassName("n")[9].addEventListener("click", function display() {
    s = s.concat(document.getElementsByClassName("n")[9].innerHTML)
    document.getElementById("disp").innerHTML = s
})






document.getElementById("c").addEventListener("click",function () {
    s="0"
    document.getElementById("disp").innerHTML=s
    s=""
})




document.getElementById("add").addEventListener("click",function () {
    s=s.concat("+")
    document.getElementById("disp").innerHTML=s
})
document.getElementById("sub").addEventListener("click",function () {
    s=s.concat("-")
    document.getElementById("disp").innerHTML=s
})
document.getElementById("mult").addEventListener("click",function () {
    s=s.concat("x")
    document.getElementById("disp").innerHTML=s
})
document.getElementById("div").addEventListener("click",function () {
    s=s.concat("/")
    document.getElementById("disp").innerHTML=s
})
document.getElementById("per").addEventListener("click",function () {
    s=s.concat("%")
    document.getElementById("disp").innerHTML=s
})
document.getElementById("dot").addEventListener("click",function () {
    s=s.concat(".")
    document.getElementById("disp").innerHTML=s
})
document.getElementById("square-root").addEventListener("click",function() {
    str = s
    s = "sqrt"+"("+s+")";
    document.getElementById("disp").innerHTML=s
})
document.getElementById("square").addEventListener("click",function() {
    str1 = s
    s = "sqr"+"("+s+")";
    document.getElementById("disp").innerHTML=s
})
document.getElementById("inverse").addEventListener("click",function() {
    str2 = s
    s = "1/"+"("+s+")";
    document.getElementById("disp").innerHTML=s
})


document.getElementById("undo").addEventListener("click",function() {
    s = s.slice(0, s.length-1)
    document.getElementById("disp").innerHTML=s
})

document.getElementById("equal").addEventListener("click",function () {

    var v1 = /^([0-9 .]{1,})([+])([0-9]{1,})$/
    var v2 = /^([0-9 .]{1,})([-])([0-9]{1,})$/
    var v3 = /^([0-9 .]{1,})([x])([0-9]{1,})$/
    var v4 = /^([0-9 .]{1,})([/])([0-9]{1,})$/
    var v5 = /^([0-9 .]{1,})([%])$/

    
    if(s.includes("sqrt"))
    {
        s=Math.sqrt(Number(str))
        document.getElementById("disp").innerHTML=s
        s=""
    }

    if(s.includes("sqr"))
    {
        var num = Number(str1)*Number(str1)
        s = String(num)
        document.getElementById("disp").innerHTML=s
        s=""
    }

    if(s.includes("1/"))
    {
        var num = Math.pow(Number(str2), -1)
        s = String(num)
        document.getElementById("disp").innerHTML=s
        s=""
    }

    if(v1.test(s))
    {
        let arr = s.split("+")
        s=Number(arr[0])+Number(arr[1])
        document.getElementById("disp").innerHTML=s
        s=""
    }
    else if(v2.test(s))
    {
        let arr = s.split("-")
        s=Number(arr[0])-Number(arr[1])
        document.getElementById("disp").innerHTML=s
        s=""
    }
    else if(v3.test(s))
    {
        let arr = s.split("x")
        s=Number(arr[0])*Number(arr[1])
        document.getElementById("disp").innerHTML=s
        s=""
    }
    else if(v4.test(s))
    {
        let arr = s.split("/")
        if(arr[1]==='0')
        {
            document.getElementById("disp").innerHTML="ND"
        }
        else{
            s=Number(arr[0])/Number(arr[1])
            document.getElementById("disp").innerHTML=s
            s=""
        }
    }
    else if(v5.test(s))
    {
        let arr = s.split("%")
        s=Number(arr[0])/100
        document.getElementById("disp").innerHTML=s
        s=""
    }

    
})



