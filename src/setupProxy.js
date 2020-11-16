const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use("/l/*",
    createProxyMiddleware({
      target: "http://localhost:3001",
      changeOrigin: true,
      pathRewrite: { '^': '/dev' },
      onProxyReq: (proxyReq, req) => {
        Object.keys(req.headers).forEach(function (key) {
          proxyReq.setHeader(key, req.headers[key]);
        });
        proxyReq.setHeader('Host', 'localhost');
      }
    })
  );
};
