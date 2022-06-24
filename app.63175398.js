(function(e) {
    function t(t) {
        for (var a, r, s = t[0], c = t[1], l = t[2], d = 0, p = []; d < s.length; d++)
            r = s[d],
            Object.prototype.hasOwnProperty.call(o, r) && o[r] && p.push(o[r][0]),
            o[r] = 0;
        for (a in c)
            Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a]);
        u && u(t);
        while (p.length)
            p.shift()();
        return i.push.apply(i, l || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], a = !0, s = 1; s < n.length; s++) {
                var c = n[s];
                0 !== o[c] && (a = !1)
            }
            a && (i.splice(t--, 1),
            e = r(r.s = n[0]))
        }
        return e
    }
    var a = {}
      , o = {
        app: 0
    }
      , i = [];
    function r(t) {
        if (a[t])
            return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, r),
        n.l = !0,
        n.exports
    }
    r.m = e,
    r.c = a,
    r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    r.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(e, t) {
        if (1 & t && (e = r(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (r.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var a in e)
                r.d(n, a, function(t) {
                    return e[t]
                }
                .bind(null, a));
        return n
    }
    ,
    r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return r.d(t, "a", t),
        t
    }
    ,
    r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r.p = "";
    var s = window["webpackJsonp"] = window["webpackJsonp"] || []
      , c = s.push.bind(s);
    s.push = t,
    s = s.slice();
    for (var l = 0; l < s.length; l++)
        t(s[l]);
    var u = c;
    i.push([0, "chunk-vendors"]),
    n()
}
)({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    "07a6": function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "0c3a": function(e, t, n) {
        "use strict";
        n("e916")
    },
    1: function(e, t) {},
    10: function(e, t) {},
    2: function(e, t) {},
    "278e": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADsSURBVHgB7ZRNCoMwEIUzejG70AuU0noQdWlc+nOPIrQncFF7MaeJIviTJhNbKAUfCGbMy0fMmzC26y9UVXVaFHX6LQ8sC2V59UT5Id8RgcfxOWMEACLyYYSHKArb6XdnaRgmYL8wAHLTjqaArsNsCZByVcamubdBcBS7BA+Aeb5/ErXb0wRIkpCr1lNCKCAqQAvRgWwAUsAIEmHgYup4Nq14PCqADFGAyAAphxEF4KBu/DFk3gf97yLFmwxZ98HlYNNHUq4NYDwDah8ZIaaY2oDcLQBbkPaCpMZ0Hu/1BfnWlOfSSNcWz67f6QVaZ+HofgUb2wAAAABJRU5ErkJggg=="
    },
    "2c61": function(e) {
        e.exports = JSON.parse('{"index":{"第页共":"第{page}页 共{total}页","块倒数":"块倒数","白皮书":"白皮书","二元期权":"二元期权","二元期权des":"BSC拥有智能合约功能并与以太坊虚拟机（EVM）兼容","交易市场":"交易市场","更多功能":"更多功能","更多功能des":"更多功能正在积极认真的研发中，期待与您再次相见","版权":"Copyright©2016-{year} BinaryX 版权所有","首页":"首页","英文":"英文","中文":"中文","更多":"更多","兑换":"兑换","资金池":"资金池","交易挖矿":"交易挖矿","挖矿":"挖矿","行情":"行情","交易所":"bsc","信息之窗":"信息之窗","开奖大厅":"开奖大厅","游戏":"游戏","百科全书":"百科全书","团队":"团队","生活职业":"生活职业","战斗职业":"战斗职业","副本挑战":"副本挑战","日常挖矿":"日常挖矿","暂未开放":"暂未开放","Mega Universe 元宇宙游戏":"Metaverse 元宇宙游戏","Gaming+NFT+Defi+Marketplace+Auction,BSC链上玩法大成作品":"Gaming+NFT+Defi+Marketplace+Auction,BSC链上玩法大成作品","双重代币经济体系，地牢探险+日常任务玩法，角色+道具全NFT设计":"双重代币经济体系，地牢探险+日常任务玩法，角色+道具全NFT设计","创建角色，即可开始领取收益":"创建角色，即可开始领取收益","概念设计":"设计理念","快速了解 BNX 元宇宙游戏":"快速了解 Cyber Dragon元宇宙游戏","Heco生态币种交易 多快好省就选":"Okexchain生态币种交易 多快好省就选{word}","打造DeFi生态最大的集为一体的平台":"打造DeFi生态最大的集{word}为一体的平台","最具潜力的集DEX、IKO、DAO、聚合交易为一体的DEFI生态平台":"最具潜力的集DEX、IKO、DAO、聚合交易为一体的DEFI生态平台","当前流动性质押":"当前流动性质押","当前价格":"当前价格","MDX余额":"KIS余额","待奖励金额":"待奖励金额","总回购销毁数量":"总回购销毁数量","实时通缩率":"实时通缩率","当前挖矿产出":"当前挖矿产出","24H交易额":"24H交易额","累计交易总额":"累计交易总额","挖矿产出市值":"挖矿产出市值","24H手续费":"24H手续费","累计手续费":"累计手续费","KIS使用场景":"KIS使用场景","回购":"回购","用于回购并销毁KIS":"用于回购并销毁KIS","奖励":"奖励","给质押KIS的人奖励":"给质押KIS的人奖励","社区提议及投票":"社区提议及投票","KIS审计机构":"KIS审计机构","连接到钱包":"连接到钱包","Staked":"赌注","Earned":"已赚","APY":"年收益","邀请":"邀请","交易":"交易","冷冻期不能冻结":"冷冻期不能冻结","冷冻期不能领取":"冷冻期不能领取","期权":"期权","矿池":"矿池","获得":"获得","恭喜获得和BNX":"恭喜 {investor} 获得 {income} {coinB} 和 {windIncome} BNX","价格":"{L}价格{R}","温馨提示：您有未领取的收益请及时领取":"温馨提示：您有未领取的收益请及时领取","期权板块":"期权板块","请选择委托周期":"请选择委托周期","历史记录":"历史记录","请输入委托数量":"请输入委托数量","请输入您的委托数量":"请输入您的委托数量","委托限制":"委托限制","看涨":"看涨","看跌":"看跌","连接钱包":"连接钱包","钱包地址":"钱包地址","地址":"地址","流水记录":"流水记录","我的委托":"我的委托","未开奖":"未开奖","已开奖":"已开奖","涨":"涨","跌":"跌","返回本金":"返回本金","委托周期":"委托周期","周期":"周期","个区块分钟":"{block}个区块({minute}分钟)","区块":"区块","资金变化":"资金变化","开奖":"开奖","等待开奖":"等待开奖","委托方向":"委托方向","委托数量":"委托数量{token}","数量":"数量{token}","委托本金：扣除":"委托本金：扣除","委托本金":"委托本金","委托本金：暂未开奖":"委托本金：暂未开奖","额外获得":"额外获得","确认委托":"确认委托","确定":"确定","授权":"授权{coinB}","请选择":"请选择","请输入投资金额":"请输入投资金额","超出投资区间":"超出投资区间","余额不足":"余额不足","BNX余额不足":"BNX余额不足","请到交易中当前委托开奖":"请到交易中当前委托开奖","开奖成功":"开奖成功","授权成功":"授权成功","下单成功":"下单成功","个区块":"个区块","流动性挖矿":"流动性挖矿","流动性挖矿总量":"流动性挖矿总量{token}","流动性挖矿余额":"流动性挖矿余额{token}","流动性挖矿损益":"流动性挖矿损益{token}","冻结":"冻结","赎回":"赎回","我的冻结":"我的冻结{token}","待领取金额记录":"待领取金额记录","返还":"返还{token}","领取":"领取","锁仓分红":"锁仓分红","总冻结":"总冻结{token}","我的锁仓":"我的冻结{token}","锁仓":"锁仓","解锁":"解锁","解冻":"解冻","锁仓累积分红":"锁仓累积分红","上轮分红总额":"上轮分红总额 {token}","我的待领取收益":"我的待领取收益{token}","领取记录":"领取记录","请输入数量":"请输入数量","赎回数量":"赎回数量","上限":"上限","冻结BNX token":"冻结BNX token","余额":"余额","请输入冻结BNX token的数量":"请输入冻结BNX token的数量","授权BNX token":"授权BNX token","解冻数量":"解冻数量","解锁数量":"解锁数量","请输入解冻BNX token":"请输入解冻BNX token","数量必须大于等于":"数量必须大于等于{num}","参与成功":"参与成功","数量必须大于0":"数量必须大于0","赎回成功":"赎回成功","冻结成功":"冻结成功","领取成功":"领取成功","数量不足":"数量不足","本周期转入的做市商资金将在下一结算周期生效。":"本周期转入的做市商资金将在下一结算周期生效。","状态":"状态","平台流水记录":"平台流水记录","当前委托":"当前委托","参与":"参与","流动性挖矿记录":"流动性挖矿记录","结算周期":"结算周期","分红记录":"分红记录{token}","分红数量":"分红数量{token}","操作":"操作","锁仓累计分红":"锁仓累计分红{token}","取消":"取消","锁仓分红记录":"锁仓分红记录","我的冻结记录":"我的冻结记录","冻结数量":"冻结数量","锁仓数量":"锁仓数量","努力开发中敬请期待":"努力开发中，敬请期待！","社区投票":"社区投票","后台审核":"后台审核","发起提案":"发起提案","社区治理投票":"社区治理投票","待领取佣金":"待领取佣金","领取奖励":"领取奖励","佣金记录":"佣金记录","邀请链接":"邀请链接","佣金":"佣金","时间":"时间","复制失败":"复制失败","复制成功":"复制成功","用户协议":"用户协议","正在开发中des":"更多功能正在积极认真研发中，期待与您再次相见...","二维码":"二维码","复制成功!":"复制成功！","没有数据":"没有数据","需要BNX数量：":"需要BNX数量：","图表":"图表","区块高度":"区块高度","Price":"价格","需要BNX数量":"需要BNX数量"},"share":{"邀请分享":"邀请分享","邀请链接":"邀请链接","待领取佣金":"待领取佣金","领取奖励":"领取奖励","我的佣金":"我的佣金","佣金":"佣金","时间":"时间","复制成功":"复制成功","复制失败，请手动长按复制":"复制失败，请手动长按复制"},"list":{"冻结记录":"冻结记录","冻结数量":"冻结数量","冻结时间":"冻结时间","分红数量":"分红数量","领取时间":"领取时间","期权委托记录":"期权委托记录","结算周期":"结算周期","领取":"领取","已领取":"已领取"},"income":{"用户盈利信息":"用户盈利信息","恭喜":"恭喜","获得":"获得","和":"和"},"web3":{"暂未检测到钱包插件，请安装MetaMask钱包， 或在imtoken里打开":"暂未检测到钱包插件，请安装MetaMask钱包， 或在imtoken里打开"},"trade":{"钱包地址":"钱包地址","委托方向":"委托方向","额外收益":"额外收益","在该结算周期转移的做市商资金将在下一个结算周期生效。":"在该结算周期转移的做市商资金将在下一个结算周期生效。","一个地址在一个区块内仅接受一次转账，且单笔转账不能超过 100000，超出将按照上限记录下单金额，多余部分在下一区块退回。":"一个地址在一个区块内仅接受一次转账，且单笔转账不能超过 100000 {coinB}，超出将按照上限记录下单金额，多余部分在下一区块退回。"},"footer":{"Binaryx":"Binaryx","desc":"注:BinaryX仅为21岁以上的成人用户提供服务，我们严格遵守当地法律法规，<br>请确保您在当地法律和法规的同意下玩我们的游戏。","版权所有":"版权所有","关于我们":"关于我们","关注我们":"关注我们","用户协议":"用户协议","常见问题":"常见问题","审计报告":"审计报告"},"info":{"产品描述":"产品描述","用户协议":"用户协议","常见问题":"常见问题"},"lucky":{"我的开奖奖励":"我的开奖奖励","暂未开奖":"暂未开奖","帮TA开奖":"帮TA开奖","领奖记录":"领奖记录"},"game":{"Short contract address:":"空投合约地址：","收取BNX":"BNX Airdrop","可领取BNX数量":"可领取BNX数量","已领取BNX数量":"已领取BNX数量","领取奖励":"领取奖励","销毁token":"Burn JEX","已销毁token数量":"已销毁数量","累计销毁token数量":"总销毁数量","销毁":"销毁","授权":"授权","暂无可领取奖励":"暂无可领取奖励","请输入销毁的数量":"请输入销毁的数量","输入数量大于余额":"输入数量大于余额","输入的数量大于授权数量":"输入的数量大于授权数量","Airdrop":"空投","金币产率":"金币产率","一键领取":"一键领取","伐木":"伐木","酿酒":"酿酒","卷轴抄录":"卷轴抄录","游侠工作":"打猎","Class":"卡片角色","战斗力":"战斗力","Leaderboard":"排行榜","卡片角色":"卡片角色","等级":"等级","总属性值":"总属性值","我们的团队":"我们的团队","Brian Roland":"布莱恩·罗兰","Owner":"所有者","Josephine Parker":"约瑟芬·帕克","Chief Developer":"首席开发商","Jacob Raleign":"雅各布·雷因","Backend Developer":"后端开发人员","Michael Hughes":"迈克尔·休斯","Jonas Hamlet":"乔纳斯·哈姆雷特","Ken Dryden":"德莱登","Front-end Developer":"前端开发人员","Tobey Lily":"托比·莉莉","Art Designer":"艺术设计师","Letitia Tony":"莱蒂西亚·托尼","Market":"市场","游戏":"游戏","Go to work":"去工作","Reminder: Each shake needs to consume":"提醒：每次摇一摇都需要消耗","Shake":"角色抽卡","Put in the backpack":"已加入卡包","My backpack":"我的英雄","Life occupation":"自动打金","Mage":"法师","Thieves":"盗贼","warrior":"战士","Ranger":"游侠","返回":"返回","Card role":"卡片角色","Attributes":"属性","Power":"力量","Agile":"敏捷","Constitution":"体质","Willpower":"意志","Intelligence":"智力","charm":"精神","Total":"全部","Skill":"技能","Work":"工作","Basic description":"基本描述","Warriors Basic":"披坚执锐冲锋在第一线的勇士，团队的可靠保护者。可装备武器类型包括除法杖外的所有单手或双手武器，可装备轻型或重型盾牌，可装备中甲或重甲。拥有最高的力量和体质成长性。可通过嘲讽/守护等技能保护队友。","Thieves Basic":"擅长双持的攻击者，可制造大量的物理伤害。可装备武器类型包括所有单手武器，可装备轻型盾牌，可装配轻甲和中甲。拥有最高的敏捷成长性，擅长以高概率闪避规避伤害。盗窃技能还可在战斗过程中盗取消耗品和稀有装备供团队使用。在战斗之外，盗贼还是生活职业的多面手，可以通过生活职业的日常工作获得大量的金币Token。","Mage Basic":"操纵元素的大师，在制造高额元素伤害的同时还可以为敌人赋予负面状态。可装备法杖和法袍，不可使用盾牌或护甲。拥有最高的意志和智力成长性，擅长以法师制造AOE伤害。在战斗之外，法师还可以制造各种魔法装备，为各种装备进行永久和临时附魔，提高团队战斗能力。","Ranger Basic":"箭术大师，野外生存的好手，擅长以弓箭给予对手致命一击，能够带领队伍规避陷阱，直接攻击敌方后排成员。可装备弓弩类武器，不可使用盾牌，可以装备轻甲或中甲，力量/敏捷和体质均衡发展，是地牢冒险和英雄对战的强力选手。","Part-time job":"兼职工作","Senior part-time job":"皇室守卫","Work reward":"工作奖励","Hunting":"狩猎","coming soon":"敬请期待","Working part-time can earn gold coin income":"工作兼职可以赚取金币收入","Strike iron":"打铁","Library management":"图书管理","advanced Hunting":"高级 狩猎","advanced Strike iron":"高级 打铁","advanced Library management":"高级 图书管理","No skills":"无技能","Choosing a part-time job role":"选择工作角色","Confirm":"确认","Worrior Token ID":"战士 Token ID:","Thieves Token ID":"盗贼 Token ID:","Mage Token ID":"法师 Token ID:","Ranger Token ID":"游侠 Token ID","Start working":"开始工作","working":"工作中","record":"记录","No position for now":"现在没有工作","Job type":"工作类型","End time":"结束区块","Starting time":"开始区块","Work income / gold":"工作收入 / 金额","Get reward":"获得奖励","Claim reward":"获得奖励","Quit work":"退出工作","爆卡了!!卡片升级失败":"爆卡了!!卡片升级失败","角色销毁":"角色销毁","销毁后您将获得":"销毁后您将获得{TokenNum}","卡片不想要了，点击销毁":"卡片不想要了，点击销毁","销毁成功":"销毁成功","销毁失败，请重试":"销毁失败，请重试","敬请期待":"敬请期待","金币余额不足":"金币余额不足","BNX余额不足":"BNX余额不足","余额不足":"余额不足","选择角色":"选择角色","待领取挖矿收益":"待领取挖矿收益","待领取金币收益":"待领取金币收益","待领取BNX收益":"待领取BNX收益","Role destruction":"角色销毁","destroy":"销毁","Upgrade":"升级","Consume":"消耗","Note , that there is a certain burst rate when the character is upgraded, and the original card disappears when the card burst":"请注意，角色升级时会有一定的突发速率，而原始卡在突发时会消失。","授权金币":"授权金币","gold coins":"金币","角色":"角色","Unlimited occupation":"不限职业","Unlimited Attribute":"不限属性","Warrior limited":"战士限定","Thieves limited":"盗贼限定","Mage limited":"法师限定","Range limited":"游侠限定","流动性挖矿：通过抵押pancake LP获取BNX":"流动性挖矿：通过抵押pancake LP获取BNX","日产量":"日产量","月产量":"月产量","总质押":"总质押","年化收益":"年化收益","质押":"质押","注意:我们现在只支持Binance Smart Chain，不要转移ETHEREUM主网代币":"注意:我们现在只支持Binance Smart Chain，不要转移ETHEREUM主网代币","请输入数量":"请输入数量","最大值":"最大值","可用":"可用","取消":"取消","解押":"解押","数量不足":"数量不足","未领取奖励":"未领取奖励","收取奖励":"收取奖励","领取并解押":"领取并解押","Can Blacksmith":"可以打铁","Can Hunting":"可以捕猎","Can Librarian":"可以管理图书","LV 5 and above":"{level}级及以上","授权BNX":"授权BNX","领取成功":"领取成功","领取不能太频繁":"领取不能太频繁","上一笔交易未完成":"上一笔交易未完成","退出成功":"退出成功","三小时限制":"请在上次领奖后{time}分钟再次领奖或退出工作","角色授权":"角色授权","一键开卡":"一键抽卡","免费开卡":"免费抽卡","没有免费开卡次数":"没有免费开卡的机会","每个地址每天抽取次数已到上限":"每个地址每天抽取次数已到上限","Adventure":"冒险","Start the adventure":"开始冒险","Dungeon Level":"地牢等级","Card Level":"卡片等级","Hero role":"英雄角色","请选择级别":"请选择级别","请选择角色":"请选择角色","请选择Token ID":"请选择Token ID","life value":"生命值","Battle express":"战斗快报","Congratulations, you have defeated the goblins in this battle":"恭喜您在本次战斗中击败了{monster}","Keep on adventurous":"继续冒险","Exit the battle":"退出战斗","Its a pity that the Goblin adjustment failed":"可惜{dungeon}挑战失败","Past battles":"战斗记录","Dungeon":"地牢名称","Enemy":"杀敌","Trophy":"奖励","keys,gold coins":"{key}个铁质钥匙，{gold}个金币，{bnx}个BNX","keys":"{key}个铁质钥匙","gold":"{gold}个金币","coins":"{bnx}个BNX","Status":"状态","已领取":"已领取","未领取":"未领取","Win or lose":"战斗结果","Pending BNX":"BNX","Gold coins pending":"金币","Keys to be picked up":"铁质钥匙","去冒险":"去冒险","战胜，获得":"战胜{name}，获得{key}个铁质钥匙，{gold}个金币，{bnx}个BNX","Key":"铁质钥匙","Gold":"金币","BNX":"BNX","军团士兵":"军团士兵","Beta":"测试版","挑战失败奖励":"挑战{monster}成功获得{coupon}个铁质钥匙，{gold}个金币和{bnx}个BNX","Claimed successfully":"领取成功","剩余冒险次数":"剩余冒险次数","无奖励":"无奖励","You win!":"你赢了！","Treasure Box":"宝箱抽奖","Open":"开箱","Free":"免费","恭喜，本次百宝箱抽中了":"恭喜，本次百宝箱抽中了","可惜，我这次没有拿到打开宝箱的奖励。":"可惜，我这次没有拿到打开宝箱的奖励。","开箱记录":"开箱记录","剩余开箱次数":"剩余开箱次数","宝箱":"宝箱","当前TokenID未查到记录":"当前TokenID未查到记录","手续费支付失败":"手续费支付失败","手续费支付成功":"手续费支付成功","手续费不足":"手续费不足","支付":"支付","还没到账":"手续费还没到账,请稍后","9月20日之前存入流动性的用户请点击这里领取LPtoken和BNX收益":"9月20日之前存入流动性的用户请点击这里领取LPtoken和BNX收益"}}')
    },
    3: function(e, t) {},
    "30fe": function(e, t, n) {
        "use strict";
        n("c2e1")
    },
    4: function(e, t) {},
    "40a5": function(e, t, n) {
        "use strict";
        n("7459")
    },
    "4c2a": function(e, t, n) {
        "use strict";
        n("ebb8")
    },
    5: function(e, t) {},
    5636: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("d3b7"),
        n("ac1f"),
        n("25f0"),
        n("466d"),
        n("5319"),
        n("e260"),
        n("e6cf"),
        n("cca6"),
        n("a79d");
        var a = n("7a23");
        n("b0c0");
        function o(e, t, n, o, i, r) {
            var s = Object(a["O"])("Header")
              , c = Object(a["O"])("el-header")
              , l = Object(a["O"])("router-view")
              , u = Object(a["O"])("Footer")
              , d = Object(a["O"])("el-main")
              , p = Object(a["O"])("el-container");
            return Object(a["F"])(),
            Object(a["k"])(p, null, {
                default: Object(a["cb"])((function() {
                    return [Object(a["o"])(c, null, {
                        default: Object(a["cb"])((function() {
                            return [Object(a["o"])(s)]
                        }
                        )),
                        _: 1
                    }), Object(a["o"])(d, null, {
                        default: Object(a["cb"])((function() {
                            return [Object(a["o"])(l, null, {
                                default: Object(a["cb"])((function(t) {
                                    var n = t.Component;
                                    return [(Object(a["F"])(),
                                    Object(a["k"])(a["c"], null, [e.$route.meta.keepAlive ? (Object(a["F"])(),
                                    Object(a["k"])(Object(a["Q"])(n), {
                                        key: e.$route.name
                                    })) : Object(a["l"])("", !0)], 1024)), e.$route.meta.keepAlive ? Object(a["l"])("", !0) : (Object(a["F"])(),
                                    Object(a["k"])(Object(a["Q"])(n), {
                                        key: e.$route.name
                                    }))]
                                }
                                )),
                                _: 1
                            }), Object(a["o"])(u)]
                        }
                        )),
                        _: 1
                    })]
                }
                )),
                _: 1
            })
        }
        var i = n("df74")
          , r = n.n(i)
          , s = n("07a6")
          , c = n.n(s)
          , l = Object(a["gb"])("data-v-715be6ec");
        Object(a["I"])("data-v-715be6ec");
        var u = {
            class: "header-box"
        }
          , d = {
            class: "pc-head flex"
        }
          , p = {
            class: "flex-item"
        }
          , b = {
            class: "grid-content flex-middle"
        }
          , m = Object(a["o"])("svg", {
            width: "114",
            height: "40",
            viewBox: "0 0 114 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, [Object(a["o"])("path", {
            d: "M29.9131 27.3283L26.0559 29.4112L17.0302 28.4341L17.8016 27.1483L16.5159 26.3769C15.8731 25.9912 16.1045 22.6483 16.1045 22.6483C11.8102 16.6055 14.1245 12.7226 14.1245 12.7226C13.1216 17.3769 19.7045 19.5369 19.7045 19.5369C18.3931 16.5798 20.1931 15.0112 20.1931 15.0112C21.6331 18.4826 23.3045 18.6112 23.3045 18.6112L24.9759 18.7398L27.1616 16.5283C25.3359 13.6998 27.5216 11.4883 27.5216 11.4883C28.5759 15.6026 30.7616 15.6026 30.7616 15.6026L34.0016 15.7055L23.9988 5.70262C22.5588 4.26262 20.2188 4.26262 18.7531 5.70262L7.07878 17.3769C5.63878 18.8169 5.63878 21.1569 7.07878 22.6226L18.7531 34.2969C20.1931 35.7369 22.5331 35.7369 23.9988 34.2969L30.4016 27.8941L29.9131 27.3283Z",
            fill: "url(#paint0_linear)"
        }), Object(a["o"])("path", {
            d: "M23.3044 22.1083C23.793 21.9283 24.4359 21.5683 24.9244 20.8998C25.0273 20.7455 25.2073 20.8483 25.2587 21.0283C25.3873 21.5941 25.6187 22.6741 23.3559 22.4683C23.1759 22.4426 23.1244 22.1855 23.3044 22.1083Z",
            fill: "url(#paint1_linear)"
        }), Object(a["o"])("path", {
            d: "M41.64 14.04V28H48.72C50.78 28 52.32 26.24 52.32 24C52.32 21.62 50.52 20.76 49.3 20.74V20.62C50.58 20.54 51.8 19.74 51.8 17.62C51.8 15.46 50.4 14.04 48.1 14.04H41.64ZM44.28 19.86V16.28H47.54C48.5 16.28 49.06 16.82 49.06 17.76V18.38C49.06 19.3 48.5 19.86 47.54 19.86H44.28ZM44.28 25.76V22.02H47.96C48.96 22.02 49.56 22.58 49.56 23.56V24.24C49.56 25.22 48.96 25.76 47.96 25.76H44.28ZM56.0217 16.04C57.0617 16.04 57.5217 15.5 57.5217 14.76V14.36C57.5217 13.62 57.0617 13.08 56.0217 13.08C54.9617 13.08 54.5217 13.62 54.5217 14.36V14.76C54.5217 15.5 54.9617 16.04 56.0217 16.04ZM54.7417 17.56V28H57.3017V17.56H54.7417ZM60.2691 28H62.8291V21.1C62.8291 19.98 63.8491 19.42 64.9091 19.42C66.1291 19.42 66.6291 20.18 66.6291 21.66V28H69.1891V21.4C69.1891 18.8 67.9891 17.32 65.8491 17.32C64.2291 17.32 63.3491 18.18 62.9291 19.3H62.8291V17.56H60.2691V28ZM74.6069 28.24C76.1669 28.24 77.3069 27.54 77.6469 26.2H77.7669C77.9269 27.28 78.6069 28 79.7069 28H81.1269V25.96H80.0869V21.04C80.0869 18.66 78.5869 17.32 75.7669 17.32C73.6669 17.32 72.4469 18.12 71.6869 19.32L73.2069 20.68C73.7069 19.96 74.3869 19.36 75.5869 19.36C76.9469 19.36 77.5269 20.04 77.5269 21.2V21.96H75.7469C72.9069 21.96 71.2869 23.02 71.2869 25.16C71.2869 27.02 72.4869 28.24 74.6069 28.24ZM75.4669 26.38C74.4669 26.38 73.8869 25.96 73.8869 25.12V24.78C73.8869 23.96 74.5469 23.5 75.8869 23.5H77.5269V24.88C77.5269 25.86 76.6069 26.38 75.4669 26.38ZM83.1988 28H85.7588V21.6C85.7588 20.46 86.6588 19.98 88.3788 19.98H89.1788V17.56H88.6188C86.9588 17.56 86.1188 18.62 85.8588 19.72H85.7588V17.56H83.1988V28ZM97.6066 17.56L95.7866 23.08L95.0666 25.72H94.9466L94.2666 23.08L92.4466 17.56H89.9066L93.6466 28.5L93.1666 29.96H91.2866V32H92.8266C94.5466 32 95.2866 31.36 95.8066 29.86L100.007 17.56H97.6066Z",
            fill: "#1F1F1F"
        }), Object(a["o"])("path", {
            d: "M105.095 20.84L100.575 28H103.455L106.615 22.64H106.675L109.875 28H112.955L108.395 20.84L112.755 14.04H109.875L106.875 19H106.815L103.855 14.04H100.775L105.095 20.84Z",
            fill: "#F0404C"
        }), Object(a["o"])("defs", null, [Object(a["o"])("linearGradient", {
            id: "paint0_linear",
            x1: "17.034",
            y1: "10.4311",
            x2: "24.2981",
            y2: "29.4681",
            gradientUnits: "userSpaceOnUse"
        }, [Object(a["o"])("stop", {
            "stop-color": "#F15F40"
        }), Object(a["o"])("stop", {
            offset: "1",
            "stop-color": "#EF2356"
        })]), Object(a["o"])("linearGradient", {
            id: "paint1_linear",
            x1: "17.034",
            y1: "10.4311",
            x2: "24.2981",
            y2: "29.4681",
            gradientUnits: "userSpaceOnUse"
        }, [Object(a["o"])("stop", {
            "stop-color": "#F15F40"
        }), Object(a["o"])("stop", {
            offset: "1",
            "stop-color": "#EF2356"
        })])])], -1)
          , f = {
            class: "el-menu-box flex-wrap flex-item"
        }
          , g = {
            class: "MalayalamMN-Bold-font"
        }
          , h = {
            span: 6,
            class: "flex-middle header-right"
        }
          , y = {
            class: "item"
        }
          , w = {
            class: "MalayalamMN-Bold-font"
        }
          , v = {
            key: 1,
            class: "btn btn-primary flex-center adress",
            style: {
                "word-break": "break-all"
            }
        }
          , k = {
            class: "MalayalamMN-Bold-font"
        }
          , C = {
            class: "item"
        }
          , O = {
            class: "MalayalamMN-Bold-font"
        }
          , A = Object(a["o"])("img", {
            src: r.a,
            alt: "",
            class: "icon-down"
        }, null, -1)
          , j = Object(a["o"])("span", {
            class: "MalayalamMN-Bold-font"
        }, "English", -1)
          , x = Object(a["o"])("span", {
            class: "MalayalamMN-Bold-font"
        }, "简体中文", -1)
          , B = {
            class: "grid-content flex-middle"
        }
          , L = Object(a["o"])("img", {
            src: c.a,
            alt: ""
        }, null, -1)
          , T = Object(a["o"])("path", {
            d: "M22 4H2V6H22V4Z",
            fill: "#1E2329"
        }, null, -1)
          , M = Object(a["o"])("path", {
            d: "M22 11H2V13H22V11Z",
            fill: "#1E2329"
        }, null, -1)
          , S = Object(a["o"])("path", {
            d: "M22 18H2V20H22V18Z",
            fill: "#1E2329"
        }, null, -1)
          , N = {
            class: "Language-box"
        }
          , D = {
            class: "close"
        }
          , R = Object(a["o"])("path", {
            d: "M10.5859 12.0001L4.29297 5.70726L5.00008 5.00015L5.70718 4.29304L12.0001 10.5859L18.2928 4.29297L18.9999 5.00008L19.707 5.70718L13.4143 12.0001L19.707 18.2928L18.2928 19.707L12.0001 13.4143L5.70711 19.7072L5 19.0001L4.29289 18.293L10.5859 12.0001Z",
            fill: "#76808F"
        }, null, -1)
          , I = {
            class: "menu-box__list"
        }
          , F = {
            class: "close"
        }
          , E = Object(a["o"])("path", {
            d: "M10.5859 12.0001L4.29297 5.70726L5.00008 5.00015L5.70718 4.29304L12.0001 10.5859L18.2928 4.29297L18.9999 5.00008L19.707 5.70718L13.4143 12.0001L19.707 18.2928L18.2928 19.707L12.0001 13.4143L5.70711 19.7072L5 19.0001L4.29289 18.293L10.5859 12.0001Z",
            fill: "#76808F"
        }, null, -1)
          , P = {
            class: "MalayalamMN-Bold-font"
        }
          , U = Object(a["o"])("span", {
            class: "MalayalamMN-Bold-font"
        }, "English", -1)
          , H = Object(a["o"])("span", {
            class: "MalayalamMN-Bold-font"
        }, "中文", -1)
          , V = {
            class: "wallet-btn"
        }
          , X = {
            class: "MalayalamMN-Bold-font"
        }
          , G = {
            key: 1,
            class: "btn btn-primary flex-center adress",
            style: {
                "word-break": "break-all"
            }
        }
          , W = {
            class: "MalayalamMN-Bold-font"
        }
          , Q = Object(a["o"])("div", {
            class: "flex-center alink"
        }, [Object(a["o"])("a", {
            href: "https://twitter.com/binary_x",
            target: "_blank"
        }, [Object(a["o"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, [Object(a["o"])("path", {
            d: "M8.28726 20.5C15.832 20.5 19.9621 13.965 19.9621 8.30213C19.9621 8.12092 19.9621 7.93971 19.9512 7.74717C20.7534 7.1469 21.4472 6.38807 22 5.52732C21.2629 5.86709 20.4715 6.0936 19.6369 6.20686C20.4824 5.67455 21.1328 4.83644 21.4472 3.82845C20.6558 4.32678 19.7778 4.67788 18.8347 4.87042C18.0867 4.02099 17.0244 3.5 15.8428 3.5C13.5772 3.5 11.7344 5.42538 11.7344 7.79247C11.7344 8.13225 11.7778 8.44937 11.8428 8.76649C8.43902 8.5966 5.41463 6.87508 3.38753 4.28148C3.02981 4.92705 2.83469 5.66322 2.83469 6.4447C2.83469 7.92838 3.56098 9.24217 4.65583 10.0123C3.98374 9.98967 3.35501 9.79714 2.80217 9.48001C2.80217 9.49134 2.80217 9.51399 2.80217 9.53664C2.80217 11.6093 4.22222 13.3534 6.08672 13.7385C5.73984 13.8404 5.38211 13.8857 5.00271 13.8857C4.74255 13.8857 4.48238 13.8631 4.23306 13.8065C4.75339 15.5167 6.271 16.7512 8.07046 16.7851C6.66125 17.9404 4.89431 18.6199 2.97561 18.6199C2.65041 18.6199 2.31436 18.6086 2 18.5633C3.8103 19.7865 5.96748 20.5 8.28726 20.5Z",
            fill: "#5F6368"
        })])]), Object(a["o"])("a", {
            href: "https://t.me/binaryxGlobal",
            target: "_blank"
        }, [Object(a["o"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, [Object(a["o"])("path", {
            d: "M12 2C6.47761 2 2 6.47761 2 11.9893C2 17.5117 6.47761 22 12 22C17.5224 22 22 17.5117 22 11.9893C22 6.47761 17.5224 2 12 2ZM16.9254 8.27932C16.8614 9.20682 15.145 16.1365 15.145 16.1365C15.145 16.1365 15.0384 16.5416 14.6652 16.5522C14.5373 16.5522 14.3667 16.5416 14.1748 16.3603C13.7804 16.0299 12.8849 15.3902 12.0426 14.8038C12.0107 14.8358 11.9787 14.8678 11.936 14.8998C11.7441 15.0704 11.4563 15.3156 11.1471 15.6141C11.0299 15.7207 10.9019 15.838 10.774 15.9659L10.7633 15.9765C10.6887 16.0512 10.6247 16.1045 10.5714 16.1471C10.1557 16.4883 10.113 16.2004 10.113 16.0512L10.3369 13.6098V13.5885L10.3475 13.5672C10.3582 13.5352 10.3795 13.5245 10.3795 13.5245C10.3795 13.5245 14.7399 9.64392 14.8571 9.22815C14.8678 9.20682 14.8358 9.1855 14.7825 9.20682C14.4947 9.30277 9.47335 12.4797 8.91898 12.8316C8.88699 12.8529 8.79104 12.8422 8.79104 12.8422L6.34968 12.0426C6.34968 12.0426 6.06183 11.9254 6.15778 11.6588C6.1791 11.6055 6.21109 11.5522 6.32836 11.4776C6.87207 11.0938 16.3284 7.69296 16.3284 7.69296C16.3284 7.69296 16.5949 7.60768 16.7548 7.66098C16.8294 7.69296 16.8721 7.72495 16.9147 7.83156C16.9254 7.8742 16.936 7.95949 16.936 8.05544C16.936 8.10874 16.9254 8.17271 16.9254 8.27932Z",
            fill: "#5F6368"
        })])]), Object(a["o"])("a", {
            href: "http://binary-x.medium.com/",
            target: "_blank"
        }, [Object(a["o"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, [Object(a["o"])("path", {
            d: "M3 3V21H21V3H3ZM17.9519 7.26316L16.984 8.18993C16.9016 8.25172 16.8604 8.35469 16.881 8.45767V15.2643C16.8604 15.3673 16.9016 15.4703 16.984 15.532L17.9314 16.4588V16.6648H13.1842V16.4588L14.1625 15.5114C14.2654 15.4188 14.2654 15.3879 14.2654 15.2437V9.74485L11.5469 16.6339H11.1762L8.01487 9.74485V14.3684C7.99428 14.5538 8.05606 14.7494 8.18993 14.8936L9.46682 16.4382V16.6339H5.8627V16.4382L7.12929 14.8936C7.26316 14.7494 7.32494 14.5538 7.29405 14.3684V9.02403C7.31465 8.86957 7.25286 8.7254 7.13959 8.62243L6.01716 7.26316V7.05721H9.51831L12.2265 13.0092L14.6053 7.05721H17.9519V7.26316Z",
            fill: "#5F6368"
        })])])], -1);
        Object(a["G"])();
        var q = l((function(e, t, n, o, i, r) {
            var s = Object(a["O"])("el-dropdown-item")
              , c = Object(a["O"])("el-dropdown-menu")
              , q = Object(a["O"])("el-dropdown")
              , Z = Object(a["O"])("el-col")
              , Y = Object(a["O"])("el-menu-item")
              , J = Object(a["O"])("el-menu")
              , z = Object(a["O"])("el-row");
            return Object(a["F"])(),
            Object(a["k"])("div", u, [Object(a["o"])("div", d, [Object(a["o"])("div", p, [Object(a["o"])("div", b, [Object(a["o"])("div", {
                class: "img-box flex-middle",
                onClick: t[1] || (t[1] = function(t) {
                    return e.openUrl("https://www.binaryx.pro/#/")
                }
                )
            }, [m]), Object(a["o"])("div", f, [Object(a["o"])("div", {
                class: ["el-menu-item", {
                    "is-active": "Index" === e.$route.name
                }],
                onClick: t[2] || (t[2] = function(t) {
                    return e.$router.push({
                        name: "Index"
                    })
                }
                )
            }, [Object(a["o"])("span", g, Object(a["S"])(e.$t("index.首页")), 1)], 2)])])]), Object(a["o"])("div", h, [Object(a["o"])("div", y, [e.address ? Object(a["l"])("", !0) : (Object(a["F"])(),
            Object(a["k"])("div", {
                key: 0,
                class: "btn btn-primary flex-center",
                onClick: t[3] || (t[3] = function() {
                    return e.initWallet && e.initWallet.apply(e, arguments)
                }
                )
            }, [Object(a["o"])("span", w, Object(a["S"])(e.$t("index.连接钱包")), 1)])), e.address ? (Object(a["F"])(),
            Object(a["k"])("div", v, [Object(a["o"])("span", k, Object(a["S"])(e.address.substring(0, 6) + "..." + e.address.substring(e.address.length - 6, e.address.length)), 1)])) : Object(a["l"])("", !0)]), Object(a["o"])("div", C, [Object(a["o"])(q, {
                onCommand: e.changeLanuage,
                trigger: "click",
                onVisibleChange: e.visibleChange
            }, {
                dropdown: l((function() {
                    return [Object(a["o"])(c, {
                        class: "lanuage-dropdown"
                    }, {
                        default: l((function() {
                            return [Object(a["o"])(s, {
                                command: "en",
                                disabled: "en" === e.local
                            }, {
                                default: l((function() {
                                    return [j]
                                }
                                )),
                                _: 1
                            }, 8, ["disabled"]), Object(a["o"])(s, {
                                command: "zh-cn",
                                disabled: "zh-cn" === e.local
                            }, {
                                default: l((function() {
                                    return [x]
                                }
                                )),
                                _: 1
                            }, 8, ["disabled"])]
                        }
                        )),
                        _: 1
                    })]
                }
                )),
                default: l((function() {
                    return [Object(a["o"])("div", {
                        class: ["curr-lanuage flex-middle", {
                            active: e.showLanuage
                        }]
                    }, [Object(a["o"])("span", O, Object(a["S"])("zh-cn" === e.local ? "简体中文" : "English"), 1), A], 2)]
                }
                )),
                _: 1
            }, 8, ["onCommand", "onVisibleChange"])])])]), Object(a["o"])(z, {
                class: "mobile-head"
            }, {
                default: l((function() {
                    return [Object(a["o"])(Z, {
                        span: 18
                    }, {
                        default: l((function() {
                            return [Object(a["o"])("div", B, [Object(a["o"])("div", {
                                class: "img-box flex-middle",
                                onClick: t[4] || (t[4] = function(t) {
                                    return e.openUrl("https://www.binaryx.pro/#/")
                                }
                                )
                            }, [L])])]
                        }
                        )),
                        _: 1
                    }), Object(a["o"])(Z, {
                        span: 6,
                        class: "flex-middle header-right"
                    }, {
                        default: l((function() {
                            return [(Object(a["F"])(),
                            Object(a["k"])("svg", {
                                onClick: t[5] || (t[5] = function(t) {
                                    return e.showHead = !0
                                }
                                ),
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, [T, M, S]))]
                        }
                        )),
                        _: 1
                    }), Object(a["db"])(Object(a["o"])("div", {
                        class: "page-component-up",
                        onClick: t[6] || (t[6] = function() {
                            return e.getTop && e.getTop.apply(e, arguments)
                        }
                        )
                    }, null, 512), [[a["Z"], e.isShow]]), Object(a["db"])(Object(a["o"])("div", N, [Object(a["o"])("div", D, [(Object(a["F"])(),
                    Object(a["k"])("svg", {
                        onClick: t[7] || (t[7] = function(t) {
                            return e.changeLan()
                        }
                        ),
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, [R]))]), Object(a["o"])("div", {
                        class: ["menu-item", {
                            "lan-active": "en" === e.local
                        }],
                        onClick: t[8] || (t[8] = function(t) {
                            return e.changeLanuage("en")
                        }
                        )
                    }, "English", 2), Object(a["o"])("div", {
                        class: ["menu-item", {
                            "lan-active": "zh-cn" === e.local
                        }],
                        onClick: t[9] || (t[9] = function(t) {
                            return e.changeLanuage("zh-cn")
                        }
                        )
                    }, "中文", 2)], 512), [[a["Z"], e.isLanguage]]), Object(a["db"])(Object(a["o"])(Z, {
                        onClick: t[14] || (t[14] = Object(a["fb"])((function(t) {
                            return e.showHead = !1
                        }
                        ), ["self"])),
                        span: 24,
                        class: "menu-box"
                    }, {
                        default: l((function() {
                            return [Object(a["o"])("div", I, [Object(a["o"])("div", F, [(Object(a["F"])(),
                            Object(a["k"])("svg", {
                                onClick: t[10] || (t[10] = function(t) {
                                    return e.showHead = !1
                                }
                                ),
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, [E]))]), Object(a["o"])(J, {
                                router: "",
                                "default-active": e.$route.path,
                                class: "el-menu-demo",
                                mode: "vertical",
                                "background-color": "transparent",
                                "text-color": "#5F6368",
                                "active-text-color": "#F6465D"
                            }, {
                                default: l((function() {
                                    return [Object(a["o"])(Y, {
                                        index: "/"
                                    }, {
                                        default: l((function() {
                                            return [Object(a["o"])("span", P, Object(a["S"])(e.$t("index.首页")), 1)]
                                        }
                                        )),
                                        _: 1
                                    })]
                                }
                                )),
                                _: 1
                            }, 8, ["default-active"]), "en" === e.local ? (Object(a["F"])(),
                            Object(a["k"])("div", {
                                key: 0,
                                class: "menu-item",
                                onClick: t[11] || (t[11] = function(t) {
                                    return e.isLanguage = !0
                                }
                                )
                            }, [U])) : (Object(a["F"])(),
                            Object(a["k"])("div", {
                                key: 1,
                                class: "menu-item",
                                onClick: t[12] || (t[12] = function(t) {
                                    return e.isLanguage = !0
                                }
                                )
                            }, [H])), Object(a["o"])("div", V, [e.address ? Object(a["l"])("", !0) : (Object(a["F"])(),
                            Object(a["k"])("div", {
                                key: 0,
                                class: "btn btn-primary flex-center",
                                onClick: t[13] || (t[13] = function() {
                                    return e.initWallet && e.initWallet.apply(e, arguments)
                                }
                                )
                            }, [Object(a["o"])("span", X, Object(a["S"])(e.$t("index.连接钱包")), 1)])), e.address ? (Object(a["F"])(),
                            Object(a["k"])("div", G, [Object(a["o"])("span", W, Object(a["S"])(e.address.substring(0, 6) + "..." + e.address.substring(e.address.length - 6, e.address.length)), 1)])) : Object(a["l"])("", !0)]), Q])]
                        }
                        )),
                        _: 1
                    }, 512), [[a["Z"], e.showHead]])]
                }
                )),
                _: 1
            })])
        }
        ))
          , Z = n("5530")
          , Y = n("5502")
          , J = (n("96cf"),
        n("1da1"))
          , z = n("99e5")
          , K = n.n(z)
          , _ = n("2909")
          , $ = Object(Y["a"])({
            state: {
                accounts: [],
                provider: null,
                currentBalance: "",
                locale: "",
                price: "",
                lastBlock: "",
                chartData: []
            },
            mutations: {
                updateAccount: function(e, t) {
                    e.accounts = t
                },
                updateProvider: function(e, t) {
                    e.provider = t
                },
                updateCurrentBalance: function(e, t) {
                    e.currentBalance = t
                },
                updateLocale: function(e, t) {
                    e.locale = t
                },
                updatePrice: function(e, t) {
                    e.price = t
                },
                updateBlock: function(e, t) {
                    e.lastBlock = t
                },
                initChartData: function(e, t) {
                    var n;
                    (n = e.chartData).push.apply(n, Object(_["a"])(t))
                },
                updateChartData: function(e, t) {
                    e.chartData.push(t)
                }
            },
            actions: {},
            modules: {}
        })
          , ee = n("3fd4")
          , te = n("47e2")
          , ne = {
            web3: {},
            t: null,
            factoryContract: {},
            web3Provider: {},
            getBlance: function(e) {
                ne.web3.eth.getBalance(e).then((function(e) {
                    $.commit("updateCurrentBalance", ne.web3.utils.fromWei(e, "ether"))
                }
                ))
            },
            initWeb3: function() {
                var e = Object(J["a"])(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                if (!window.ethereum) {
                                    e.next = 14;
                                    break
                                }
                                return ne.web3Provider = window.ethereum,
                                window.ethereum.on("accountsChanged", (function(e) {
                                    $.commit("updateAccount", e)
                                }
                                )),
                                ne.web3 = new K.a(ne.web3Provider),
                                e.prev = 4,
                                e.next = 7,
                                window.ethereum.enable();
                            case 7:
                                e.next = 12;
                                break;
                            case 9:
                                e.prev = 9,
                                e.t0 = e["catch"](4),
                                Promise.reject(e.t0);
                            case 12:
                                e.next = 15;
                                break;
                            case 14:
                                window.web3 ? (ne.web3Provider = window.web3.currentProvider,
                                ne.web3 = new K.a(ne.web3Provider)) : (ne.web3.t || (ne.web3.t = Object(te["b"])().t),
                                ee["a"].error({
                                    message: ne.web3.t("web3.暂未检测到钱包插件，请安装MetaMask钱包， 或在imtoken里打开"),
                                    showClose: !0,
                                    customClass: "right"
                                }));
                            case 15:
                                $.commit("updateProvider", ne.web3),
                                ne.web3.eth.getAccounts().then((function(e) {
                                    return $.commit("updateAccount", e),
                                    ne.getBlance(e[0])
                                }
                                ));
                            case 17:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[4, 9]])
                }
                )));
                function t() {
                    return e.apply(this, arguments)
                }
                return t
            }()
        }
          , ae = ne
          , oe = re("i18nextLng");
        re("intro", localStorage);
        function ie(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : localStorage;
            try {
                n.setItem(e, t)
            } catch (a) {}
        }
        function re(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : localStorage;
            return {
                get: function() {
                    return t.getItem(e)
                },
                set: function(n) {
                    ie(e, n, t)
                },
                remove: function() {
                    t.removeItem(e)
                }
            }
        }
        var se = n("b40f")
          , ce = n.n(se)
          , le = n("3ef0")
          , ue = n.n(le)
          , de = n("2c61")
          , pe = n("edd4")
          , be = Object(te["a"])({
            locale: "zh-cn",
            messages: {
                "zh-cn": Object(Z["a"])(Object(Z["a"])({}, de), ue.a),
                en: Object(Z["a"])(Object(Z["a"])({}, pe), ce.a)
            }
        })
          , me = function(e) {
            be.global.locale = e,
            $.commit("updateLocale", e),
            oe.set(e),
            document.getElementsByTagName("body")[0].setAttribute("lang", e)
        }
          , fe = function() {
            return be && be.global.locale
        }
          , ge = {
            setup: function() {
                var e = Object(Y["b"])()
                  , t = Object(te["b"])()
                  , n = t.t
                  , o = Object(a["J"])({
                    address: Object(a["i"])((function() {
                        return e.state.accounts[0]
                    }
                    )) || 0,
                    local: fe().toLowerCase() || "zh-cn",
                    showLanuage: !1,
                    showHead: !1,
                    isShow: !1,
                    isLanguage: !1,
                    changeLan: function() {
                        o.isLanguage = !1,
                        o.showHead = !1
                    },
                    changeLanuage: function(e) {
                        me(e),
                        o.local = e,
                        o.showHead && (o.showHead = !1,
                        o.isLanguage = !1)
                    },
                    openUrl: function(e) {
                        window.location.href = e
                    },
                    openToast: function() {
                        Object(ee["a"])({
                            showClose: !0,
                            message: n("index.暂未开放")
                        })
                    },
                    pdfLocal: function() {
                        var e = "CyberDragon-EN.pdf";
                        window.open("/libs/pdf/web/viewer.html?file=" + e)
                    },
                    visibleChange: function(e) {
                        o.showLanuage = e
                    },
                    initWallet: function() {
                        ae.initWeb3()
                    },
                    getTop: function() {
                        var e = setInterval((function() {
                            var t = document.documentElement.scrollTop || document.body.scrollTop
                              , n = Math.ceil(t / 5);
                            window.scrollTo(0, t - n),
                            0 === t && clearInterval(e)
                        }
                        ), 20)
                    }
                });
                window.addEventListener("scroll", (function() {
                    var e = document.documentElement.scrollTop || document.body.scrollTop;
                    o.isShow = e > 180
                }
                ));
                var i = Object(a["U"])(o);
                return Object(Z["a"])({}, i)
            }
        };
        n("4c2a"),
        n("d147");
        ge.render = q,
        ge.__scopeId = "data-v-715be6ec";
        var he = ge
          , ye = n("5636")
          , we = n.n(ye)
          , ve = Object(a["gb"])("data-v-0caf6ee2");
        Object(a["I"])("data-v-0caf6ee2");
        var ke = {
            class: "footer"
        }
          , Ce = {
            class: "footer-box flex-column"
        }
          , Oe = {
            class: "bottom flex-between"
        }
          , Ae = {
            class: "left flex-item"
        }
          , je = {
            class: "follow flex-item"
        }
          , xe = {
            class: "label"
        }
          , Be = Object(a["o"])("div", {
            class: "link"
        }, [Object(a["o"])("a", {
            href: "https://twitter.com/binary_x",
            target: "_blank"
        }, [Object(a["o"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, [Object(a["o"])("path", {
            d: "M8.28726 20.5C15.832 20.5 19.9621 13.965 19.9621 8.30213C19.9621 8.12092 19.9621 7.93971 19.9512 7.74717C20.7534 7.1469 21.4472 6.38807 22 5.52732C21.2629 5.86709 20.4715 6.0936 19.6369 6.20686C20.4824 5.67455 21.1328 4.83644 21.4472 3.82845C20.6558 4.32678 19.7778 4.67788 18.8347 4.87042C18.0867 4.02099 17.0244 3.5 15.8428 3.5C13.5772 3.5 11.7344 5.42538 11.7344 7.79247C11.7344 8.13225 11.7778 8.44937 11.8428 8.76649C8.43902 8.5966 5.41463 6.87508 3.38753 4.28148C3.02981 4.92705 2.83469 5.66322 2.83469 6.4447C2.83469 7.92838 3.56098 9.24217 4.65583 10.0123C3.98374 9.98967 3.35501 9.79714 2.80217 9.48001C2.80217 9.49134 2.80217 9.51399 2.80217 9.53664C2.80217 11.6093 4.22222 13.3534 6.08672 13.7385C5.73984 13.8404 5.38211 13.8857 5.00271 13.8857C4.74255 13.8857 4.48238 13.8631 4.23306 13.8065C4.75339 15.5167 6.271 16.7512 8.07046 16.7851C6.66125 17.9404 4.89431 18.6199 2.97561 18.6199C2.65041 18.6199 2.31436 18.6086 2 18.5633C3.8103 19.7865 5.96748 20.5 8.28726 20.5Z",
            fill: "#5F6368"
        })])]), Object(a["o"])("a", {
            href: "https://t.me/binaryxGlobal",
            target: "_blank"
        }, [Object(a["o"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, [Object(a["o"])("path", {
            d: "M12 2C6.47761 2 2 6.47761 2 11.9893C2 17.5117 6.47761 22 12 22C17.5224 22 22 17.5117 22 11.9893C22 6.47761 17.5224 2 12 2ZM16.9254 8.27932C16.8614 9.20682 15.145 16.1365 15.145 16.1365C15.145 16.1365 15.0384 16.5416 14.6652 16.5522C14.5373 16.5522 14.3667 16.5416 14.1748 16.3603C13.7804 16.0299 12.8849 15.3902 12.0426 14.8038C12.0107 14.8358 11.9787 14.8678 11.936 14.8998C11.7441 15.0704 11.4563 15.3156 11.1471 15.6141C11.0299 15.7207 10.9019 15.838 10.774 15.9659L10.7633 15.9765C10.6887 16.0512 10.6247 16.1045 10.5714 16.1471C10.1557 16.4883 10.113 16.2004 10.113 16.0512L10.3369 13.6098V13.5885L10.3475 13.5672C10.3582 13.5352 10.3795 13.5245 10.3795 13.5245C10.3795 13.5245 14.7399 9.64392 14.8571 9.22815C14.8678 9.20682 14.8358 9.1855 14.7825 9.20682C14.4947 9.30277 9.47335 12.4797 8.91898 12.8316C8.88699 12.8529 8.79104 12.8422 8.79104 12.8422L6.34968 12.0426C6.34968 12.0426 6.06183 11.9254 6.15778 11.6588C6.1791 11.6055 6.21109 11.5522 6.32836 11.4776C6.87207 11.0938 16.3284 7.69296 16.3284 7.69296C16.3284 7.69296 16.5949 7.60768 16.7548 7.66098C16.8294 7.69296 16.8721 7.72495 16.9147 7.83156C16.9254 7.8742 16.936 7.95949 16.936 8.05544C16.936 8.10874 16.9254 8.17271 16.9254 8.27932Z",
            fill: "#5F6368"
        })])]), Object(a["o"])("a", {
            href: "http://binary-x.medium.com/",
            target: "_blank"
        }, [Object(a["o"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, [Object(a["o"])("path", {
            d: "M3 3V21H21V3H3ZM17.9519 7.26316L16.984 8.18993C16.9016 8.25172 16.8604 8.35469 16.881 8.45767V15.2643C16.8604 15.3673 16.9016 15.4703 16.984 15.532L17.9314 16.4588V16.6648H13.1842V16.4588L14.1625 15.5114C14.2654 15.4188 14.2654 15.3879 14.2654 15.2437V9.74485L11.5469 16.6339H11.1762L8.01487 9.74485V14.3684C7.99428 14.5538 8.05606 14.7494 8.18993 14.8936L9.46682 16.4382V16.6339H5.8627V16.4382L7.12929 14.8936C7.26316 14.7494 7.32494 14.5538 7.29405 14.3684V9.02403C7.31465 8.86957 7.25286 8.7254 7.13959 8.62243L6.01716 7.26316V7.05721H9.51831L12.2265 13.0092L14.6053 7.05721H17.9519V7.26316Z",
            fill: "#5F6368"
        })])])], -1)
          , Le = {
            class: "right"
        }
          , Te = {
            class: "about flex-item"
        }
          , Me = Object(a["o"])("div", {
            class: "sanjiao1"
        }, [Object(a["o"])("img", {
            src: we.a,
            alt: ""
        })], -1);
        Object(a["G"])();
        var Se = ve((function(e, t, n, o, i, r) {
            return Object(a["F"])(),
            Object(a["k"])("div", ke, [Object(a["o"])("div", Ce, [Object(a["o"])("div", Oe, [Object(a["o"])("div", Ae, [Object(a["o"])("div", je, [Object(a["o"])("div", xe, Object(a["S"])(e.$t("footer.Binaryx")), 1), Be])]), Object(a["o"])("div", Le, [Object(a["o"])("div", Te, [Object(a["o"])("div", {
                class: "link",
                onClick: t[1] || (t[1] = function(t) {
                    return e.openUrl("https://www.binaryx.pro/#/info?cid=1")
                }
                ),
                style: {
                    "margin-bottom": "10px"
                }
            }, Object(a["S"])(e.$t("footer.用户协议")), 1), Object(a["o"])("div", {
                class: "link",
                onClick: t[2] || (t[2] = function(t) {
                    return e.openUrl("https://www.binaryx.pro/#/info?cid=2")
                }
                ),
                style: {
                    "margin-bottom": "10px"
                }
            }, Object(a["S"])(e.$t("footer.常见问题")), 1), Object(a["o"])("div", {
                class: "link",
                onClick: t[3] || (t[3] = function(t) {
                    return e.openUrl("https://www.certik.org/projects/binaryx")
                }
                ),
                style: {
                    "margin-bottom": "10px"
                }
            }, Object(a["S"])(e.$t("footer.审计报告")), 1)])])]), Me])])
        }
        ))
          , Ne = {
            setup: function() {
                var e = Object(Y["b"])()
                  , t = Object(a["J"])({
                    year: "",
                    local: Object(a["i"])((function() {
                        return e.state.locale
                    }
                    )),
                    openUrl: function(e) {
                        window.location.href = e
                    }
                });
                t.year = (new Date).getFullYear();
                var n = Object(a["U"])(t);
                return Object(Z["a"])({}, n)
            }
        };
        n("cf4b");
        Ne.render = Se,
        Ne.__scopeId = "data-v-0caf6ee2";
        var De = Ne
          , Re = (n("a23c"),
        {
            components: {
                Header: he,
                Footer: De
            },
            setup: function() {
                ae.initWeb3()
            }
        });
        n("40a5");
        Re.render = o;
        var Ie = Re
          , Fe = (n("7dd6"),
        n("6c02"))
          , Ee = (n("a9e3"),
        n("b680"),
        n("278e"))
          , Pe = n.n(Ee)
          , Ue = Object(a["gb"])("data-v-34d9c5f1");
        Object(a["I"])("data-v-34d9c5f1");
        var He = {
            class: "page index-page"
        }
          , Ve = {
            class: "back-box flex-middle"
        }
          , Xe = Object(a["o"])("svg", {
            width: "40",
            height: "43",
            viewBox: "0 0 40 43",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, [Object(a["o"])("g", {
            filter: "url(#filter0_dpool)"
        }, [Object(a["o"])("path", {
            d: "M27.357 9.02348L25 6.66646L11.6667 19.9999L25 33.333L27.357 30.976L16.3807 19.9999L27.357 9.02348Z",
            fill: "url(#paint0_linearadventureorder)"
        })]), Object(a["o"])("defs", null, [Object(a["o"])("filter", {
            id: "filter0_dpool",
            x: "7.66669",
            y: "6.6665",
            width: "23.6904",
            height: "35.6665",
            filterUnits: "userSpaceOnUse",
            "color-interpolation-filters": "sRGB"
        }, [Object(a["o"])("feFlood", {
            "flood-opacity": "0",
            result: "BackgroundImageFix"
        }), Object(a["o"])("feColorMatrix", {
            in: "SourceAlpha",
            type: "matrix",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
            result: "hardAlpha"
        }), Object(a["o"])("feOffset", {
            dy: "5"
        }), Object(a["o"])("feGaussianBlur", {
            stdDeviation: "2"
        }), Object(a["o"])("feComposite", {
            in2: "hardAlpha",
            operator: "out"
        }), Object(a["o"])("feColorMatrix", {
            type: "matrix",
            values: "0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 1 0"
        }), Object(a["o"])("feBlend", {
            mode: "normal",
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow"
        }), Object(a["o"])("feBlend", {
            mode: "normal",
            in: "SourceGraphic",
            in2: "effect1_dropShadow",
            result: "shape"
        })]), Object(a["o"])("linearGradient", {
            id: "paint0_linearadventureorder",
            x1: "15.3828",
            y1: "19.947",
            x2: "23.7785",
            y2: "19.947",
            gradientUnits: "userSpaceOnUse"
        }, [Object(a["o"])("stop", {
            "stop-color": "#F5F8FC"
        }), Object(a["o"])("stop", {
            offset: "1",
            "stop-color": "#CFDAE6"
        })])])], -1)
          , Ge = {
            class: "back-text"
        }
          , We = {
            class: "flex-end"
        }
          , Qe = {
            class: "end-text"
        }
          , qe = {
            class: "mob-flex-end"
        }
          , Ze = {
            style: {
                color: "#EBECF5"
            }
        }
          , Ye = {
            class: "item dectory"
        }
          , Je = {
            class: "item-top"
        }
          , ze = {
            class: "cont-wrap flex-between"
        }
          , Ke = {
            class: "cont-wrap__left flex-column"
        }
          , _e = Object(a["o"])("svg", {
            width: "24",
            height: "25",
            viewBox: "0 0 24 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, [Object(a["o"])("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M12 20.4498C16.225 20.4498 19.65 17.0248 19.65 12.7998C19.65 8.57483 16.225 5.1498 12 5.1498C7.77502 5.1498 4.35 8.57483 4.35 12.7998C4.35 17.0248 7.77502 20.4498 12 20.4498ZM12 21.2998C16.6944 21.2998 20.5 17.4942 20.5 12.7998C20.5 8.10538 16.6944 4.2998 12 4.2998C7.30558 4.2998 3.5 8.10538 3.5 12.7998C3.5 17.4942 7.30558 21.2998 12 21.2998Z",
            fill: "#E6E8EA"
        }), Object(a["o"])("circle", {
            r: "6.8",
            transform: "matrix(1 0 0 -1 11.999 12.7991)",
            fill: "url(#paint7_linear)"
        }), Object(a["o"])("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M15.1875 9.24707H8.8125V11.0531H11.0961L11.0961 16.3525H12.9061L12.9061 11.0531H15.1875V9.24707Z",
            fill: "#76808F"
        }), Object(a["o"])("defs", null, [Object(a["o"])("linearGradient", {
            id: "paint7_linear",
            x1: "6.8",
            y1: "0",
            x2: "6.8",
            y2: "13.6",
            gradientUnits: "userSpaceOnUse"
        }, [Object(a["o"])("stop", {
            offset: "0.333333",
            "stop-color": "#F0B90B"
        }), Object(a["o"])("stop", {
            offset: "1",
            "stop-color": "#FBDA3C"
        })])])], -1)
          , $e = {
            class: "title"
        }
          , et = Object(a["o"])("div", {
            class: "num"
        }, " 872238022.4 ", -1)
          , tt = {
            class: "cont-wrap__right flex-column"
        }
          , nt = {
            class: "title"
        }
          , at = {
            class: "cont flex-item text-r"
        }
          , ot = Object(a["o"])("svg", {
            width: "15",
            height: "14",
            viewBox: "0 0 15 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, [Object(a["o"])("path", {
            d: "M7.5 8L9.33848 5.83848L11.5 4L9.33848 2.16152L7.5 0L5.66152 2.16152L3.5 4L5.66152 5.83848L7.5 8Z",
            fill: "#CCD4DF"
        }), Object(a["o"])("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M10.7173 9.41753L7.5 13.2002L4.28266 9.41753L0.5 6.2002L2.146 4.8002L4.28266 6.61753L7.5 10.4002L10.7173 6.61753L12.854 4.8002L14.5 6.2002L10.7173 9.41753Z",
            fill: "#CCD4DF"
        })], -1)
          , it = {
            class: "item receive"
        }
          , rt = {
            class: "item-top"
        }
          , st = {
            class: "cont-wrap flex-between"
        }
          , ct = {
            class: "cont-wrap__right flex-column"
        }
          , lt = {
            class: "label"
        }
          , ut = {
            class: "cont flex-item text-r"
        }
          , dt = Object(a["o"])("svg", {
            width: "15",
            height: "14",
            viewBox: "0 0 15 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, [Object(a["o"])("path", {
            d: "M7.5 8L9.33848 5.83848L11.5 4L9.33848 2.16152L7.5 0L5.66152 2.16152L3.5 4L5.66152 5.83848L7.5 8Z",
            fill: "#CCD4DF"
        }), Object(a["o"])("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M10.7173 9.41753L7.5 13.2002L4.28266 9.41753L0.5 6.2002L2.146 4.8002L4.28266 6.61753L7.5 10.4002L10.7173 6.61753L12.854 4.8002L14.5 6.2002L10.7173 9.41753Z",
            fill: "#CCD4DF"
        })], -1)
          , pt = {
            class: "cont-wrap__left flex-column"
        }
          , bt = Object(a["o"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, [Object(a["o"])("path", {
            d: "M17.9479 16.3971L15.6336 17.6468L10.2182 17.0605L10.6811 16.2891L9.90965 15.8263C9.52394 15.5948 9.66279 13.5891 9.66279 13.5891C7.08622 9.9634 8.47479 7.63368 8.47479 7.63368C7.87308 10.4263 11.8228 11.7223 11.8228 11.7223C11.0359 9.94797 12.1159 9.00683 12.1159 9.00683C12.9799 11.0897 13.9828 11.1668 13.9828 11.1668L14.9856 11.244L16.2971 9.91711C15.2016 8.21997 16.5131 6.89311 16.5131 6.89311C17.1456 9.36168 18.4571 9.36168 18.4571 9.36168L20.4011 9.4234L14.3994 3.42168C13.5354 2.55768 12.1314 2.55768 11.2519 3.42168L4.24737 10.4263C3.38337 11.2903 3.38337 12.6943 4.24737 13.5737L11.2519 20.5783C12.1159 21.4423 13.5199 21.4423 14.3994 20.5783L18.2411 16.7365L17.9479 16.3971Z",
            fill: "url(#paint5_linear)"
        }), Object(a["o"])("path", {
            d: "M13.9828 13.2651C14.2759 13.1571 14.6616 12.9411 14.9548 12.54C15.0165 12.4474 15.1245 12.5091 15.1553 12.6171C15.2325 12.9565 15.3713 13.6045 14.0136 13.4811C13.9056 13.4657 13.8748 13.3114 13.9828 13.2651Z",
            fill: "url(#paint6_linear)"
        }), Object(a["o"])("defs", null, [Object(a["o"])("linearGradient", {
            id: "paint5_linear",
            x1: "10.2205",
            y1: "6.25875",
            x2: "14.579",
            y2: "17.681",
            gradientUnits: "userSpaceOnUse"
        }, [Object(a["o"])("stop", {
            "stop-color": "#F15F40"
        }), Object(a["o"])("stop", {
            offset: "1",
            "stop-color": "#EF2356"
        })]), Object(a["o"])("linearGradient", {
            id: "paint6_linear",
            x1: "10.2205",
            y1: "6.25875",
            x2: "14.579",
            y2: "17.681",
            gradientUnits: "userSpaceOnUse"
        }, [Object(a["o"])("stop", {
            "stop-color": "#F15F40"
        }), Object(a["o"])("stop", {
            offset: "1",
            "stop-color": "#EF2356"
        })])])], -1)
          , mt = {
            class: "title"
        }
          , ft = {
            class: "num"
        }
          , gt = {
            class: "select-block"
        }
          , ht = {
            class: "select-token"
        }
          , yt = {
            class: "sel-head flex-between"
        }
          , wt = {
            class: "title"
        }
          , vt = Object(a["o"])("img", {
            src: Pe.a,
            alt: ""
        }, null, -1)
          , kt = {
            class: "sel-input"
        }
          , Ct = {
            class: "input-style flex-middle"
        }
          , Ot = {
            class: "input-msg"
        }
          , At = {
            class: "label"
        }
          , jt = {
            class: "confim-work flex-center"
        };
        Object(a["G"])();
        var xt = Ue((function(e, t, n, o, i, r) {
            var s = Object(a["O"])("el-button");
            return Object(a["F"])(),
            Object(a["k"])(a["b"], null, [Object(a["o"])("div", He, [Object(a["o"])("div", Ve, [Object(a["o"])("div", {
                class: "go-back flex-middle",
                onClick: t[1] || (t[1] = function(t) {
                    return e.openUrl("https://game.binaryx.pro/#/")
                }
                )
            }, [Xe, Object(a["o"])("span", Ge, Object(a["S"])(e.$t("game.返回")), 1)])]), Object(a["o"])("div", We, [Object(a["o"])("div", Qe, "已投放数量: " + Object(a["S"])(e.Bignumber(e.bnxProfits / Math.pow(10, 18)).toFixed(4)), 1)]), Object(a["o"])("div", qe, [Object(a["o"])("div", Ze, "已投放数量: " + Object(a["S"])(e.Bignumber(e.bnxProfits / Math.pow(10, 18)).toFixed(4)), 1)]), Object(a["o"])("div", {
                class: ["list flex-wrap", {
                    "flex-center": e.poolPairList.length <= 1
                }]
            }, [Object(a["o"])("div", Ye, [Object(a["o"])("div", Je, [Object(a["o"])("span", null, Object(a["S"])(e.$t("game.销毁token")), 1)]), Object(a["o"])("div", ze, [Object(a["o"])("div", Ke, [_e, Object(a["o"])("div", $e, Object(a["S"])(e.$t("game.累计销毁token数量")), 1), et]), Object(a["o"])("div", tt, [Object(a["o"])("div", nt, Object(a["S"])(e.$t("game.已销毁token数量")), 1), Object(a["o"])("div", at, Object(a["S"])(e.Bignumber(e.amount / Math.pow(10, e.decimals)).toFixed(4)), 1), ot, e.address ? (Object(a["F"])(),
            Object(a["k"])("div", {
                key: 1,
                class: "btn btn-primary",
                onClick: t[3] || (t[3] = function(t) {
                    return e.minsDialogVisibleV1 = !0
                }
                )
            }, Object(a["S"])(e.$t("game.销毁")), 1)) : (Object(a["F"])(),
            Object(a["k"])("div", {
                key: 0,
                class: "btn btn-primary",
                onClick: t[2] || (t[2] = function() {
                    return e.initWallet && e.initWallet.apply(e, arguments)
                }
                )
            }, Object(a["S"])(e.$t("index.连接钱包")), 1))])])]), Object(a["o"])("div", it, [Object(a["o"])("div", rt, [Object(a["o"])("span", null, Object(a["S"])(e.$t("game.收取BNX")), 1)]), Object(a["o"])("div", st, [Object(a["o"])("div", ct, [Object(a["o"])("div", lt, Object(a["S"])(e.$t("game.可领取BNX数量")), 1), Object(a["o"])("div", ut, Object(a["S"])(e.Bignumber(e.waitProfit / Math.pow(10, 18)).toFixed(4)), 1), dt, e.address ? (Object(a["F"])(),
            Object(a["k"])(s, {
                key: 1,
                class: "btn btn-primary",
                onClick: e.getReceive,
                loading: e.Claimbtn
            }, {
                default: Ue((function() {
                    return [Object(a["n"])(Object(a["S"])(e.$t("game.领取奖励")), 1)]
                }
                )),
                _: 1
            }, 8, ["onClick", "loading"])) : (Object(a["F"])(),
            Object(a["k"])("div", {
                key: 0,
                class: "btn btn-primary",
                onClick: t[4] || (t[4] = function() {
                    return e.initWallet && e.initWallet.apply(e, arguments)
                }
                )
            }, Object(a["S"])(e.$t("index.连接钱包")), 1))]), Object(a["o"])("div", pt, [bt, Object(a["o"])("div", mt, Object(a["S"])(e.$t("game.已领取BNX数量")), 1), Object(a["o"])("div", ft, Object(a["S"])(e.Bignumber(e.profit / Math.pow(10, 18)).toFixed(4)), 1)])])])], 2)]), Object(a["db"])(Object(a["o"])("div", gt, [Object(a["o"])("div", ht, [Object(a["o"])("div", yt, [Object(a["o"])("div", wt, Object(a["S"])(e.$t("game.销毁token")), 1), Object(a["o"])("div", {
                class: "close",
                onClick: t[5] || (t[5] = function(t) {
                    return e.minsDialogVisibleV1 = !1
                }
                )
            }, [vt])]), Object(a["o"])("div", kt, [Object(a["o"])("div", Ct, [Object(a["db"])(Object(a["o"])("input", {
                type: "number",
                "onUpdate:modelValue": t[6] || (t[6] = function(t) {
                    return e.reduceAmount = t
                }
                ),
                class: "flex-item",
                placeholder: e.$t("game.请输入数量")
            }, null, 8, ["placeholder"]), [[a["Y"], e.reduceAmount]]), Object(a["o"])("div", {
                class: "btn-style",
                onClick: t[7] || (t[7] = function() {
                    return e.getAmountTotal && e.getAmountTotal.apply(e, arguments)
                }
                )
            }, Object(a["S"])(e.$t("game.最大值")), 1)]), Object(a["o"])("div", Ot, [Object(a["o"])("span", At, Object(a["S"])(e.$t("game.可用")) + ":" + Object(a["S"])(e.TokenAmount), 1)])]), Object(a["o"])("div", jt, [0 != e.allowance || Number(e.NewAllowance) ? (Object(a["F"])(),
            Object(a["k"])(s, {
                key: 1,
                onClick: e.SetRaise,
                loading: e.Burnbtn
            }, {
                default: Ue((function() {
                    return [Object(a["n"])(Object(a["S"])(e.$t("index.确定")), 1)]
                }
                )),
                _: 1
            }, 8, ["onClick", "loading"])) : (Object(a["F"])(),
            Object(a["k"])(s, {
                key: 0,
                onClick: e.approve
            }, {
                default: Ue((function() {
                    return [Object(a["n"])(Object(a["S"])(e.$t("game.授权")), 1)]
                }
                )),
                _: 1
            }, 8, ["onClick"]))])])], 512), [[a["Z"], e.minsDialogVisibleV1]])], 64)
        }
        ))
          , Bt = n("68eb")
          , Lt = n("722f")
          , Tt = n("9d56")
          , Mt = {
            BscAddress: "0x8C851d1a123Ff703BD1f9dabe631b69902Df5f97",
            Token1Address: "0xd754595Ed2a5e04b96376D662196f56686c6cb8c",
            AirdropAddress: "0x7Cf87aD179C532bb8E4026f36057C20F537921d5"
        }
          , St = Mt
          , Nt = n("901e")
          , Dt = n.n(Nt)
          , Rt = n("b311")
          , It = n.n(Rt)
          , Ft = {
            setup: function() {
                var e = Object(te["b"])()
                  , t = e.t
                  , n = Object(Y["b"])()
                  , o = Object(a["J"])({
                    minsDialogVisibleV1: !1,
                    poolPairList: [],
                    totalAllocPoint: 0,
                    totalMintDay: 0,
                    bnxBlockDay: 0,
                    totalMint: 0,
                    reduceAmount: "",
                    profit: "",
                    waitProfit: "",
                    amount: "",
                    Allamount: "",
                    bnxProfits: "",
                    TokenAmount: "",
                    decimals: "",
                    allowance: 0,
                    NewAllowance: 0,
                    config: St,
                    Burnbtn: !1,
                    Claimbtn: !1,
                    Bignumber: Dt.a,
                    web3: Object(a["i"])((function() {
                        return n.state.provider
                    }
                    )),
                    address: Object(a["i"])((function() {
                        return n.state.accounts[0]
                    }
                    )),
                    AirdropContract: null,
                    NewToken1Contract: null,
                    open: function() {
                        ee["b"].info({
                            message: t("game.敬请期待")
                        })
                    },
                    openUrl: function(e) {
                        window.location.href = e
                    },
                    initWallet: function() {
                        ae.initWeb3()
                    },
                    initContract: function() {
                        o.AirdropContract = new o.web3.eth.Contract(Bt,St.AirdropAddress),
                        o.NewToken1Contract = new o.web3.eth.Contract(Lt,St.Token1Address),
                        o.initData()
                    },
                    initData: function() {
                        o.getTokenAllowance(),
                        o.getReceiveProfit(),
                        o.getBalance()
                    },
                    getReceiveProfit: function() {
                        var e = Object(J["a"])(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        o.AirdropContract.methods.getReceiveProfit().call({
                                            from: o.address
                                        });
                                    case 2:
                                        return o.profit = e.sent,
                                        e.next = 5,
                                        o.AirdropContract.methods.getWaitProfit().call({
                                            from: o.address
                                        });
                                    case 5:
                                        return o.waitProfit = e.sent,
                                        e.next = 8,
                                        o.AirdropContract.methods.getTokenAmount().call({
                                            from: o.address
                                        });
                                    case 8:
                                        return o.amount = e.sent,
                                        e.next = 11,
                                        o.AirdropContract.methods.getTokenTotal().call();
                                    case 11:
                                        return o.Allamount = e.sent,
                                        e.next = 14,
                                        o.AirdropContract.methods.bnxProfits().call();
                                    case 14:
                                        o.bnxProfits = e.sent;
                                    case 15:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    getBalance: function() {
                        var e = Object(J["a"])(regeneratorRuntime.mark((function e() {
                            var t;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        o.NewToken1Contract.methods.balanceOf(o.address).call();
                                    case 2:
                                        return t = e.sent,
                                        e.next = 5,
                                        o.NewToken1Contract.methods.decimals().call();
                                    case 5:
                                        o.decimals = e.sent,
                                        o.TokenAmount = new Dt.a(t).dividedBy(Math.pow(10, o.decimals)).toFixed(2);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    getAmountTotal: function() {
                        var e = Object(J["a"])(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        o.getBalance(),
                                        o.reduceAmount = o.TokenAmount;
                                    case 2:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    approve: function() {
                        var e = Object(J["a"])(regeneratorRuntime.mark((function e() {
                            var t, n;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        o.NewToken1Contract.methods.approve(St.AirdropAddress, Tt["a"]).estimateGas({
                                            from: o.address
                                        });
                                    case 2:
                                        return t = e.sent,
                                        n = t + 1e5,
                                        e.next = 6,
                                        o.NewToken1Contract.methods.approve(St.AirdropAddress, Tt["a"]).send({
                                            from: o.address,
                                            gas: n
                                        });
                                    case 6:
                                        o.allowance = e.sent,
                                        o.getTokenAllowance();
                                    case 8:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    getTokenAllowance: function() {
                        var e = Object(J["a"])(regeneratorRuntime.mark((function e() {
                            var t;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        o.NewToken1Contract.methods.allowance(o.address, St.AirdropAddress).call();
                                    case 2:
                                        t = e.sent,
                                        o.NewAllowance = t;
                                    case 4:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    getReceive: function() {
                        var e = Object(J["a"])(regeneratorRuntime.mark((function e() {
                            var n, a;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (!(Number(o.waitProfit) <= 0)) {
                                            e.next = 3;
                                            break
                                        }
                                        return ee["b"].error({
                                            title: t("game.暂无可领取奖励"),
                                            duration: 3e4
                                        }),
                                        e.abrupt("return");
                                    case 3:
                                        return o.Claimbtn = !0,
                                        e.next = 6,
                                        o.AirdropContract.methods.getProfit().estimateGas({
                                            from: o.address
                                        });
                                    case 6:
                                        return n = e.sent,
                                        a = n + 1e5,
                                        e.next = 10,
                                        o.AirdropContract.methods.getProfit().send({
                                            from: o.address,
                                            gas: a
                                        }).then((function() {
                                            o.Claimbtn = !1,
                                            o.getReceiveProfit()
                                        }
                                        )).catch((function() {
                                            o.Claimbtn = !1
                                        }
                                        ));
                                    case 10:
                                        o.allowance = e.sent;
                                    case 11:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        function n() {
                            return e.apply(this, arguments)
                        }
                        return n
                    }(),
                    SetRaise: function() {
                        var e = Object(J["a"])(regeneratorRuntime.mark((function e() {
                            var n, a, i, r, s;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (n = new Dt.a(o.reduceAmount).multipliedBy(Math.pow(10, o.decimals)).toFixed(),
                                        !(Number(o.TokenAmount) < Number(o.reduceAmount))) {
                                            e.next = 4;
                                            break
                                        }
                                        return ee["b"].error({
                                            title: t("game.余额不足"),
                                            duration: 3e3
                                        }),
                                        e.abrupt("return");
                                    case 4:
                                        if (o.reduceAmount) {
                                            e.next = 7;
                                            break
                                        }
                                        return ee["b"].error({
                                            title: t("game.请输入销毁的数量"),
                                            duration: 3e3
                                        }),
                                        e.abrupt("return");
                                    case 7:
                                        if (!(Number(o.NewAllowance) < Number(n))) {
                                            e.next = 18;
                                            break
                                        }
                                        return ee["b"].error({
                                            title: t("game.输入的数量大于授权数量"),
                                            duration: 3e3
                                        }),
                                        e.next = 11,
                                        o.NewToken1Contract.methods.approve(St.AirdropAddress, Tt["a"]).estimateGas({
                                            from: o.address
                                        });
                                    case 11:
                                        return a = e.sent,
                                        i = a + 1e5,
                                        e.next = 15,
                                        o.NewToken1Contract.methods.approve(St.AirdropAddress, Tt["a"]).send({
                                            from: o.address,
                                            gas: i
                                        }).then(Object(J["a"])(regeneratorRuntime.mark((function e() {
                                            var t, a;
                                            return regeneratorRuntime.wrap((function(e) {
                                                while (1)
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return o.getTokenAllowance(),
                                                        o.Burnbtn = !0,
                                                        e.next = 4,
                                                        o.AirdropContract.methods.raise(n).estimateGas({
                                                            from: o.address
                                                        });
                                                    case 4:
                                                        return t = e.sent,
                                                        a = t + 1e5,
                                                        e.next = 8,
                                                        o.AirdropContract.methods.raise(n).send({
                                                            from: o.address,
                                                            gas: a
                                                        }).then((function() {
                                                            o.minsDialogVisibleV1 = !1,
                                                            o.reduceAmount = "",
                                                            o.Burnbtn = !1,
                                                            o.getBalance(),
                                                            o.getReceiveProfit()
                                                        }
                                                        )).catch((function() {
                                                            o.Burnbtn = !1
                                                        }
                                                        ));
                                                    case 8:
                                                        o.allowance = e.sent;
                                                    case 9:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        ))));
                                    case 15:
                                        o.allowance = e.sent,
                                        e.next = 27;
                                        break;
                                    case 18:
                                        return o.Burnbtn = !0,
                                        console.log(n),
                                        e.next = 22,
                                        o.AirdropContract.methods.raise(n).estimateGas({
                                            from: o.address
                                        });
                                    case 22:
                                        return r = e.sent,
                                        s = r + 1e5,
                                        e.next = 26,
                                        o.AirdropContract.methods.raise(n).send({
                                            from: o.address,
                                            gas: s
                                        }).then((function() {
                                            o.Burnbtn = !1,
                                            o.minsDialogVisibleV1 = !1,
                                            o.reduceAmount = "",
                                            o.getBalance(),
                                            o.getReceiveProfit()
                                        }
                                        )).catch((function() {
                                            o.Burnbtn = !1
                                        }
                                        ));
                                    case 26:
                                        o.allowance = e.sent;
                                    case 27:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        function n() {
                            return e.apply(this, arguments)
                        }
                        return n
                    }()
                });
                o.address && o.initContract(),
                o.clipboard = new It.a(".clip-button"),
                o.clipboard.on("success", (function(e) {
                    ee["a"].success({
                        message: t("index.复制成功!"),
                        type: "success",
                        offset: 240
                    }),
                    e.clearSelection()
                }
                )),
                o.clipboard.on("error", (function() {
                    ee["b"].error({
                        message: t("index.复制失败")
                    })
                }
                )),
                Object(a["z"])((function() {
                    o.clipboard && o.clipboard.destroy()
                }
                )),
                Object(a["ab"])((function() {
                    return o.address
                }
                ), (function(e) {
                    e && o.initContract()
                }
                ));
                var i = Object(a["U"])(o);
                return Object(Z["a"])({}, i)
            }
        };
        n("30fe"),
        n("0c3a");
        Ft.render = xt,
        Ft.__scopeId = "data-v-34d9c5f1";
        var Et = Ft
          , Pt = [{
            path: "/",
            name: "Index",
            component: Et
        }]
          , Ut = Object(Fe["a"])({
            history: Object(Fe["b"])(),
            routes: Pt
        })
          , Ht = Ut
          , Vt = n("53ca")
          , Xt = n("bc3a")
          , Gt = n.n(Xt)
          , Wt = n("4328")
          , Qt = n.n(Wt)
          , qt = Gt.a.create();
        qt.defaults.withCredentials = !0,
        qt.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded",
        qt.interceptors.request.use((function(e) {
            if ("post" === e.method) {
                if (e.data && e.data.constructor === FormData)
                    return e;
                e.data || (e.data = {}),
                e.data.lang = fe(),
                e.data = Qt.a.stringify(e.data)
            }
            return e
        }
        ), (function(e) {
            return Promise.reject(e)
        }
        )),
        qt.interceptors.response.use((function(e) {
            var t = e.data;
            return "object" === Object(Vt["a"])(t) && 1 !== t.Status ? (ee["a"].error({
                message: t.msg,
                customClass: "right",
                showClose: !0
            }),
            Promise.reject(e.data)) : e.data
        }
        ), (function(e) {
            return Promise.reject(e)
        }
        ));
        var Zt = qt
          , Yt = oe.get() || "en";
        me(Yt);
        var Jt = function() {
            history.length > 0 ? Ht.go(-1) : Ht.push({
                name: "Index"
            })
        };
        document.getElementsByTagName("body")[0].setAttribute("lang", Yt);
        var zt = Object(a["j"])(Ie);
        zt.config.globalProperties.$goBack = Jt,
        zt.config.globalProperties.$showErrorNotify = function(e) {
            if (4001 !== e.code) {
                var t = e.toString().replace(/[\r\n]/g, "");
                console.log(t);
                var n = "";
                if ("MathWallet" === (void 0).get())
                    n = t;
                else if ("bsc" === (void 0).get()) {
                    var a = /error:(.+)/;
                    n = t.match(a)[0]
                } else if ("walletconnect" === (void 0).get())
                    n = t;
                else {
                    var o = /{(.+)}/
                      , i = JSON.parse("".concat(t.match(o)[0]));
                    n = i.message
                }
                0 === document.getElementsByClassName("el-notification").length && ("execution reverted: more maxGetNum" === n && "en" === Yt ? ee["b"].error({
                    title: "Each address has a maximum number of times has arrived",
                    duration: 5e3
                }) : "execution reverted: more maxGetNum" === n && "zh-cn" === Yt ? ee["b"].error({
                    title: "每个地址每天抽取次数已到上限",
                    duration: 5e3
                }) : "execution reverted:ERC20:transfer amount exceeds balance" === n && "en" === Yt ? ee["b"].error({
                    title: "transfer amount exceeds balance",
                    duration: 5e3
                }) : "execution reverted:ERC20:transfer amount exceeds balance" === n && "zh-cn" === Yt ? ee["b"].error({
                    title: "余额不足",
                    duration: 5e3
                }) : "execution reverted: ERC20: transfer amount exceeds balance" === n && "en" === Yt ? ee["b"].error({
                    title: "transfer amount exceeds balance",
                    duration: 1e5
                }) : "execution reverted: ERC20: transfer amount exceeds balance" === n && "zh-cn" === Yt ? ee["b"].error({
                    title: "余额不足",
                    duration: 1e5
                }) : "execution reverted:ERC20:no token" === n && "en" === Yt ? ee["b"].error({
                    title: "no token",
                    duration: 5e3
                }) : "execution reverted:ERC20:no token" === n && "zh-cn" === Yt ? ee["b"].error({
                    title: "没有卡片",
                    duration: 5e3
                }) : "execution reverted:ERC20:no token" === n && "en" === Yt ? ee["b"].error({
                    title: "no token",
                    duration: 5e3
                }) : "execution reverted:ERC20:no token" === n && "zh-cn" === Yt ? ee["b"].error({
                    title: "没有卡片",
                    duration: 5e3
                }) : "execution reverted:ERC20:not owner" === n && "en" === Yt ? ee["b"].error({
                    title: "not owner",
                    duration: 5e3
                }) : "execution reverted:ERC20:not owner" === n && "zh-cn" === Yt ? ee["b"].error({
                    title: "不是所有者",
                    duration: 5e3
                }) : "execution reverted: not owner" === n && "en" === Yt ? ee["b"].error({
                    title: "not owner",
                    duration: 5e3
                }) : "execution reverted: not owner" === n && "zh-cn" === Yt ? ee["b"].error({
                    title: "不是所有者",
                    duration: 5e3
                }) : "execution reverted:ERC20:can not lever up" === n && "en" === Yt ? ee["b"].error({
                    title: "can not lever up",
                    duration: 5e3
                }) : "execution reverted:ERC20:can not lever up" === n && "zh-cn" === Yt ? ee["b"].error({
                    title: "不能升级",
                    duration: 5e3
                }) : "execution reverted: no condition" === n && "en" === Yt ? ee["b"].error({
                    title: "Not enough attribute",
                    duration: 5e3
                }) : "execution reverted: no condition" === n && "zh-cn" === Yt ? ee["b"].error({
                    title: "条件不满足",
                    duration: 5e3
                }) : n || "en" !== Yt ? n || "zh-cn" !== Yt ? ee["b"].error({
                    title: n,
                    duration: 5e3
                }) : ee["b"].error({
                    title: "交易失败",
                    duration: 5e3
                }) : ee["b"].error({
                    title: "Transaction failure",
                    duration: 5e3
                }))
            }
        }
        ,
        zt.config.globalProperties.$http = Zt,
        zt.config.globalProperties.$rankURL = "https://gamerank.binaryx.pro",
        zt.config.globalProperties.$WorkURL = "/minev1",
        zt.config.globalProperties.$NewWorkURL = "/minev2",
        zt.config.globalProperties.$NewestWorkURL = "/minev3",
        zt.config.globalProperties.$dungeonURL = "https://game.binaryx.pro/",
        zt.use(ee["c"]).use($).use(be).use(Ht).mount("#app")
    },
    6: function(e, t) {},
    "68eb": function(e) {
        e.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"get_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"GetProfit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"raise_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"Raise","type":"event"},{"inputs":[],"name":"_isDIS","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_isGet","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"airdopBNX","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bnxProfits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"flag","type":"bool"}],"name":"changeIsDis","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"flag","type":"bool"}],"name":"changeIsGet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"geUnlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDecimal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getProfit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getReceiveProfit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"getToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getTokenAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTokenTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWaitProfit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"nowTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"orders","outputs":[{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"uint256","name":"receiveProfit","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"raise","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setTokenAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"gameAddress","type":"address"}],"name":"setrecipientAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"number","type":"uint256"}],"name":"setstaticNumber","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"staticNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokenNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
    },
    7: function(e, t) {},
    "722f": function(e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')
    },
    7459: function(e, t, n) {},
    8: function(e, t) {},
    9: function(e, t) {},
    "94f9": function(e, t, n) {},
    a02b: function(e, t, n) {},
    c2e1: function(e, t, n) {},
    cf4b: function(e, t, n) {
        "use strict";
        n("94f9")
    },
    d147: function(e, t, n) {
        "use strict";
        n("a02b")
    },
    df74: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAHCAYAAAA8sqwkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACESURBVHgBdY2xDYMwFETvLCGUziNkFTb56SidSZKSLt7Eq2QES6miKHywJUAY88u79/5RnLP6+b7Y6N0PwxuVk76/6k8f/F9uBjECOs4BQirqMALU5I45FLFq2gDSskG3LG0wI8e28/4ZuX4qpJSV8LpQk3JQwAdhJ8GghE8vSSLO1roJvrZK6EH8TggAAAAASUVORK5CYII="
    },
    e916: function(e, t, n) {},
    ebb8: function(e, t, n) {},
    edd4: function(e) {
        e.exports = JSON.parse('{"index":{"第页共":"Page {page} of {total}","块倒数":"Countdown","白皮书":"White paper","首页":"Home","英文":"English","中文":"Chinese","兑换":"Swap","资金池":"Pool","交易挖矿":"Trade","行情":"Chart","交易所":" Exchange","更多":"More","游戏":"Game","百科全书":"Game Wiki","团队":"Team","生活职业":"Life Skills","战斗职业":"Combat Skills","副本挑战":"Dungeon Adventure","日常挖矿":"Daily Reward","暂未开放":"Coming Soon","Mega Universe 元宇宙游戏":"Metaverse On-Chain Game","Gaming+NFT+Defi+Marketplace+Auction,BSC链上玩法大成作品":"Gaming + NFT + DEFI + MarketPlace + Auction, BSC on-chain game","双重代币经济体系，地牢探险+日常任务玩法，角色+道具全NFT设计":"The dual-token economic system, dungeon adventure + daily work income, all characters and items are NFT Tokens.","创建角色，即可开始领取收益":"Create your character and start mining now！","概念设计":"Design Concept","快速了解 BNX 元宇宙游戏":"Learn more about Cyber Dragon metaverse game","Heco生态币种交易 多快好省就选":"Okexchain Eco-Currency Trading Choose {word}","打造DeFi生态最大的集为一体的平台":"Create the largest DeFi ecosystem integrating {word} as one platform","最具潜力的集DEX、IKO、DAO、聚合交易为一体的DEFI生态平台":"The most potential DEFI ecological platform integrating DEX, IKO, DAO, and aggregate trading","当前流动性质押":"Current TVL","当前价格":"Current price","MDX余额":"KIS balance","待奖励金额":"Pending Rewards","总回购销毁数量":"Amount repurchased","实时通缩率":"Real-time deflation rate","当前挖矿产出":"Created by Mining","24H交易额":"24H transaction volume","累计交易总额":"Cumulative Volume","挖矿产出市值":"Market value of mining output","24H手续费":"24H handling fee","累计手续费":"Cumulative Fee","KIS使用场景":"KIS usage scenarios","回购":"Repurchase","用于回购并销毁KIS":"Used to repurchase and destroy KIS","奖励":"Reward","给质押KIS的人奖励":"Rewards to people who pledge KIS","社区提议及投票":"Community proposal and voting","KIS审计机构":"KIS Audit Agency","连接到钱包":"Connect wallet","Staked":"Staked","Earned":"Earned","APY":"年收益","邀请":"Invite","挖矿":"Mining","信息之窗":"Info","开奖大厅":"Lucky reward","交易":"Trade","冷冻期不能冻结":"Cannot freeze during freezing period","冷冻期不能领取":"Cannot receive during freezing period","期权":"Options","矿池":"Mining Pool","获得":"on obtaining","恭喜获得和BNX":"{investor} on obtaining {income} {coinB} and {windIncome} BNX","价格":"{L} Price {R}","温馨提示：您有未领取的收益请及时领取":"Reminder: if you have unclaimed income, please receive it in time","期权板块":"Options sector","请选择委托周期":"Please select the commission period","历史记录":"Record","请输入委托数量":"Please enter amount","请输入您的委托数量":"Please enter your order amount","委托限制":"Delegation restrictions","看涨":"Bull","看跌":"Bear","连接钱包":"Connect Wallet","钱包地址":"Wallet address","地址":"Address","流水记录":"All Transactions History","我的委托":"My commission","未开奖":"No prizes","已开奖":"Draw","涨":"Rise","跌":"Fall","返回本金":"Return principal","委托周期":"Maturity","周期":"Maturity","个区块分钟":"{block} Blocks ({minute} Minutes)","区块":"Block","委托数量":"Amount {token}","数量":"Amount {token}","开奖":"Claim reward","等待开奖":"Waiting for the draw","委托方向":"Direction","委托本金：扣除":"Entrusted principal: deduction","委托本金":"Entrusted principal","委托本金：暂未开奖":"Entrusted principal: No prizes have been drawn yet","额外获得":"Extra gain","确认委托":"Confirm order","确定":"Confirm","授权":"Enable {coinB}","请选择":"Please choose","请输入投资金额":"Please enter the investment amount","超出投资区间":"Out of investment range","余额不足":"Insufficient balance","BNX余额不足":"Insufficient BNX balance","请到交易中当前委托开奖":"Please go to the current commissioned lottery in the transaction","开奖成功":"Successful draw","授权成功":"Authorization succeeded","下单成功":"Successfully ordered","个区块":" Blocks","流动性挖矿":"Liquidity Mining","流动性挖矿总量":"Total Liquidity Mining Output {token}","流动性挖矿余额":"Liquidity Mining balance {token}","流动性挖矿损益":"Total Rewards of the pool {token}","冻结":"Stake","赎回":"Unstake","我的冻结":"Staked {token}","待领取金额记录":"Amount to be collected record","返还":"Refund {token}","领取":"Receive","锁仓分红":"Lockup Dividends","总冻结":"Total Lockup {token}","我的锁仓":"My Lockup {token}","锁仓":"Lockup","解锁":"Unlock","解冻":"Thaw","锁仓累积分红":"Accumulated dividends for locked positions","上轮分红总额":"Dividends from Last Day {token}","我的待领取收益":"My Claimable Dividends {token}","领取记录":"Collection record","请输入数量":"Please enter the amount","赎回数量":"Unstake amount","上限":"Upper limit","冻结BNX token":"Lockup BNX token","余额":"Balance","请输入冻结BNX token的数量":"Please enter the number of frozen BNX token","授权BNX token":"Enable BNX token","解冻数量":"Thawed amount","解锁数量":"Unlocked amount","请输入解冻BNX token":"Please enter unfreeze BNX token","数量必须大于等于":"The amount must be greater than or equal to {num}","参与成功":"Stake successfully","数量必须大于0":"Amount must be greater than 0","赎回成功":"Unstake successful","冻结成功":"Lockup successfully","领取成功":"Received successfully","数量不足":"Insufficient amount","本周期转入的做市商资金将在下一结算周期生效。":"The market maker funds transferred this week will take effect in the next settlement cycle.","二元期权des":"BSC has smart contract function and is compatible with Ethereum Virtual Machine (EVM)","二元期权":"Binary Options","交易市场":"Market","更多功能":"Coming Soon","更多功能des":"More functions are being actively developed, and we look forward to seeing you again","版权":"Copyright©2016-{year} BinaryX All rights reserved","状态":"State","平台流水记录":"Order History","当前委托":"Current Positions","资金变化":"PNL","参与":"Stake","流动性挖矿记录":"Liquidity Mining Record","结算周期":"Settlement Period","分红记录":"Dividend record {token}","分红数量":"Dividend Amount {token}","操作":"Operate","锁仓累计分红":"Cumulative Dividends {token}","取消":"Cancel","锁仓分红记录":"Lockup Dividend Record","我的冻结记录":"Record of My Lockup BNX","冻结数量":"Staking Amount","锁仓数量":"Lockup Amount","努力开发中敬请期待":"Working hard, stay tuned!","社区投票":"Community vote","后台审核":"Background audit","发起提案":"Initiate a proposal","社区治理投票":"Community governance voting","待领取佣金":"Pending commission","邀请分享":"Invite to share","邀请链接":"Invitation Link","领取奖励":"Receive award","我的佣金":"My commission","佣金":"Commission","时间":"Time","复制成功":"Copy successfully","复制失败，请手动长按复制":"Copy failed, please manually long press to copy","佣金记录":"Commission record","复制失败":"Copy failed","用户协议":"User agreement","正在开发中des":"Under construction...","二维码":"Code","复制成功!":"Copy success!","没有数据":"No Data","需要BNX数量：":"Number of BNX required:","图表":"Chart","区块高度":"Block Hight","Price":"Price","需要BNX数量":"Number of BNX required"},"share":{"邀请分享":"Invite to share","邀请链接":"Invitation Link","待领取佣金":"Pending commission","领取奖励":"Receive award","我的佣金":"My commission","佣金":"Commission","时间":"Time","复制成功":"Copy successfully","复制失败，请手动长按复制":"Copy failed, please manually long press to copy"},"list":{"冻结记录":"Lockup Record","冻结数量":"Staking Amount","冻结时间":"Time Frozen","分红数量":"Dividend Amount","领取时间":"Time of Claim","期权委托记录":"Option order record","结算周期":"Settlement Period","领取":"Claim","已领取":"Claimed"},"income":{"用户盈利信息":"User Profit Information","恭喜":"congratulations","获得":"Get","和":"and"},"web3":{"暂未检测到钱包插件，请安装MetaMask钱包， 或在imtoken里打开":"The wallet plug-in is not detected yet, please install MetaMask wallet or open it in imtoken"},"trade":{"钱包地址":"Wallet address","委托方向":"Entrusted direction","额外收益":"Extra gain","在该结算周期转移的做市商资金将在下一个结算周期生效。":"The market maker funds transferred this settlement cycle will take effect in the next settlement cycle.","一个地址在一个区块内仅接受一次转账，且单笔转账不能超过 100000，超出将按照上限记录下单金额，多余部分在下一区块退回。":"An address can only accept one transfer within a block, and a single transfer cannot exceed 100000 {coinB}. If it exceeds the upper limit, the order amount will be recorded according to the upper limit, and the excess will be returned in the next block."},"footer":{"Binaryx":"Binaryx","desc":"BinaryX only provides service for adult users who are over 21 years old and we strictly conform to the local laws and regulations. Please make sure that you play our games with consent from your local laws and regulations.","版权所有":"License","关于我们":"About us","关注我们":"Follow us","用户协议":"User Agreement","常见问题":"FAQs","审计报告":"Audit Report"},"info":{"产品描述":"Product Introduction","用户协议":"User Agreement","常见问题":"FAQs"},"lucky":{"我的开奖奖励":"My Reward","暂未开奖":"No prize","帮TA开奖":"Get reward","领奖记录":"Reward List"},"game":{"Short contract address:":"Short contract address:","收取BNX":"Charge BNX","可领取BNX数量":"Your BNX AirDrop Amount","已领取BNX数量":"Claimed","领取奖励":"Claim reward","销毁token":"Destroy Token","已销毁token数量":"Burned Amount","累计销毁token数量":"Total JEX Amount","销毁":"Burn","授权":"Authorization","暂无可领取奖励":"No claim BNX","请输入销毁的数量":"Please enter the number of destructions","输入数量大于余额":"The input is larger than the balance","输入的数量大于授权数量":"The number of inputs is greater than the number of authorizations","Airdrop":"Airdrop","金币产率":"Gold mining ratro","一键领取":"One-click collection","伐木":"Lumberjack","酿酒":"Winemaker","卷轴抄录":"ScrollScribe","游侠工作":"Hunting","Class":"Class","战斗力":"Score","Leaderboard":"Leaderboard","卡片角色":"Card role","等级":"Level","总属性值":"Total attribute","我们的团队":"Our Team","Brian Roland":"Brian Roland","Owner":"Owner","Josephine Parker":"Joseph Parker","Chief Developer":"Chief Developer","Jacob Raleign":"Jacob Raleign","Backend Developer":"Backend Developer","Michael Hughes":"Michael Hughes","Jonas Hamlet":"Jonas Hamlet","Ken Dryden":"Ken Dryden","Front-end Developer":"Front-end Developer","Tobey Lily":"Tobey Lily","Art Designer":"Art Designer","Letitia Tony":"Letitia Tony","Market":"Market","游戏":"Game","Go to work":"Go to work","Reminder: Each shake needs to consume":"Reminder: Each shake needs to consume","Shake":"Recruit hero","Put in the backpack":"Added backpack","My backpack":"My hero","Life occupation":"Gold Mining","Mage":"Mage","Thieves":"Thieves","warrior":"warrior","Ranger":"Ranger","返回":"Back","Card role":"Card role","Attributes":"Attributes","Power":"Strength","Agile":"Agility","Constitution":"Constitution","Willpower":"Willpower","Intelligence":"Intelligence","charm":"Spirit","Total":"Total","Skill":"Skill","Work":"Work","Basic description":"Basic description","Warriors Basic":"A brave and experienced soldier or fighter.A reliable protector of the team. They can equip all one-handed or two-handed weapons except wands. They can equip light or heavy shields and medium or heavy armor. Have the highest strength and physical growth. They can protect the teammates by taunting/guarding skills.","Thieves Basic":"Attackers who are good at dual-wielding can deal a lot of physical damage. They can equip all one-handed weapons, light shields, light armor, or medium armor. They have the highest agility growth and are good at avoiding damage with a high probability. Stealing skills can also steal items and rare equipment for the team. In addition to combat, thieves are versatile in life skills and can obtain many gold Tokens through daily work.","Mage Basic":"The master of elements, while inflicting great elemental damage, can also give the enemy debuffs. They can only equip staff and robes, cannot use any shields or armor. They have the highest growth of will and intelligence and are good at dealing AOE damage. The wizard can also create magic equipment, enchant equipment, and improve team combat capabilities.","Ranger Basic":"Archery master, good at wilderness survival, good at giving opponents a fatal blow with a bow, they can lead the team to avoid traps. Can be equipped with crossbow weapons, can not use shields, can be equipped with light or medium armor, strength/agility/constitution balanced development, is a dungeon adventure and hero combat power player.","knight Basic":"A fighter with a firm belief, possessing aura skills can provide bonuses to the team. They can equip all one-handed weapons except the staff, light or heavy shields, and medium or heavy armor. They have the highest physical and attractive growth attributes. Although his own combat effectiveness is not strong, aura skills are indispensable for challenging advanced instances.","Part-time job":"Part-time job","Senior part-time job":"Royal guard","Work reward":"Work reward","Hunting":"Hunting","coming soon":"Coming Soon","Working part-time can earn gold coin income":"Working part-time can earn gold coin income","Strike iron":"Blacksmith","Library management":"Librarian","No skills":"No skills","advanced Hunting":"Advanced Hunting","advanced Strike iron":"Advanced Blacksmith","advanced Library management":"Advanced Librarian","Choosing a part-time job role":"Choose a hero","Confirm":"Confirm","Worrior Token ID":"Worrior Token ID:","Thieves Token ID":"Thieves Token ID:","Mage Token ID":"Mage Token ID:","Ranger Token ID":"Ranger Token ID","Start working":"Start working","working":"working","record":"record","No position for now":"No position for now","Job type":"Job type","End time":"End time","Starting time":"Starting block","Work income / gold":"Work income / gold","Get reward":"Get reward","Claim reward":"Claim reward","Quit work":"Quit","敬请期待":"Coming Soon","角色销毁":"Role destructio","销毁后您将获得":"You will get {TokenNum} after destruction","卡片不想要了，点击销毁":"The card is no longer wanted, click destroy","销毁成功":"Destroyed successfully","销毁失败，请重试":"Destroy failed, please try again","爆卡了!!卡片升级失败":"Explosive card !! Card upgrade failed","金币余额不足":"Insufficient Gold","BNX余额不足":"Insufficient BNX","余额不足":"Insufficient balance","Role destruction":"Role destruction","destroy":"Destroy","Upgrade":"Upgrade","Consume":"Consume","Note , that there is a certain burst rate when the character is upgraded, and the original card disappears when the card burst":"Failure is possible when upgrading, and the hero\'s NFT will disappear after the upgrade fails.","授权金币":"Authorize Gold Coins","gold coins":"Gold coins","选择角色":"select a hero","待领取挖矿收益":"Salary","待领取金币收益":"Salary Gold","待领取BNX收益":"Salary BNX","角色":"Role","Unlimited occupation":"no limit","Unlimited Attribute":"Unlimited Attribute","Warrior limited":"Warrior limited","Thieves limited":"Thieves limited","Mage limited":"Mage limited","Range limited":"Ranger limited","流动性挖矿：通过抵押pancake LP获取BNX":"Liquidity mining: Obtain BNX by mortgage pancake LP","日产量":"Daily rewards","月产量":"Monthly rewards","总质押":"Total Staked","年化收益":"Average APY","质押":"Staking","注意:我们现在只支持Binance Smart Chain，不要转移ETHEREUM主网代币":"Support Binance Smart Chain, don’t transfer ETHERWUM mainnet tokens","请输入数量":"Please enter the quantity","最大值":"Max","可用":"Available","取消":"Cancel","解押":"Release","数量不足":"Insufficient quantity","未领取奖励":"Unclaimed reward","收取奖励":"Claim reward","领取并解押":"Claim & Unstake","Can Blacksmith":"Can Blacksmith","Can Hunting":"Can Hunting","Can Librarian":"Can Librarian","LV 5 and above":"LV {level} and above","授权BNX":"Enable BNX","领取成功":"Receive success","领取不能太频繁":"Can\'t get too frequent","上一笔交易未完成":"The last transaction is not completed","退出成功":"Exit Successfully","三小时限制":"Please receive award or quit after {time} minutes after the last prize.","角色授权":"Role authorization","一键开卡":"One-click Recruit hero","免费开卡":"Free Recruit hero","没有免费开卡次数":"No chance to open free card","每个地址每天抽取次数已到上限":"You can recruit 5 heroes each day","Adventure":"Adventure","Start the adventure":"Adventure","Dungeon Level":"Dungeon Level","Card Level":"Card Level","Hero role":"Hero role","请选择级别":"Please select the level","请选择角色":"Please choose a role","请选择Token ID":"Please select Token ID","life value":"life value","Battle express":"Battle Report","Congratulations, you have defeated the goblins in this battle":"Congratulations on defeating {monster} in this battle","Keep on adventurous":"Keep on adventurous","Exit the battle":"Exit the battle","Its a pity that the Goblin adjustment failed":"It\'s a pity that the {dungeon} adjustment failed","Past battles":"History","Dungeon":"Dungeon","Enemy":"Enemy","Trophy":"Trophy","keys,gold coins":"{key} Iron Key, {gold} Gold, {bnx} BNX","keys":"{key} Iron Key","gold":"{gold} Gold","coins":"{bnx} BNX","Status":"Status","已领取":"Claimed","未领取":"Unaccalimed","Win or lose":"Win or lose","Pending BNX":"BNX","Gold coins pending":"Gold","Keys to be picked up":"Iron Key","去冒险":"Adventure","战胜，获得":"Defeat {name}, get {key} Iron Key, {gold} Gold, {bnx} BNX","Key":"Iron Key","Gold":"Gold","BNX":"BNX","军团士兵":"Legionnaire","Beta":"Beta","挑战失败奖励":"Challenge the {monster} to successfully obtain {gold} Gold, {coupon} Iron Key and {bnx} BNX","Claimed successfully":"Claimed successfully","剩余冒险次数":"Remaining chance","无奖励":"No prize","You win!":"You win!","Treasure Box":"Treasure Box","Open":"Open","Free":"Free","恭喜，本次百宝箱抽中了":"Congratulations, this treasure chest draw won","可惜，我这次没有拿到打开宝箱的奖励。":"Unfortunately, I didn\'t get the reward for opening the treasure chest this time.","开箱记录":"History","剩余开箱次数":"Remaining chance","宝箱":"Treasure Chest","当前TokenID未查到记录":"No record found for the current TokenID","手续费支付失败":"Failed to pay the fee","手续费支付成功":"Handling fee paid successfull","手续费不足":"Insufficient gas fee","支付":"Pay","还没到账":"The handling fee has not arrived yet, please wait","9月20日之前存入流动性的用户请点击这里领取LPtoken和BNX收益":"Users who deposited liquidity before September 20, please click here to receive LPtoken and BNX revenue"}}')
    }
});
//# sourceMappingURL=app.63175398.js.map
