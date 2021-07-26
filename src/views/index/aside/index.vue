<!--  -->
<template>
    <div class="box">
        <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
        >
            <el-submenu index="1">
                <template #title>
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item-group>
                    <template #title>分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <template #title>选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <template #title>导航二</template>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <template #title>导航三</template>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <template #title>导航四</template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    props: {
        isCollapse: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style  scoped>
.box {
    --前景色: #ffffff;
}
.box {
    background-color: var(--前景色);
    margin: 10px 0;
    height: calc(100% - 20px);
}
</style>
