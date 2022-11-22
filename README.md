# Vue.jsの基礎

### 1　ディレクトリ構成

<div align="center"><img src="https://user-images.githubusercontent.com/97021497/203207027-0614b1ef-7ce1-4101-8387-fd93edaa99a9.png" width="250"></div>

- [👆　上記ファイルの初期状態](https://github.com/Remi-1201/Vue01/commit/a0ce96db1487d55fb83471dc08d352a43cddfe4b#diff-6cdd3ca3c244a9d5f7437e8810d2bbd2cf91393e6e64d289c896d8bc7d2fc6cd "first commit")

- `index.html`に、CDNを読み込むスクリプトを追加し、Vue.jsを導入

[index.html]
```
<!--省略-->
    </section>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script> <!--追加-->
    <script type="text/javascript" src="javascripts/validation.js"></script>
  </body>
</html>
```

- Vueインスタンスの生成とDOMのバインディング

[validation.js]

```
# const appでアプリを定義　htmlではid="app"でアプリを呼び出す
# new Vue({ })としてVueインスタンスをapp定数に代入している

const app = new Vue({
  el: '#app',
  data: {
  　# htmlではdata.errorMessageで値を呼び出す
    errorMessage: 'Eメールが一致しません',
  }
})
```
