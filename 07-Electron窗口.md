## Electron窗口

Electron窗口其实很简单，就是一个BroswerWindow的窗口实例

本文主要记录一下Electron浏览器窗口构造选项对象：

* width 整数型 (可选) - 窗口的宽度（以像素为单位）。 默认值为 800。
* height 整数型 (可选) - 窗口的高度（以像素为单位）。 默认值为 600。
* x Interger (可选) - (必选 如果使用了y) 窗口相对于屏幕左侧的偏移量。 默认值为将窗口居中。
* y Integer (可选) - (必选 如果使用了x) 窗口相对于屏幕顶端的偏移量。 默认值为将窗口居中。
* useContentSize boolean (可选) - width 和 height 将设置为 web 页面的尺寸(译注: 不包含边框), 这意味着窗口的实际尺寸将包括窗口边框的大小，稍微会大一点。 默认值为 false.
* center boolean (可选) - 窗口是否在屏幕居中. 默认值为 false.
* 整型（可选）-窗口的最小宽度。默认为0 默认值为 0.
* minHeight Integer(可选) - 窗口的最小高度。 默认值为 0.
* maxWidth Integer(可选)-窗口的最大宽度。 默认值不限
* maxHeight Integer (可选) - 窗口的最大高度。 默认值不限
* resizable boolean (可选) - 窗口大小是否可调整。 默认值为 true。
* movable boolean (可选) macOS Windows - 窗口是否可移动。 在 Linux 上未实现。 默认值为 true。
* minimizable boolean (可选) macOS Windows - 窗口是否可最小化。 在 Linux 上未实现。 默认值为 true。
* maximizable boolean (可选) macOS Windows - 窗口是否最大化。 在 Linux 上未实现。 默认值为 true。
* closable boolean (可选) macOS Windows - 窗口是否可关闭。 在 Linux 上未实现。 默认值为 true。
* focusable boolean (可选) - 窗口是否可以聚焦. 默认值为 true。 在 Windows 中设置 focusable: false 也意味着设置了skipTaskbar: true. 在 Linux 中设置 focusable: false 时窗口停止与 wm 交互, 并且窗口将始终置顶。
* alwaysOnTop boolean (可选) - 窗口是否永远在别的窗口的上面。 默认值为 false.
* fullscreen boolean (可选) - 窗口是否全屏. 当明确设置为 false 时，在 macOS 上全屏的按钮将被隐藏或禁用. 默认值为 false.
* fullscreenable boolean (可选) - 窗口是否可以进入全屏状态. 在 macOS上, 最大化/缩放按钮是否可用 默认值为 true。
* simpleFullscreen boolean (可选) macOS - 在 macOS 上使用 pre-Lion 全屏。 默认值为 false.
* skipTaskbar boolean (可选) macOS Windows - 是否在任务栏中显示窗口。 默认值为 false.
* hiddenInMissionControl boolean (optional) macOS - Whether window should be hidden when the user toggles into mission control.
* title  string(可选) - 默认窗口标题 默认为"Electron"。 如果由loadURL()加载的HTML文件中含有标签<title>，此属性将被忽略。
* icon (NativeImage | string) (可选) - 窗口图标。 在 Windows 上推荐使用 ICO 图标来获得最佳的视觉效果, 默认使用可执行文件的图标.
* show boolean (可选) - 窗口是否在创建时显示。 默认值为 true。
* paintWhenInitiallyHiddenboolean(可选) - 当show为false并且渲染器刚刚被创建时，它是否应激活。 为了让document.visibilityState 在show: false的情况下第一次加载时正确地工作，你应该把这个设置成false. 设置为 false 将会导致ready-to-show 事件不触发。 默认值为 true。
* frame boolean (可选) - 设置为 false 时可以创建一个无边框窗口 默认值为 true。
* parent BrowserWindow (可选) - 指定父窗口 默认值为 null.
* modal boolean (可选) - 当前是否为模态窗口。 只有当窗口是子窗口时才起作用。 默认值为 false.
* acceptFirstMouse boolean (可选) macOS - 点击 非活动窗口是否会穿透到 web contents。 在 macOS 中默认为 false。 此选项在其他平台上不可配置。
* disableAutoHideCursor boolean (可选) - 是否在打字时隐藏光标。 默认值为 false.
* autoHideMenuBar boolean (可选) - 自动隐藏菜单栏，除非按了Alt键。 默认值为 false.
* backgroundColor string (可选) - 窗口背景色，格式为 Hex, RGB, RGBA, HSL, HSLA 或 CSS 命名颜色。 如果 transparent 设置为 true，则支持#AARRGGBB格式的透明。 默认值为 #FFF（白色）。 更多详细信息，请参阅 win.setBackgroundColor。
* hasShadow boolean (可选) - 窗口是否有阴影. 默认值为 true。
* opacity number (可选) macOS Windows - 设置窗口的初始透明度，在 0.0（全透明）和 1.0（完全不透明）之间 。 目前仅在 Windows 和 macOS上实现。
* darkTheme boolean (optional) - 强制窗口使用深色主题，只在部分GTK+3桌面环境下有效。 默认值为 false.
* transparent boolean (可选) - 使窗口 透明。 默认值为 false. 在Windows上，仅在无边框窗口下起作用。
* type string (可选) - 窗口的类型, 默认为普通窗口. 
* titleBarStyle string (可选) macOS Windows - 窗口标题栏样式。 默认值为 default. 可能的值有
  * default - 分别返回 macOS 或者 Windows 的标准标题栏
  * hidden - 在一个隐藏的标题栏和一个全尺寸大小的内容窗口中取得结果。 在 macOS 内, 窗口将一直拥有位于左上的标准窗口控制器 (“traffic lights”)。 在 Windows上，当与 titleBarOverlay: true 合并时，它将激活窗口控件叠加(详情请参阅 titleBarOverlay)，否则将不会显示窗口控件。
  * hiddenInset macOS - 仅 macOS，隐藏标题栏，使用窗口边缘稍微小的红绿灯按钮替代。
  * customButtonsOnHover macOS - 仅 macOS，隐藏的标题栏的全尺寸的内容窗口， 红绿灯按钮在鼠标悬停在窗口左上方时显示。 注意: 此选项目前是实验性的。
* trafficLightPosition Point (可选) macOS - 在无边框窗口中设置灯绿灯按钮位置。
* roundedCorners boolean (可选) macOS - 无边框窗口在 macOS 上，是否应该有圆角。 默认值为 true。 属性设置为 false ，将阻止窗口是可全屏的。
* thickFrame boolean(可选)-对 Windows 上的无框窗口使用WS_THICKFRAME 样式，会增加标准窗口框架。 设置为 false 时将移除窗口的阴影和动画. 默认值为 true。
* tabbingIdentifier string (optional) macOS - Tab group name, allows opening the window as a native tab. Windows 中，有相同选项卡标识的将会组合在一起。 这会添加一个原生新增选项卡按钮到你窗口的选项卡栏，同时 app 和窗口允许接收 new-window-for-tab 事件。
* webPreferences WebPreferences （可选）—— 网页功能设置
  * devTools boolean (可选) - 是否开启 DevTools. 如果设置为 false, 则无法使用 BrowserWindow.webContents.openDevTools () 打开 DevTools。 默认值为 true。
  * nodeIntegration boolean (可选) - 是否启用Node integration. 默认值为 false.
  * nodeIntegrationInWorker boolean (可选) - 是否在Web工作器中启用了Node集成. 默认值为 false. 更多内容参见 多线程.
  * nodeIntegrationInSubFrames boolean (可选项)(实验性)，是否允许在子页面(iframe)或子窗口(child window)中集成Node.js； 预先加载的脚本会被注入到每一个iframe，你可以用 process.isMainFrame 来判断当前是否处于主框架（main frame）中。
  * preload string (可选) -在页面运行其他脚本之前预先加载指定的脚本 无论页面是否集成Node, 此脚本都可以访问所有Node API 脚本路径为文件的绝对路径。 当 node integration 关闭时, 预加载的脚本将从全局范围重新引入node的全局引用标志 参考示例.
  * sandbox boolean (可选)-如果设置该参数, 沙箱的渲染器将与窗口关联, 使它与Chromium OS-level 的沙箱兼容, 并禁用 Node. js 引擎。 它与 nodeIntegration 的选项不同，且预加载脚本的 API 也有限制.
  * session Session (可选) - 设置页面的 session 而不是直接忽略 Session 对象, 也可用 partition 选项来代替，它接受一个 partition 字符串. 同时设置了session 和 partition时, session 的优先级更高. 默认使用默认的 session.
  * partition string (optional) - 通过 session 的 partition 字符串来设置界面session. 如果 partition 以 persist:开头, 该页面将使用持续的 session，并在所有页面生效，且使用同一个partition. 如果没有 persist: 前缀, 页面将使用 in-memory session. 通过分配相同的 partition, 多个页可以共享同一会话。 默认使用默认的 session.
  * zoomFactor number (可选) - 页面的默认缩放系数, 3.0 表示 300%。 默认值为 1.0.
  * javascript boolean (可选) - 是否启用 JavaScript 支持。 默认值为 true。
  * webSecurity boolean (可选) - 当设置为 false, 它将禁用同源策略 (通常用来测试网站), 如果此选项不是由开发者设置的，还会把 allowRunningInsecureContent设置为 true. 默认值为 true。
  * allowRunningInsecureContent boolean (可选) - 允许一个 https 页面运行来自http url的JavaScript, CSS 或 plugins。 默认值为 false.
  * images boolean (可选) - 允许加载图片。 默认值为 true。
  * imageAnimationPolicy string (可选) - 指定如何运行图像动画 (比如： GIF等). 可以是 animate, animateOnce 或 noAnimation. 默认值为 animate.
  * textAreasAreResizable boolean (可选) - 允许调整 TextArea 元素大小。 默认值为 true。
  * webgl boolean (可选) - 启用 WebGL 支持。 默认值为 true。
  * plugins boolean (可选) - 是否应该启用插件。 默认值为 false.
  * experimentalFeatures boolean (可选) - 启用 Chromium 的实验功能。 默认值为 false.
  * enableBlinkFeaturesstring(可选) - 以逗号分隔的需要启用的特性列表，譬如CSSVariables,KeyboardEventKey 在 RuntimeEnabledFeatures.json5文件中查看被支持的所有特性.
  * disableBlinkFeatures string (可选) - 以 ,分隔的禁用特性列表, 如 CSSVariables,KeyboardEventKey. 在RuntimeEnabledFeatures.json5 文件中查看被支持的所有特性.
  * defaultFontFamily Object (可选) - 为font-family设置默认字体。
    * standard string (可选) - 默认值为 Times New Roman.
    * serif string (可选) - 默认值为 Times New Roman.
    * sansSerif string (可选) - 默认值为 Arial.
    * monospace string (可选) - 默认值为 Courier New.
    * cursive string (可选) - 默认值为 Script.
    * fantasy string (可选) - 默认值为 Impact.
    * math string (可选) - 默认值为 Latin Modern Math.
  * defaultFontSize Integer (可选) - 默认值为 16.
  * defaultMonospaceFontSize Integer (可选) - 默认值为 13.
  * minimumFontSize Integer (可选) - 默认值为 0.
  * defaultEncoding string (可选) - 默认值为 ISO-8859-1.
  * backgroundThrottlingboolean (可选)-是否在页面成为背景时限制动画和计时器。 这也会影响到 Page Visibility API. When at least one webContents displayed in a single browserWindow has disabled backgroundThrottling then frames will be drawn and swapped for the whole window and other webContents displayed by it. 默认值为 true。
  * offscreen boolean (optional) - 是否绘制和渲染可视区域外的窗口. 默认值为 false. 更多详情, 请参见 offscreen rendering tutorial 。
  * contextIsolation boolean (可选) - 是否在独立 JavaScript 环境中运行 Electron API和指定的preload 脚本. 默认为 true。 预加载脚本所运行的上下文环境只能访问其自身专用的文档和全局窗口，其自身一系列内置的JavaScript (Array, Object, JSON, 等等) 也是如此，这些对于已加载的内容都是不可见的。 Electron API 将只在预加载脚本中可用，在已加载页面中不可用。 这个选项应被用于加载可能不被信任的远程内容时来确保加载的内容无法篡改预加载脚本和任何正在使用的Electron api。 该选项使用的是与Chrome内容脚本相同的技术。 你可以在开发者工具Console选项卡内顶部组合框中选择 'Electron Isolated Context'条目来访问这个上下文。
  * webviewTag boolean (可选) - 是否启用 <webview> tag标签. 默认值为 false. 注意: 为 < webview> 配置的 preload 脚本在执行时将启用节点集成, 因此应确保远程或不受信任的内容无法创建恶意的 preload 脚本 。 可以使用 webContents 上的 will-attach-webview 事件对 preload 脚本进行剥离, 并验证或更改 <webview> 的初始设置。
  * additionalArguments string[] (可选) - 一个将被附加到当前应用程序的渲染器进程中process.argv的字符串列表 。 可用于将少量的数据传递到渲染器进程预加载脚本中。
  * safeDialogs boolean (可选) - 是否启用浏览器样式的持续对话框保护。 默认值为 false.
  * safeDialogsMessage string (可选) - 当持续对话框保护被触发时显示的消息。 如果没有定义，那么将使用缺省的消息。注意：当前缺省消息是英文，并没有本地化。
  * disableDialogs boolean (可选) - 是否完全禁用对话框。 覆盖 safeDialogs。 默认值为 false.
  * navigateOnDragDrop boolean (可选) - 将文件或链接拖放到页面上时是否触发页面跳转。 默认值为 false.
  * autoplayPolicy string (可选) - 窗口中内容要使用的自动播放策略，值可以是 no-user-gesture-required, user-gesture-required, document-user-activation-required。 默认为 no-user-gesture-required。
  * disableHtmlFullscreenWindowResize boolean (可选) - 是否阻止窗口在进入 HTML 全屏时调整大小。 默认值为 false.
  * accessibleTitle string (可选) - 仅提供给如屏幕读取器等辅助工具的替代标题字符串。 此字符串不直接对用户可见。
  * spellcheck boolean (可选) - 是否启用内置拼写检查器。 默认值为 true。
  * enableWebSQL boolean (可选) - 是否启用 WebSQL api。 默认值为 true。
  * v8CacheOptions string (可选) - 强制 blink 使用 v8 代码缓存策略。 可接受的值为：
  * none - 禁用代码缓存
  * code - 基于启发式代码缓存
  * bypassHeatCheck - 绕过启发式代码缓存，但使用懒编译。
  * bypassHeatCheckAndEagerCompile - 与上面相同，除了编译是及时的。 默认策略是 code。
  * enablePreferredSizeMode boolean (可选) - 是否启用首选大小模式。 首选大小是包含文档布局所需的最小大小--无需滚动。 启用该属性将导致在首选大小发生变化时，在WebContents 上触发 preferred-size-changed 事件。 默认值为 false.




