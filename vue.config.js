const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  // npm run build 타겟 설정 (백엔드 연결)
  outputDir: '../eatme-server/src/main/resources/static',

  // npm run server 개발 진행시 포트가 다르기 때문에 프록시 설정해줘야 함
  // target : 백엔드 port가 들어감
  // changeOrigin -> true로 해야 cors 문제 해결할 수 있음
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7070',
        changeOrigin: true,
        ws: false,
      },
    },
  },
});
