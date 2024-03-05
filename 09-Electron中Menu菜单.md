## Electron 菜单

### 目标

* 了解Electron中的Menu
* 自定义自己的Menu

### Menu静态方法

* Menu.setApplicationMenu(menu) 用来设置菜单

  入参 menu 类型为 Menu | null 

如果没有调用此方法，则Electron启动会加载一个默认Menu，包含File Edit View window Help。

* Menu.getApplicationMenu()  获取应用程序菜单 

返回 `Menu | null` 

Menu.buildFromTemplate(template)

入参 template是一个 options类型的数组

### 实例方法

* menu.popup()    弹出菜单
* menu.closePopup  关闭菜单
* menu.append(menuItem)  追加到菜单
* menu.insert(pos,menuItem) 在菜单的pos位置插入子菜单

### 实例属性

* menu.items 包含菜单项的 MenuItem [] 数组



### 案例

一个Electron程序，在main.js中

```js
console.log(Menu.getgetApplicationMenu().items)
```

返回MenuItem [] 数组，取其中一个分析

```js
[MenuItem {
    role: 'filemenu', 	//role 角色 filemenu
    submenu: Menu { commandsMap: [Object], groupsMap: {}, items: [Array] },//submenu 子菜单 null
    type: 'submenu',	//type 类别 submenu
    accelerator: null,
    icon: null,			//icon 图标 null
    label: 'File',       //label 文本 null
    sublabel: '',
    toolTip: '',
    enabled: true,       //enabled 可用 true
    visible: true,		//label 可见 true
    checked: false,		//label 默认选择 false	
    acceleratorWorksWhenHidden: true,
    registerAccelerator: true,
    commandId: 2,
    userAccelerator: [Getter],
    click: [Function (anonymous)],//click 点击触发函数 Function (anonymous)
    menu: Menu { commandsMap: [Object], groupsMap: {}, items: [Circular *1] }
  },
  ...
  ]
```

构造一个空菜单

```js
const menu = new Menu()
Menu.setApplicationMenu(menu) // 构造一个空菜单
```

构造一个有数据的菜单

```js
const template = [
    {
      label: '帮助',
      role: 'help', menuItem :  [
        {
          label: '帮助',
          role: 'help',
          submenu: [
            {
              label: '关于electronapp',
              click() {
                dialog.showMessageBox({
                  message: '这是一个Electron应用！',
                  type: 'info',
                  title: 'electron应用'
                });
              }
            }
          ]
        }
      ],
   submenu: [
        {
          label: '关于electronapp',
          click() {
            dialog.showMessageBox({
              message: '这是一个Electron应用！',
              type: 'info',
              title: 'electron应用'
            });
          }
        }
      ]
    }
  ]
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
```







#### 