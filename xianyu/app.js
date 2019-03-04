
App({
  todos: [
    { text: 'Learning Javascript', completed: true },
    { text: 'Learning ES2016', completed: true },
    { text: 'Learning MiniApp', completed: false }
  ],
  userInfo: null,
  getUserInfo() {
    return new Promise((resolve, reject) => {
      if (this.userInfo) {
        resolve(this.userInfo);
      } else {
        // mock api
        this.userInfo = {
          nickName: 'MiniApp',
          avatar:
            'https://gw.alicdn.com/tfs/TB1L2.1wwTqK1RjSZPhXXXfOFXa-200-200.png'
        };
        resolve(this.userInfo);
      }
    });
  }
});
