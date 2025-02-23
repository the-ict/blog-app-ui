# Blog React App

Bu blog ilovasi React yordamida ishlab chiqilgan va REST API bilan o'zaro ishlashni amalga oshiradi. CRUD (Create, Read, Update, Delete) amallari yordamida blog postlarini boshqarish mumkin.

## Foydalanish

1. **Loyihani yuklab olish**:
   ```bash
   git clone https://github.com/username/blog-react-app.git
   cd blog-react-app
Qaramliklarni o'rnatish:

bash
Copy
Edit
npm install
Ilovani ishga tushirish:

bash
Copy
Edit
npm start
Bu buyruq ilovani http://localhost:3000 manzilida ishga tushiradi.

Ilova xususiyatlari
Create (Yaratish): Foydalanuvchilar yangi blog postlarini yaratishlari mumkin.
Read (O'qish): Yaratilgan postlar ro'yxatini ko'rish mumkin.
Update (Yangilash): Postlar tahrirlanishi mumkin.
Delete (O'chirish): Postlarni o'chirish imkoniyati mavjud.
Texnologiyalar
Frontend: React, Axios (API bilan ishlash uchun)
Styling: Tailwind CSS
State Management: React hooks (useState, useEffect)
API: REST API (Backend server bilan o'zaro aloqalar)
API Endpoints
GET /api/posts – Barcha postlarni olish.
GET /api/posts/:id – Biror postni id bo'yicha olish.
POST /api/posts – Yangi post yaratish.
PUT /api/posts/:id – Postni yangilash.
DELETE /api/posts/:id – Postni o'chirish.
Loyihani ishlatish uchun talablar
Node.js (v12 yoki undan yuqori)
npm (v6 yoki undan yuqori)
Xatoliklarni hal qilish
Agar ilova ishlamayotgan bo'lsa yoki xatoliklar yuzaga kelsa, iltimos, quyidagilarni tekshirib chiqing:

npm install buyrug'ini yana bir bor ishga tushurib, barcha kerakli paketlar o'rnatilganligini tekshiring.
Backend serverning to'g'ri ishlayotganini tekshirib ko'ring.
Hissa qo'shish
Agar siz bu loyihaga hissa qo'shishni xohlasangiz, iltimos pull request yuboring. Har qanday takliflar va yaxshilanishlar uchun ochiqmiz!

Lisensiya
Bu loyiha MIT License ostida litsenziyalanadi.
