// 2. js文件中写
// 2.1 获取最大化按钮和还原按钮
// 2.2 点击时分别调用 window.btn.btnMax()方法 和window.btn.btnReduct()方法
var btnMax = document.getElementById("btnMax");
btnMax.addEventListener('click',async ()=>{
    const btnIsMax = await window.btn.btnIsMax();
    console.log(btnIsMax);
    document.getElementById("state").innerHTML = btnIsMax?"最大化":"正常";
})

var btnReduct = document.getElementById("btnReduct");
btnReduct.addEventListener('click',async ()=>{
    await window.btn.btnReduct();
    document.getElementById("state").innerHTML = "最初状态";
})