<style lang="less" scoped>
  .cron{
    width: 400px;
    margin: 0 auto;
    margin-top: 100px;
    h1{
      font-size: 50px;
      text-align: center;
    }
  }
</style>

<template>
  <div class="cron">
    <h1>vue-cron</h1>
    <el-popover v-model="cronPopover">
      <vueCron ref="vueCron" :showLog=true :data="cron" @change="changeCron" @close="cronPopover=false" i18n="zh_TW"></vueCron>
      <el-input slot="reference" @click="cronPopover=true" v-model="cron" placeholder="* * * * * ? *"></el-input>
    </el-popover>
    <el-button @click="showModal = true">open modal</el-button>

    <el-dialog
      title="test modal"
      :visible.sync="showModal"
      width="50%"
      height="70%"
      @close="closeModal">
      <el-form ref="form" label-width="120px">
        <el-form-item label="Crontab">
          <el-popover 
            v-model="cronPopover2"
            trigger="click"
          >
            <vueCron 
              i18n="zh_TW"
              ref="vueCron2"
              :data="cron2"
              @change="changeCron2"
              @close="cronPopover2=false"
            ></vueCron>
            <el-input slot="reference" @click="cronPopover2=true" v-model="cron2"></el-input>
          </el-popover>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showModal = false">close</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

  export default {
    data(){
      return {
        cronPopover:false,
        cronPopover2:false,
        cron:'',
        cron2:'',
        showModal: false
      }
    },
    components: {},
    computed: {},
    methods: {
      changeCron(val){
        this.cron=val
      },
      changeCron2(val){
        this.cron2=val
      },
      closeModal(){
        console.log('close')
        this.$nextTick(async () => this.$refs.vueCron2.reset())
        console.log('close complete')
      }
    },
    mounted(){

    }
  }
</script>