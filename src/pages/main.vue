<template>
    <div>

        <div class="banner">
            <img :src="COSUrl+'banner.png'" class="img-responsive banner-img"/>
            <img :src="COSUrl+'logo.png'" class="logo "/>
            <div class="instruction ">
                <p class="title">
                    一家专门做SAAS系统定制化开发的公司
                </p>
                <span class="sub-title">  告别不靠谱的传统外包模式,</span><br>
                <span class="sub-title">源自一线互联网公司的产品和研发体系为您的创业想法注入强大的动力</span>
            </div>
        </div>


        <!--<div class="body-margin">-->
        <div class="container">
            <!--六大业务-->
            <div class=" bussiness">
                <div class="row-margin-top-120">
                    <div class="container row-margin-bottom">
                        <p class="title">主营业务</p>
                    </div>
                    <div class="row">
                        <div class=" col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                            <img :src="COSUrl+'wx.png'" class="img-responsive">
                            <!--<img src="../assets/imgs/wx.png" class="img-responsive">-->
                            <div class="container-fluid shadow ">
                                <p class="text-margin content-title">微信小程序、微信公众号开发</p>
                                <p class="text-margin content">微信小程序、微信公众号开发</p>
                            </div>

                        </div>
                        <div class="  col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                            <img :src="COSUrl+'app.png'" class="img-responsive">
                            <div class="container-fluid shadow">
                                <p class="text-margin content-title">APP</p>
                                <p class="text-margin content">ios&android应用开发</p>
                            </div>
                        </div>
                        <div class=" col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div>
                                <img :src="COSUrl+'cloud.png'" class="img-responsive">
                                <div class="container-fluid shadow">
                                    <p class="text-margin content-title">政府、企业、商户传统业务上云</p>
                                    <p class="text-margin content">政府、企业、商户传统业务上云</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row  row-margin-top-30">
                    <div class=" col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                        <img :src="COSUrl+'growthhacker.png'" class="img-responsive">
                        <div class="container-fluid shadow">
                            <p class="text-margin content-title">企业增长黑客业务咨询</p>
                            <p class="text-margin content">企业增长黑客业务咨询</p>
                        </div>
                    </div>
                    <div class=" col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <img :src="COSUrl+'saas.png'" class="img-responsive">
                        <div class="container-fluid shadow">
                            <p class="text-margin content-title">大型SAAS系统研发</p>
                            <p class="text-margin content">完全创新的软件应用模式</p>
                        </div>
                    </div>
                    <div class=" col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <img :src="COSUrl+'consultant.png'" class="img-responsive">
                        <div class="container-fluid shadow">
                            <p class="text-margin content-title">泛互联网业务咨询</p>
                            <p class="text-margin content">泛互联网业务咨询</p>
                        </div>
                    </div>
                </div>
                <!--</div>-->
                <!--案例展示-->
                <div class="row row-margin-top-120 ">
                    <div class="container row-margin-bottom">
                        <p class="title">案例展示</p>
                    </div>
                    <div class="row">
                        <div class=" col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                            <img :src="COSUrl+'hippo.png'" class="img-responsive">
                            <div class="container-fluid shadow">
                                <p class="text-margin content-title">河马旅居指南</p>
                                <p class="text-margin content">旅行，换个城市生活！</p>
                            </div>
                        </div>
                        <div class=" col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <img :src="COSUrl+'noah.png'" class="img-responsive">
                            <div class="container-fluid shadow">
                                <p class="text-margin content-title">诺亚财富</p>
                                <p class="text-margin content">您的私人财富体验专家</p>
                            </div>
                        </div>
                        <div class=" col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <img :src="COSUrl+'PGAlumniAssociation.png'" class="img-responsive">
                            <div class="container-fluid shadow">
                                <p class="text-margin content-title">保洁校友会</p>
                                <p class="text-margin content">保洁校友会</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--为什么选择我们-->
            <div class="us row-margin-bottom-80">
                <div class=" row row-margin-top-120 row-margin-bottom-80 ">
                    <div class="container row-margin-bottom">
                        <p class="title">为什么选择我们</p>
                    </div>
                    <div class=" col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                        <img :src="COSUrl+'reliable.png'" class="img-circle center-block">
                        <p class="text-center text-margin content-title">稳定可靠</p>
                        <p class="text-margin content">为客户提供99.99%可靠的在线应用服务</p>
                    </div>
                    <div class=" col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                        <img :src="COSUrl+'professional.png'" class="img-circle center-block">
                        <p class="text-center text-margin content-title">专业的产品设计</p>
                        <p class="text-margin content">源自一线互联网公司的产品团队为您服务</p>
                    </div>
                    <div class=" col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                        <img :src="COSUrl+'advanced.png'" class="img-circle center-block">
                        <p class="text-center text-margin content-title">领先的研发理念</p>
                        <p class="text-margin content">源自于腾讯的专业的应用研发体系</p>
                    </div>
                </div>
                <div class=" row ">
                    <div class=" col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                        <img :src="COSUrl+'management.png'" class="img-circle center-block">
                        <p class="text-center text-margin content-title">专业的项目管理</p>
                        <p class="text-margin content">确保每一个milestone的顺利执行</p>
                    </div>
                    <div class=" col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                        <img :src="COSUrl+'team.png'" class="img-circle center-block">
                        <p class="text-center text-margin content-title">专业的团队</p>
                        <p class="text-margin content">专业的人才为您提供最专业的服务</p>
                    </div>
                    <div class=" col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                        <img :src="COSUrl+'aftersale.png'" class="img-circle center-block">
                        <p class="text-center text-margin content-title">专业的售后</p>
                        <p class="text-margin content">时刻响应您的需求</p>
                    </div>
                </div>
            </div>
        </div>
        <!--</div>-->

        <!--footer-->
        <div class="footer">
            <div class="container">
                <div class="row row-margin-top-100 ">
                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                        <div class="boss-margin">
                            <div class="row ">
                                <!--<div class="form-horizontal">-->
                                    <!--<div class="form-group">-->
                                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-3">
                                            <img :src="COSUrl+'noahboss.jpg'" class="img-circle boss "/>
                                        </div>
                                        <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9 ">
                                            <p class="boss-name ">
                                                诺亚财富 谭文清
                                            </p>
                                        </div>
                                        <!--<div class="col-xs-4 col-sm-4 col-md-2 col-lg-2">-->
                                            <!--<img  :src="COSUrl+'noahboss.jpg'" class="img-circle boss "/>-->
                                        <!--</div>-->
                                        <!--<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">-->
                                            <!--<p class="boss-name  ">-->
                                            <!--诺亚财富 谭文清-->
                                            <!--</p>-->
                                        <!--</div>-->
                                    <!--</div>-->
                                <!--</div>-->
                            </div>
                            <div class="star-div">
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star-empty"></span>
                            </div>
                            <p class="boss-content">感谢语汐科技高质量的设计和执行，帮助我们打造一款优秀产品。</p>
                        </div>
                    </div>
                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div class="boss-margin">
                            <div class="row ">
                                <div class="col-xs-4 col-sm-4 col-md-3 col-lg-3">
                                    <img :src="COSUrl+'daiyouboss.png'" class="img-circle  boss">
                                </div>
                                <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9 ">
                                    <p class="boss-name ">
                                        袋友电商 钱姗姗
                                    </p>
                                </div>
                            </div>
                            <div class="star-div">
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                            </div>
                            <p class="boss-content">以客户为中心，赋能客户，共同为用户打造一款令人难忘的产品。如果我的朋友要做产品，我还是会推荐语汐。</p>
                        </div>
                    </div>
                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div class="boss-margin">
                            <div class="row ">
                                <div class="col-xs-4 col-sm-4 col-md-3 col-lg-3">
                                    <img :src=" COSUrl+'hippoboss.png'" class="img-circle  boss"/>
                                </div>
                                <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9 ">
                                    <p class="boss-name ">
                                        河马旅居指南创始人 余晓盼
                                    </p>
                                </div>
                            </div>
                            <div class="star-div">
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                            </div>
                            <p class="boss-content">
                                <!--{{hippoboss}}-->
                                YuxiSoft是个很靠谱的技术团队，技术背景深厚，成员多来自腾讯和百度。开发前会很有耐心的跟你沟通，
                                能站在客户角度去考虑问题，给你一些很成熟的建议，很受用。YuxiSoft 帮我们开发了微信小程序和 APP，使用下来很顺畅，
                                速度也很快，有问题反馈给他们时，总能很及时的解决掉问题。
                            </p>
                        </div>

                    </div>
                </div>
                <!--</div>-->
            </div>
        </div>

        <!--copyright-->
        <div class="">
            <div class="row text-center row-margin-top-30 row-margin-bottom">
                <p class="">{{copyright}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            let start = 2017
            let end = new Date().getFullYear();
            let cp = `Copyright © ${start} - ${end} 语汐网络科技  yuxisoft.cn All Rights Reserved. `
            this.copyright = cp;
        },
        data() {
            return {
                copyright: '',
                COSUrl: 'http://yuxisoft-1254099543.cossh.myqcloud.com/',
//                COSUrl: '../assets/imgs/',

                hippoboss: 'YuxiSoft是个很靠谱的技术团队，技术背景深厚，成员多来自腾讯和百度。开发前会很有耐心的跟你沟通，' +
                '能站在客户角度去考虑问题，给你一些很成熟的建议，很受用。YuxiSoft 帮我们开发了微信小程序和 APP，使用下来很顺畅，' +
                '速度也很快，有问题反馈给他们时，总能很及时的解决掉问题。'


            }
        }
    }
</script>

<style lang="scss" scoped>


    .img-responsive {
        width: 100%;
    }

    .boss-margin {
        margin-left: 10%;
        margin-right: 10%;
        /*margin-left: 1%;*/

    }

    .row-margin-top-120 {
        margin-top: 120px;
    }

    .row-margin-top-30 {
        margin-top: 30px;
    }

    .row-margin-bottom {
        margin-bottom: 20px;
    }

    .row-margin-bottom-80 {
        margin-bottom: 80px;
    }

    .row-margin-top-100 {
        margin-top: 100px;
    }

    .text-margin {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .shadow {
        box-shadow: 1px 1px 20px 1px #e1e1e1;
    }

    .logo {
        position: absolute;
        margin: auto -80px;
        top: 20%;
        max-width: 131px;
        max-height: 46px;
    }



    .instruction {
        position: absolute;
        left: 0;
        top: 40%;
        width: 100%;
        color: white;

    }

    /*.instruction p {*/
        /*font-size: 1.8rem;*/
    /*}*/

    .instruction .title {
        font-size: 44px;
        color: #FFFFFF;
        letter-spacing: 2.59px;
        margin-bottom: 2rem;
    }

    .instruction .sub-title {
        font-size: 18px;
        color: #FFFFFF;
        letter-spacing: 0;
        line-height: 31px;
    }

    @media (max-width: 768px) {
        .instruction .title {
            font-size: 2.4rem;
        }
        .instruction .sub-title {
            font-size: 1rem;
        }
        .banner-img {
            height:320px;
        }
    }

    @media (min-width:769px) and (max-width: 1366px) {
        .instruction .title {
            font-size: 4.2rem;
        }
        .instruction .sub-title {
            font-size: 1.8rem;
        }
        .banner-img {
            height:320px;
        }
    }

    .banner {
        position: relative;
        text-align: center;
    }

    /*.bussiness p {*/
    /*!*font-family: PingFangSC-Regular;*!*/
    /*font-size: 14px;*/
    /*color: #B4B4B4;*/
    /*letter-spacing: 0;*/
    /*line-height: 22px;*/
    /*}*/

    /*.us p {*/
    /*!*font-family: PingFangSC-Regular;*!*/
    /*font-size: 14px;*/
    /*color: #808080;*/
    /*letter-spacing: 0;*/
    /*line-height: 22px;*/
    /*}*/

    .footer {
        background: url("http://yuxisoft-1254099543.cossh.myqcloud.com/footer.png") no-repeat;
        width: 100%;
        /*height:100%;*/
        background-size: 100% 100%;
        /*position:absolute;*/

    }

    .banner1 {
        background: url("http://yuxisoft-1254099543.cossh.myqcloud.com/banner.png") no-repeat;
        width: 100%;
        height: 520px;
        background-size: 100% 100%;
    }

    .footer p, span {
        /*font-family: PingFangSC-Regular;*/
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: 0;
        line-height: 24px;
    }

    .boss {
        /*max-width:70px;*/
        /*max-height:70px;*/
        width: 70px;
        height: 70px;
    }

    .boss-name {
        margin-left: 10px;
        font-size: 20px;
        color: #FFFFFF;
        letter-spacing: 0;
        top: 20px;
        position: relative;
    }

    .boss-content {
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0;
        line-height: 24px;
    }

    /*filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='bg-login.png',sizingMethod='scale');*/
    html {
    font-size: 62.5%;
    }

    /*@media (min-width: 376px) and (max-width: 767px) {*/
    /*html {*/
    /*font-size: 11px;*/
    /*}*/
    /*}*/

    /*body {*/
    /*margin: 0;*/
    /*!*font-size: 1.6rem;*!*/
    /*}*/

    .title {
        font-size: 28px;
        color: #404040;
        letter-spacing: 0;
    }

    .content-title {
        font-size: 16px;
        color: #404040;
        letter-spacing: 0;
        line-height: 24px;
    }

    .content {
        margin-top: -7px;
        font-size: 14px;
        color: #B4B4B4;
        letter-spacing: 0;
        line-height: 22px;
    }

    .us .content-title {
        font-size: 14px;
        color: #404040;
        letter-spacing: 0;
        line-height: 22px;
    }

    .us .content {
        font-size: 14px;
        color: #808080;
        letter-spacing: 0;
        line-height: 22px;
    }

    .star-div {
        margin: 20px 0 16px 0
    }

    .star-div span{
        color:#FFEBAC;
    }

</style>