## Electron中clipboard剪贴板
clipboard在系统剪贴板上执行复制和粘贴操作。

### 方法
主要分两类，读和写
```js
clipboard.readText([type])
```
返回 string - 剪贴板中的内容为纯文本
```js
clipboard.writeText(text[, type])
```
示例
```js
const { clipboard } = require('electron')

clipboard.writeText('hello i am a bit of text!')

const text = clipboard.readText()
console.log(text)
// hello i am a bit of text!'
```

类似的方法还有
```js
clipboard.readImage([type])
clipboard.writeImage(image[, type])
clipboard.readRTF([type])
clipboard.writeRTF(text[, type])
clipboard.readBookmark()
clipboard.writeBookmark(title, url[, type])
```

此外还有清除剪贴板clear方法
```js
clipboard.clear([type])
```

还有write方法
```js
clipboard.clear([type])
```
示例
```js
const { clipboard } = require('electron')

clipboard.write({
  text: 'test',
  html: '<b>Hi</b>',
  rtf: '{\\rtf1\\utf8 text}',
  bookmark: 'a title'
})

console.log(clipboard.readText())
// 'test'

console.log(clipboard.readHTML())
// <meta charset='utf-8'><b>Hi</b>

console.log(clipboard.readRTF())
// '{\\rtf1\\utf8 text}'

console.log(clipboard.readBookmark())
// { title: 'a title', url: 'test' }
```