// ==========================================================================
// CƠ SỞ DỮ LIỆU BẢO MẬT NỘI BỘ TÍCH HỢP CHUẨN CỤC AN TOÀN THÔNG TIN
// ==========================================================================
const SECURE_DB = {
    scenarios: {
        phishing_sms: {
            title: "SMS Phishing (Giả mạo tổng đài Viettel / Ngân hàng)",
            danger_level: "🚨 HIGH THREAT (Nguy cơ chiếm đoạt cao)",
            is_critical: true,
            raw_text: "[Viettel_CSKH]: Chuc mung Quy khach da nhan duoc phan thuong Tri an Khach hang la 1 chiec iPhone 16 Pro Max từ Tổng Công ty. Vui long truy cap link <span class='flag-keyword'>m-viettel.com/tri-an</span> de xac nhan thong tin nhan thuong truoc <span class='flag-keyword'>24h hom nay</span>. Qua han se huy bieu quyet.",
            analysis: [
                "🛑 <b>Đầu số Brandname giả:</b> Kẻ gian dùng trạm phát sóng BTS giả lập tên hiển thị Viettel để đánh lừa bộ lọc của điện thoại.",
                "⚠️ <b>Đường link bẫy độc hại:</b> Link chứa cụm từ rác <code>m-viettel.com</code> hoàn toàn không thuộc cổng dịch vụ chính thống của mạng Viettel (phải là .vn).",
                "🛑 <b>Giới hạn thời gian ép buộc:</b> Sử dụng cụm từ khẩn cấp 'trước 24h hôm nay' tạo tâm lý lo sợ bỏ lỡ cơ hội nhằm làm nạn nhân mất cảnh giác."
            ]
        },
        fake_website: {
            title: "Website giả mạo Lệnh truy nã / Cơ quan điều tra",
            danger_level: "🚨 HIGH THREAT (Đe dọa pháp lý nghiêm trọng)",
            is_critical: true,
            raw_text: "HỆ THỐNG CỔNG THÔNG TIN LỆNH TRUY NÃ QUỐC GIA\nĐường dẫn kết nối: <span class='flag-keyword'>http://bo-cong-an.kiemtra-hoso-0291.xyz</span>\nYêu cầu: Công dân nhập đầy đủ Họ tên, Số định danh CCCD và cung cấp mã xác thực <span class='flag-keyword'>OTP Ngân hàng</span> để hệ thống tự động quét kiểm tra tội phạm.",
            analysis: [
                "🛑 <b>Sai lệch chứng chỉ bảo mật:</b> Link sử dụng giao thức không mã hóa <code>http://</code>. Toàn bộ các trang công vụ nhà nước bắt buộc dùng <code>https://</code>.",
                "⚠️ <b>Tên miền giả mạo hoàn toàn:</b> Đuôi mở rộng lạ <code>.xyz</code> phối hợp với cụm từ ngẫu nhiên. Web của Bộ Công an luôn có đuôi duy nhất là <code>.gov.vn</code>.",
                "🛑 <b>Hành vi tống tiền kỹ thuật số:</b> Cơ quan tư pháp tuyệt đối không bao giờ yêu cầu công dân gửi mã OTP tài khoản ngân hàng qua trang web công cộng."
            ]
        },
        deepfake: {
            title: "Deepfake AI Video Call giả mạo người thân vay tiền",
            danger_level: "⚠️ WARNING THREAT (Mạo danh công nghệ cao)",
            is_critical: false,
            raw_text: "\"Mẹ ơi, con đang đi làm thì đâm xe vào người ta bị gãy chân... Công an đang giữ giấy tờ. Mẹ chuyển gấp cho anh đội trưởng <span class='flag-keyword'>15 triệu đồng</span> vào số tài khoản này hộ con với không con bị nhốt...\" (Video hiển thị mặt người thân khóc lo lửng, khuôn mặt hơi mờ giật, giọng nói đứt quãng)",
            analysis: [
                "⚠️ <b>Đặc điểm hình ảnh AI lỗi:</b> Khuôn mặt nhân vật có biểu cảm đơ cứng, cơ miệng lệch nhịp với âm thanh, góc mắt không chớp tự nhiên.",
                "🛑 <b>Kịch bản tạo khủng hoảng:</b> Đánh thẳng vào lòng trắc ẩn và sự hoảng loạn của cha mẹ/người thân để ép nạn nhân chuyển tiền gấp mà không kịp suy nghĩ."
            ]
        },
        malware: {
            title: "Tệp mã độc giả mạo ứng dụng Dịch Vụ Công VNeID",
            danger_level: "🚨 HIGH THREAT (Mã độc gián điệp phần cứng)",
            is_critical: true,
            raw_text: "Tin nhắn từ tài khoản mạo danh Cán bộ Thuế: \"Anh tải app tập tin <span class='flag-keyword'>VneID_Thue_DichVuCong.apk</span> này về máy Android cài đặt để đồng bộ mã số định danh thuế cá nhân ngay trong chiều nay nhé, đỡ phải ra cơ quan hành chính.\"",
            analysis: [
                "🛑 <b>Định dạng file nguy hiểm:</b> File có đuôi định dạng <code>.apk</code> tải từ bên ngoài chợ ứng dụng Google Play là nguồn phát tán mã độc trojan hàng đầu.",
                "⚠️ <b>Đánh cắp quyền trợ năng (Accessibility):</b> Khi được cài, app ẩn này sẽ lén lút đọc trộm toàn bộ tin nhắn OTP ngân hàng và tự động thực hiện lệnh chuyển tiền ngầm."
            ]
        }
    },
    quiz_questions: [
        {
            badge: "Tình huống 1: Video Call khẩn cấp của Sếp tổng",
            question: "Bạn bất ngờ nhận được cuộc gọi Video trực tiếp từ Sếp tổng yêu cầu chuyển khoản khẩn cấp 200 triệu đồng cho đối tác chiến lược. Giọng nói và khuôn mặt hiển thị đúng là sếp, nhưng tín hiệu chập chờn và sếp liên tục giục giã ép buộc. Bạn xử lý thế nào?",
            options: [
                { text: "A. Tiến hành chuyển tiền lập tức vì đây là lệnh cấp trên, nếu chậm trễ sợ ảnh hưởng tiến độ công ty.", is_correct: false },
                { text: "B. Tắt máy, chủ động liên lạc lại với Sếp qua một kênh độc lập (gọi điện thoại trực tiếp qua sim sóng di động thông thường hoặc xác thực trực tiếp qua trợ lý) để đối chiếu.", is_correct: true },
                { text: "C. Nhắn tin hỏi một đồng nghiệp khác xem sếp đang ở đâu rồi cứ thế làm theo.", is_correct: false }
            ],
            feedback: "Chính xác! Cục An toàn thông tin khuyến cáo: Đối với mọi yêu cầu chuyển tiền gấp qua mạng xã hội, dù nhìn thấy mặt hay nghe đúng giọng, vẫn phải tắt máy và gọi lại bằng số di động thông thường để xác minh, tránh sập bẫy Deepfake."
        },
        {
            badge: "Tình huống 2: Đường link bình chọn từ tài khoản bạn thân",
            question: "Tài khoản mạng xã hội của một người bạn rất thân gửi cho bạn link trang web kèm tin nhắn: 'Nhấp vào link này bình chọn thi ảnh mẫu nhí cho con tớ với nhé, tớ đang bị thiếu vài lượt vote để nhận giải'. Bạn sẽ ứng xử ra sao?",
            options: [
                { text: "A. Bấm vào link ngay, nhập số điện thoại và mật khẩu tài khoản để đăng nhập hệ thống bình chọn giúp bạn.", is_correct: false },
                { text: "B. Bỏ qua tin nhắn, không làm gì cả và cũng không cảnh báo cho người bạn đó.", is_correct: false },
                { text: "C. Không bấm vào link. Gọi điện thoại hoặc nhắn tin qua kênh khác để cảnh báo bạn mình có thể đã bị chiếm quyền điều khiển tài khoản (hack).", is_correct: true }
            ],
            feedback: "Tuyệt vời! Đây là thủ đoạn chiếm đoạt tài khoản dây chuyền. Kẻ gian chiếm Facebook của một người, sau đó gửi link bình chọn giả mạo (Phishing) để dụ toàn bộ danh sách bạn bè nhập mật khẩu nhằm chiếm đoạt tiếp."
        }
    ],
    rules_6no: [
        { title: "KHÔNG SỢ", desc: "Cơ quan Công an, Viện kiểm sát KHÔNG làm việc hoặc đe dọa công dân qua điện thoại. Mọi yêu cầu làm việc đều có giấy mời chính thức." },
        { title: "KHÔNG THAM", desc: "Tuyệt đối không tin vào các thông báo trúng thưởng lớn, việc nhẹ lương cao làm nhiệm vụ online ăn hoa hồng, hoặc các sàn đầu tư siêu lợi nhuận." },
        { title: "KHÔNG VỘI", desc: "Đứng trước mọi tình huống báo tin người thân gặp nạn cần tiền mổ gấp, hãy bình tĩnh dừng lại gọi điện trực tiếp cho bệnh viện hoặc nhà trường kiểm tra." },
        { title: "KHÔNG CLICK", desc: "Không nhấp vào các đường link lạ gửi kèm qua tin nhắn SMS, Zalo. Không tự ý cài đặt các file đuôi tập tin có dạng .APK lạ." },
        { title: "KHÔNG GIAO", desc: "Không bao giờ cung cấp thông tin định danh cá nhân, số tài khoản ngân hàng và đặc biệt là mã OTP xác thực cho bất kỳ ai dưới bất kỳ lý do gì." },
        { title: "KHÔNG CHUYỂN", desc: "Tuyệt đối không thực hiện lệnh chuyển tiền vào các số tài khoản cá nhân lạ do người không quen biết chỉ định để làm thủ tục cọc phí bưu kiện, giải thưởng." }
    ]
};

// BIẾN QUẢN LÝ TIẾN TRÌNH TOÀN CỤC
let currentQuizIndex = 0;
let masteredCardsCount = 0;

// KHỞI CHẠY KHHI TRANG WEB TẢI XONG
document.addEventListener("DOMContentLoaded", () => {
    initTabsSystem();
    initLabModule();
    initQuizModule();
    initHandbookModule();
});

// ==========================================================================
// THIẾT LẬP HỆ THỐNG MENU TABS
// ==========================================================================
function initTabsSystem() {
    const buttons = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const target = btn.getAttribute("data-tab");

            buttons.forEach(b => b.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            btn.classList.add("active");
            document.getElementById(target).classList.add("active");
        });
    });
}

// ==========================================================================
// XỬ LÝ PHÒNG THÍ NGHIỆM PHÂN TÍCH HỌC LIỆU
// ==========================================================================
function initLabModule() {
    const menuItems = document.querySelectorAll(".menu-item");
    const title = document.getElementById("lab-scenario-title");
    const badge = document.getElementById("lab-threat-badge");
    const terminal = document.getElementById("lab-terminal-text");
    const analysisBox = document.getElementById("lab-analysis-box");

    function renderScenario(key) {
        const data = SECURE_DB.scenarios[key];
        if (!data) return;

        title.innerText = data.title;
        badge.innerText = data.danger_level;
        
        // Cập nhật class hiển thị màu báo động
        if (data.is_critical) {
            badge.className = "badge-alert threat-level-high";
        } else {
            badge.className = "badge-alert threat-level-warning";
        }

        terminal.innerHTML = data.raw_text;
        analysisBox.innerHTML = "";

        data.analysis.forEach(item => {
            const li = document.createElement("li");
            li.style.marginBottom = "12px";
            li.style.lineHeight = "1.5";
            li.innerHTML = item;
            analysisBox.appendChild(li);
        });
    }

    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            menuItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");
            renderScenario(item.getAttribute("data-scenario"));
        });
    });

    // Chạy mặc định mục đầu tiên
    renderScenario("phishing_sms");
}

// ==========================================================================
// XỬ LÝ MODULE TRẮC NGHIỆM ĐIỂM SỐ
// ==========================================================================
function initQuizModule() {
    renderQuestion();
}

function renderQuestion() {
    const questions = SECURE_DB.quiz_questions;
    const container = document.getElementById("quiz-module-container");

    if (currentQuizIndex >= questions.length) {
        container.innerHTML = `
            <div style="text-align: center; padding: 30px 10px;">
                <i class="fas fa-user-shield" style="font-size: 3.5rem; color: var(--yellow-warning); margin-bottom: 15px;"></i>
                <h3 style="color: var(--green-safe); font-size: 1.3rem; margin-bottom: 8px;">HOÀN THÀNH ĐÁNH GIÁ NĂNG LỰC!</h3>
                <p style="color: var(--text-secondary); font-size:0.9rem; max-width: 500px; margin: 0 auto 20px auto;">
                    Bạn đã xuất sắc vượt qua toàn bộ kịch bản bẫy tâm lý khẩn cấp nguy hiểm trên không gian mạng 2026.
                </p>
                <div style="display: inline-block; padding: 10px 25px; border: 2px dashed var(--green-safe); border-radius: 8px; font-family: var(--font-mono); color: var(--green-safe); font-weight: bold; font-size:0.9rem;">
                    🛡️ CHỨNG NHẬN: CÔNG DÂN SỐ AN TOÀN
                </div>
            </div>
        `;
        return;
    }

    const currentData = questions[currentQuizIndex];
    document.getElementById("quiz-badge").innerText = currentData.badge;
    document.getElementById("quiz-question-text").innerText = currentData.question;

    const optionsWrapper = document.getElementById("quiz-options-wrapper");
    optionsWrapper.innerHTML = "";

    currentData.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerHTML = `
            <div class="indicator" style="width: 14px; height: 14px; border: 2px solid var(--text-secondary); border-radius: 50%; flex-shrink: 0;"></div>
            <span>${opt.text}</span>
        `;

        btn.addEventListener("click", () => {
            const allBtns = optionsWrapper.querySelectorAll(".option-btn");
            allBtns.forEach(b => b.style.pointerEvents = "none");
            const ind = btn.querySelector(".indicator");

            if (opt.is_correct) {
                btn.style.borderColor = "var(--green-safe)";
                btn.style.background = "rgba(57, 255, 20, 0.04)";
                ind.style.background = "var(--green-safe)";
                ind.style.borderColor = "var(--green-safe)";
                
                alert(`🎉 CHÍNH XÁC!\n\n${currentData.feedback}`);
                currentQuizIndex++;
                setTimeout(renderQuestion, 500);
            } else {
                btn.style.borderColor = "var(--red-alert)";
                btn.style.background = "rgba(255, 49, 49, 0.04)";
                ind.style.background = "var(--red-alert)";
                ind.style.borderColor = "var(--red-alert)";
                
                alert("❌ SAI SÓT NGUY HIỂM!\n\nHành vi này có nguy cơ cao khiến bạn bị lộ thông tin cá nhân và bị chiếm đoạt toàn bộ tiền trong tài khoản. Hãy chọn phương án xử lý an toàn hơn!");
                allBtns.forEach(b => b.style.pointerEvents = "auto");
            }
        });

        optionsWrapper.appendChild(btn);
    });
}

// ==========================================================================
// XỬ LÝ BỘ THẺ LẬT 3D CẨM NANG & TIẾN TRÌNH PROGRESS BAR
// ==========================================================================
function initHandbookModule() {
    const container = document.getElementById("no6-cards-container");
    container.innerHTML = "";

    SECURE_DB.rules_6no.forEach((rule, index) => {
        const card = document.createElement("div");
        card.className = "flip-card";
        card.innerHTML = `
            <div class="card-front">
                <div class="card-index">QUY TẮC_0${index + 1}</div>
                <i class="fa-solid fa-shield-virus"></i>
                <h3 style="font-size: 1rem; font-weight: 700;">${rule.title}</h3>
            </div>
            <div class="card-back">
                <p>${rule.desc}</p>
                <button class="understand-btn">Đã học quy tắc này</button>
            </div>
        `;

        // Sự kiện click lật mặt thẻ bài
        card.addEventListener("click", (e) => {
            if (!e.target.closest(".understand-btn")) {
                card.classList.toggle("flipped");
            }
        });

        // Nút xác nhận đã học hoàn thành nhiệm vụ ở mặt sau
        const btn = card.querySelector(".understand-btn");
        btn.addEventListener("click", (e) => {
            e.stopPropagation(); // Ngăn lật thẻ bất ngờ ngược lại
            card.classList.remove("flipped");

            if (!card.classList.contains("mastered")) {
                card.classList.add("mastered");
                masteredCardsCount++;
                updateProgress();
            }
        });

        container.appendChild(card);
    });
}

// CẬP NHẬT THANH TIẾN ĐỘ HEADER
function updateProgress() {
    const total = SECURE_DB.rules_6no.length;
    const percent = Math.round((masteredCardsCount / total) * 100);
    
    document.getElementById("global-progress-bar").style.width = `${percent}%`;
    document.getElementById("global-progress-text").innerText = `${percent}%`;
}