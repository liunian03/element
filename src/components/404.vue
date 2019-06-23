<template>
  <div class="error-page">
    <div class="imgBlock">
      <img
        src="@/assets/404.svg"
        alt=""
      >
    </div>
    <div class="content">
      <h1>404</h1>
      <div class="desc">抱歉，你访问的页面不存在</div>
      <div class="actions">
        <el-button
          type="primary"
          @click="_self.$router.push({path: '/'})"
        >返回首页</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.error-page {
    margin: 24px 24px 0;
    min-height: 500px;
    display: flex;
    align-items: center;
}
  .imgBlock {
      padding-right: 88px;
      flex: 0 0 50%;
      width: 50%;
  }
    img {
      height: 360px;
      width: 100%;
      max-width: 430px;
      float: right;
      display: block;
    }
  .content {
      flex: auto;
  }
    h1 {
      color: #434e59;
      font-size: 72px;
      font-weight: 600;
      line-height: 72px;
      margin-bottom: 24px;
    }
    .desc {
      color: rgba(0, 0, 0, 0.45);
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 16px;
    }


</style>
