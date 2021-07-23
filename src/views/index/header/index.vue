<!--  -->
<template>
    <div class="box">
        <el-row :gutter="10">
            <el-col :span="3">
                <div class="bg_color">
                    <div class="logo">
                        <el-avatar :src="url"></el-avatar>
                    </div>
                    <div class="title">
                        <span>{{ title }}</span>
                    </div>
                </div>
            </el-col>
            <el-col :span="21">
                <el-row :gutter="10" class="right bg_color">
                    <el-col :span="1">
                        <div class="iconBtn">
                            <i class="fontIcon" :class="stowOrUnfoldIcon" @click="menuShowHide"></i>
                        </div>
                    </el-col>
                    <el-col :span="15">
                        <div>
                            <el-menu
                                :default-active="activeIndex"
                                class="el-menu-demo"
                                mode="horizontal"
                                @select="handleSelect"
                            >
                                <el-menu-item index="1">系统管理</el-menu-item>
                                <el-submenu index="2">
                                    <template #title>业务1</template>
                                    <el-menu-item index="2-1">选项1</el-menu-item>
                                    <el-menu-item index="2-2">选项2</el-menu-item>
                                    <el-menu-item index="2-3">选项3</el-menu-item>
                                    <el-submenu index="2-4">
                                        <template #title>选项4</template>
                                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                                        <el-menu-item index="2-4-3">选项3</el-menu-item>
                                    </el-submenu>
                                </el-submenu>
                                <el-menu-item index="3" disabled>消息中心</el-menu-item>
                                <el-menu-item index="4">
                                    <a href=" https://cbcn.gitee.io/" target="_blank">个人中心</a>
                                </el-menu-item>
                            </el-menu>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="personalBox">
                            <div class="functionBox">
                                <el-button type="text" class="functionBtn" icon="el-icon-refresh"></el-button>
                                <el-button
                                    type="text"
                                    class="functionBtn"
                                    icon="el-icon-message-solid"
                                ></el-button>
                                <el-button type="text" class="functionBtn" icon="el-icon-lock"></el-button>
                                <el-button
                                    type="text"
                                    class="functionBtn"
                                    icon="el-icon-full-screen"
                                ></el-button>
                                <el-dropdown class="userBox">
                                    <span class="el-dropdown-link">
                                        {{ userName }}
                                        <i class="el-icon-arrow-down el-icon--right"></i>
                                    </span>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                            <el-dropdown-item>个人中心</el-dropdown-item>
                                            <el-dropdown-item>修改密码</el-dropdown-item>
                                            <el-dropdown-item>退出</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            unfold: true,//展开
            url: require("assets/logo.png"),
            title: "VUE-ELE-PRO",
            activeIndex: '1',
        }
    },
    emits: ['click-show-hide-aside'],
    computed: {
        stowOrUnfoldIcon() {
            return this.unfold ? "el-icon-s-fold" : "el-icon-s-unfold";
        },
        userName() {
            return this.$store.getters["token/username"]; //需要监听的数据
        },
    },
    methods: {
        menuShowHide(event) {
            this.unfold = !this.unfold;
            this.$emit("click-show-hide-aside");
        }
    }
}
</script>

<style scoped>
.box {
    --headerH: 80px;
    --前景色: #ffffff;
}
.box {
    height: 100%;
    display: block;
    white-space: nowrap;
    background-color: #f9fafc;
}
.bg_color {
    background-color: var(--前景色);
}
.right {
    height: var(--headerH);
}
.iconBtn {
    height: 80px;
    line-height: 80px;
}
.logo {
    height: var(--headerH);
    /*flex 布局*/
    display: flex;
    /*实现垂直居中*/
    align-items: center;
    /*实现水平居中*/
    justify-content: center;
    float: left;
}
.title {
    height: var(--headerH);
    line-height: var(--headerH);
    text-align: center;
    font-size: 26px;
    font-weight: 600;
}
.fontIcon {
    padding: 0 10px 0 10px;
    font-size: 20px;
    cursor: pointer;
}
.personalBox {
    /* width: ; */
    height: 100%;
    /*flex 布局*/
    display: flex;
    /*实现垂直居中*/
    align-items: center;
}
.personalBox .functionBox {
    margin-left: auto;
}
.personalBox .functionBox >>> .userBox {
    padding-left: 20px;
}
.functionBtn {
    padding-left: 10px;
    font-size: 18px;
}
.functionBox >>> .el-dropdown-link {
    font-size: 16px;
}
</style>
