{\rtf1\ansi\ansicpg1252\cocoartf2869
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 let currentScore = parseInt(localStorage.getItem('safezone_score')) || 0;\
document.getElementById('security-score').innerText = currentScore;\
\
function switchTab(tabName) \{\
    document.querySelectorAll('.tab-section').forEach(sec => sec.classList.remove('active'));\
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));\
    document.getElementById(`tab-$\{tabName\}`).classList.add('active');\
    event.currentTarget.classList.add('active');\
\}\
\
function updateScore(points) \{\
    currentScore += points;\
    localStorage.setItem('safezone_score', currentScore);\
    document.getElementById('security-score').innerText = currentScore;\
\}\
\
const KIK_BAN_MAU = \{\
    call: "Ch\'e0o anh, t\'f4i l\'e0 c\'e1n b\uc0\u7897  \u273 i\u7873 u tra thu\u7897 c C\u417  quan C\'f4ng an. Hi\u7879 n t\u7841 i s\u7889  t\'e0i kho\u7843 n c\u7911 a anh \u273 ang b\u7883  t\'ecnh nghi li\'ean quan \u273 \u7871 n m\u7897 t v\u7909  \'e1n r\u7917 a ti\u7873 n xuy\'ean qu\u7889 c gia. Y\'eau c\u7847 u anh kh\'f4ng \u273 \u432 \u7907 c ti\u7871 t l\u7897  th\'f4ng tin n\'e0y v\u7899 i ai v\'e0 ph\u7843 i chuy\u7875 n ngay to\'e0n b\u7897  s\u7889  d\u432  hi\u7879 n t\u7841 i v\'e0o t\'e0i kho\u7843 n an to\'e0n c\u7911 a Vi\u7879 n ki\u7875 m s\'e1t \u273 \u7875  ph\u7909 c v\u7909  c\'f4ng t\'e1c \u273 i\u7873 u tra t\u7841 m th\u7901 i.",\
    link: "H\uc0\u7879  th\u7889 ng th\'f4ng b\'e1o t\'e0i kho\u7843 n ng\'e2n h\'e0ng c\u7911 a b\u7841 n \u273 ang b\u7883  kh\'f3a. H\'e3y nhanh ch\'f3ng truy c\u7853 p v\'e0o h\u7879  th\u7889 ng x\u7917  l\'fd t\u7841 i \u273 \u432 \u7901 ng d\u7851 n http://dangnhap-taikhoan-uudai.vip \u273 \u7875  x\'e1c th\u7921 c \u273 \u7883 nh danh l\u7841 i.",\
    file: "\uc0\u272 \u7875  c\u7853 p nh\u7853 t d\u7919  li\u7879 u \u273 \u7883 nh danh \u273 \u7891 ng b\u7897  d\u7883 ch v\u7909  c\'f4ng, vui l\'f2ng t\u7843 i v\'e0 m\u7903  t\u7879 p c\u7845 u h\'ecnh c\'e0i \u273 \u7863 t DichVuCong_XacThuc.apk \u273 \u7875  ho\'e0n t\u7845 t."\
\};\
\
function loadSample(type) \{ document.getElementById('analyzer-input').value = KIK_BAN_MAU[type]; \}\
\
function analyzeInput() \{\
    const textInput = document.getElementById('analyzer-input').value.trim().toLowerCase();\
    const resultArea = document.getElementById('analysis-result');\
    if (!textInput) \{ alert("Vui l\'f2ng \uc0\u273 i\u7873 n n\u7897 i dung k\u7883 ch b\u7843 n ho\u7863 c ch\u7885 n m\u7897 t m\u7851 u k\u7883 ch b\u7843 n th\u7917  nghi\u7879 m!"); return; \}\
\
    const danhSachTuKhoa = ['c\'f4ng an', 'vi\uc0\u7879 n ki\u7875 m s\'e1t', '\u273 i\u7873 u tra', 'phong t\u7887 a', 'l\u7879 nh b\u7855 t', 'chuy\u7875 n ti\u7873 n', 'm\'e3 otp', 'x\'e1c minh t\'e0i kho\u7843 n'];\
    const danhSachLink = ['.vip', '.tk', '.xyz', 'http://'];\
    const danhSachTep = ['.apk', '.mobileconfig', '.exe', '.bat'];\
    let phatHienDauHieu = [];\
\
    danhSachTuKhoa.forEach(word => \{ if (textInput.includes(word)) phatHienDauHieu.push(`C\uc0\u7909 m t\u7915  b\u7851 y t\'e2m l\'fd gi\u7843  danh/\u273 e d\u7885 a: "$\{word\}"`); \});\
    danhSachLink.forEach(link => \{ if (textInput.includes(link)) phatHienDauHieu.push(`\uc0\u272 \u432 \u7901 ng link l\u7841  c\'f3 \u273 \u7897  tin c\u7853 y th\u7845 p ho\u7863 c thi\u7871 u b\u7843 o m\u7853 t m\'e3 h\'f3a SSL: "$\{link\}"`); \});\
    danhSachTep.forEach(file => \{ if (textInput.includes(file)) phatHienDauHieu.push(`\uc0\u272 \u7883 nh d\u7841 ng t\u7879 p tin l\u7841  d\u7877  ch\u7913 a m\'e3 \u273 \u7897 c chi\u7871 m quy\u7873 n \u273 i\u7873 u khi\u7875 n thi\u7871 t b\u7883 : "$\{file\}"`); \});\
\
    resultArea.classList.remove('hidden');\
    if (phatHienDauHieu.length > 0) \{\
        resultArea.className = "result-box danger-zone";\
        resultArea.innerHTML = `\
            <h3 style="color: #EF4444;">\uc0\u55357 \u57041  PH\'c1T HI\u7878 N Y\u7870 U T\u7888  R\u7910 I RO L\u7914 A \u272 \u7842 O CAO!</h3>\
            <ul>$\{phatHienDauHieu.map(item => `<li>$\{item\}</li>`).join('')\}</ul>\
            <p style="margin-bottom: 0;">\uc0\u55357 \u56481  <strong>Khuy\u7871 n ngh\u7883  t\u7915  S\u7893  tay C\u7909 c ATTT:</strong> C\u417  quan ch\u7913 c n\u259 ng tuy\u7879 t \u273 \u7889 i kh\'f4ng l\'e0m vi\u7879 c qua \u273 i\u7879 n tho\u7841 i v\'e0 kh\'f4ng bao gi\u7901  y\'eau c\u7847 u ng\u432 \u7901 i d\'e2n chuy\u7875 n ti\u7873 n. H\'e3y \'e1p d\u7909 ng nguy\'ean t\u7855 c <strong>"Ch\u7853 m l\u7841 i"</strong> v\'e0 ti\u7871 n h\'e0nh <strong>"Ki\u7875 m tra t\u7841 i ch\u7895 "</strong>.</p>\
        `;\
        updateScore(15);\
    \} else \{\
        resultArea.className = "result-box safe-zone";\
        resultArea.innerHTML = `\
            <h3 style="color: #10B981;">\uc0\u9989  CH\u431 A PH\'c1T HI\u7878 N D\u7844 U HI\u7878 U NGUY HI\u7874 M PH\u7892  BI\u7870 N</h3>\
            <p style="margin-bottom: 0;">B\uc0\u7897  qu\'e9t gi\u7843  l\u7853 p kh\'f4ng t\'ecm th\u7845 y t\u7915  kh\'f3a l\u7915 a \u273 \u7843 o r\u7853 p khu\'f4n n\'e0o. H\'e3y lu\'f4n c\u7843 nh gi\'e1c, tu\'e2n th\u7911  nghi\'eam ng\u7863 t quy t\u7855 c <strong>6 KH\'d4NG</strong>.</p>\
        `;\
    \}\
\}\
\
const BO_CAU_HOI = [\
    \{\
        q: "T\'ecnh hu\uc0\u7889 ng: B\u7841 n l\u7905  nh\u7845 n v\'e0o m\u7897 t \u273 \u432 \u7901 ng link l\u7841 , \u273 i\u7879 n tho\u7841 i \u273 \u7897 t ng\u7897 t n\'f3ng l\'ean v\'e0 \u7913 ng d\u7909 ng ng\'e2n h\'e0ng t\u7921  \u273 \u7897 ng m\u7903  ra th\u7921 c hi\u7879 n giao d\u7883 ch chuy\u7875 n ti\u7873 n. B\u7841 n n\'ean l\'e0m g\'ec l\u7853 p t\u7913 c?",\
        a: ["B\uc0\u7853 t ch\u7871  \u273 \u7897  m\'e1y bay ho\u7863 c t\u7855 t ngu\u7891 n \u273 i\u7879 n tho\u7841 i ngay l\u7853 p t\u7913 c \u273 \u7875  ng\u7855 t k\u7871 t n\u7889 i m\u7841 ng m\u7841 ng t\u7915  xa, sau \u273 \'f3 d\'f9ng thi\u7871 t b\u7883  kh\'e1c b\'e1o kh\'f3a t\'e0i kho\u7843 n ng\'e2n h\'e0ng.","Ng\u7891 i \u273 \u7907 i giao d\u7883 ch ch\u7841 y xong \u273 \u7875  xem ti\u7873 n b\u7883  chuy\u7875 n \u273 i \u273 \'e2u r\u7891 i ch\u7909 p m\'e0n h\'ecnh l\'e0m b\u7857 ng ch\u7913 ng.","Li\'ean h\u7879  v\u7899 i ng\u432 \u7901 i g\u7917 i link \u273 \u7875  h\u7887 i t\u7841 i sao l\u7841 i x\u7843 y ra hi\u7879 n t\u432 \u7907 ng \u273 \'f3."],\
        correct: 0\
    \},\
    \{\
        q: "T\'ecnh hu\uc0\u7889 ng: Sau khi ph\'e1t hi\u7879 n m\'ecnh v\u7915 a chuy\u7875 n m\u7897 t s\u7889  ti\u7873 n l\u7899 n v\'e0o t\'e0i kho\u7843 n c\u7911 a k\u7867  l\u7915 a \u273 \u7843 o qua m\u7841 ng, quy tr\'ecnh x\u7917  l\'fd \u273 \'fang ph\'e1p lu\u7853 t c\u7911 a b\u7841 n l\'e0 g\'ec?",\
        a: ["L\'ean m\uc0\u7841 ng t\'ecm c\'e1c d\u7883 ch v\u7909  cam k\u7871 t 'hack h\u7879  th\u7889 ng l\u7845 y l\u7841 i ti\u7873 n c\u7885 c'.","Ch\u7845 p nh\u7853 n m\u7845 t ti\u7873 n v\'e0 kh\'f4ng b\'e1o cho ai v\'ec x\u7845 u h\u7893 .","Li\'ean h\u7879  ngay t\u7893 ng \u273 \'e0i ng\'e2n h\'e0ng \u273 \u7875  b\'e1o c\'e1o ch\u7863 n giao d\u7883 ch \u273 \'f3ng b\u259 ng t\'e0i kho\u7843 n r\'e1c, sao l\u432 u to\'e0n b\u7897  bi\'ean lai l\u7883 ch s\u7917  chat, v\'e0 \u273 \u7871 n c\u417  quan C\'f4ng an g\u7847 n nh\u7845 t tr\'ecnh b\'e1o."],\
        correct: 2\
    \}\
];\
let questionIndex = 0;\
function renderQuestion() \{\
    const container = document.getElementById('question-box');\
    if (questionIndex >= BO_CAU_HOI.length) \{\
        container.innerHTML = "<h3 style='color:#10B981;'>\uc0\u55356 \u57225  Ho\'e0n th\'e0nh xu\u7845 t s\u7855 c! B\u7841 n \u273 \'e3 c\'f3 k\u7929  n\u259 ng \u7913 ng ph\'f3 kh\u7911 ng ho\u7843 ng m\u7841 ng r\u7845 t t\u7889 t.</h3>";\
        document.getElementById('badge-notification').classList.remove('hidden');\
        document.getElementById('quiz-progress').style.width = "100%";\
        return;\
    \}\
    const currentQuiz = BO_CAU_HOI[questionIndex];\
    const progressPercent = (questionIndex / BO_CAU_HOI.length) * 100;\
    document.getElementById('quiz-progress').style.width = `$\{progressPercent\}%`;\
    container.innerHTML = `\
        <p class="quiz-question"><strong>T\'ecnh hu\uc0\u7889 ng \u7913 ng ph\'f3 $\{questionIndex + 1\}:</strong> $\{currentQuiz.q\}</p>\
        <div style="display: flex; flex-direction: column; gap: 10px;">\
            $\{currentQuiz.a.map((option, idx) => `<button class="btn-primary" style="background:#1E293B; border:1px solid #2D3D63; font-weight:normal; text-align:left; padding:12px;" onclick="evaluateAnswer($\{idx\})">$\{option\}</button>`).join('')\}\
        </div>\
    `;\
\}\
function evaluateAnswer(selectedIdx) \{\
    const currentQuiz = BO_CAU_HOI[questionIndex];\
    if (selectedIdx === currentQuiz.correct) \{ alert("\uc0\u9989  CH\'cdNH X\'c1C! Ph\u432 \u417 ng \'e1n x\u7917  l\'fd n\'e0y ho\'e0n to\'e0n tr\'f9ng kh\u7899 p v\u7899 i h\u432 \u7899 ng d\u7851 n c\u7911 a C\u7909 c An to\'e0n th\'f4ng tin."); updateScore(50); \} \
    else \{ alert("\uc0\u10060  CH\u431 A CH\'cdNH X\'c1C! H\'e0nh \u273 \u7897 ng n\'e0y c\'f3 th\u7875  khi\u7871 n thi\u7871 t b\u7883  c\u7911 a b\u7841 n b\u7883  ki\u7875 m so\'e1t s\'e2u h\u417 n ho\u7863 c l\'e0m m\u7845 t th\u7901 i gian v\'e0ng \u273 \u7875  \u273 \'f3ng b\u259 ng d\'f2ng ti\u7873 n."); \}\
    questionIndex++; renderQuestion();\
\}\
renderQuestion();}