<template>
    <div>

        <!--<div class="bg-gray-lighter">-->
        <!--&lt;!&ndash;<div class="col-md-2">&ndash;&gt;-->
        <!--<form class="form-inline" role="form">-->

        <!--<file-wrapper class="btn col-md-2" @on-file-change="imgChange">-->
        <!--<i class="glyphicon glyphicon-picture" title="添加图片"></i>-->

        <!--</file-wrapper>-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->

        <!--<textarea class=" " type="text" v-model="content" placeholder="添加文字"></textarea>-->
        <!--<button @click="saveTextData">添加回答</button>-->
        <!--&lt;!&ndash;<button @click="textData.content = ''">取消</button>&ndash;&gt;-->
        <!--</form>-->
        <!--</div>-->
        <!--<div class="">-->
        <!--<div v-for="(data,index) in list" :key="index">-->

        <!--&lt;!&ndash;<div class="col-md-10 wrap">&ndash;&gt;-->
        <!--<form class="form-horizontal">-->
        <!--<div class="form-group">-->
        <!--<textarea v-if="data.type==='TEXT'" class="col-md-10 col-md-offset-1  border-none"-->
        <!--v-model="data.content"></textarea>-->
        <!--&lt;!&ndash;<span v-if="data.type==='TEXT'" class="text-justify" v-model="data.content"></span>&ndash;&gt;-->
        <!--<div v-if="data.type==='IMG'" class="col-md-10 col-md-offset-1">-->
        <!--<img class="" :src="data.content">-->
        <!--&lt;!&ndash;<span v-if="data.type==='IMG'">尺寸:{{image.width}}X{{image.height}}</span>&ndash;&gt;-->
        <!--</div>-->
        <!--<a @click="deleteDataFromList(index)" title="删除" class="col-md-1">-->
        <!--<span class="glyphicon glyphicon-remove"></span>-->
        <!--</a>-->
        <!--</div>-->
        <!--</form>-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--</div>-->
        <!--</div>-->
        <table>
            <thead class="bg-gray-lighter">
            <tr>

                <th style="width: 90%">
                    <textarea class="" style="width: 80%" v-model="content" placeholder="请在此处添加回答，而后请按'添加回答'，每条回答可以再编辑，确认无误后可以点'确定'"></textarea>
                    <label class="btn-link center-vertical" @click="saveTextData">添加回答</label>
                </th>
                <th>
                    <file-wrapper class="btn " @on-file-change="imgChange" ref="child">
                        <i class="glyphicon glyphicon-picture" title="添加图片">添加图片</i>
                    </file-wrapper>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(data,index) in list" :key="index">
                <td>
                    <textarea v-if="data.type==='TEXT'" class="" style="width: 80%"
                              v-model="data.content"></textarea>
                    <div v-if="data.type==='IMG'" class=" ">
                        <img class="pic-max-500" :src="data.content" @click="invokeChildImgChage(index)">
                    </div>
                </td>
                <td><a @click="deleteDataFromList(index)" title="删除" class="col-md-1">
                    <span class="glyphicon glyphicon-remove"></span>
                </a></td>
            </tr>
            </tbody>

        </table>
    </div>
</template>

<script>

    import fileUploader from '@/utils/fileUploader'
    import FileWrapper from '@/components/file-upload-wrapper'
    import util from '@/utils/utils'

    export default {
        components: {
            FileWrapper
        },
        mounted() {
            this.$emit('on-get-datalist', this.list);
        },
        props: ['metas'],
        methods: {

            imgChange(file) {
                let vm = this;
                fileUploader.normal(file).then(data => {
                    if (vm.replaceImgIndex) {
                        console.log(vm.replaceImgIndex)
                        vm.list[vm.replaceImgIndex].content = data;
                        vm.replaceImgIndex = null;
//                    util.getFileSize(file, vm);
                    }
                    else {
                        vm.list.push({"type": "IMG", "content": data});
                    }
                    this.sendDataToFather();
                })

            },
            saveTextData() {
                let content = this.content;
                this.list.push({"type": "TEXT", "content": content});
                this.sendDataToFather()
            },
            deleteDataFromList(index) {
                this.list.splice(index, 1);
                this.sendDataToFather();
            },
            invokeChildImgChage(index) {
                this.replaceImgIndex = index;
                this.$refs.child.openFinder();
            },
            sendDataToFather() {
                this.$emit("on-data-change", this.list);
            }

        },
        data() {
            return {
                /**
                 * initial data from father
                 * eg. answerMetas
                 */
                list: this.metas,
                content: '',
                image: {
                    width: 0,
                    height: 0
                },
                replaceImgIndex: null
            }
        },
        computed: {}
    }
</script>

<style lang="scss" scoped>
    .hidden-file-input {
        visibility: hidden;
        position: absolute;
        overflow: hidden;
        width: 0px;
        height: 0px;
        border: none;
        margin: 0px;
        padding: 0px;
    }

    .center-vertical {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }

    .wrap {
        word-break: break-all;
        word-wrap: break-word
    }

    .border-none {
        border: none
    }
    .pic-max-500 {
        max-width: 500px;
        max-height: 500px;
    }
</style>