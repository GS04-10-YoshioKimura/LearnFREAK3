$(function() {

    var socket = io.connect();
    var $count = $('#count');
    var $goods = $('#goo');

    socket.on('count', function(setsuzoku) {
        //alert(setsuzoku);
        var ddd = " " + setsuzoku / 2;
        $count.text(ddd);

        var know;
        //know = Math.floor(Math.random() * 100) + 1;
        know = 0;
        //alert(ddd);
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

        // var radiobtn1 = document.getElementById("off");
        // var radiobtn2 = document.getElementById("on");
        // if (radiobtn1.checked == true) {
        //     //alert("offがチェックされています。");
        // } else if (radiobtn2.checked == true) {
        //     //alert("onがチェックされています。");
        // }

        socket.on('vote', function(data) {
            console.log(data.good);
            //alert(data.good + "です。");
            //know = Math.floor(Math.random() * 100) + 1;
            know = Math.floor(data.good / ddd * 100);
            //alert(ddd);
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
});
