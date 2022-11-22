const app = new Vue({
    el: '#app',
    data: {
      errorMessage: 'Eメールが一致しません',
      // v-model- 以下を追加
      formData: {
        name: '',
        email: '',
        emailConfirm: '',
        content: '',
      },
    }
  })