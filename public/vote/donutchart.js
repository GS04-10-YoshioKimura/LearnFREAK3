$(function() {

    var socket = io.connect();
    var $count = $('#count');
    var $goods = $('#goo');

    socket.on('count', function(setsuzoku) {
        //alert(setsuzoku);
        var ddd = " " + setsuzoku / 2;
        $count.text(ddd);

        



        var radiobtn1 = document.getElementById("off");
        var radiobtn2 = document.getElementById("on");

        // if (radiobtn1.checked == true) {
        //     //alert("offがチェックされています。");
        // } else if (radiobtn2.checked == true) {
        //     //alert("onがチェックされています。");
        // }

        var know;
        //know = Math.floor(Math.random() * 100) + 1;
        know = 1 / ddd * 100;
        var dontknow = 100 - know;
        var percent = document.getElementById("percent");
        percent.innerHTML = "みんなの理解度は " + know + " %";
        var doughnutData = [{
            value: know,
            color: "#fbaa6e"
        }, {
            value: dontknow,
            color: "#aaf2fb"
        }];
        var ctx = new Chart(document.getElementById("ugCanvas").getContext("2d")).Doughnut(doughnutData);
        // ctx.canvas.width = 300;
        // ctx.canvas.height = 150;
        // mychart = new Chart(ctx).Line(data_hoge1, option);
        //
        // mychart.destroy();
        //
        // ctx.canvas.width = 300;
        // ctx.canvas.height = 150;
        // mychart = new Chart(ctx).Line(data_hoge2, option);


        $("#btnng,#btnok").on('click', function() {
            //know = Math.floor(Math.random() * 100) + 1;
            //know = data.good / ddd *100;
            dontknow = 100 - know;
            percent.innerHTML = "みんなの理解度は " + know + " %";
            doughnutData = [{
                value: know,
                color: "#fbaa6e"
            }, {
                value: dontknow,
                color: "#aaf2fb"
            }];
            ctx = new Chart(document.getElementById("ugCanvas").getContext("2d")).Doughnut(doughnutData);
        });
    });
});
