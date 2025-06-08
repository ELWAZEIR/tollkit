const jsonServer = require('json-server');
const auth = require('json-server-auth');

const server = jsonServer.create();
const router = jsonServer.router('db.json'); // ← استخدم db.json مباشرة
const middlewares = jsonServer.defaults();

// ربط قاعدة البيانات
server.db = router.db;

// إعداد قواعد الصلاحيات
const rules = auth.rewriter({
  users: 644,
  products: 644,
  categories: 644,
  orders: 660
});
server.use(rules);

// استخدام الـ Middlewares ثم auth ثم الراوتر
server.use(middlewares);
server.use(auth);
server.use(router);

// تشغيل السيرفر
const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`✅ JSON Server is running on port ${PORT}`);
});
