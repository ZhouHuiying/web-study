<template>
    <div class="tag-wrapper">
        <ul class="tags-group">
            <li class="tags-item" 
                v-for="(item, index) in tagsList" 
                :key="item.name" 
                :class="{'tag-active': active == item.path}"
                @click="goto(item)">
                {{item.name}}
                <i class="el-icon-circle-close close" @click.stop="close(index)"/>
            </li>
        </ul>
    </div>
</template>

<script>
import bus from './bus'

export default {
    data() {
        return {
            tagsList: [],
            active: '',
        }   
    },
    created() {
        this.setTags(this.$route),
        bus.$on('tagsclear', () => {
            this.tagsList=[]
        })
    },
    methods: {
        setTags(route) {
            console.log(route)
            let obj = {}
            obj.path = route.path   
            obj.name = route.name
            obj.EnName = route.path.substr(1)
            let isExist = this.tagsList.some(function(item) {
                return item.path == obj.path
            })
            if (!isExist) {
                if(this.tagsList.length>=8){
                    this.$message({
                        message: '警告：不能打开多于八个标签',
                        type: 'warning'
                    })
                    return
                }
                this.active = obj.path
                bus.$emit('tags', obj.EnName)
                this.tagsList.push(obj)
            } else {
                this.active = route.path
            }
        },
        close(index) {
            console.log(index)
            if (this.active == this.tagsList[index].path) {
                if (index > 0) {
                    this.active = this.tagsList[index - 1].path
                } else if (index == 0 && this.tagsList.length > 1) {
                    this.active = this.tagsList[index + 1].path
                } else {
                    this.$message({
                        message: '警告哦，无法关闭最后一个标签哦',
                        type: 'warning'
                    })
                    return
                }
            }
            this.tagsList.splice(index, 1)
        },
        goto(item) {
            this.$router.push(item.path)
            this.active = item.path
        }
    },
    watch: {
        $route(newVal){
            this.setTags(newVal)
        }
    }
}
</script>

<style scoped>
.tag-wrapper {
    height: 40px;
    overflow: hidden;
}
.tags-group {
    display: flex;
    margi
}
.tags-item {
    position: relative;
    width: 100px;
    height: 30px;
    margin-right: 10px;
    font-size: 12px;
    color: #666;
    text-align: center;
    line-height: 30px;
    border: 1px solid black;
    border-radius: 3px;
    cursor: pointer;
}
.tag-active {
    color: #fff;
    background-color: #409eff;
    border: 1px solid #409eff;
}
.close {
    position: absolute;
    right: 5px;
    top: 9px;
}
</style>