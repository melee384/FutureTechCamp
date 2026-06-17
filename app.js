{\rtf1\ansi\ansicpg1252\cocoartf2869
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // ==========================================================================\
// C\uc0\u416  S\u7902  D\u7918  LI\u7878 U B\u7842 O M\u7852 T N\u7896 I B\u7896  T\'cdCH H\u7906 P CHU\u7848 N C\u7908 C AN TO\'c0N TH\'d4NG TIN\
// ==========================================================================\
const SECURE_DB = \{\
    scenarios: \{\
        phishing_sms: \{\
            title: "SMS Phishing (Gi\uc0\u7843  m\u7841 o t\u7893 ng \u273 \'e0i Viettel / Ng\'e2n h\'e0ng)",\
            danger_level: "\uc0\u55357 \u57000  HIGH THREAT (Nguy c\u417  chi\u7871 m \u273 o\u7841 t cao)",\
            is_critical: true,\
            raw_text: "[Viettel_CSKH]: Chuc mung Quy khach da nhan duoc phan thuong Tri an Khach hang la 1 chiec iPhone 16 Pro Max t\uc0\u7915  T\u7893 ng C\'f4ng ty. Vui long truy cap link <span class='flag-keyword'>m-viettel.com/tri-an</span> de xac nhan thong tin nhan thuong truoc <span class='flag-keyword'>24h hom nay</span>. Qua han se huy bieu quyet.",\
            analysis: [\
                "\uc0\u55357 \u57041  <b>\u272 \u7847 u s\u7889  Brandname gi\u7843 :</b> K\u7867  gian d\'f9ng tr\u7841 m ph\'e1t s\'f3ng BTS gi\u7843  l\u7853 p t\'ean hi\u7875 n th\u7883  Viettel \u273 \u7875  \u273 \'e1nh l\u7915 a b\u7897  l\u7885 c c\u7911 a \u273 i\u7879 n tho\u7841 i.",\
                "\uc0\u9888 \u65039  <b>\u272 \u432 \u7901 ng link b\u7851 y \u273 \u7897 c h\u7841 i:</b> Link ch\u7913 a c\u7909 m t\u7915  r\'e1c <code>m-viettel.com</code> ho\'e0n to\'e0n kh\'f4ng thu\u7897 c c\u7893 ng d\u7883 ch v\u7909  ch\'ednh th\u7889 ng c\u7911 a m\u7841 ng Viettel (ph\u7843 i l\'e0 .vn).",\
                "\uc0\u55357 \u57041  <b>Gi\u7899 i h\u7841 n th\u7901 i gian \'e9p bu\u7897 c:</b> S\u7917  d\u7909 ng c\u7909 m t\u7915  kh\u7849 n c\u7845 p 'tr\u432 \u7899 c 24h h\'f4m nay' t\u7841 o t\'e2m l\'fd lo s\u7907  b\u7887  l\u7905  c\u417  h\u7897 i nh\u7857 m l\'e0m n\u7841 n nh\'e2n m\u7845 t c\u7843 nh gi\'e1c."\
            ]\
        \},\
        fake_website: \{\
            title: "Website gi\uc0\u7843  m\u7841 o L\u7879 nh truy n\'e3 / C\u417  quan \u273 i\u7873 u tra",\
            danger_level: "\uc0\u55357 \u57000  HIGH THREAT (\u272 e d\u7885 a ph\'e1p l\'fd nghi\'eam tr\u7885 ng)",\
            is_critical: true,\
            raw_text: "H\uc0\u7878  TH\u7888 NG C\u7892 NG TH\'d4NG TIN L\u7878 NH TRUY N\'c3 QU\u7888 C GIA\\n\u272 \u432 \u7901 ng d\u7851 n k\u7871 t n\u7889 i: <span class='flag-keyword'>http://bo-cong-an.kiemtra-hoso-0291.xyz</span>\\nY\'eau c\u7847 u: C\'f4ng d\'e2n nh\u7853 p \u273 \u7847 y \u273 \u7911  H\u7885  t\'ean, S\u7889  \u273 \u7883 nh danh CCCD v\'e0 cung c\u7845 p m\'e3 x\'e1c th\u7921 c <span class='flag-keyword'>OTP Ng\'e2n h\'e0ng</span> \u273 \u7875  h\u7879  th\u7889 ng t\u7921  \u273 \u7897 ng qu\'e9t ki\u7875 m tra t\u7897 i ph\u7841 m.",\
            analysis: [\
                "\uc0\u55357 \u57041  <b>Sai l\u7879 ch ch\u7913 ng ch\u7881  b\u7843 o m\u7853 t:</b> Link s\u7917  d\u7909 ng giao th\u7913 c kh\'f4ng m\'e3 h\'f3a <code>http://</code>. To\'e0n b\u7897  c\'e1c trang c\'f4ng v\u7909  nh\'e0 n\u432 \u7899 c b\u7855 t bu\u7897 c d\'f9ng <code>https://</code>.",\
                "\uc0\u9888 \u65039  <b>T\'ean mi\u7873 n gi\u7843  m\u7841 o ho\'e0n to\'e0n:</b> \u272 u\'f4i m\u7903  r\u7897 ng l\u7841  <code>.xyz</code> ph\u7889 i h\u7907 p v\u7899 i c\u7909 m t\u7915  ng\u7851 u nhi\'ean. Web c\u7911 a B\u7897  C\'f4ng an lu\'f4n c\'f3 \u273 u\'f4i duy nh\u7845 t l\'e0 <code>.gov.vn</code>.",\
                "\uc0\u55357 \u57041  <b>H\'e0nh vi t\u7889 ng ti\u7873 n k\u7929  thu\u7853 t s\u7889 :</b> C\u417  quan t\u432  ph\'e1p tuy\u7879 t \u273 \u7889 i kh\'f4ng bao gi\u7901  y\'eau c\u7847 u c\'f4ng d\'e2n g\u7917 i m\'e3 OTP t\'e0i kho\u7843 n ng\'e2n h\'e0ng qua trang web c\'f4ng c\u7897 ng."\
            ]\
        \},\
        deepfake: \{\
            title: "Deepfake AI Video Call gi\uc0\u7843  m\u7841 o ng\u432 \u7901 i th\'e2n vay ti\u7873 n",\
            danger_level: "\uc0\u9888 \u65039  WARNING THREAT (M\u7841 o danh c\'f4ng ngh\u7879  cao)",\
            is_critical: false,\
            raw_text: "\\"M\uc0\u7865  \u417 i, con \u273 ang \u273 i l\'e0m th\'ec \u273 \'e2m xe v\'e0o ng\u432 \u7901 i ta b\u7883  g\'e3y ch\'e2n... C\'f4ng an \u273 ang gi\u7919  gi\u7845 y t\u7901 . M\u7865  chuy\u7875 n g\u7845 p cho anh \u273 \u7897 i tr\u432 \u7903 ng <span class='flag-keyword'>15 tri\u7879 u \u273 \u7891 ng</span> v\'e0o s\u7889  t\'e0i kho\u7843 n n\'e0y h\u7897  con v\u7899 i kh\'f4ng con b\u7883  nh\u7889 t...\\" (Video hi\u7875 n th\u7883  m\u7863 t ng\u432 \u7901 i th\'e2n kh\'f3c lo l\u7917 ng, khu\'f4n m\u7863 t h\u417 i m\u7901  gi\u7853 t, gi\u7885 ng n\'f3i \u273 \u7913 t qu\'e3ng)",\
            analysis: [\
                "\uc0\u9888 \u65039  <b>\u272 \u7863 c \u273 i\u7875 m h\'ecnh \u7843 nh AI l\u7895 i:</b> Khu\'f4n m\u7863 t nh\'e2n v\u7853 t c\'f3 bi\u7875 u c\u7843 m \u273 \u417  c\u7913 ng, c\u417  mi\u7879 ng l\u7879 ch nh\u7883 p v\u7899 i \'e2m thanh, g\'f3c m\u7855 t kh\'f4ng ch\u7899 p t\u7921  nhi\'ean.",\
                "\uc0\u55357 \u57041  <b>K\u7883 ch b\u7843 n t\u7841 o kh\u7911 ng ho\u7843 ng:</b> \u272 \'e1nh th\u7859 ng v\'e0o l\'f2ng tr\u7855 c \u7849 n v\'e0 s\u7921  ho\u7843 ng lo\u7841 n c\u7911 a cha m\u7865 /ng\u432 \u7901 i th\'e2n \u273 \u7875  \'e9p n\u7841 n nh\'e2n chuy\u7875 n ti\u7873 n g\u7845 p m\'e0 kh\'f4ng k\u7883 p suy ngh\u297 ."\
            ]\
        \},\
        malware: \{\
            title: "T\uc0\u7879 p m\'e3 \u273 \u7897 c gi\u7843  m\u7841 o \u7913 ng d\u7909 ng D\u7883 ch V\u7909  C\'f4ng VNeID",\
            danger_level: "\uc0\u55357 \u57000  HIGH THREAT (M\'e3 \u273 \u7897 c gi\'e1n \u273 i\u7879 p ph\u7847 n c\u7913 ng)",\
            is_critical: true,\
            raw_text: "Tin nh\uc0\u7855 n t\u7915  t\'e0i kho\u7843 n m\u7841 o danh C\'e1n b\u7897  Thu\u7871 : \\"Anh t\u7843 i app t\u7853 p tin <span class='flag-keyword'>VneID_Thue_DichVuCong.apk</span> n\'e0y v\u7873  m\'e1y Android c\'e0i \u273 \u7863 t \u273 \u7875  \u273 \u7891 ng b\u7897  m\'e3 s\u7889  \u273 \u7883 nh danh thu\u7871  c\'e1 nh\'e2n ngay trong chi\u7873 u nay nh\'e9, \u273 \u7905  ph\u7843 i ra c\u417  quan h\'e0nh ch\'ednh.\\"",\
            analysis: [\
                "\uc0\u55357 \u57041  <b>\u272 \u7883 nh d\u7841 ng file nguy hi\u7875 m:</b> File c\'f3 \u273 u\'f4i \u273 \u7883 nh d\u7841 ng <code>.apk</code> t\u7843 i t\u7915  b\'ean ngo\'e0i ch\u7907  \u7913 ng d\u7909 ng Google Play l\'e0 ngu\u7891 n ph\'e1t t\'e1n m\'e3 \u273 \u7897 c trojan h\'e0ng \u273 \u7847 u.",\
                "\uc0\u9888 \u65039  <b>\u272 \'e1nh c\u7855 p quy\u7873 n tr\u7907  n\u259 ng (Accessibility):</b> Khi \u273 \u432 \u7907 c c\'e0i, app \u7849 n n\'e0y s\u7869  l\'e9n l\'fat \u273 \u7885 c tr\u7897 m to\'e0n b\u7897  tin nh\u7855 n OTP ng\'e2n h\'e0ng v\'e0 t\u7921  \u273 \u7897 ng th\u7921 c hi\u7879 n l\u7879 nh chuy\u7875 n ti\u7873 n ng\u7847 m."\
            ]\
        \}\
    \},\
    quiz_questions: [\
        \{\
            badge: "T\'ecnh hu\uc0\u7889 ng 1: Video Call kh\u7849 n c\u7845 p c\u7911 a S\u7871 p t\u7893 ng",\
            question: "B\uc0\u7841 n b\u7845 t ng\u7901  nh\u7853 n \u273 \u432 \u7907 c cu\u7897 c g\u7885 i Video tr\u7921 c ti\u7871 p t\u7915  S\u7871 p t\u7893 ng y\'eau c\u7847 u chuy\u7875 n kho\u7843 n kh\u7849 n c\u7845 p 200 tri\u7879 u \u273 \u7891 ng cho \u273 \u7889 i t\'e1c chi\u7871 n l\u432 \u7907 c. Gi\u7885 ng n\'f3i v\'e0 khu\'f4n m\u7863 t hi\u7875 n th\u7883  \u273 \'fang l\'e0 s\u7871 p, nh\u432 ng t\'edn hi\u7879 u ch\u7853 p ch\u7901 n v\'e0 s\u7871 p li\'ean t\u7909 c gi\u7909 c gi\'e3 \'e9p bu\u7897 c. B\u7841 n x\u7917  l\'fd th\u7871  n\'e0o?",\
            options: [\
                \{ text: "A. Ti\uc0\u7871 n h\'e0nh chuy\u7875 n ti\u7873 n l\u7853 p t\u7913 c v\'ec \u273 \'e2y l\'e0 l\u7879 nh c\u7845 p tr\'ean, n\u7871 u ch\u7853 m tr\u7877  s\u7907  \u7843 nh h\u432 \u7903 ng ti\u7871 n \u273 \u7897  c\'f4ng ty.", is_correct: false \},\
                \{ text: "B. T\uc0\u7855 t m\'e1y, ch\u7911  \u273 \u7897 ng li\'ean l\u7841 c l\u7841 i v\u7899 i S\u7871 p qua m\u7897 t k\'eanh \u273 \u7897 c l\u7853 p (g\u7885 i \u273 i\u7879 n tho\u7841 i tr\u7921 c ti\u7871 p qua sim s\'f3ng di \u273 \u7897 ng th\'f4ng th\u432 \u7901 ng ho\u7863 c x\'e1c th\u7921 c tr\u7921 c ti\u7871 p qua tr\u7907  l\'fd) \u273 \u7875  \u273 \u7889 i chi\u7871 u.", is_correct: true \},\
                \{ text: "C. Nh\uc0\u7855 n tin h\u7887 i m\u7897 t \u273 \u7891 ng nghi\u7879 p kh\'e1c xem s\u7871 p \u273 ang \u7903  \u273 \'e2u r\u7891 i c\u7913  th\u7871  l\'e0m theo.", is_correct: false \}\
            ],\
            feedback: "Ch\'ednh x\'e1c! C\uc0\u7909 c An to\'e0n th\'f4ng tin khuy\u7871 n c\'e1o: \u272 \u7889 i v\u7899 i m\u7885 i y\'eau c\u7847 u chuy\u7875 n ti\u7873 n g\u7845 p qua m\u7841 ng x\'e3 h\u7897 i, d\'f9 nh\'ecn th\u7845 y m\u7863 t hay nghe \u273 \'fang gi\u7885 ng, v\u7851 n ph\u7843 i t\u7855 t m\'e1y v\'e0 g\u7885 i l\u7841 i b\u7857 ng s\u7889  di \u273 \u7897 ng th\'f4ng th\u432 \u7901 ng \u273 \u7875  x\'e1c minh, tr\'e1nh s\u7853 p b\u7851 y Deepfake."\
        \},\
        \{\
            badge: "T\'ecnh hu\uc0\u7889 ng 2: \u272 \u432 \u7901 ng link b\'ecnh ch\u7885 n t\u7915  t\'e0i kho\u7843 n b\u7841 n th\'e2n",\
            question: "T\'e0i kho\uc0\u7843 n m\u7841 ng x\'e3 h\u7897 i c\u7911 a m\u7897 t ng\u432 \u7901 i b\u7841 n r\u7845 t th\'e2n g\u7917 i cho b\u7841 n link trang web k\'e8m tin nh\u7855 n: 'Nh\u7845 p v\'e0o link n\'e0y b\'ecnh ch\u7885 n thi \u7843 nh m\u7851 u nh\'ed cho con t\u7899  v\u7899 i nh\'e9, t\u7899  \u273 ang b\u7883  thi\u7871 u v\'e0i l\u432 \u7907 t vote \u273 \u7875  nh\u7853 n gi\u7843 i'. B\u7841 n s\u7869  \u7913 ng x\u7917  ra sao?",\
            options: [\
                \{ text: "A. B\uc0\u7845 m v\'e0o link ngay, nh\u7853 p s\u7889  \u273 i\u7879 n tho\u7841 i v\'e0 m\u7853 t kh\u7849 u t\'e0i kho\u7843 n \u273 \u7875  \u273 \u259 ng nh\u7853 p h\u7879  th\u7889 ng b\'ecnh ch\u7885 n gi\'fap b\u7841 n.", is_correct: false \},\
                \{ text: "B. B\uc0\u7887  qua tin nh\u7855 n, kh\'f4ng l\'e0m g\'ec c\u7843  v\'e0 c\u361 ng kh\'f4ng c\u7843 nh b\'e1o cho ng\u432 \u7901 i b\u7841 n \u273 \'f3.", is_correct: false \},\
                \{ text: "C. Kh\'f4ng b\uc0\u7845 m v\'e0o link. G\u7885 i \u273 i\u7879 n tho\u7841 i ho\u7863 c nh\u7855 n tin qua k\'eanh kh\'e1c \u273 \u7875  c\u7843 nh b\'e1o b\u7841 n m\'ecnh c\'f3 th\u7875  \u273 \'e3 b\u7883  chi\u7871 m quy\u7873 n \u273 i\u7873 u khi\u7875 n t\'e0i kho\u7843 n (hack).", is_correct: true \}\
            ],\
            feedback: "Tuy\uc0\u7879 t v\u7901 i! \u272 \'e2y l\'e0 th\u7911  \u273 o\u7841 n chi\u7871 m \u273 o\u7841 t t\'e0i kho\u7843 n d\'e2y chuy\u7873 n. K\u7867  gian chi\u7871 m Facebook c\u7911 a m\u7897 t ng\u432 \u7901 i, sau \u273 \'f3 g\u7917 i link b\'ecnh ch\u7885 n gi\u7843  m\u7841 o (Phishing) \u273 \u7875  d\u7909  to\'e0n b\u7897  danh s\'e1ch b\u7841 n b\'e8 nh\u7853 p m\u7853 t kh\u7849 u nh\u7857 m chi\u7871 m \u273 o\u7841 t ti\u7871 p."\
        \}\
    ],\
    rules_6no: [\
        \{ title: "KH\'d4NG S\uc0\u7906 ", desc: "C\u417  quan C\'f4ng an, Vi\u7879 n ki\u7875 m s\'e1t KH\'d4NG l\'e0m vi\u7879 c ho\u7863 c \u273 e d\u7885 a c\'f4ng d\'e2n qua \u273 i\u7879 n tho\u7841 i. M\u7885 i y\'eau c\u7847 u l\'e0m vi\u7879 c \u273 \u7873 u c\'f3 gi\u7845 y m\u7901 i ch\'ednh th\u7913 c." \},\
        \{ title: "KH\'d4NG THAM", desc: "Tuy\uc0\u7879 t \u273 \u7889 i kh\'f4ng tin v\'e0o c\'e1c th\'f4ng b\'e1o tr\'fang th\u432 \u7903 ng l\u7899 n, vi\u7879 c nh\u7865  l\u432 \u417 ng cao l\'e0m nhi\u7879 m v\u7909  online \u259 n hoa h\u7891 ng, ho\u7863 c c\'e1c s\'e0n \u273 \u7847 u t\u432  si\'eau l\u7907 i nhu\u7853 n." \},\
        \{ title: "KH\'d4NG V\uc0\u7896 I", desc: "\u272 \u7913 ng tr\u432 \u7899 c m\u7885 i t\'ecnh hu\u7889 ng b\'e1o tin ng\u432 \u7901 i th\'e2n g\u7863 p n\u7841 n c\u7847 n ti\u7873 n m\u7893  g\u7845 p, h\'e3y b\'ecnh t\u297 nh d\u7915 ng l\u7841 i g\u7885 i \u273 i\u7879 n tr\u7921 c ti\u7871 p cho b\u7879 nh vi\u7879 n ho\u7863 c nh\'e0 tr\u432 \u7901 ng ki\u7875 m tra." \},\
        \{ title: "KH\'d4NG CLICK", desc: "Kh\'f4ng nh\uc0\u7845 p v\'e0o c\'e1c \u273 \u432 \u7901 ng link l\u7841  g\u7917 i k\'e8m qua tin nh\u7855 n SMS, Zalo. Kh\'f4ng t\u7921  \'fd c\'e0i \u273 \u7863 t c\'e1c file \u273 u\'f4i t\u7853 p tin c\'f3 d\u7841 ng .APK l\u7841 ." \},\
        \{ title: "KH\'d4NG GIAO", desc: "Kh\'f4ng bao gi\uc0\u7901  cung c\u7845 p th\'f4ng tin \u273 \u7883 nh danh c\'e1 nh\'e2n, s\u7889  t\'e0i kho\u7843 n ng\'e2n h\'e0ng v\'e0 \u273 \u7863 c bi\u7879 t l\'e0 m\'e3 OTP x\'e1c th\u7921 c cho b\u7845 t k\u7923  ai d\u432 \u7899 i b\u7845 t k\u7923  l\'fd do g\'ec." \},\
        \{ title: "KH\'d4NG CHUY\uc0\u7874 N", desc: "Tuy\u7879 t \u273 \u7889 i kh\'f4ng th\u7921 c hi\u7879 n l\u7879 nh chuy\u7875 n ti\u7873 n v\'e0o c\'e1c s\u7889  t\'e0i kho\u7843 n c\'e1 nh\'e2n l\u7841  do ng\u432 \u7901 i kh\'f4ng quen bi\u7871 t ch\u7881  \u273 \u7883 nh \u273 \u7875  l\'e0m th\u7911  t\u7909 c c\u7885 c ph\'ed b\u432 u ki\u7879 n, gi\u7843 i th\u432 \u7903 ng." \}\
    ]\
\};\
\
// BI\uc0\u7870 N QU\u7842 N L\'dd TI\u7870 N TR\'ccNH TO\'c0N C\u7908 C\
let currentQuizIndex = 0;\
let masteredCardsCount = 0;\
\
// KH\uc0\u7902 I CH\u7840 Y KHHI TRANG WEB T\u7842 I XONG\
document.addEventListener("DOMContentLoaded", () => \{\
    initTabsSystem();\
    initLabModule();\
    initQuizModule();\
    initHandbookModule();\
\});\
\
// ==========================================================================\
// THI\uc0\u7870 T L\u7852 P H\u7878  TH\u7888 NG MENU TABS\
// ==========================================================================\
function initTabsSystem() \{\
    const buttons = document.querySelectorAll(".tab-btn");\
    const contents = document.querySelectorAll(".tab-content");\
\
    buttons.forEach(btn => \{\
        btn.addEventListener("click", () => \{\
            const target = btn.getAttribute("data-tab");\
\
            buttons.forEach(b => b.classList.remove("active"));\
            contents.forEach(c => c.classList.remove("active"));\
\
            btn.classList.add("active");\
            document.getElementById(target).classList.add("active");\
        \});\
    \});\
\}\
\
// ==========================================================================\
// X\uc0\u7916  L\'dd PH\'d2NG TH\'cd NGHI\u7878 M PH\'c2N T\'cdCH H\u7884 C LI\u7878 U\
// ==========================================================================\
function initLabModule() \{\
    const menuItems = document.querySelectorAll(".menu-item");\
    const title = document.getElementById("lab-scenario-title");\
    const badge = document.getElementById("lab-threat-badge");\
    const terminal = document.getElementById("lab-terminal-text");\
    const analysisBox = document.getElementById("lab-analysis-box");\
\
    function renderScenario(key) \{\
        const data = SECURE_DB.scenarios[key];\
        if (!data) return;\
\
        title.innerText = data.title;\
        badge.innerText = data.danger_level;\
        \
        // C\uc0\u7853 p nh\u7853 t class hi\u7875 n th\u7883  m\'e0u b\'e1o \u273 \u7897 ng\
        if (data.is_critical) \{\
            badge.className = "badge-alert threat-level-high";\
        \} else \{\
            badge.className = "badge-alert threat-level-warning";\
        \}\
\
        terminal.innerHTML = data.raw_text;\
        analysisBox.innerHTML = "";\
\
        data.analysis.forEach(item => \{\
            const li = document.createElement("li");\
            li.style.marginBottom = "12px";\
            li.style.lineHeight = "1.5";\
            li.innerHTML = item;\
            analysisBox.appendChild(li);\
        \});\
    \}\
\
    menuItems.forEach(item => \{\
        item.addEventListener("click", () => \{\
            menuItems.forEach(i => i.classList.remove("active"));\
            item.classList.add("active");\
            renderScenario(item.getAttribute("data-scenario"));\
        \});\
    \});\
\
    // Ch\uc0\u7841 y m\u7863 c \u273 \u7883 nh m\u7909 c \u273 \u7847 u ti\'ean\
    renderScenario("phishing_sms");\
\}\
\
// ==========================================================================\
// X\uc0\u7916  L\'dd MODULE TR\u7854 C NGHI\u7878 M \u272 I\u7874 M S\u7888 \
// ==========================================================================\
function initQuizModule() \{\
    renderQuestion();\
\}\
\
function renderQuestion() \{\
    const questions = SECURE_DB.quiz_questions;\
    const container = document.getElementById("quiz-module-container");\
\
    if (currentQuizIndex >= questions.length) \{\
        container.innerHTML = `\
            <div style="text-align: center; padding: 30px 10px;">\
                <i class="fas fa-user-shield" style="font-size: 3.5rem; color: var(--yellow-warning); margin-bottom: 15px;"></i>\
                <h3 style="color: var(--green-safe); font-size: 1.3rem; margin-bottom: 8px;">HO\'c0N TH\'c0NH \uc0\u272 \'c1NH GI\'c1 N\u258 NG L\u7920 C!</h3>\
                <p style="color: var(--text-secondary); font-size:0.9rem; max-width: 500px; margin: 0 auto 20px auto;">\
                    B\uc0\u7841 n \u273 \'e3 xu\u7845 t s\u7855 c v\u432 \u7907 t qua to\'e0n b\u7897  k\u7883 ch b\u7843 n b\u7851 y t\'e2m l\'fd kh\u7849 n c\u7845 p nguy hi\u7875 m tr\'ean kh\'f4ng gian m\u7841 ng 2026.\
                </p>\
                <div style="display: inline-block; padding: 10px 25px; border: 2px dashed var(--green-safe); border-radius: 8px; font-family: var(--font-mono); color: var(--green-safe); font-weight: bold; font-size:0.9rem;">\
                    \uc0\u55357 \u57057 \u65039  CH\u7912 NG NH\u7852 N: C\'d4NG D\'c2N S\u7888  AN TO\'c0N\
                </div>\
            </div>\
        `;\
        return;\
    \}\
\
    const currentData = questions[currentQuizIndex];\
    document.getElementById("quiz-badge").innerText = currentData.badge;\
    document.getElementById("quiz-question-text").innerText = currentData.question;\
\
    const optionsWrapper = document.getElementById("quiz-options-wrapper");\
    optionsWrapper.innerHTML = "";\
\
    currentData.options.forEach(opt => \{\
        const btn = document.createElement("button");\
        btn.className = "option-btn";\
        btn.innerHTML = `\
            <div class="indicator" style="width: 14px; height: 14px; border: 2px solid var(--text-secondary); border-radius: 50%; flex-shrink: 0;"></div>\
            <span>$\{opt.text\}</span>\
        `;\
\
        btn.addEventListener("click", () => \{\
            const allBtns = optionsWrapper.querySelectorAll(".option-btn");\
            allBtns.forEach(b => b.style.pointerEvents = "none");\
            const ind = btn.querySelector(".indicator");\
\
            if (opt.is_correct) \{\
                btn.style.borderColor = "var(--green-safe)";\
                btn.style.background = "rgba(57, 255, 20, 0.04)";\
                ind.style.background = "var(--green-safe)";\
                ind.style.borderColor = "var(--green-safe)";\
                \
                alert(`\uc0\u55356 \u57225  CH\'cdNH X\'c1C!\\n\\n$\{currentData.feedback\}`);\
                currentQuizIndex++;\
                setTimeout(renderQuestion, 500);\
            \} else \{\
                btn.style.borderColor = "var(--red-alert)";\
                btn.style.background = "rgba(255, 49, 49, 0.04)";\
                ind.style.background = "var(--red-alert)";\
                ind.style.borderColor = "var(--red-alert)";\
                \
                alert("\uc0\u10060  SAI S\'d3T NGUY HI\u7874 M!\\n\\nH\'e0nh vi n\'e0y c\'f3 nguy c\u417  cao khi\u7871 n b\u7841 n b\u7883  l\u7897  th\'f4ng tin c\'e1 nh\'e2n v\'e0 b\u7883  chi\u7871 m \u273 o\u7841 t to\'e0n b\u7897  ti\u7873 n trong t\'e0i kho\u7843 n. H\'e3y ch\u7885 n ph\u432 \u417 ng \'e1n x\u7917  l\'fd an to\'e0n h\u417 n!");\
                allBtns.forEach(b => b.style.pointerEvents = "auto");\
            \}\
        \});\
\
        optionsWrapper.appendChild(btn);\
    \});\
\}\
\
// ==========================================================================\
// X\uc0\u7916  L\'dd B\u7896  TH\u7866  L\u7852 T 3D C\u7848 M NANG & TI\u7870 N TR\'ccNH PROGRESS BAR\
// ==========================================================================\
function initHandbookModule() \{\
    const container = document.getElementById("no6-cards-container");\
    container.innerHTML = "";\
\
    SECURE_DB.rules_6no.forEach((rule, index) => \{\
        const card = document.createElement("div");\
        card.className = "flip-card";\
        card.innerHTML = `\
            <div class="card-front">\
                <div class="card-index">QUY T\uc0\u7854 C_0$\{index + 1\}</div>\
                <i class="fa-solid fa-shield-virus"></i>\
                <h3 style="font-size: 1rem; font-weight: 700;">$\{rule.title\}</h3>\
            </div>\
            <div class="card-back">\
                <p>$\{rule.desc\}</p>\
                <button class="understand-btn">\uc0\u272 \'e3 h\u7885 c quy t\u7855 c n\'e0y</button>\
            </div>\
        `;\
\
        // S\uc0\u7921  ki\u7879 n click l\u7853 t m\u7863 t th\u7867  b\'e0i\
        card.addEventListener("click", (e) => \{\
            if (!e.target.closest(".understand-btn")) \{\
                card.classList.toggle("flipped");\
            \}\
        \});\
\
        // N\'fat x\'e1c nh\uc0\u7853 n \u273 \'e3 h\u7885 c ho\'e0n th\'e0nh nhi\u7879 m v\u7909  \u7903  m\u7863 t sau\
        const btn = card.querySelector(".understand-btn");\
        btn.addEventListener("click", (e) => \{\
            e.stopPropagation(); // Ng\uc0\u259 n l\u7853 t th\u7867  b\u7845 t ng\u7901  ng\u432 \u7907 c l\u7841 i\
            card.classList.remove("flipped");\
\
            if (!card.classList.contains("mastered")) \{\
                card.classList.add("mastered");\
                masteredCardsCount++;\
                updateProgress();\
            \}\
        \});\
\
        container.appendChild(card);\
    \});\
\}\
\
// C\uc0\u7852 P NH\u7852 T THANH TI\u7870 N \u272 \u7896  HEADER\
function updateProgress() \{\
    const total = SECURE_DB.rules_6no.length;\
    const percent = Math.round((masteredCardsCount / total) * 100);\
    \
    document.getElementById("global-progress-bar").style.width = `$\{percent\}%`;\
    document.getElementById("global-progress-text").innerText = `$\{percent\}%`;\
\}}