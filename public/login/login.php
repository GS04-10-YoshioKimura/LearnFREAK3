<?php
//1. HTML_STARTをインクルード
$title = "LOGIN"; //html_start.phpのtitleタグに表示
include("html_start.php");
?>

    <link rel="stylesheet" href="css/login.css">
    <!-- login_act.php は認証処理用のPHPです。 -->
    <div class="form-wrapper">
        <h1>ログイン</h1>
        <form name="form1" action="login_act.php" method="post">
            <div class="form-item">
                <label for="email"></label>
                <input type="email" name="lid" required="required" placeholder="Email Address"></input>
            </div>
            <div class="form-item">
                <label for="password"></label>
                <input type="password" name="lpw" required="required" placeholder="Password"></input>
            </div>
            <div class="button-panel">
                <input type="submit" class="button" title="Sign In" value="Sign In"></input>
            </div>
        </form>
        <div class="form-footer">
            <p><a href="register.php">Create an account</a></p>
            <!--    <p><a href="#">Forgot password?</a></p>-->
        </div>
    </div>


    <?php
//2. HTML_ENDをインクルード
include("html_end.php");
?>