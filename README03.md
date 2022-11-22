# Vue.jsの基礎

### 3　条件分岐でDOM表示を制御する[v-if]

- 　目標👇

<div align="center"><img width="480" src="https://t.gyazo.com/teams/diveintocode/4017d717d9e29575e3cc2808c0a5fef2.gif"></div>

> - 「EメールフォームとEメール(確認)フォームを入力してください」= formData.emailの値が空（未入力）またはformData.emailConfirmの値が空（未入力）の場合は入力を促す
> - 「Eメールが一致しません」 = `errorMessage` =  Eメール入力フォームと確認フォームの値が異なっている場合はエラーメッセージを表示
> - 「正しく入力できています」 = それ以外の場合（入力されており、かつ値が同じ場合）のメッセージ


https://github.com/Remi-1201/Vue01/commit/b20f9b710a6186e13a62f9e2397d0c40b1ab3dd3


[validation.js]
```
const app = new Vue({
  el: '#app',
  data: {
    errorMessage: 'Eメールが一致しません',
    formData: {
      name: '',
      // 追加👇
      email: '',
      emailConfirm: '',
      content: '',
    },
  }
})
```

- エラーメッセージを表示する要素に、`v-if`を設定

- 「どちらかのフォームが未入力の場合は表示させない」という要件を満たせるように、`v-else-if`、`v-else`を使用

[index.html]
```
<!-- formData.emailの値が空（未入力）またはformData.emailConfirmの値が空（未入力）の場合は入力を促すメッセージを表示 -->
  <p v-if="formData.email === '' || formData.emailConfirm === ''" >
    EメールフォームとEメール(確認)フォームを入力してください
  </p>
<!-- v-ifの条件に当てはまらず、値が異なっている場合はエラーメッセージを表示 -->
  <p v-else-if="formData.email !== formData.emailConfirm" class="alert_color">
    {{ errorMessage }}
  </p>
<!-- それ以外の場合（入力されており、かつ値が同じ場合）のメッセージ -->
  <p v-else>正しく入力できています</p>
```
