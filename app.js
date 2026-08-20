const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const header = $('#site-header');
const menuButton = $('.mobile-menu-button');
const mobileMenu = $('#mobile-menu');
const dialog = $('#service-dialog');
const dialogTitle = $('#dialog-title');
const dialogContent = $('#dialog-content');
const dialogClose = $('.dialog-close');
const toast = $('#toast');

const merchantCapabilities = [
  ['运营力', '仓、揽、转、运、派全链路定制化操作，满足商家个性化需求。'],
  ['体验力', '需求极速响应，快速完结，优先理赔，精准诊断。'],
  ['差异力', '多维度细分市场需求，提供定制化解决方案。'],
  ['价格力', '灵活的合作模式和结算政策，提供高性价比服务。'],
  ['科技力', '多级防控，保障万亿级包裹信息安全。全网数智化升级，全链路降本增效。'],
];

const actionViews = {
  send: {
    title: '在线寄件',
    content: `
      <p class="demo-note">这是无网络请求的静态演示。填写内容仅保存在当前页面内，关闭后即被清除。</p>
      <form class="demo-form" data-demo-form="send">
        <div class="demo-field"><label for="sender-name">寄件人</label><input id="sender-name" name="name" autocomplete="off" placeholder="请输入姓名" required></div>
        <div class="demo-field"><label for="sender-phone">联系电话</label><input id="sender-phone" name="phone" inputmode="tel" autocomplete="off" placeholder="请输入手机号" pattern="[0-9]{11}" required></div>
        <div class="demo-field demo-field--full"><label for="sender-area">取件城市</label><select id="sender-area" name="area"><option>上海市</option><option>北京市</option><option>杭州市</option><option>广州市</option><option>深圳市</option><option>成都市</option></select></div>
        <div class="demo-field demo-field--full"><label for="sender-address">取件地址</label><textarea id="sender-address" name="address" autocomplete="off" placeholder="请输入演示地址" required></textarea></div>
        <button class="demo-submit" type="submit">预约上门取件</button>
      </form>`,
  },
  fee: {
    title: '运费查询',
    content: `
      <p class="demo-note">试算采用仓库中的公开演示费率，不代表实际报价，也不会连接计费系统。</p>
      <form class="demo-form" data-demo-form="fee">
        <div class="demo-field"><label for="fee-origin">寄件地</label><select id="fee-origin" name="origin"><option>上海</option><option>北京</option><option>浙江</option><option>广东</option><option>四川</option><option>新疆</option></select></div>
        <div class="demo-field"><label for="fee-destination">收件地</label><select id="fee-destination" name="destination"><option>浙江</option><option>上海</option><option>北京</option><option>广东</option><option>四川</option><option>新疆</option></select></div>
        <div class="demo-field demo-field--full"><label for="fee-weight">预估重量（kg）</label><input id="fee-weight" name="weight" type="number" value="1" min="0.1" max="50" step="0.1" required></div>
        <button class="demo-submit" type="submit">立即试算</button>
        <div class="result-card demo-field--full" id="fee-result" hidden></div>
      </form>`,
  },
  range: {
    title: '服务范围查询',
    content: `
      <p class="demo-note">此处仅演示本地数据筛选。网点与覆盖范围不会从生产系统读取。</p>
      <form class="demo-form" data-demo-form="range">
        <div class="demo-field demo-field--full"><label for="range-city">城市或区县</label><input id="range-city" name="city" placeholder="例如：上海、杭州、广州" required></div>
        <button class="demo-submit" type="submit">查询服务范围</button>
        <div class="result-card demo-field--full" id="range-result" hidden></div>
      </form>`,
  },
  'outlet-search': {
    title: '服务网点查询',
    content: `
      <p class="demo-note">地图和实时网点接口已从股东演示版移除。</p>
      <form class="demo-form" data-demo-form="outlet">
        <div class="demo-field demo-field--full"><label for="outlet-city">选择城市</label><select id="outlet-city" name="city"><option>上海市</option><option>北京市</option><option>杭州市</option><option>广州市</option><option>深圳市</option></select></div>
        <button class="demo-submit" type="submit">查看演示网点</button>
        <div class="result-card demo-field--full" id="outlet-result" hidden></div>
      </form>`,
  },
  merchant: {
    title: '商家合作',
    content: `
      <p>从寄递、仓储到增值服务，为不同规模商家提供可配置的全链路解决方案。</p>
      <div class="info-grid">
        <div class="info-card"><strong>定制履约</strong><span>覆盖仓、揽、转、运、派的业务编排</span></div>
        <div class="info-card"><strong>服务保障</strong><span>客户需求快速响应与优先处理</span></div>
        <div class="info-card"><strong>数据能力</strong><span>以脱敏指标呈现履约质量与趋势</span></div>
        <div class="info-card"><strong>灵活结算</strong><span>按演示合作模型配置账期与服务</span></div>
      </div>
      <form class="demo-form demo-form--spaced" data-demo-form="lead">
        <div class="demo-field"><label for="lead-company">企业名称</label><input id="lead-company" required autocomplete="off"></div>
        <div class="demo-field"><label for="lead-contact">联系人</label><input id="lead-contact" required autocomplete="off"></div>
        <button class="demo-submit" type="submit">提交合作意向</button>
      </form>`,
  },
  warehouse: {
    title: '仓储服务',
    content: `<p>以仓配一体化为核心，覆盖入库、库存、拣选、打包和出库环节，为商家提供可视化履约体验。</p><div class="info-grid"><div class="info-card"><strong>标准仓</strong><span>规范化仓内作业与库存管理</span></div><div class="info-card"><strong>云仓协同</strong><span>多仓库存与订单智能调度</span></div><div class="info-card"><strong>波次作业</strong><span>适配大促与日常订单节奏</span></div><div class="info-card"><strong>仓配一体</strong><span>减少交接，提升履约效率</span></div></div>`,
  },
  'value-added': {
    title: '增值服务',
    content: `<p>围绕不同寄递场景提供签收、保价、包装和个性化操作等演示能力。</p><div class="info-grid"><div class="info-card"><strong>签单返还</strong><span>适用于合同与票据寄递场景</span></div><div class="info-card"><strong>保价服务</strong><span>为高价值寄件提供额外保障</span></div><div class="info-card"><strong>定制包装</strong><span>满足易碎品与品牌化包装需求</span></div><div class="info-card"><strong>预约派送</strong><span>按约定时间完成末端服务</span></div></div>`,
  },
  prohibited: {
    title: '违禁品查询',
    content: `<p class="demo-note">以下为演示分类。实际寄件请依据最新法律法规及现场收寄要求。</p><div class="info-grid"><div class="info-card"><strong>危险品</strong><span>易燃、易爆、腐蚀性及放射性物品</span></div><div class="info-card"><strong>管制物品</strong><span>枪支弹药、管制器具等依法禁寄物</span></div><div class="info-card"><strong>有害物品</strong><span>毒性、生化及可能危害公共安全物品</span></div><div class="info-card"><strong>其他禁寄物</strong><span>法律法规及主管部门规定的其他物品</span></div></div>`,
  },
  standards: {
    title: '快递服务标准',
    content: `<p>展示版保留服务承诺的呈现结构，不嵌入生产规则引擎。</p><div class="info-grid"><div class="info-card"><strong>规范收寄</strong><span>实名收寄、验视和安全包装</span></div><div class="info-card"><strong>全程跟踪</strong><span>关键节点形成可追踪服务记录</span></div><div class="info-card"><strong>妥善投递</strong><span>按约定方式完成末端交付</span></div><div class="info-card"><strong>售后响应</strong><span>受理查询、投诉及理赔需求</span></div></div>`,
  },
  complaint: {
    title: '投诉建议',
    content: `
      <p class="demo-note">本表单不会发送数据。生产客服与工单接口均未包含在本项目中。</p>
      <form class="demo-form" data-demo-form="feedback">
        <div class="demo-field"><label for="feedback-type">反馈类型</label><select id="feedback-type"><option>服务建议</option><option>物流体验</option><option>网点服务</option></select></div>
        <div class="demo-field"><label for="feedback-contact">联系方式</label><input id="feedback-contact" autocomplete="off" placeholder="选填"></div>
        <div class="demo-field demo-field--full"><label for="feedback-content">反馈内容</label><textarea id="feedback-content" required></textarea></div>
        <button class="demo-submit" type="submit">提交演示反馈</button>
      </form>`,
  },
  'customer-service': {
    title: '客服咨询',
    content: `<p class="demo-note">外部在线客服链接已替换为静态帮助中心，避免演示环境连接生产服务。</p><div class="info-grid"><div class="info-card"><strong>服务热线</strong><span>95543</span></div><div class="info-card"><strong>服务时间</strong><span>7 × 12 小时人工服务</span></div><div class="info-card"><strong>快件查询</strong><span>可使用首页的本地查询演示</span></div><div class="info-card"><strong>服务建议</strong><span>通过静态投诉建议表单体验流程</span></div></div><button class="demo-submit demo-submit--standalone" type="button" data-action="complaint">体验投诉建议</button>`,
  },
  franchise: {
    title: '申请网点加盟',
    content: `
      <p>成熟的加盟体系与全方位支持能力，帮助合作伙伴长期稳健经营。</p>
      <p class="demo-note">本地表单仅用于展示信息架构，不采集、不上传加盟申请。</p>
      <form class="demo-form" data-demo-form="franchise">
        <div class="demo-field"><label for="franchise-name">申请人</label><input id="franchise-name" autocomplete="off" required></div>
        <div class="demo-field"><label for="franchise-city">意向城市</label><input id="franchise-city" autocomplete="off" required></div>
        <div class="demo-field demo-field--full"><label for="franchise-note">资源简介</label><textarea id="franchise-note" autocomplete="off"></textarea></div>
        <button class="demo-submit" type="submit">提交演示申请</button>
      </form>`,
  },
  investors: {
    title: '投资者关系',
    content: `<p>面向股东与投资者呈现规范、透明、持续的公司信息沟通体验。</p><div class="info-grid"><div class="info-card"><strong>公司治理</strong><span>治理结构与规范运作展示</span></div><div class="info-card"><strong>定期报告</strong><span>年度与半年度报告分类入口</span></div><div class="info-card"><strong>临时公告</strong><span>重大事项与治理公告索引</span></div><div class="info-card"><strong>投资者联系</strong><span>静态展示沟通渠道与常见问题</span></div></div><p class="demo-note">为避免过期或敏感披露，本演示仓库不包含真实公告文件、行情接口或内部财务数据。</p>`,
  },
  company: {
    title: '企业简介',
    content: `<p>申通快递初创于1993年，是中国率先成立的民营快递公司，开快递加盟制先河，也是国家5A级物流企业、A股上市企业。</p><p>公司秉承“正道经营、长期主义”的发展理念，坚定“打造中国体验领先的经济型快递”战略目标，持续推进基础设施建设和数智化运营。</p>`,
  },
  responsibility: {
    title: '社会责任',
    content: `<p>围绕绿色物流、员工成长、乡村振兴与应急保障等方向，持续将社会责任融入经营管理。</p><div class="info-grid"><div class="info-card"><strong>绿色物流</strong><span>推进包装减量、循环与低碳运输</span></div><div class="info-card"><strong>公益行动</strong><span>服务社区与重点地区寄递保障</span></div></div>`,
  },
  compliance: {
    title: '廉正合规',
    content: `<p>坚持正道经营，建设覆盖制度、培训、监督和反馈的合规文化。</p><p class="demo-note">演示版不包含内部举报渠道、案件信息或合规系统地址。</p>`,
  },
  careers: {
    title: '人才招聘',
    content: `<p>与热爱物流、技术和客户体验的人才一起，推动中国快递服务持续进步。</p><div class="info-grid"><div class="info-card"><strong>校园招聘</strong><span>面向应届毕业生的人才项目</span></div><div class="info-card"><strong>社会招聘</strong><span>运营、技术、产品及职能岗位</span></div></div><p class="demo-note">真实招聘系统属于外部服务，本演示站不连接候选人数据。</p>`,
  },
  'all-news': {
    title: '新闻动态',
    content: `<p>这里展示官网首页最新的三条公开新闻内容。完整新闻中心与内容管理接口未打包进静态仓库。</p><div class="info-grid"><div class="info-card"><strong>2026年2月3日</strong><span>告客户书</span></div><div class="info-card"><strong>2026年1月23日</strong><span>申通年货节保障“四件套”</span></div><div class="info-card"><strong>2025年11月3日</strong><span>申通×丹鸟：终于等到你！</span></div></div>`,
  },
};

const newsViews = {
  notice: {
    title: '告客户书',
    content: `<p><strong>2026年2月3日</strong></p><p>为遏制年底电信诈骗等犯罪活动对人民权益和快递行业带来的损害，申通提醒客户增强防范意识，谨慎识别不明电话、短信及链接。</p><p class="demo-note">本页为首页公开摘要的静态展示，不包含内容管理系统中的文章正文。</p>`,
  },
  festival: {
    title: '【官宣】申通年货节保障“四件套”',
    content: `<p><strong>2026年1月23日</strong></p><p>年货发申通，马到又成功！围绕春节寄递需求，申通通过产能、运力、服务与应急保障支持年货寄递体验。</p><p class="demo-note">本页为公开新闻的静态摘要。</p>`,
  },
  acquisition: {
    title: '申通×丹鸟：终于等到你！',
    content: `<p><strong>2025年11月3日</strong></p><p>申通收购丹鸟，进一步丰富服务能力与网络协同想象空间。</p><p class="demo-note">本页为公开新闻的静态摘要。</p>`,
  },
};

function updateHeader() {
  const opacity = Math.min(Math.max(window.scrollY / 80, 0), 1);
  header.style.setProperty('--header-opacity', opacity.toFixed(3));
  header.dataset.scrolled = opacity > 0.45 ? 'true' : 'false';
}

function setMobileMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? '关闭导航' : '打开导航');
  mobileMenu.hidden = !open;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('is-visible'), 3200);
}

function openDialog(view) {
  if (!view) return;
  dialogTitle.textContent = view.title;
  dialogContent.innerHTML = view.content;
  if (!dialog.open) dialog.showModal();
  document.body.classList.add('is-locked');
}

function closeDialog() {
  if (dialog.open) dialog.close();
  document.body.classList.remove('is-locked');
  dialogContent.replaceChildren();
}

function openAction(action) {
  openDialog(actionViews[action]);
}

function handleTracking() {
  const input = $('#tracking-input');
  const error = $('#tracking-error');
  const values = input.value.split(/[\s,，]+/).map((value) => value.trim()).filter(Boolean);
  const format = /^\d{10,18}$/;

  error.textContent = '';
  if (!values.length) {
    error.textContent = '请输入正确的订单号';
    input.focus();
    return;
  }

  const invalidIndex = values.findIndex((value) => !format.test(value));
  if (invalidIndex >= 0) {
    error.textContent = `第 ${invalidIndex + 1} 个单号错误，请输入10至18位数字`;
    input.focus();
    return;
  }

  if (values[0] !== '773123456789012') {
    openDialog({
      title: '运单查询',
      content: `<p class="demo-note">为防止演示环境访问生产物流数据，真实运单查询已禁用。</p><p>可输入演示运单号 <strong>773123456789012</strong> 体验完整跟踪状态。</p><button class="demo-submit demo-submit--standalone" type="button" data-load-demo>载入演示运单</button>`,
    });
    return;
  }

  openDialog({
    title: '运单查询',
    content: `<div class="tracking-result-head"><code>773123456789012</code><span>运输中</span></div><ol class="timeline"><li>快件已到达上海转运中心<time>2026-08-19 10:26</time></li><li>快件已由杭州转运中心发出<time>2026-08-19 03:18</time></li><li>申通快递已揽收<time>2026-08-18 18:42</time></li></ol><p class="demo-note">以上节点全部来自仓库内的虚构演示数据。</p>`,
  });
}

function calculateFee(form) {
  const data = new FormData(form);
  const origin = String(data.get('origin'));
  const destination = String(data.get('destination'));
  const weight = Math.max(0.1, Number(data.get('weight')) || 1);
  const remote = origin === '新疆' || destination === '新疆';
  const same = origin === destination;
  const base = remote ? 20 : same ? 10 : 12;
  const additional = remote ? 8 : same ? 2 : 4;
  const price = base + Math.max(0, Math.ceil(weight) - 1) * additional;
  const result = $('#fee-result', form);
  result.hidden = false;
  result.innerHTML = `<span>演示预估运费</span><br><strong>¥${price.toFixed(2)}</strong><p>首重 ¥${base}，续重 ¥${additional}/kg。实际价格以寄件渠道为准。</p>`;
}

function queryRange(form) {
  const city = String(new FormData(form).get('city') || '').trim();
  const covered = ['上海', '北京', '杭州', '广州', '深圳', '成都', '南京', '苏州', '武汉'];
  const match = covered.some((item) => city.includes(item));
  const result = $('#range-result', form);
  result.hidden = false;
  result.innerHTML = match
    ? `<strong>演示范围内</strong><p>${city} 已匹配静态示例覆盖数据。具体街道范围需以真实业务系统为准。</p>`
    : `<strong>需要进一步确认</strong><p>静态演示数据中未找到“${escapeText(city)}”，请通过官方渠道确认实际覆盖情况。</p>`;
}

function queryOutlet(form) {
  const city = String(new FormData(form).get('city'));
  const result = $('#outlet-result', form);
  result.hidden = false;
  result.innerHTML = `<strong>${city}演示服务网点</strong><p>青浦示范网点 · 距市中心约 18 km<br>营业时间：08:00–19:00</p><p>地址为界面演示信息，并非真实网点定位。</p>`;
}

function escapeText(value) {
  const node = document.createElement('span');
  node.textContent = value;
  return node.innerHTML;
}

function handleDemoForm(form) {
  if (!form.reportValidity()) return;
  const kind = form.dataset.demoForm;
  if (kind === 'fee') {
    calculateFee(form);
    return;
  }
  if (kind === 'range') {
    queryRange(form);
    return;
  }
  if (kind === 'outlet') {
    queryOutlet(form);
    return;
  }
  closeDialog();
  showToast('演示流程已完成；未保存或发送任何数据');
}

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

menuButton.addEventListener('click', () => {
  setMobileMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});

$$('.mobile-menu a').forEach((link) => link.addEventListener('click', () => setMobileMenu(false)));

$$('.merchant-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    const index = Number(tab.dataset.index);
    const detail = $('.merchant-detail');
    $$('.merchant-tab').forEach((item, itemIndex) => {
      item.classList.toggle('is-active', itemIndex === index);
      item.setAttribute('aria-selected', String(itemIndex === index));
    });
    $('#merchant-detail-title').textContent = merchantCapabilities[index][0];
    $('#merchant-detail-copy').textContent = merchantCapabilities[index][1];
    detail.classList.remove('is-changing');
    requestAnimationFrame(() => detail.classList.add('is-changing'));
  });
});

const trackingInput = $('#tracking-input');
trackingInput.addEventListener('input', () => {
  $('#tracking-error').textContent = '';
  $('#tracking-submit').classList.toggle('has-value', trackingInput.value.trim().length > 0);
});
$('#tracking-submit').addEventListener('click', handleTracking);

trackingInput.addEventListener('keydown', (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') handleTracking();
});

document.addEventListener('click', (event) => {
  const actionButton = event.target.closest('[data-action]');
  if (actionButton) {
    event.preventDefault();
    openAction(actionButton.dataset.action);
    setMobileMenu(false);
    return;
  }

  const trackingLink = event.target.closest('[data-focus-tracking]');
  if (trackingLink) {
    event.preventDefault();
    $('#quick-services').scrollIntoView({ behavior: 'smooth' });
    window.setTimeout(() => trackingInput.focus(), 500);
    return;
  }

  const loadDemo = event.target.closest('[data-load-demo]');
  if (loadDemo) {
    closeDialog();
    trackingInput.value = '773123456789012';
    $('#tracking-submit').classList.add('has-value');
    handleTracking();
  }
});

document.addEventListener('submit', (event) => {
  const form = event.target.closest('[data-demo-form]');
  if (!form) return;
  event.preventDefault();
  handleDemoForm(form);
});

$$('[data-news]').forEach((card) => {
  const activate = () => openDialog(newsViews[card.dataset.news]);
  card.addEventListener('click', activate);
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      activate();
    }
  });
});

dialogClose.addEventListener('click', closeDialog);
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) closeDialog();
});
dialog.addEventListener('close', () => document.body.classList.remove('is-locked'));

$('#back-to-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { rootMargin: '-4% 0px -4%', threshold: 0.08 },
);

$$('.reveal').forEach((element) => observer.observe(element));

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) setMobileMenu(false);
});
