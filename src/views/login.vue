<template>
    <div class="login">
        <div class="left">
            <img src="../assets/images/green_login_page.svg" class="madari">
        </div>
        <div class="right">
            <img src="../assets/images/green_logo.svg" class="leaf">
            <div class="formSection">
                <h2>היי, טוב לראות אותך</h2>
                <form v-on:submit="checkForm" >
                <div class="inputBox">
                    <input type="text" class="formControl" required placeholder="מייל">
                    <span>כתובת המייל איתה נרשמת לחשבונית ירוקה</span>
                </div>
                <div class="inputBox">
                    <input type="text" class="formControl" required placeholder="סיסמה">
                    <span><a href="">שכחת סיסמה?</a> </span>
                </div>
                <div class="btnBox">
                    <button class="google"><img width="20px" src="../assets/images/Google_G.svg">כניסה מהירה</button>
                    <button type="submit" class="submit" >כניסה</button>
                </div>
            </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login.vue",
        methods:{
            checkForm:function(e) {
            if(e.target[0].value && e.target[1].value)
            {
                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: e.target[0].value,password:e.target[1].value})
                    };
                fetch("https://jupiter.d.greeninvoice.co.il/api/v1/account/login", requestOptions)
                .then(response => response.json())
                .then(data => (
                    console.log(data)
                ));
            }
            e.preventDefault();
            }
        }
    }
</script>

<style lang="scss">

    .login {
        background: #fff;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-wrap: wrap;
        @media (max-width: 767px) {
            flex-direction: column;
        }
        .left {
            flex: 1;
            background: #FFDCDC;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            position: relative;
            overflow: hidden;
            @media (max-width: 767px) {
                justify-content: center;
            }
            .madari {
                position: absolute;
                height: 74%;
                right: -8%;
                @media(max-width: 768px){
                    height: 53%;
                    right: -12%;
                }
                @media (max-width: 767px) {
                    height:100%;
                    position: relative;
                    right: unset;
                }
            }

        }
        .right {
            flex: 1;
            @media (max-width: 600px) {
                padding: 2rem;
            }
            .leaf {
                position: absolute;
                top: 25px;
                right: 28px;
                max-width: 253px;
                @media (max-width: 600px) {
                    max-width: 120px;
                }
            }
            display: flex;
            justify-content: center;
            align-items: center;
            .formSection {
                width: 50%;
                transform: translateX(-84px);
                text-align: right;
                @media(max-width: 1024px){
                    width: 68%;
                    transform: translateX(0);
                }
                @media(max-width: 425px){
                    width: 88%;
                }
                h2 {
                    color: #104255;
                    text-transform: capitalize;
                    font-weight: bold;
                    margin-bottom: 32px;
                }
                .inputBox {
                    margin-bottom: 40px;
                    .formControl {
                        border: 0;
                        text-align: right;
                        border-bottom: 2px solid #092f4063;
                        width: 100%;
                        outline: 0;
                        transition: all 0.5s;
                        color: #104255;
                        font-size: 16px;
                        font-weight: bold;
                        &:focus {
                            border-color: #092f40d4;
                        }
                        &::placeholder {
                            color: #092f40d4;
                        }
                    }
                    span {
                        color: #104255;
                        font-size: 14px;
                        a {
                            color: #104255;
                            text-decoration: underline;
                        }
                    }
                }
                .btnBox {
                    display: flex;
                    justify-content: center;
                    .google {
                        flex: 1;
                        vertical-align: middle;
                        text-align: center;
                        color:#108ff5;
                        border-radius: 20px;
                        border: 1px solid #108ff5;
                        padding: 10px 0;
                        margin-right:10px ;
                        background: #fff;
                        img{
                            margin-right: 15px;
                            @media(max-width: 768px){
                                margin-right: 5px;
                            }
                        }
                    }
                    .submit {
                        flex: 1;
                        background: #18C746;
                        outline: 0;
                        border: 0;
                        border-radius: 20px;
                        color: #fff;
                        font-size: 15px;
                        text-transform: capitalize;
                        padding: 10px 0;
                    }
                }
            }

        }
    }


</style>