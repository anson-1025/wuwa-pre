/**
 * ============================================================
 *  鸣潮 (Wuthering Waves) 最新版本前瞻内容数据
 *  维护说明：
 *    - 每条数据必须有 source 字段
 *    - 不确定的信息加 status: "待官方确认"
 *    - 不要写死未确认的具体数值、日期、角色定位
 *  Last updated: 2026-07-10 (基于 3.5 版本前瞻直播及官方公告)
 * ============================================================
 */

const VERSION_DATA = {

  // ===================== 版本基本信息 =====================
  version: {
    number: "3.5",
    title: "遗音扶剑 荡梦而歌",
    titleEn: "Blade of Past Resounds, Lingering Dream Hymns",
    releaseDate: "2026-07-10",
    maintenanceStart: "2026-07-10 06:00 (UTC+8)",
    maintenanceEnd: "2026-07-10 13:00 (UTC+8)",
    phaseOneEnd: "2026-07-31 11:59 (UTC+8)",
    phaseTwoEnd: "2026-08-21 11:59 (UTC+8)",
    platform: "PC / iOS / Android / Xbox Series X|S",
    keySellingPoints: [
      "全新大地图「梦州·玄方地界」—— 国风楼阁 × 轻科幻机关都市",
      "首位五星SP角色「秧秧·玄翎」—— 湮灭迅刀主C",
      "新五星辅助「穗穗」—— 冷凝音感仪治疗/增伤",
      "漂泊者解锁导电属性（雷主）",
      "自选复刻卡池「忆旅唤取」—— 忌炎/吟霖/今汐/长离/折枝/相里要 六选一",
      "PC端体积精简约20GB · 支持 Intel XeSS 3 插帧",
      "角色独立语音语言设置 · 全自动剧情播放",
      "正式登陆 Xbox Series X|S 主机平台"
    ],
    source: "官方 3.5 版本前瞻直播 (2026-06-26)、gematsu.com、game8.co、noisypixel.net"
  },

  // ===================== 核心亮点速览 =====================
  keyHighlights: [
    {
      id: "hl-map",
      category: "地图",
      icon: "🗺️",
      title: "梦州·玄方地界",
      desc: "瑝珑六大主城之一，融合国风楼阁山水与超现实机关都市。首期开放玄方城、玄幽东岳、方擎西峰、落渊南丘四块区域。后续 3.6~3.8 逐步解锁腹地。",
      emphasis: "high",
      tags: ["新地图", "国风", "科幻"],
      source: "官方 3.5 前瞻直播 (2026-06-26)、taptap.cn、17173.com"
    },
    {
      id: "hl-yangyang-sp",
      category: "角色",
      icon: "⚔️",
      title: "秧秧·玄翎 (SP 秧秧)",
      desc: "首位五星 SP 角色，由四星秧秧突破进化。湮灭属性 / 迅刀，驻场主C，拥有苍/羽双形态切换，重击爆发 + 湮灭之祸机制。",
      emphasis: "high",
      tags: ["新角色", "SP", "主C"],
      source: "官方 3.5 前瞻直播 (2026-06-26)、game8.co"
    },
    {
      id: "hl-suisui",
      category: "角色",
      icon: "💎",
      title: "穗穗（岁岁）",
      desc: "秧秧的姐姐。冷凝属性 / 音感仪，治疗+增伤辅助，基于生命值提供全队治疗，可施加「冷凝霜蚀」负面状态。",
      emphasis: "high",
      tags: ["新角色", "辅助", "治疗"],
      source: "官方 3.5 前瞻直播 (2026-06-26)、game8.co"
    },
    {
      id: "hl-electro-rover",
      category: "角色",
      icon: "⚡",
      title: "漂泊者·导电（雷主）",
      desc: "漂泊者解锁第四种属性——导电。可持盾格挡 + 剑攻击，融合衍射/湮灭/气动属性打出连招，定位为辅助/副C。",
      emphasis: "high",
      tags: ["主角", "新属性", "副C"],
      source: "官方 3.5 前瞻直播 (2026-06-26)、gurugamer.com"
    },
    {
      id: "hl-starpath",
      category: "卡池",
      icon: "🌟",
      title: "「忆旅唤取」自选复刻",
      desc: "可从忌炎、吟霖、今汐、长离、折枝、相里要六位 1.0 五星角色中自选一位定向抽取。首次十连免费，累计抽取返还金球。",
      emphasis: "high",
      tags: ["复刻", "自选", "福利"],
      source: "官方 3.5 前瞻直播 (2026-06-26)、sportskeeda.com"
    },
    {
      id: "hl-xbox",
      category: "平台",
      icon: "🎮",
      title: "正式登陆 Xbox Series X|S",
      desc: "3.5 版本起同步登陆 Xbox Series X|S 及 PC Microsoft Store，主机玩家可体验完整内容。",
      emphasis: "medium",
      tags: ["Xbox", "新平台"],
      source: "gematsu.com、rpgfan.com"
    },
    {
      id: "hl-optimization",
      category: "优化",
      icon: "🔧",
      title: "PC 体积精简约 20GB",
      desc: "采用全新资源压缩技术，PC 端安装包体积最高缩减约 20GB。同时支持 Intel XeSS 3 插帧技术，可调节帧生成设置。",
      emphasis: "medium",
      tags: ["优化", "PC", "存储"],
      source: "官方 3.5 前瞻直播 (2026-06-26)、9game.cn"
    },
    {
      id: "hl-voice",
      category: "优化",
      icon: "🎙️",
      title: "角色独立语音语言设置",
      desc: "每位共鸣者可单独设置配音语言（中/日/韩/英自由组合），跨平台语音设置同步。",
      emphasis: "medium",
      tags: ["语音", "自定义", "QoL"],
      source: "官方 3.5 前瞻直播 (2026-06-26)"
    },
    {
      id: "hl-summer",
      category: "外观",
      icon: "👙",
      title: "夏日泳装皮肤",
      desc: "琳奈「薄荷糖」、千咲「蜜桃冰」夏日泳装限时上架（1980 月相）。秧秧主题典藏摩托「玄夜启明」。",
      emphasis: "medium",
      tags: ["皮肤", "泳装", "摩托"],
      source: "官方 3.5 前瞻直播 (2026-06-26)、taptap.cn"
    },
    {
      id: "hl-story",
      category: "剧情",
      icon: "📖",
      title: "第四章主线启动",
      desc: "新主线篇章「山雨欲来风满楼」×「玄翎振壑定澜音」，横跨 3.5~3.8 版本的大型连续叙事。",
      emphasis: "medium",
      tags: ["主线", "剧情"],
      source: "capsulecomputers.com.au、noisypixel.net"
    }
  ],

  // ===================== 新角色 / 复刻角色 =====================
  resonators: {
    newCharacters: [
      {
        name: "秧秧·玄翎",
        nameEn: "Yangyang: Xuanling",
        rarity: 5,
        attribute: "湮灭 (Havoc)",
        weapon: "迅刀 (Sword)",
        role: "驻场主C — 重击爆发 / 湮灭之祸",
        bannerPhase: "上半 (7/10 - 7/31)",
        signatureWeapon: "天之苍苍（苍蓝誓约 / Azure Oath）",
        description: "首位五星 SP 角色，由四星秧秧突破进化。拥有「苍」与「羽」双形态，可通过重击在两种形态间切换，造成高额湮灭伤害并施加「湮灭之祸」负面状态。",
        combatStyle: "双形态切换重击流",
        status: "confirmed",
        source: "官方 3.5 前瞻直播 (2026-06-26)、game8.co、gurugamer.com"
      },
      {
        name: "穗穗（岁岁）",
        nameEn: "Suisui",
        rarity: 5,
        attribute: "冷凝 (Glacio)",
        weapon: "音感仪 (Rectifier)",
        role: "治疗/增伤辅助 — HP 治疗 / 冷凝霜蚀",
        bannerPhase: "下半 (7/31 - 8/21)",
        signatureWeapon: "栖霞饮露（初光先驱 / Firstlight's Herald）",
        description: "秧秧的姐姐。基于最大生命值提供全队治疗，可为全队提供攻击力加成。可施加「冷凝霜蚀」负面状态，兼具辅助与生存能力。",
        combatStyle: "HP 奶辅 + 负面状态",
        status: "confirmed",
        source: "官方 3.5 前瞻直播 (2026-06-26)、game8.co"
      },
      {
        name: "漂泊者·导电（雷主）",
        nameEn: "Rover: Electro",
        rarity: 5,
        attribute: "导电 (Electro)",
        weapon: "迅刀 (Sword)",
        role: "辅助/副C — 护盾 / 合轴 / 多属性融合",
        bannerPhase: "版本上线即解锁",
        signatureWeapon: null,
        description: "漂泊者解锁第四种属性。可持盾格挡敌人攻击，并通过剑攻击施加多种负面状态。可融合衍射/湮灭/气动属性打出连招。",
        combatStyle: "盾反 + 属性融合",
        status: "confirmed",
        source: "官方 3.5 前瞻直播 (2026-06-26)、gurugamer.com"
      }
    ],
    rerunCharacters: [
      {
        name: "琳奈",
        nameEn: "Lynae",
        rarity: 5,
        attribute: "待官方确认",
        weapon: "待官方确认",
        bannerPhase: "上半 (7/10 - 7/31)",
        source: "sportskeeda.com、game8.co"
      },
      {
        name: "陆·赫斯",
        nameEn: "Luuk Herssen",
        rarity: 5,
        attribute: "待官方确认",
        weapon: "待官方确认",
        bannerPhase: "上半 (7/10 - 7/31)",
        source: "sportskeeda.com、game8.co"
      },
      {
        name: "爱弥斯",
        nameEn: "Aemeath",
        rarity: 5,
        attribute: "热熔 (Fusion)",
        weapon: "待官方确认",
        bannerPhase: "下半 (7/31 - 8/21)",
        source: "sportskeeda.com、game8.co"
      }
    ],
    starpathReverbs: {
      title: "「忆旅唤取」自选复刻卡池",
      description: "可从以下六位 1.0 版本限定五星角色中，自选一位进行定向抽取。首次十连完全免费，累计抽取次数可返还金色唤取道具。",
      availableCharacters: [
        { name: "忌炎", nameEn: "Jiyan" },
        { name: "吟霖", nameEn: "Yinlin" },
        { name: "今汐", nameEn: "Jinhsi" },
        { name: "长离", nameEn: "Changli" },
        { name: "折枝", nameEn: "Zhezhi" },
        { name: "相里要", nameEn: "Xiangli Yao" }
      ],
      notes: "自选复刻卡池与常规限定卡池保底独立计算",
      status: "confirmed",
      source: "官方 3.5 前瞻直播 (2026-06-26)"
    },
    futureCharacters: [
      {
        name: "清宵",
        nameEn: "Qingxiao",
        expectedVersion: "3.6 上半",
        attribute: "气动 (Aero)",
        weapon: "琴剑双持",
        role: "主C — 「女剑仙」双模态战斗",
        description: "蓝发白丝女剑仙，可自由切换琴与剑两种战斗模态。",
        status: "待官方确认",
        source: "taptap.cn、sina.cn 前瞻汇总"
      },
      {
        name: "景燃",
        nameEn: "Jingran",
        expectedVersion: "3.6 下半",
        attribute: "热熔 (Fusion)",
        weapon: "长刃 (Broadblade)",
        role: "后台副C — 烧血盾C机制",
        description: "烧血 + 护盾的输出机制，定位为后台副C。",
        status: "待官方确认",
        source: "taptap.cn、sina.cn 前瞻汇总"
      },
      {
        name: "心月狐",
        nameEn: "Xinyuehu",
        expectedVersion: "3.7 上半",
        attribute: "电磁 (Electro)",
        weapon: "音感仪 (Rectifier)",
        role: "主C",
        description: "白发狐耳成女，鸣潮首个常态裸足女角色。",
        status: "待官方确认",
        source: "taptap.cn、sina.cn 前瞻汇总"
      },
      {
        name: "锁暝",
        nameEn: "Suoming",
        expectedVersion: "3.7 下半",
        attribute: "湮灭 (Havoc)",
        weapon: "音感仪 (Rectifier)",
        role: "辅助/副C — SP 秧秧专属辅助",
        description: "红发双马尾萝莉，据称为 SP 秧秧的专属辅助角色。",
        status: "待官方确认",
        source: "taptap.cn、sina.cn 前瞻汇总"
      }
    ],
    summerSkins: [
      {
        character: "琳奈 (Lynae)",
        skinName: "薄荷糖 (Peppermint)",
        type: "夏日泳装",
        price: "1980 月相（限时）",
        status: "confirmed",
        source: "官方 3.5 前瞻直播 (2026-06-26)"
      },
      {
        character: "千咲 (Chixia)",
        skinName: "蜜桃冰",
        type: "夏日泳装",
        price: "1980 月相（限时）",
        status: "confirmed",
        source: "官方 3.5 前瞻直播 (2026-06-26)、taptap.cn"
      }
    ]
  },

  // ===================== 新武器 / 武器卡池 =====================
  weapons: {
    newWeapons: [
      {
        name: "天之苍苍（苍蓝誓约）",
        nameEn: "Azure Oath",
        type: "迅刀 (Sword)",
        rarity: 5,
        baseATK: 588,
        subStat: "暴击率 24.3%",
        owner: "秧秧·玄翎",
        effect: "全属性增伤 12%~24%；对处于「湮灭之祸」的目标重击伤害提升 36%~72%，且重击无视目标 12%~24% 防御。",
        bannerPhase: "上半 (7/10 - 7/31)",
        status: "confirmed",
        source: "官方 3.5 前瞻直播 (2026-06-26)、game8.co、taptap.cn"
      },
      {
        name: "栖霞饮露（初光先驱）",
        nameEn: "Firstlight's Herald",
        type: "音感仪 (Rectifier)",
        rarity: 5,
        baseATK: 588,
        subStat: "暴击率 24.3%",
        owner: "穗穗",
        effect: "提升最大生命值；释放共鸣解放回复协奏能量；前台/后台均可为全队提供攻击加成。",
        bannerPhase: "下半 (7/31 - 8/21)",
        status: "confirmed",
        source: "官方 3.5 前瞻直播 (2026-06-26)、game8.co、taptap.cn"
      }
    ],
    rerunWeapons: [
      {
        name: "Spectrum Blaster",
        rarity: 5,
        bannerPhase: "上半 (7/10 - 7/31)",
        status: "confirmed",
        source: "capsulecomputers.com.au"
      },
      {
        name: "Daybreaker's Spine",
        rarity: 5,
        bannerPhase: "上半 (7/10 - 7/31)",
        status: "confirmed",
        source: "capsulecomputers.com.au"
      },
      {
        name: "Everbright Polestar",
        rarity: 5,
        bannerPhase: "下半 (7/31 - 8/21)",
        status: "confirmed",
        source: "capsulecomputers.com.au"
      }
    ],
    tideforgeReverbs: {
      title: "「铸忆唤取」自选武器卡池",
      description: "与「忆旅唤取」角色卡池配套的武器复刻卡池，可自选对应角色的五星专武。",
      status: "confirmed",
      source: "capsulecomputers.com.au"
    }
  },

  // ===================== 版本活动 =====================
  events: [
    {
      id: "event-lament-recon",
      name: "悲鸣行动：无音危机",
      nameEn: "Lament Recon: Tacet Crisis",
      type: "战斗",
      category: "限时活动",
      duration: "版本期间开放",
      description: "类吸血鬼幸存者割草玩法。在限定时间内面对源源不断的敌人浪潮，通过击杀敌人获取强化，体验爽快的割草战斗。",
      rewards: "星声、养成材料等",
      status: "confirmed",
      tags: ["战斗", "割草", "爽快"],
      source: "官方 3.5 前瞻直播 (2026-06-26)、capsulecomputers.com.au"
    },
    {
      id: "event-glimpse-xuanfang",
      name: "此隙玄方",
      nameEn: "A Glimpse of Xuanfang",
      type: "探索",
      category: "限时活动",
      duration: "版本期间开放",
      description: "玄方地界专属区域探索活动。完成地图探索目标，累积探索进度领取阶段奖励。",
      rewards: "星声、限定道具、养成材料",
      status: "confirmed",
      tags: ["探索", "地图", "收集"],
      source: "官方 3.5 前瞻直播 (2026-06-26)、capsulecomputers.com.au"
    },
    {
      id: "event-shape-yesterday",
      name: "不改旧时影",
      nameEn: "Shape of Yesterday",
      type: "收集",
      category: "限时活动",
      duration: "版本期间开放",
      description: "留影收集活动。在指定地点拍照收集，记录玄方地界各处的风景。",
      rewards: "星声、限定相框",
      status: "confirmed",
      tags: ["拍照", "收集", "探索"],
      source: "官方 3.5 前瞻直播 (2026-06-26)、capsulecomputers.com.au"
    },
    {
      id: "event-recaptured",
      name: "再续·光影瞬息",
      nameEn: "Recaptured: Action Highlights",
      type: "战斗",
      category: "限时活动",
      duration: "版本期间开放",
      description: "战斗拍照活动，可自选画幅。在战斗中捕捉精彩瞬间获取高分。",
      rewards: "星声、限定相框",
      status: "confirmed",
      tags: ["拍照", "战斗", "创意"],
      source: "官方 3.5 前瞻直播 (2026-06-26)、capsulecomputers.com.au"
    },
    {
      id: "event-lollo-campaign",
      name: "呜呜企划·新旅",
      nameEn: "Lollo Campaign: New Journey",
      type: "委托",
      category: "限时活动",
      duration: "版本期间开放",
      description: "限时委托活动，物流大富翁玩法。掷骰子前进，完成格子事件获取奖励。",
      rewards: "星声、养成材料",
      status: "confirmed",
      tags: ["委托", "棋盘", "休闲"],
      source: "官方 3.5 前瞻直播 (2026-06-26)、taptap.cn"
    },
    {
      id: "event-virtual-crisis",
      name: "虚域危局·象限延展",
      nameEn: "Virtual Crisis: Quadrant Trials",
      type: "高难挑战",
      category: "限时活动",
      duration: "版本期间开放",
      description: "高难战斗挑战活动，在危机情景中面对强敌，需要策略搭配队伍。",
      rewards: "星声、称号",
      status: "confirmed",
      tags: ["高难", "挑战", "战斗"],
      source: "官方 3.5 前瞻直播 (2026-06-26)、taptap.cn"
    },
    {
      id: "event-gifts-aftertune",
      name: "余音赠礼",
      nameEn: "Gifts of Aftertune",
      type: "签到",
      category: "限时活动",
      duration: "版本期间开放",
      description: "七日签到活动，累计登录七天领取丰厚奖励。",
      rewards: "合计 10 抽（金色唤取道具）",
      status: "confirmed",
      tags: ["签到", "福利", "登录"],
      source: "官方 3.5 前瞻直播 (2026-06-26)、capsulecomputers.com.au"
    },
    {
      id: "event-jade-search",
      name: "秘玉寻踪记",
      nameEn: "In Search of Lost Jade",
      type: "网页活动",
      category: "限时活动",
      duration: "版本期间开放",
      description: "网页端活动，通过完成网页任务获取游戏内奖励。",
      rewards: "星声等",
      status: "confirmed",
      tags: ["网页活动", "福利"],
      source: "capsulecomputers.com.au、taptap.cn"
    },
    {
      id: "event-tactical-hologram",
      name: "全息战略·演武 — 达妮娅",
      nameEn: "Tactical Hologram: Denia",
      type: "高难挑战",
      category: "常驻新增",
      duration: "版本上线后常驻",
      description: "新增全息战略 BOSS「达妮娅」挑战，更高难度的全息投影战斗。",
      rewards: "首通奖励",
      status: "confirmed",
      tags: ["全息", "BOSS", "常驻"],
      source: "capsulecomputers.com.au、taptap.cn"
    },
    {
      id: "event-endstate-matrix",
      name: "终焉矩阵：险境强袭 (S2)",
      nameEn: "Endstate Matrix: Adversity Vanguard (Season 2)",
      type: "周期挑战",
      category: "常驻新增",
      duration: "版本期间",
      description: "终焉矩阵 S2 赛季，新增积分机制，每期随机角色疲劳值系统增加配队策略深度。",
      rewards: "星声、养成材料",
      status: "confirmed",
      tags: ["赛季", "高难", "策略"],
      source: "capsulecomputers.com.au、taptap.cn"
    },
    {
      id: "event-mingshen",
      name: "明慎辑录",
      nameEn: "Mingshen Notices",
      type: "收集",
      category: "常驻新增",
      duration: "版本上线后常驻",
      description: "梦州区域常驻收录/供奉体系，通过收集区域内的特定物品提升供奉等级获取奖励。",
      rewards: "星声、限定道具",
      status: "confirmed",
      tags: ["常驻", "收集", "供奉"],
      source: "capsulecomputers.com.au"
    }
  ],

  // ===================== 剧情和地图内容 =====================
  storyAndMap: {
    mainStory: [
      {
        chapter: "第四章 第一幕",
        title: "山雨欲来风满楼",
        titleEn: "The Wind Before the Storm",
        unlockTime: "版本上线即开",
        description: "漂泊者一行抵达瑝珑六大主城之一的梦州，在玄方地界遭遇全新危机。梦境与现实的边界开始模糊，一场涉及整个瑝珑的命运之轮开始转动。",
        status: "confirmed",
        source: "noisypixel.net、capsulecomputers.com.au"
      },
      {
        chapter: "第四章 第二幕",
        title: "玄翎振壑定澜音",
        titleEn: "Xuanling Sings, Storm Quelled",
        unlockTime: "2026-07-10（版本上线日）",
        description: "秧秧·玄翎挺身而出，以玄翎之力平息梦州混乱。揭露玄方地界背后隐藏的真相。",
        status: "confirmed",
        source: "noisypixel.net、capsulecomputers.com.au"
      },
      {
        chapter: "第四章 幕间",
        title: "灵籁之契冥相因",
        titleEn: "The Chant of Unseen Ties",
        unlockTime: "后续开放",
        description: "承接主线剧情，深入梦州内城的过渡章节。正式开启横跨 3.5~3.8 的大型连续叙事。",
        status: "待官方确认解锁时间",
        source: "capsulecomputers.com.au"
      }
    ],
    sideQuests: [
      {
        name: "危行任务：雾锁机伶",
        unlockTime: "版本上线后",
        reward: "摩托涂装「阁中傀」",
        status: "confirmed",
        source: "taptap.cn"
      },
      {
        name: "危行任务：危构悬天问丹心",
        unlockTime: "版本上线后",
        reward: "头像「丹心明玉」",
        status: "confirmed",
        source: "taptap.cn"
      }
    ],
    newRegion: {
      name: "梦州·玄方地界",
      nameEn: "Mengzhou: Land of Xuanfang",
      description: "梦州是瑝珑六大主城之一，位于今州以南。融合中式楼阁山水与超现实机关都市设计元素，包含悬浮仙阁、瀑布奇观、国风山地等场景。首期开放四块区域。",
      subAreas: [
        {
          name: "玄方城",
          nameEn: "Xuanfang Hold",
          description: "超现实机关都市，充满机械谜题与机关装置",
          status: "confirmed"
        },
        {
          name: "玄幽东岳",
          nameEn: "Xuan Peaks",
          description: "云雾缭绕的东方山岳，国风意境浓郁",
          status: "confirmed"
        },
        {
          name: "方擎西峰",
          nameEn: "Fang Peaks",
          description: "险峻的西部山峰，悬浮仙阁所在",
          status: "confirmed"
        },
        {
          name: "落渊南丘",
          nameEn: "Yuan Hills",
          description: "南方的丘陵地带，隐藏着古老遗迹",
          status: "confirmed"
        }
      ],
      futureAreasNote: "梦州内城等腹地预计在 3.6~3.7 版本逐步解锁",
      status: "partial",
      source: "官方 3.5 前瞻直播 (2026-06-26)、noisypixel.net、taptap.cn"
    },
    newExplorations: [
      {
        feature: "方庭演武",
        description: "走格子解谜玩法，在棋盘式场景中完成策略挑战",
        status: "confirmed"
      },
      {
        feature: "取偶匣",
        description: "抓娃娃玩法，在地图中寻找特殊机关获取声骸奖励",
        status: "confirmed"
      },
      {
        feature: "明慎台",
        description: "悬赏系统，完成悬赏任务兑换奖品",
        status: "confirmed"
      },
      {
        feature: "四季轮换",
        description: "可在特定场景切换春/夏/秋/冬四季，改变场景外观与部分机制",
        status: "confirmed"
      },
      {
        feature: "砍竹子",
        description: "新增场景交互，击砍竹子获取材料",
        status: "confirmed"
      },
      {
        feature: "御剑飞行",
        description: "全新探索载具，可御剑飞行穿梭梦州",
        status: "confirmed"
      }
    ],
    newBosses: [
      {
        name: "千傀重楼",
        nameEn: "待官方确认",
        description: "新区域 BOSS",
        status: "confirmed",
        source: "taptap.cn"
      },
      {
        name: "万囮牢·朽躯",
        nameEn: "待官方确认",
        description: "新区域 BOSS",
        status: "confirmed",
        source: "taptap.cn"
      }
    ],
    newEchoSets: [
      {
        name: "羽迹之歌（羽落空尘之歌）",
        effect2pc: "能量恢复效率 +10%",
        effect5pc: "施加「湮灭之祸」→ 自身暴击率+20%、重击伤害+35%（15秒）；施加「冷凝霜蚀」→ 每1%充能效率为全队+0.1%攻击力（最高25%，持续10秒）",
        bestFor: ["秧秧·玄翎", "穗穗"],
        status: "confirmed",
        source: "taptap.cn、sina.cn"
      },
      {
        name: "净恶之心（清邪荡煞之心）",
        effect2pc: "气动属性伤害 +10%",
        effect5pc: "施加变奏效果后，暴击伤害+20%，气动伤害+30%（15秒）",
        bestFor: ["气动属性角色"],
        status: "confirmed",
        source: "taptap.cn、sina.cn"
      },
      {
        name: "幽冥路盏（冥途夜行之灯）",
        effect2pc: "最大生命值 +10%",
        effect5pc: "获得护盾时暴击率+5%（可叠4层），叠满后热熔伤害+15%",
        bestFor: ["护盾/热熔角色"],
        status: "confirmed",
        source: "taptap.cn、sina.cn"
      }
    ]
  },

  // ===================== 系统优化 =====================
  optimizations: [
    {
      id: "opt-voice",
      category: "语音系统",
      title: "角色独立语音语言设置",
      description: "每位共鸣者可单独设置配音语言（中/日/韩/英自由组合）。跨平台语音设置可同步。非剧情语音（战斗语音、待机语音等）将使用各自设置的语种播放。",
      impact: "high",
      status: "confirmed",
      source: "官方 3.5 前瞻直播 (2026-06-26)"
    },
    {
      id: "opt-autoplay",
      category: "剧情体验",
      title: "全自动 / 半自动剧情播放",
      description: "新增全自动模式：系统自动选择对话选项，实现无打断沉浸式观看剧情。半自动模式：保留手动点击进入下一句。",
      impact: "high",
      status: "confirmed",
      source: "官方 3.5 前瞻直播 (2026-06-26)"
    },
    {
      id: "opt-guidebook",
      category: "UI/UX",
      title: "索拉指南一键传送",
      description: "素材副本一键直达：今州、黑海岸、黎那汐塔、海洛、梦州地区素材副本可通过索拉指南直接传送进入，无需跑图。未解锁地点也可快速传送。副本筛选逻辑优化。",
      impact: "high",
      status: "confirmed",
      source: "官方 3.5 前瞻直播 (2026-06-26)、gurugamer.com"
    },
    {
      id: "opt-synthesis",
      category: "合成系统",
      title: "「拟合」合成功能",
      description: "溢出的或不需要的突破材料可定向合成为急需的其他材料。植物花卉、采集物均可参与合成。可使用「再生花蕊」（振荡珊瑚商店获取）生物打印过往地区的角色突破材料。",
      impact: "high",
      status: "confirmed",
      source: "官方 3.5 前瞻直播 (2026-06-26)、gurugamer.com"
    },
    {
      id: "opt-pc-size",
      category: "客户端优化",
      title: "PC 端存储精简",
      description: "采用全新资源压缩技术，安装包体积最高缩减约 20GB。卸载后的残留文件也将大幅减少。",
      impact: "high",
      status: "confirmed",
      source: "官方 3.5 前瞻直播 (2026-06-26)、9game.cn"
    },
    {
      id: "opt-xess",
      category: "图形性能",
      title: "Intel XeSS 3 插帧支持",
      description: "PC 端支持 Intel XeSS 3 Frame Generation 技术，兼容 Intel 显卡用户可开启插帧提升帧率。可调节帧生成设置。",
      impact: "medium",
      status: "confirmed",
      source: "gurugamer.com、capsulecomputers.com.au"
    },
    {
      id: "opt-mobile-clean",
      category: "客户端优化",
      title: "移动端资源清理优化",
      description: "移动端（Android/iOS）「资源清理」功能优化，覆盖更多已完成实例的资源。新增语音资源清理选项，可单独删除未使用的语音包以释放存储空间。",
      impact: "medium",
      status: "confirmed",
      source: "gurugamer.com"
    },
    {
      id: "opt-rover-model",
      category: "美术表现",
      title: "漂泊者模型重塑",
      description: "漂泊者（男/女）模型全面重塑，材质纹理更加精细，面部表情与动作更加自然。",
      impact: "medium",
      status: "confirmed",
      source: "taptap.cn、sina.cn"
    },
    {
      id: "opt-echo-gallery",
      category: "图鉴/UI",
      title: "声骸图鉴动态呼吸表现",
      description: "声骸图鉴新增动态呼吸动画表现，怪物/声骸图鉴界面布局重构，新增分类标签与多维过滤器。",
      impact: "medium",
      status: "confirmed",
      source: "taptap.cn"
    },
    {
      id: "opt-motorcycle",
      category: "探索系统",
      title: "摩托系统升级",
      description: "完成潮汐任务免费获得「云帛机骑」摩托涂装。新增「动能漂移」功能。新增区域特色赛道（射击赛道、重力赛道）。探索摩托现可用于瑝珑及梦州区域。",
      impact: "medium",
      status: "confirmed",
      source: "官方 3.5 前瞻直播 (2026-06-26)、taptap.cn"
    },
    {
      id: "opt-newbie",
      category: "新手体验",
      title: "新手系统全面革新",
      description: "全新新手活动系统 + 新一批新手奖励，针对 3.5 版本后创建账号的玩家。",
      impact: "medium",
      status: "confirmed",
      source: "capsulecomputers.com.au"
    },
    {
      id: "opt-collab",
      category: "联动内容",
      title: "《逃离鸭科夫》双向联动",
      description: "《鸣潮》×《逃离鸭科夫》双向联动，漂泊者科考摩托联动涂装「逃离鸭科夫」及联动武器，7月2日起上线。",
      impact: "medium",
      status: "confirmed",
      source: "taptap.cn、vgover.com"
    }
  ],

  // ===================== 重要时间节点 =====================
  timeline: [
    {
      date: "2026-06-26",
      event: "3.5 版本前瞻直播",
      description: "官方直播公布 3.5 版本「遗音扶剑 荡梦而歌」完整内容",
      icon: "📡",
      status: "past",
      source: "官方公告"
    },
    {
      date: "2026-07-02",
      event: "《逃离鸭科夫》联动上线",
      description: "双向联动涂装及武器提前上线",
      icon: "🤝",
      status: "past",
      source: "taptap.cn"
    },
    {
      date: "2026-07-10",
      event: "3.5 版本正式上线",
      description: "维护时间 06:00~13:00 (UTC+8)，同步登陆 Xbox Series X|S",
      icon: "🚀",
      status: "current",
      source: "官方公告 (gematsu.com)"
    },
    {
      date: "2026-07-10",
      event: "上半卡池开启",
      description: "秧秧·玄翎 UP + 琳奈/陆·赫斯复刻 + 武器「天之苍苍」",
      icon: "🎯",
      status: "current",
      source: "官方 3.5 前瞻直播"
    },
    {
      date: "2026-07-31",
      event: "下半卡池开启",
      description: "穗穗 UP + 爱弥斯复刻 + 武器「栖霞饮露」",
      icon: "🎯",
      status: "upcoming",
      source: "官方 3.5 前瞻直播"
    },
    {
      date: "2026-08-21",
      event: "3.5 版本卡池结束",
      description: "版本限定卡池全部关闭",
      icon: "🔚",
      status: "upcoming",
      source: "官方公告 (game8.co)"
    },
    {
      date: "2026 夏季",
      event: "3.6 版本前瞻直播（预计）",
      description: "预计公布 3.6 版本「清宵」「景燃」等新角色信息",
      icon: "📡",
      status: "upcoming",
      source: "待官方确认"
    }
  ],

  // ===================== 信息来源与免责声明 =====================
  sources: {
    official: [
      {
        name: "鸣潮英文官网 News",
        url: "https://wutheringwaves.kurogames.com/en/main/news",
        description: "官方新闻公告页面（英文）",
        note: "WebFetch 工具在当前环境中无法直接访问（企业安全策略限制）"
      },
      {
        name: "鸣潮英文官网首页",
        url: "https://wutheringwaves.kurogames.com/en/main",
        description: "官方网站首页，展示最新版本信息",
        note: "WebFetch 工具在当前环境中无法直接访问"
      },
      {
        name: "鸣潮官方 YouTube 频道",
        url: "https://www.youtube.com/@WutheringWaves3352",
        description: "官方 YouTube 频道，发布版本 PV、角色演示、前瞻直播录像",
        note: "WebFetch 工具在当前环境中无法直接访问"
      }
    ],
    thirdParty: [
      { name: "Game8", url: "https://game8.co/games/Wuthering-Waves", description: "英文游戏攻略站，提供详细的版本数据和卡池信息" },
      { name: "Gematsu", url: "https://www.gematsu.com", description: "日本游戏新闻站，报道 3.5 版本上线及 Xbox 登陆信息" },
      { name: "Noisy Pixel", url: "https://noisypixel.net", description: "英文游戏新闻站，报道梦州地图和主线剧情" },
      { name: "Capsule Computers", url: "https://www.capsulecomputers.com.au", description: "澳洲游戏媒体，汇总 3.5 版本内容" },
      { name: "GuruGamer", url: "https://gurugamer.com", description: "英文游戏资讯站，3.5 版本前瞻汇总" },
      { name: "Sportskeeda", url: "https://www.sportskeeda.com/esports", description: "报道卡池和角色复刻信息" },
      { name: "TapTap", url: "https://www.taptap.cn", description: "中文游戏社区，3.5 版本前瞻详细汇总" },
      { name: "17173", url: "https://news.17173.com", description: "中文游戏媒体，梦州前瞻情报" },
      { name: "新浪", url: "https://www.sina.cn", description: "3.5 前瞻汇总（中文）" },
      { name: "9game", url: "https://www.9game.cn", description: "PC端容量缩减等优化报道" },
      { name: "VgOver", url: "https://www.vgover.com", description: "联动和活动信息" },
      { name: "3DMGame", url: "https://shouyou.3dmgame.com", description: "新角色养成材料速览" }
    ],
    disclaimer: "本页面的版本数据来源于上述第三方游戏资讯网站的公开报道，部分信息的准确性可能受限于报道时间与官方实际公告的差异。所有信息以鸣潮官方渠道（官网、游戏内公告、官方社交媒体）的最终公布为准。标注「待官方确认」的内容基于非官方渠道信息，仅供参考。版本内容可能因地区、平台不同而有所差异。"
  }
};

// ===================== 导出数据 =====================
// 如果使用 ES Module: export default VERSION_DATA;
// 本页使用全局变量方式：
if (typeof module !== 'undefined' && module.exports) {
  module.exports = VERSION_DATA;
}
