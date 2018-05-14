<template>
    <div>
        <div class="banner">
            <img :src="COSUrl+'banner.png'" class="img-responsive">
            <img :src="COSUrl+'logo.png'" class="logo ">
            <div class="instruction ">
                <h1>
                    一家专门做SAAS系统定制化开发的公司
                </h1>
                <p> 告别不靠谱的传统外包模式,</p>
                <P>源自一线互联网公司的产品和研发体系为您的创业想法注入强大的动力</p>
            </div>
        </div>
        <!--<div class="body-margin">-->
        <div class="container">
            <!--六大业务-->
            <div class=" bussiness">
                <div class="row-margin-top-120">
                    <div class="container row-margin-bottom">
                        <h2 class="">主营业务</h2>
                    </div>
                    <div class="row">
                        <div class=" col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                            <img :src="COSUrl+'wx.png'" class="img-responsive">
                            <!--<img src="../assets/imgs/wx.png" class="img-responsive">-->
                            <div class="container-fluid shadow ">
                                <h6 class="text-margin">微信小程序、微信公众号开发</h6>
                                <p class="text-margin">微信小程序、微信公众号开发</p>
                            </div>

                        </div>
                        <div class="  col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                            <img :src="COSUrl+'app.png'" class="img-responsive">
                            <div class="container-fluid shadow">
                                <h6 class="text-margin">APP</h6>
                                <p class="text-margin">ios&android应用开发</p>
                            </div>
                        </div>
                        <div class=" col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div>
                                <img :src="COSUrl+'cloud.png'" class="img-responsive">
                                <div class="container-fluid shadow">
                                    <h6 class="text-margin">政府、企业、商户传统业务上云</h6>
                                    <p class="text-margin">政府、企业、商户传统业务上云</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row  row-margin-top-15">
                    <div class=" col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                        <img :src="COSUrl+'growthhacker.png'" class="img-responsive">
                        <div class="container-fluid shadow">
                            <h6 class="text-margin">企业增长黑客业务咨询</h6>
                            <p class="text-margin">企业增长黑客业务咨询</p>
                        </div>
                    </div>
                    <div class=" col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <img :src="COSUrl+'saas.png'" class="img-responsive">
                        <div class="container-fluid shadow">
                            <h6 class="text-margin">大型SAAS系统研发</h6>
                            <p class="text-margin">完全创新的软件应用模式</p>
                        </div>
                    </div>
                    <div class=" col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <img :src="COSUrl+'consultant.png'" class="img-responsive">
                        <div class="container-fluid shadow">
                            <h6 class="text-margin">泛互联网业务咨询</h6>
                            <p class="text-margin">泛互联网业务咨询</p>
                        </div>
                    </div>
                </div>
                <!--</div>-->
                <!--案例展示-->
                <div class="row row-margin-top-120 ">
                    <div class="container row-margin-bottom">
                        <h2 class="">案例展示</h2>
                    </div>
                    <div class="row">
                        <div class=" col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                            <img :src="COSUrl+'hippo.png'" class="img-responsive">
                            <div class="container-fluid shadow">
                                <h6 class="text-margin">河马旅居指南</h6>
                                <p class="text-margin">旅行，换个城市生活！</p>
                            </div>
                        </div>
                        <div class=" col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <img :src="COSUrl+'noah.png'" class="img-responsive">
                            <div class="container-fluid shadow">
                                <h6 class="text-margin">诺亚财富</h6>
                                <p class="text-margin">您的私人财富体验专家</p>
                            </div>
                        </div>
                        <div class=" col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <img :src="COSUrl+'PGAlumniAssociation.png'" class="img-responsive">
                            <div class="container-fluid shadow">
                                <h6 class="text-margin">保洁校友会</h6>
                                <p class="text-margin">保洁校友会</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--为什么选择我们-->
            <div class="us">
                <div class=" row row-margin-top-120 ">
                    <div class="container row-margin-bottom">
                        <h2 class="">为什么选择我们</h2>
                    </div>
                    <div class=" col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                        <img :src="COSUrl+'reliable.png'" class="img-circle center-block">
                        <h6 class="text-center text-margin">稳定可靠</h6>
                        <p class="text-margin">为客户提供99.99%可靠的在线应用服务</p>
                    </div>
                    <div class=" col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                        <img :src="COSUrl+'professional.png'" class="img-circle center-block">
                        <h6 class="text-center text-margin">专业的产品设计</h6>
                        <p class="text-margin">源自一线互联网公司的产品团队为您服务</p>
                    </div>
                    <div class=" col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                        <img :src="COSUrl+'advanced.png'" class="img-circle center-block">
                        <h6 class="text-center text-margin">领先的研发理念</h6>
                        <p class="text-margin">源自于腾讯的专业的应用研发体系</p>
                    </div>
                </div>
                <div class=" row  row-margin-top-15">
                    <div class=" col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                        <img :src="COSUrl+'management.png'" class="img-circle center-block">
                        <h6 class="text-center text-margin">专业的项目管理</h6>
                        <p class="text-margin">确保每一个milestone的顺利执行</p>
                    </div>
                    <div class=" col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                        <img :src="COSUrl+'team.png'" class="img-circle center-block">
                        <h6 class="text-center text-margin">专业的团队</h6>
                        <p class="text-margin">专业的人才为您提供最专业的服务</p>
                    </div>
                    <div class=" col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                        <img :src="COSUrl+'aftersale.png'" class="img-circle center-block">
                        <h6 class="text-center text-margin">专业的售后</h6>
                        <p class="text-margin">时刻响应您的需求</p>
                    </div>
                </div>
            </div>
        </div>
        <!--</div>-->

        <!--footer-->
        <div class="footer">
            <div class="container">
                <div class="row row-margin-top-100">
                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                        <div class="boss-margin">
                            <div class="form-horizontal">
                                <div class="">
                                    <img :src="COSUrl+'noahboss.jpg'" class="img-circle boss ">
                                    <span class="">
                                        诺亚财富 谭文清
                                    </span>
                                </div>
                            </div>
                            <p>感谢语汐科技高质量的设计和执行，帮助我们打造一款优秀产品。</p>
                        </div>
                    </div>
                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div class="boss-margin">
                            <img :src="COSUrl+'daiyouboss.png'" class="img-circle  boss">
                            <span>
                                袋友电商 钱姗姗
                            </span>
                            <p>以客户为中心，赋能客户，共同为用户打造一款令人难忘的产品。如果我的朋友要做产品，我还是会推荐语汐。</p>
                        </div>
                    </div>
                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div class="boss-margin">
                            <img :src=" COSUrl+'hippoboss.png'" class="img-circle  boss">
                            <span>
                                河马旅居指南创始人 余晓盼
                            </span>
                            <p>
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
            <div class="row text-center row-margin-top-15 row-margin-bottom">
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

    .row-margin-top-15 {
        margin-top: 15px;
    }

    .row-margin-bottom {
        margin-bottom: 20px;
    }

    .row-margin-top-100 {
        margin-top: 100px;
    }

    .text-margin {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .shadow {
        box-shadow: 1px 1px 10px 1px #b9b9b9;
    }

    .logo {
        position: absolute;
        margin: auto -80px;
        top: 20%;
        max-width: 220px;
        max-height: 50px;
    }

    .instruction {
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        color: white;

    }

    .instruction p {
        font-size: 1.8rem;
    }

    @media (max-width: 767px) {
        .instruction p {
            font-size: 1rem;
        }
        .instruction h1 {
            font-size: 1.8rem;
        }
    }

    .banner {
        position: relative;
        text-align: center;
    }

    .bussiness p {
        /*font-family: PingFangSC-Regular;*/
        font-size: 14px;
        color: #B4B4B4;
        letter-spacing: 0;
        line-height: 22px;
    }

    .us p {
        /*font-family: PingFangSC-Regular;*/
        font-size: 14px;
        color: #808080;
        letter-spacing: 0;
        line-height: 22px;
    }

    .footer {
        background: url("http://yuxisoft-1254099543.cossh.myqcloud.com/footer.png") no-repeat;
        width: 100%;
        /*height:100%;*/
        background-size: 100% 100%;
        /*position:absolute;*/

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

    /*filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='bg-login.png',sizingMethod='scale');*/
    html {
        font-size: 18px;
    }

    @media (min-width: 376px) and (max-width: 767px) {
        html {
            font-size: 11px;
        }
    }

    body {
        margin: 0;
        /*font-size: 1.6rem;*/
    }
</style>