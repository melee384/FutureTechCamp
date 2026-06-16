# 🛡️ SafeZone - Lá Chắn Bảo Vệ Người Cao Tuổi Khỏi Thao Túng Tâm Lý & Lừa Đảo Mạng

> **Project Challenge:** Building with AI (Vibe Coding Challenge)  
> **Theme:** Community Impact & Productivity  
> **Tech Stack:** HTML5, CSS3, JavaScript (Pure Frontend - 100% Browser Executable)

---

## 📋 Tổng Quan Dự Án (Overview)
**SafeZone** là một ứng dụng web bảo mật chạy thuần Frontend, được thiết kế với giao diện tối ưu hóa riêng cho **người cao tuổi**. Khác với các ứng dụng chặn số rác thông thường dựa trên danh sách đen (Blacklist) cố định, SafeZone tập trung giải quyết cốt lõi của các vụ lừa đảo hiện nay: **Thao túng tâm lý trong thời gian thực**.

Ứng dụng tích hợp bộ lọc xử lý ngôn ngữ tự nhiên (NLP mô phỏng) chạy trực tiếp trên trình duyệt để phát hiện các kịch bản lừa đảo (mạo danh công an, viện kiểm sát, ép đọc mã OTP, dụ dỗ cài file APK lạ...) và ngay lập tức đưa ra cảnh báo ngắt quãng tâm lý để bảo vệ tài sản của người dùng yếu thế.

---

## 🚀 Hướng Dẫn Khởi Chạy Ứng Dụng (Setup & Running)

Do ứng dụng tuân thủ nghiêm ngặt yêu cầu **Frontend-only** của cuộc thi, bạn **không cần cài đặt** bất kỳ môi trường nào (Node.js, Docker, Python...) và **không cần chạy lệnh terminal**.

### Các bước mở ứng dụng:
1. **Giải nén** tệp tin `app_submission.zip`.
2. Truy cập vào thư mục `web_app/`.
3. Nhấp đúp chuột (Double-click) vào tệp **`index.html`** để mở trực tiếp bằng bất kỳ trình duyệt web nào (Google Chrome, Microsoft Edge, Safari, Brave...).

*Lưu ý: Mọi dữ liệu như Nhật ký cuộc gọi và Danh sách trắng (Whitelist) đều được lưu trữ trực tiếp trên bộ nhớ trình duyệt (`localStorage`), đảm bảo dữ liệu không bị mất khi bạn tải lại trang (F5).*

---

## ✨ Các Tính Năng Cốt Lõi (Key Features)

1. **Lá Chắn Bảo Vệ Tự Động (Background Shield Simulation):** * Nút gạt chuyển đổi trạng thái lớn trực quan, mô phỏng việc đăng ký quyền `CallScreeningService` trên hệ thống để giám sát ngầm.
2. **AI Quét Đa Kênh & Nhận Diện Thao Túng (Multi-channel AI Scanner):**
   * **Kênh Cuộc gọi:** Bộ phân tích từ khóa NLP nhận diện ngay các kịch bản đe dọa (Lệnh bắt, phong tỏa tài khoản, điều tra ngầm).
   * **Kênh Tin nhắn:** Quét và bóc tách các liên kết giả mạo (Phishing Link) hoặc dụ dỗ tải tệp độc hại `.apk`.
3. **Cơ Chế Can Thiệp Khẩn Cấp (Pop-up Pop-over):**
   * Bung màn hình cảnh báo đỏ rực kích thước lớn khi phát hiện rủi ro cao, đi kèm nút hành động một chạm **🔴 NGẮT CUỘC GỌI NGAY** để bẻ gãy mạch thao túng tâm lý của tội phạm.
4. **Danh Sách Trắng Thân Thiết (Whitelist):**
   * Cho phép thiết lập tối đa 10 số điện thoại của người thân. Mọi hội thoại từ các số này sẽ được miễn trừ quét hoàn toàn để bảo vệ quyền riêng tư tuyệt đối cho gia đình.
5. **Nhật Ký An Toàn Minh Bạch (Security Logs):**
   * Lưu trữ lịch sử, gắn nhãn phân loại trực quan bằng màu sắc (An toàn, Nghi ngờ, Đã chặn) kèm lý do chi tiết để con cái dễ dàng kiểm tra từ xa.

---

## 🛠️ Cấu Trúc Thư Mục Nộp Bài (Directory Structure)

```text
app_submission/
├── README.md                    # File hướng dẫn này
├── project_report.pdf           # Báo cáo chi tiết ý tưởng và phân tích kỹ thuật
├── youtube_link.txt             # Đường dẫn video demo thuyết trình (Max 7 mins)
├── prompts/                     # Nhật ký tương tác và tối ưu Prompt với AI
│   ├── concept_prompts.txt      # Giai đoạn lên ý tưởng giải pháp
│   ├── UI_generation_prompts.txt# Giai đoạn thiết kế giao diện người già
│   ├── code_generation_prompts.txt # Giai đoạn viết logic xử lý JS
│   └── refinement_prompts.txt   # Giai đoạn sửa lỗi và tối ưu hiệu năng
├── web_app/                     # Mã nguồn ứng dụng Web
│   ├── index.html               # Cấu trúc giao diện chính
│   ├── style.css                # Giao diện tối màu (Dark Theme) hỗ trợ thị lực
│   └── app.js                   # Logic xử lý NLP, Whitelist và Trạng thái bảo vệ
└── screenshots/                 # 5 Ảnh chụp minh chứng luồng hoạt động
    ├── landing_page.png
    ├── main_dashboard.png
    ├── feature_screen1.png
    ├── feature_screen2.png
    └── summary_or_output.png
