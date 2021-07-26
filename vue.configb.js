module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        //target: "http://localhost:8081",
        target: "https://webia.herokuapp.com/",
        changeOrigin: true,
      },
    },
  },
};

