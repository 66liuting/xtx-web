<template>
  <div class="foot-box">
    <div class="content">
      <div class="client-serve">
        <h5 class="title">客户服务</h5>
        <div class="tag">
          <div class="on-service">
            <i class="iconfont icon-kefu"></i>
            <p>在线客服</p>
          </div>
          <div class="problem">
            <i class="iconfont icon-question"></i>
            <p>问题反馈</p>
          </div>
        </div>
      </div>

      <div class="about-us">
        <h5 class="title">关于我们</h5>
        <div class="tag">
          <div class="on-service">
            <i class="iconfont icon-weixin"></i>
            <p>公众号</p>
          </div>
          <div class="problem">
            <i class="iconfont icon-weibo"></i>
            <p>微博</p>
          </div>
        </div>
      </div>

      <div class="upload-app">
        <h5 class="title">下载APP</h5>
        <div class="tag">
          <img src="../../../assets/images/qrcode.jpg" />
          <div class="problem">
            <p>扫描二维码</p>
            <p>立马下载APP</p>
            <el-button type="primary">下载页面</el-button>
          </div>
        </div>
      </div>
      <div class="serve-tel">
        <h5 class="title">服务热线</h5>
        <div class="tag">
          <p class="tel">400-0000-000</p>
          <p>周一至周日 8:00-18:00</p>
        </div>
      </div>
    </div>

    <div class="foot">
      <div class="tag">
        <div>
          <i class="iconfont icon-footer01"></i>
          <span>价格亲民</span>
        </div>
        <div>
          <i class="iconfont icon-footer02"></i>
          <span>物流快捷</span>
        </div>
        <div>
          <i class="iconfont icon-footer03"></i>
          <span>品质新鲜</span>
        </div>
      </div>
      <div class="remark">
        <ul>
          <li><a href="#">关于我们</a>|</li>
          <li><a href="#">帮助中心</a>|</li>
          <li><a href="#">售后服务</a>|</li>
          <li><a href="#">配送与验收</a>|</li>
          <li><a href="#">上午合作</a>|</li>
          <li><a href="#">搜索推荐</a>|</li>
          <li><a href="#">友情链接</a></li>
        </ul>
        <p>CopyRight @ 小兔鲜儿</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.foot-box {
  margin-top: 10px;
  width: 100%;
  background-color: #fff;
}
.foot-box > .content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 1240px;
  height: 300px;
}
.foot-box > .content > .client-serve,
.foot-box > .content > .about-us,
.foot-box > .content > .upload-app,
.foot-box > .content > .serve-tel {
  flex: 1;
  border-right: 1px solid $lineColor;
}
.foot-box > .content > .client-serve > h5,
.foot-box > .content > .about-us > h5,
.foot-box > .content > .upload-app > h5,
.foot-box > .content > .serve-tel > h5 {
  font-size: 20px;
  color: #888888;
  font-weight: normal;
  text-align: center;
}
.foot-box > .content > .client-serve > .tag,
.foot-box > .content > .about-us > .tag,
.foot-box > .content > .upload-app > .tag,
.foot-box > .content > .serve-tel > .tag {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
.foot-box > .content > .client-serve > .tag > .on-service,
.foot-box > .content > .client-serve > .tag > .problem,
.foot-box > .content > .about-us > .tag > .on-service,
.foot-box > .content > .about-us > .tag > .problem {
  width: 80px;
  height: 80px;
  border: 1px solid $lineColor;
  font-size: 14px;
  color: #888888;
  text-align: center;
  padding-top: 5px;

}
.foot-box > .content > .client-serve > .tag > .on-service > i,
.foot-box > .content > .client-serve > .tag > .problem > i,
.foot-box > .content > .about-us > .tag > .on-service > i,
.foot-box > .content > .about-us > .tag > .problem > i {
  font-size: 30px;
  font-weight: 700;
}
.foot-box > .content > .client-serve > .tag > .problem,
.foot-box > .content > .about-us > .tag > .problem {
  margin-left: 10px;
}
.foot-box > .content > .upload-app > .tag > img {
  width: 80px;
}
.foot-box > .content > .upload-app > .tag > div {
  margin-left: 15px;
}
.foot-box > .content > .upload-app > .tag > div > p {
  margin-bottom: 5px;
  font-size: 14px;
  color: #888888;
  text-align: center;
}
.foot-box > .content > .serve-tel > .tag {
  display: flex;
  flex-direction: column;
}
.foot-box > .content > .serve-tel > .tag > p {
  color: #888888;
  font-size: 14px;
}
.foot-box > .content > .serve-tel > .tag > .tel {
  font-size: 25px;
}
.foot-box > .foot {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  background-color: #333;
}
.foot-box > .foot > .tag {
  display: flex;
  align-items: center;
  text-align: center;
  padding: 50px;
}
.foot-box > .foot > .tag {
  border-bottom: 1px solid $lineColor;
}
.foot-box > .foot > .tag > div {
  flex: 1;
  color: white;
  font-size: 30px;
}
.foot-box > .foot > .tag > div > i {
  font-size: 50px;
  vertical-align: middle;
}
.foot-box > .foot > .tag > div > span {
  margin-left: 10px;
  vertical-align: middle;
}
.foot-box > .foot > .remark {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.foot-box > .foot > .remark > ul {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.foot-box > .foot > .remark > ul > li {
  color: #999999;
  font-size: 12px;
}
.foot-box > .foot > .remark > ul > li > a,
.foot-box > .foot > .remark > p {
  color: #999999;
  font-size: 12px;
  margin: 0px 10px;
}
.foot-box > .foot > .remark > p {
  margin-top: 10px;
}
</style>