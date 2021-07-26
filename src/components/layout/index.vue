<!--  -->
<template>
    <el-container class="box">
        <el-header :height="headerHeight">
            <slot name="header"></slot>
        </el-header>
        <el-container>
            <el-aside :width="asideWidth">
                <slot name="aside"></slot>
            </el-aside>
            <el-main>
                <slot name="main"></slot>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: {
        headerHeight: {
            type: String,
            default: "60px"
        },
        asideWidth: {
            type: String,
            default: "245px"
        }
    }
}
</script>

<style  scoped>
.box {
    height: 100%;
}
</style>
