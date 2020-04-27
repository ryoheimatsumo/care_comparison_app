const initialState = 
    [
        {
          id:1,
          name: '渋谷区豊沢・新橋地域包括支援センター',
          introduction: 'WEBページはHTML、CSSという言語によってその見た目が作られています。 実際にWEBページを作りながら学んでみましょう！',
          address: '〒150-0013 渋谷区恵比寿2丁目27番18号 恵比寿保健相談所内'
        },
        {
          id:2,
          name: '地域包括支援センターパール',
          introduction: 'SassはCSSをより便利に効率的にするための言語です。',
          address: '〒150-0035 渋谷区鉢山町3番27号'
        },
        {
          id:3,
          name: '渋谷区東健康プラザ地域包括支援センター',
          introduction: 'JavaScriptはフロントエンドだけでなく、サーバーサイドまで広い可能性を持つプログラミング言語です。',
          address:'〒150-0011 渋谷区東3丁目14番13号'
        },
        {
          id:4,
          name: '渋谷区大向地域包括支援センター',
          introduction: 'ReactはHTMLのように、サイトの見た目をつくることができるJavaScriptのライブラリです。',
          address: '〒150-0046 渋谷区松濤1丁目26番6号 地域交流センター大向内'
        },
      ]
  
  
  export const facilitiesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        // 新しく追加するTODO
        const todo = action.payload.todo;
        // stateを複製して追加
        const newState = Object.assign({}, state);
        newState.todoList.push(todo);
        return newState;
      default:
        return state;
    }
  };