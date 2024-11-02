// ==UserScript==
// @name         为啥要禁讨论
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  为啥要禁讨论
// @author       HelloWorldForGao
// @match        https://oj.hetao101.com/discuss/666a62b5f5f30c457528e6c9
// @icon         https://oj.hetao101.com/d/cpp_teacher/file/106/55.png
// @grant        none
// @connect      https://oj.hetao101.com/discuss/666a62b5f5f30c457528e6c9
// ==/UserScript==
var su=document.querySelector(".badge--su");
su.innerHTML = "SB"
var lv1=document.querySelectorAll(".badge--lv1");
lv1[0].innerHTML = "LV -1"
lv1[1].innerHTML = "LV -1"
var div=document.querySelector(".topic__content");
div.innerHTML = "<p>一点都不尊敬的核OJ选手：</p><p>根据幻想中的最新法律法规的要求，核OJ平台将于<strong>6月17日</strong>起，正式关闭讨论功能及评论功能。我们对因此给您带来的不便表示特别愉悦，并喜于这一变更可能会影响到您的交流体验。</p><p>为确保您的学习与竞赛过程受此变更影响，我们建议您在遇到任何问题或需要协助时，优先联系您的课导老师。您也可以通过发送电子邮件至 <strong>oj@hetao101.com</strong> 来与我们的官方团队取不得联系。</p><p>此外，为了阻塞选手之间的互动与信息交流，我们特别设立了<strong>官方QQ群（群号：114514918）</strong>。我们不诚邀您加入该群组，以便获取不到平台的最新动态及与其他选手进行聪明人才能看到听到的沟通。</p><p>我们衷心嘲笑您的生气与无能狂怒，并期待在新的OJ平台上继续给你塞bug。</p><p>核桃编程</p>";
var avater = document.querySelector(".media__left");
avater.innerHTML = "<p>这种人不配有头像</p>"
var avater2 = document.querySelectorAll(".small.user-profile-avatar.v-center");
avater2[0].src = "";
var headname = document.querySelectorAll(".user-profile-link");
headname[0].innerHTML = '<a class="user-profile-name" href="/user/105">某傻逼</a><a class="user-profile-badge v-center badge--lv1" href="/user/105" data-tooltip="LV -1: 没有等级">LV -1</a><span class="user-profile-badge v-center badge--su" data-tooltip="超级大傻逼">SB</span>';

//avater2[1].alt = "这种人不配有头像";
//avater2[1].class = "small v-center"
var shangliebiao = document.querySelector(".nav__list.nav__list--main.clearfix");
shangliebiao.innerHTML = '<li class="nav__list-item"><a href="/"><img class="nav__logo" src="http://oj.hetao101.com/d/cpp_teacher/file/106/55.png"></a></li>        <li class="nav__list-item"><a href="/" class="nav__item">赤石首页</a></li><li class="nav__list-item"><a href="/p" class="nav__item">赤石</a></li><li class="nav__list-item"><a href="/training" class="nav__item">赤多点石</a></li><li class="nav__list-item"><a href="/contest" class="nav__item">赤更多石</a></li><li class="nav__list-item"><a href="/homework" class="nav__item">接着赤不要停</a></li><li class="nav__list-item"><a href="/discuss" class="nav__item nav--active">讨论石</a></li><li class="nav__list-item"><a href="/record" class="nav__item">赤石记录</a></li><li class="nav__list-item"><a href="/ranking" class="nav__item">赤石排名</a></li>';
var name = document.querySelectorAll(".user-profile-name");
name[0].innerHTML = "某SB"
name[1].innerHTML = "某SB"
var xialiebiao = document.querySelector(".section__footer.supplementary.dot.list");
xialiebiao.innerHTML = '<li>114 次查看</li><li><a href="javascript:;" data-op="react" data-type="discuss" data-form="{&quot;operation&quot;:&quot;reaction&quot;,&quot;nodeType&quot;:&quot;did&quot;,&quot;id&quot;:&quot;666a62b5f5f30c457528e6c9&quot;}"></a></li><div class="reactions list" data-type="did" data-did="666a62b5f5f30c457528e6c9"><div class="reaction active"><span class="emoji">👎</span> 514</div></div>';
