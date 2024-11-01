export default{"1":"网站例外规则","2":"增加规则","3":"排序","4":"仅匹配一次","5":"监听网址中锚（hash）的变化","6":"在指定网站","7":" ”可以是以“","8":"”开始的正则表达式，也可以是以“","9":"”开始的网址首部","10":"如果“","11":" ”为空，在相应页面上 Vimium C 会完全停止工作，但可以点击右上角扩展图标来临时启用；","12":"如果“","13":" ”以“","14":"”开始，仅有列表中的按键会生效；","15":"否则仅有这些按键会被停用（不组成快捷键）。","16":"自定义快捷键","17":"为命令","18":"清除所有已设置的快捷键或映射","19":"显示所有命令","20":"如何为其它键盘布局设置快捷键？","21":"全局快捷键","22":"参见 ","23":"；","24":"更多？","25":"新标签页默认网址","26":"可以用作空白页。","27":"希望 ","28":"如何使用其它扩展程序提供的页面？","29":"默认搜索引擎","30":"在没有指定搜索引擎，或者指定了 “","31":"” 时使用。","32":"自定义搜索引擎","33":"定义搜索引擎来生成和分析网址。格式：","34":"这行文字是注释","35":"会被替换成实际的搜索词","36":"如何使用高级语法定义复杂的搜索引擎？","37":"用于定位链接和按钮的序号字符","38":"按“F”进入提示模式后，这些字符会显示到链接旁，依次输入一个链接对应的所有字符就会自动点击它。","39":"高级选项","40":"页面滚动速度","41":"像素","42":"沿长边滚动网页时的基础速度（短边会降为 60%）。","43":"一些功能开关","44":"滚动时使用此扩展集成的平滑滚动算法","45":"在新网页上阻止文本框自动获取键盘焦点","46":"阻止刚打开或刷新的网页获取键盘焦点（处于输入状态时，大部分按键将不会被 Vimium C 用于组成快捷键）。","47":"键盘布局处理规则","48":"在按住 Alt（Option，⌥）键时忽略布局","49":"对超出 ASCII（英文字母、标点）范围的按键忽略布局","50":"忽略大小写锁定键的状态","53":"映射键盘右侧（或左侧）的修饰键","54":"页内查找时默认将搜索词视为正则表达式","55":"输入 “","56":"” 可以切换回普通查找模式；停用时可以输入 “\\r” 进入正则表达式模式。也支持 “\\i” 和 “\\w” 等。","57":"在暂停识别快捷键时隐藏右下角提示框","58":"启用此选项时，隐藏“已暂停”、“聚焦到只读”等提示，也可以用 “","59":"自动切换浅色和深色模式","60":"启用此选项时，自动跟随系统的应用亮暗模式配置来启用深色模式。部分选中则表示始终处于深色。","61":"自动跟随系统“减少动画”的配置","62":"将会影响搜索框和右下角提示框的动画。部分选中则表示始终减少。","63":"在浏览器右上角显示动态图标","64":"使用扩展程序图标反映 Vimium C 在当前页面的工作状态。停用此选项可以小幅度减少资源消耗。","65":"借助浏览器云服务来同步 Vimium C 配置","66":"修改后建议立即重启浏览器或重新加载此扩展。","68":"“上一页”的关键词","69":"“自动识别并访问上一个页面”命令使用这些关键词来寻找表示“上一页”的按钮或链接（不区分大小写）。","70":"“下一页”的关键词","71":"“自动识别并访问下一个页面”命令使用这些关键词来寻找表示“下一页”的按钮或链接（不区分大小写）。","72":"自定义界面样式","73":"修改 Vimium C 界面元素的样式，可以使用类似于 “","74":"” 和 “","75":"” 的 CSS 选择器","76":"此处定义的样式会覆盖默认样式，而且不会影响到正常网页内容。","77":"设置搜索框","78":"可以调整搜索框的部分行为：","79":"应当在","80":"；","81":"（毫秒）之间","82":"用于计算搜索框高度，单位是逻辑像素；","83":"可以添加 “","84":"” 等。","85":"如果","86":"过小，搜索 CPU 使用率可能略高。","87":"要忽略的页面标题","88":"用于屏蔽特定历史记录和收藏夹条目。如果某条历史或收藏的标题或网址包含任意一个屏蔽词，那么它就不会被显示在搜索框中，除非搜索词也包含了任意一个屏蔽词。","89":"每行一个屏蔽词","90":"” 开始的行都会被认为是注释","91":"受信任的其它扩展","92":"仅有在受信任列表中的浏览器扩展才能调用 Vimium C 的功能。每行一个扩展标识符或域名。","93":"任何不以英文字母数字或 “","94":"” 字符开始的行都会被忽略","95":"如何在其它扩展程序的私有页面中使用 Vimium C？","96":"定制搜索框页面","97":"例如：","98":"或","99":"备选字符集","100":"用于识别使用了非 utf-8 编码的网址。","102":"默认的 gbk 编码包括了中文、日文和朝鲜文。","104":"当前设备键盘配置","105":"在这台计算机上的键盘延迟相关配置。","106":"格式：","107":"重复延迟","108":"重复间隔","109":"注：此配置始终不会被同步到浏览器账户配置中。","112":"保存所有修改的配置；","113":"显示帮助。","115":"无需保存","116":"恢复配置","117":"  配置备份文件  ","118":"  推荐的配置  ","119":"备份配置","144":"停用","103_2":"一些可选权限","103_3":"一些功能需要您手动授予特定权限。","103_4":"部分权限只能在","103_5":" 中手动允许或取消。","103_6":"注：此配置可能不会被浏览器同步。","103_7":"在 无痕模式 下启用","103_8":"允许访问 文件网址","108_2":"（单位：毫秒）。","115_2":"保存","115_3":"已保存","145_2":"启用","16_2":"“","16_3":"” 选项处于","16_4":"状态","17_2":"快捷键规则 帮助","17_3":"设置新的快捷键","17_4":"。例如：","17_5":"提示模式 高级设置","20_2":"如何为某些网站绑定不同的命令？","20_3":"其它使用技巧？","27_2":" 后立即操作网页？","37_2":"使用链接文字","3_2":"已排序","41_2":"/","41_3":"毫秒","44_2":"使用链接和按钮的文字来在提示模式列出的对象中筛选","44_3":"启用此选项后，在提示模式下可以通过打出一个链接的文字来选择它。","44_4":"在文字筛选状态下必须按下“回车”来确认","44_5":"提示模式的文字筛选状态下，总是需要按下“回车”才会点击链接或按钮，来避免意外触发 Vimium C 的命令。","44_6":"检测链接和按钮是否被完全遮挡","47_2":"始终忽略键盘布局","47_3":"请注意，本组规则和 mapKey 指令等仅能在 Vimium C 内部生效，无法改变浏览器、网页 JS 的识别结果。","47_4":"“忽略”指按照 英文 QWERTY 键盘布局 识别按键并忽略大小写锁定，推荐在使用非英文布局时启用忽略规则。","49_2":"超出 ASCII 时忽略键盘布局","49_3":"部分选中时，只在部分命令内识别快捷键时进行此判断，默认模式和输入文字状态下仍遵守键盘布局。","50_2":"启用时，仅当按住 Shift 键时才视为大写。部分选中时仅在 macOS 上忽略大小写锁定键。","53_2":"将某侧 Alt、Ctrl、Shift 等修饰键视为“","53_3":"”键，“右Shift”键（部分选中时“左Shift”）对应 ","53_4":"。","53_41":"在 about:config 上已启用 “privacy.resistFingerprinting”","53_42":"在此模式下，浏览器只允许部分简单的组合键。本选项一定程度上有助于在 macOS 上识别 Shift 键状态。","53_5":"测试按键","53_6":"仅显示从浏览器接收到的按键名称，不受例外规则或 “mapKey” 的影响。","53_7":"在线测试","58_1":"”。","58_2":"浏览器默认引擎优先","58_3":"优先采用浏览器设置中的搜索引擎","58_4":"未指定引擎关键词时，搜索框将自动沿用浏览器设置的搜索引擎。","64_2":"在展示页面上始终阻止浏览器缓存图片","64_3":"尽量让此扩展保持运行","64_4":"如果没有任何页面使用 Vimium C，Chromium 等浏览器会自动中止扩展后台，这可能引发意外错误。","64_5":"更新到新版本时显示通知","6_2":"完全或部分停用","6_3":" Vimium C。“","76_2":"如何为各部分界面元素分别指定样式？","79_2":"（个）之间","83_2":"”、“","86_2":"文字自动替换","86_3":"使用 Vimium C 命令复制或粘贴文字（如网址）时，对指定模式的文字进行替换。支持简化版的 “sed” 语法。","86_32":"动作前缀可以是“","86_4":"” 等；其中 c 表示仅在复制文字时进行替换，p 表示粘贴时替换，s 则表示在两种情况下都替换","86_5":"如何在执行其它命令时替换文字或网址","87_2":"当浏览器历史记录的标题变化时，Vimium C 默认会在新标题中搜索。如果确实想忽略一些新标题，可以在此编写正则表达式。","87_3":"每行一项正则规则","87_4":"搜索框屏蔽词","89_2":"；保留任何空格；区分大小写；“","95_2":"ESC 键兼容模式","95_3":"输入文字时，指定在哪些文本框上放行 “ESC” 键的按下事件并推迟移除焦点。默认值可便于在部分网站上收起搜索建议。","95_4":"要忽略的只读文本","95_5":"如果键盘焦点在只读文本上，指定在哪些文本框上要继续触发快捷键。","99_2":"和留空作用相同","9_1":"，","9_2":"又或者以“","9_3":"”标志的 URL 模式（ W3C 规范中的 ","9_4":" ）","9_5":"。","9_6":"否则会自动转换成正则或前缀。","Hide":"隐藏","JSONParseError":"无法解析 JSON 文件：\n  在第 $1 行、第 $2 列发现错误字符！","JSONTooLarge":"    导入失败！\n\n指定的配置备份文件 “$1” 太大!\n\n受限于浏览器内部参数，支持导入的备份文件的大小不应超过 $2 KB。","Keys":"按键列表","NS":"","Name2Options":"- 全键盘操作浏览器 设置","NewTabAdapter":"新标签页修改器","NewTabAdapterDesc":"新标签页修改器：\n自定义浏览器新标签页的网址","Pattern":"网址匹配规则","Patterns":"网址匹配规则","Remove":"删除","Show":"显示","addons":"Firefox 附加组件","atTime":"是 $1","autoResize":"使文本框大小适合内容","backupFile":"一份配置备份文件","based":" 内核","before":"未知","beforeChromium":" Chromium 版本低于 $1","beforeUnload":"您有尚未保存的改动！","cancelImport":"配置导入操作已取消！","changedBeforeSync":"        错误：\n您希望启用 同步 Vimium C 配置 这一功能，\n但是其它配置已被修改且尚未保存。\n请在启用同步和保存其它配置之间做出选择！","clickToUnmask":"# 点击显示隐藏内容","comma":"，","commonPlatform":"一般平台","confirmImport":"您将要导入 $1:\n      * 创建于 $2Vimium C$3\n      * 适合$4\n      * 创建时间$5\n\n确定要继续导入吗?","dirtyOptions":"以下配置已经在其它地方被修改：\n      * $1\n\n是否继续保存并覆盖这些改动？","edgestore":"Microsoft Edge 加载项","exc":"错误：","filePlatform":" $1 平台","fileVCNewer":"（较新）","fileVCVer":"","fileVCVer_2":" * 版","fileVomnibar":"本地文件的页面会受限制，仅能在网址是 file:///* 的页面上打开","haveToOpenManually":"在 Firefox 上您必须手动访问此链接","help":"帮助","httpVomnibar":"HTTP 网站的页面会受限制，不能在 HTTPS 网站上打开","ignoredNonEN":"请留意“忽略键盘布局”这一选项已启用！也许需要停用它后才能正确映射非英文的按键。","importOK":"配置导入完成！","invalidCss":"一些 CSS 选择器存在错误：","invalidOption":"无法启用此功能，因为 $1","keepSyncing":"是否继续 借助浏览器云服务 来同步 Vimium C 配置？\n\n点击“取消”则表示不再同步配置。","keyMappingsP":"# 在此处定义新的按键映射和快捷键","lackPermission":"缺少相关权限 $1","livePreview":"正在实时预览样式……","lquote":"“","mac":"macOS","manageShortcut":"","manageShortcut_2":" 上“工具”按钮的“管理扩展快捷键”","needToInstallExt":"使用此页面需要先安装相应的扩展程序","nonEmpty":"删除此配置的所有内容来恢复到默认","nonPlainURL":"“$1”不是一个合法的普通网址。","notJSON":"未找到 JSON 格式的数据！","notVCJSON":"未找到 Vimium C 配置 的相关数据！","onlyExtVomnibar":"在 Chromium $1 之前，仅有扩展程序内的搜索框页面才可用。","optNeedChromeUrlFirst":"请先启用名为“#extensions-on-chrome-urls”的浏览器标记。","optOfChromeUrl":"（需要 #extensions-on-chrome-urls）","opt_bookmarks":"搜索收藏的网址、添加新项","opt_cNewtab":"在 Chrome 原生的新标签页上运行","opt_chromeUrl":"在 chrome://*/* 页面上运行","opt_clipboardRead":"读取系统剪贴板里的文字（仅在执行到相应命令时）","opt_closeShelf":"关闭下载进度栏、允许调用备用的文件下载接口","opt_contentSettings":"修改网站对 图像、JS 等功能的使用权限","opt_cookies":"cookies: 仅用来获取标签页所属容器，以兼容“多账户容器”扩展","opt_downloads":"使浏览器下载文件","period":"。","rec_perm":"【推荐】","recommendedFile":"推荐的配置","refusedURLs":"Firefox 不允许扩展程序打开“$1”这个网址。","requireChromium":"（至少需要 Chromium $1）","rquote":"”","semicolon":"；","sft":"快捷键补充工具：\n提供了 32 个可配置的快捷键栏位","twoS":"%s 和 $s 的用法作用完全相同","unknown":"（未知）","warningForSync":"        警告：\n下次启动 Vimium C（即启动浏览器）时，当前所有配置会被覆盖成已同步的配置！\n请立即点击“导出配置”按钮备份您当前的配置\n!!!        立刻、马上        !!!","webPageLimits":"注意：扩展程序内置页面中不能访问普通网页，\n因此在这种情况下仅会使用 Vimium C 内置的搜索框页面。","webstore":"Chrome 网上应用店","win":"Windows"}