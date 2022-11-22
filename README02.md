# Vue.jsの基礎

### 2　双方向バインディング[v-model]

- 確認ボタンを押すと、入力された内容を表示します　👇
<div align="center"><img width="480" src="https://t.gyazo.com/teams/diveintocode/6b0d5ea68bc8be820af3da4b2a159bb0.gif"></div>

- https://github.com/Remi-1201/Vue01/commit/a5eefd6feca8a18ffc7ab45af8a9ce4d676d1c84

- 入力されたデータをVue.jsをバイディングする時によく使用するのが`v-model`です。

[validation.js]
```
const app = new Vue({ 
  el: '#app',
  data: {
    errorMessage: 'Eメールが一致しません',
    // htmlでは、保持した値を使用する際にはformData.nameと記述
    formData: {
      name: '', 
    },
  }
})
```

- htmlの`input`タグに`v-model="formData.name"`という属性を追加

[index.html]
```
            <td class="contact_input">
              <!-- v-model="formData.name" を追加 -->
              <input v-model="formData.name" type="text" name="name" id="name">
            </td>
```
