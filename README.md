# 🛡️ SafeZone - Cybersecurity Educational Web App

> **Một sản phẩm tham gia thử thách Vibe Coding.**  
> Nền tảng số hóa tương tác và mô phỏng thực hành phòng chống lừa đảo trực tuyến, được xây dựng chuẩn hóa 100% dựa trên nội dung tài liệu *"Sổ tay kỹ năng nhận diện và phòng chống lừa đảo trực tuyến"* phát hành bởi **Cục An toàn thông tin (AIS) - Bộ Thông tin và Truyền thông Việt Nam**.

---

## 🎯 Ý Tưởng & Tác Động Cộng Đồng (Community Impact)

Trong kỷ nguyên chuyển đổi số bùng nổ, các hình thức lừa đảo trực tuyến liên tục gia tăng và mục tiêu cuối cùng luôn nhắm vào tài chính của người dùng. Bên cạnh các giải pháp kỹ thuật, việc **nâng cao nhận thức và trang bị kỹ năng** cho người dân được xem là phòng tuyến hàng đầu.

Thay vì bắt người dùng đọc những trang tài liệu PDF dài dòng, **SafeZone** chuyển đổi toàn bộ nội dung giáo trình chính thống thành một **Nền tảng học tập tương tác (Interactive Learning Platform)**. Ứng dụng giúp mọi đối tượng người dùng—từ học sinh, sinh viên đến người cao tuổi—có thể "vừa học vừa thực hành" để tự xây dựng bộ lọc nhận diện lừa đảo cho riêng mình.

---

## 🛠️ Giải Pháp Kiến Trúc: Frontend-Only (No-Backend)

Để đáp ứng nghiêm ngặt giới hạn kỹ thuật của cuộc thi (Chạy thuần túy trên trình duyệt, không cài đặt thêm, không sử dụng cơ sở dữ liệu hoặc backend), **SafeZone** được thiết kế theo kiến trúc **Single Page Application (SPA)** thông minh:
* **Mô phỏng giả lập (Simulation Framework):** Sử dụng các thuật toán xử lý chuỗi và bộ từ điển từ khóa độc lập bằng JavaScript để giả lập một "Bộ rà quét AI".
* **Lưu trữ tại chỗ (Local State Management):** Sử dụng `localStorage` của trình duyệt để đồng bộ điểm số, lịch sử học tập và trạng thái mở khóa huy hiệu của người dùng mà không cần Database.

---

## 🌟 Các Tính Năng Cốt Lõi (Core Features)

Ứng dụng được chia thành 3 phân khu chức năng tương ứng với các nhóm kỹ năng cốt lõi trong cẩm nang của Cục ATTT:

### 1. Phishing Simulator Lab (Phòng Thí Nghiệm Nhận Diện)
* **Quét Cuộc gọi & Tin nhắn:** Người dùng dán nội dung nghi ngờ vào hệ thống. JS sẽ tự động rà quét các từ khóa thao túng tâm lý độc lập (như *"Viện kiểm sát", "Công an điều tra", "Phong tỏa tài khoản", "Đọc mã OTP"*).
* **Quét Website & Ứng dụng giả mạo:** Phát hiện các dấu hiệu URL bất thường (thiếu SSL `http://`, đuôi tên miền độ tin cậy thấp `.vip`, `.tk`, `.xyz`) hoặc định dạng tệp cài đặt đáng ngờ (`.apk`, `.mobileconfig`).
* **Báo cáo giáo dục chuyên sâu:** Ngay khi phát hiện rủi ro, hệ thống bung cảnh báo kèm theo lời giải thích trực quan trích từ giáo trình (Ví dụ: *"Cơ quan công an không bao giờ làm việc qua điện thoại"*).

### 2. Interactive Scenario Quiz (Thử Thách Ứng Phó Khẩn Cấp)
* Hệ thống câu hỏi trắc nghiệm tình huống kịch tính dựa trên mục **Kỹ năng xử lý** của cẩm nang.
* Mô phỏng các tình huống thực tế nguy cấp: *Nên làm gì ngay sau khi lỡ chuyển tiền cho số tài khoản rác? Làm sao để xử lý khi thiết bị bị chiếm quyền điều khiển?*
* Cơ chế chấm điểm và cung cấp phản hồi kiến thức (UI Feedback) lập tức sau mỗi lượt chọn.

### 3. Quy Tắc Vàng & Danh Bạ Cứu Hộ
* Trực quan hóa **"3 Nguyên tắc vàng"** (*Hãy chậm lại, Kiểm tra tại chỗ, Dừng lại! Không gửi*) và Quy tắc **"6 KHÔNG"** thành các thẻ tương tác sinh động.
* Tích hợp **Danh bạ cứu hộ khẩn cấp** hiển thị thông tin liên hệ chính thức của các cơ quan chức năng: Cục An ninh mạng (A05), PA05 địa phương, Cục An toàn thông tin và cổng báo cáo *canhbao.khonggianmang.vn*.

---

## 🎨 Ngôn Ngữ Thiết Kế (UI/UX Design)

* **Cybersecurity Cyberpunk Theme:** Giao diện tối sâu (`#0B0F19`) kết hợp các điểm nhấn trạng thái phát sáng (Neon Glow) màu Xanh (An toàn) và Đỏ (Nguy hiểm) mang lại trải nghiệm như một Trung tâm Giám sát An ninh thực thụ.
* **Gamification (Trò chơi hóa):** Tích hợp thanh tiến trình (`Progress Bar`) tăng tiến và hệ thống vinh danh huy hiệu ảo *"Công Dân Số An Toàn"* khi người dùng đạt điểm tuyệt đối trong các bài kiểm tra.
* **Responsive Design:** Tối ưu hóa hiển thị linh hoạt, mượt mà trên cả máy tính để bàn (Desktop) và thiết bị di động (Mobile).

---

## 📁 Cấu Trúc Thư Mục Dự Án

```text
safezone-app/
│
├── prompts/                          # Nhật ký Prompt theo từng giai đoạn Vibe Coding
│   ├── concept_prompts.txt           # Giai đoạn 1: Ý tưởng & Cấu trúc Module
│   ├── UI_generation_prompts.txt     # Giai đoạn 2: Thiết kế giao diện EdTech Dark Theme
│   ├── code_generation_prompts.txt   # Giai đoạn 3: Lập trình logic JS & LocalStorage
│   └── refinement_prompts.txt        # Giai đoạn 4: Tối ưu hóa UX & Hoàn thiện
│
├── index.html                        # Giao diện SPA chính (HTML5)
├── style.css                         # Phong cách thiết kế, hiệu ứng động (CSS3 Variables & Grid/Flexbox)
├── app.js                            # Bộ não xử lý rà quét và trắc nghiệm tình huống (Vanilla JS)
└── README.md                         # Tài liệu hướng dẫn dự án
