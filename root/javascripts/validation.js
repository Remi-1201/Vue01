const app = new Vue({
    el: '#app',
    data: {
      errorMessage: 'error!',
      // 以下を追加
      formData: {
        name: '',
        email: '',
        email_2: '',
        content: '',
      },
    }
  })