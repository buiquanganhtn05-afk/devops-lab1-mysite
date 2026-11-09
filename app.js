// DỮ LIỆU MÔN HỌC ICTU THEO HÌNH ẢNH CỦA BẠN
const coursesData = [
  {
    id: 'course-asp',
    code: 'K22.DHCQ.K1.D1.2627.KTPM K22B',
    name: 'Công nghệ ASP.NET',
    lecturer: 'Nguyễn Thu Phương',
    term: '2026_2027_1',
    progress: 75,
    materials: [
      { name: 'Slide Bài giảng Chương 1 - Tổng quan ASP.NET Core', topic: 'Tuần 1-2', size: '3.5 MB' },
      { name: 'Hướng dẫn Thực hành Entity Framework Core', topic: 'Tuần 3-4', size: '2.1 MB' }
    ],
    assignments: [
      { title: 'Bài tập 1: Xây dựng CRUD sản phẩm với ASP.NET MVC', deadline: '2026-11-20', status: 'Đã nộp đúng hạn' }
    ]
  },
  {
    id: 'course-mobile',
    code: 'K22.DHCQ.K1.D1.2627.KTPM K22B',
    name: 'Lập trình cho thiết bị di động',
    lecturer: 'Đoàn Ngọc Phương',
    term: '2026_2027_1',
    progress: 100,
    materials: [
      { name: 'Slide Flutter & React Native Overview', topic: 'Tuần 1', size: '5.2 MB' }
    ],
    assignments: [
      { title: 'Bài tập 1: Thiết kế giao diện App Mobile ICTU LMS', deadline: '2026-11-15', status: 'Đã nộp đúng hạn' }
    ]
  },
  {
    id: 'course-sa',
    code: 'K22.DHCQ.K1.D1.2627.KTPM K22B',
    name: 'Kiến trúc và thiết kế phần mềm',
    lecturer: 'Nguyễn Thị Dung (CNPM)',
    term: '2026_2027_1',
    progress: 100,
    materials: [
      { name: 'Báo cáo Skill Test 1 - SmartLMS Requirements Specification.pdf', topic: 'Tuần 1-2', size: '2.4 MB' },
      { name: 'Slide Kiến trúc Phân lớp & QAS Scenarios', topic: 'Tuần 3-5', size: '4.1 MB' }
    ],
    assignments: [
      { title: 'Bài tập 1: Đặc tả Yêu cầu Kiến trúc SmartLMS (Skill Test 1)', deadline: '2026-11-10', status: 'Chưa nộp (Đang mở)' }
    ]
  },
  {
    id: 'course-se',
    code: 'K22.DHCQ.K1.D1.2627.KTPM K22B',
    name: 'Phương pháp luận lập trình',
    lecturer: 'Nguyễn Lan Oanh',
    term: '2026_2027_1',
    progress: 100,
    materials: [
      { name: 'Tài liệu Top-down, Stepwise Refinement & Modularization', topic: 'Tuần 1-3', size: '1.8 MB' }
    ],
    assignments: [
      { title: 'Bài tập 1: Phân rã mô-đun và Làm mịn dần hệ thống LMS', deadline: '2026-11-25', status: 'Chưa nộp' }
    ]
  },
  {
    id: 'course-maint',
    code: 'K22.DHCQ.K1.D1.2627.KTPM K22B',
    name: 'Vận hành và bảo trì phần mềm',
    lecturer: 'Phạm Thị Thương',
    term: '2026_2027_1',
    progress: 100,
    materials: [
      { name: 'Quy trình DevOps & Monitoring Log trong Phần mềm', topic: 'Tuần 1-2', size: '3.0 MB' }
    ],
    assignments: [
      { title: 'Bài tập 1: Lập kế hoạch sao lưu và khôi phục RTO/RPO', deadline: '2026-11-30', status: 'Chưa nộp' }
    ]
  }
];

// DỮ LIỆU ĐIỂM SỐ
const gradesData = [
  { course: 'Công nghệ ASP.NET', lecturer: 'Nguyễn Thu Phương', cc: 10, bt: 8.5, thi: 8.5, sum: 8.6, letter: 'A' },
  { course: 'Lập trình cho thiết bị di động', lecturer: 'Đoàn Ngọc Phương', cc: 10, bt: 9.0, thi: 9.0, sum: 9.1, letter: 'A+' },
  { course: 'Kiến trúc và thiết kế phần mềm', lecturer: 'Nguyễn Thị Dung (CNPM)', cc: 10, bt: 9.5, thi: 8.5, sum: 8.95, letter: 'A' },
  { course: 'Phương pháp luận lập trình', lecturer: 'Nguyễn Lan Oanh', cc: 10, bt: 8.0, thi: 8.5, sum: 8.5, letter: 'A' },
  { course: 'Vận hành và bảo trì phần mềm', lecturer: 'Phạm Thị Thương', cc: 10, bt: 9.0, thi: 9.0, sum: 9.1, letter: 'A+' }
];

// DỮ LIỆU DIỄN ĐÀN
let forumTopics = [
  {
    id: 1,
    title: 'Thắc mắc về chỉ tiêu RTO < 30 phút và RPO < 5 phút trong Skill Test 1',
    author: 'Nguyễn Văn A',
    time: '10 phút trước',
    replies: [
      { author: 'Nguyễn Thị Dung (CNPM)', content: 'Chào em, RTO đo thời gian khôi phục dịch vụ sau khi sập, còn RPO đo lượng dữ liệu tối đa chấp nhận mất khi backup log DB.' }
    ]
  }
];

// DỮ LIỆU THÔNG BÁO
let notifications = [
  { id: 1, text: 'Giảng viên Nguyễn Thị Dung đã tải lên tài liệu mới cho môn Kiến trúc phần mềm.', time: '1 giờ trước', read: false },
  { id: 2, text: 'Hạn nộp Bài tập 1: Đặc tả Yêu cầu Kiến trúc SmartLMS sắp hết hạn!', time: '3 giờ trước', read: false },
  { id: 3, text: 'Hệ thống LMS sẽ bảo trì nâng cấp từ 01:00 đến 02:00 ngày mai.', time: '1 ngày trước', read: true }
];

// DỮ LIỆU AUDIT LOG
let auditLogs = [
  { time: '2026-11-09 08:15:22', user: 'GV. Nguyễn Thị Dung', action: 'Cập nhật điểm bài tập môn KT&TKPM', module: 'Quản lý Điểm', ip: '172.16.10.45' },
  { time: '2026-11-09 07:30:10', user: 'SV2026001 - Nguyễn Văn A', action: 'Đăng nhập hệ thống thành công', module: 'Xác thực', ip: '118.70.12.90' }
];

// KHỞI TẠO KHI TRANG TẢI XONG
document.addEventListener('DOMContentLoaded', () => {
  renderCourses();
  renderMaterialSubjectOptions();
  renderMaterials();
  renderAssignments();
  renderGrades();
  renderForum();
  renderNotifications();
  renderAuditLogs();
});

// THAY ĐỔI TAB NAV
function showTab(tabId) {
  document.querySelectorAll('.tab-pane').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  
  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}

// SWITCH ROLE
function switchRole(role) {
  const badge = document.getElementById('userBadge');
  const profileName = document.getElementById('profileName');
  const profileRoleText = document.getElementById('profileRoleText');
  const profileCode = document.getElementById('profileCode');

  if (role === 'student') {
    badge.innerText = 'SV';
    profileName.innerText = 'Nguyễn Văn A';
    profileRoleText.innerText = 'Sinh viên • Lớp K22B - KTPM';
    profileCode.innerText = 'SV2026001';
  } else if (role === 'lecturer') {
    badge.innerText = 'GV';
    profileName.innerText = 'Nguyễn Thị Dung (CNPM)';
    profileRoleText.innerText = 'Giảng viên Khoa CNTT';
    profileCode.innerText = 'GV00124';
  } else {
    badge.innerText = 'AD';
    profileName.innerText = 'Quản trị viên CNTT';
    profileRoleText.innerText = 'Phòng Quản trị Mạng & Hạ tầng';
    profileCode.innerText = 'ADMIN01';
  }
}

// RENDER COURSES (TAB 1)
function renderCourses() {
  const container = document.getElementById('courseListContainer');
  container.innerHTML = coursesData.map(c => `
    <div class="course-item">
      <div class="course-info">
        <h4>${c.name} <small style="color:var(--text-muted)">(${c.code})</small></h4>
        <div class="course-meta">Học kỳ: ${c.term} &nbsp;•&nbsp; Giảng viên: <strong>${c.lecturer}</strong></div>
      </div>
      <div class="progress-circle">${c.progress}%</div>
    </div>
  `).join('');
}

// RENDER MATERIALS (TAB 3)
function renderMaterialSubjectOptions() {
  const select = document.getElementById('materialSubjectSelect');
  select.innerHTML = coursesData.map(c => `<option value="${c.id}">${c.name} - GV: ${c.lecturer}</option>`).join('');
}

function renderMaterials() {
  const selectedId = document.getElementById('materialSubjectSelect').value || coursesData[0].id;
  const course = coursesData.find(c => c.id === selectedId) || coursesData[2];
  const tbody = document.getElementById('materialsTableBody');

  tbody.innerHTML = course.materials.map(m => `
    <tr>
      <td>📄 <strong>${m.name}</strong></td>
      <td><span class="badge-warning">${m.topic}</span></td>
      <td>${m.size}</td>
      <td><button class="btn btn-secondary" onclick="alert('Đang tải xuống: ${m.name}')">⬇️ Tải về (FR15)</button></td>
    </tr>
  `).join('');
}

function addMaterial() {
  const title = document.getElementById('matTitle').value;
  const topic = document.getElementById('matTopic').value;
  if (!title) return alert('Vui lòng nhập tên học liệu!');

  const selectedId = document.getElementById('materialSubjectSelect').value;
  const course = coursesData.find(c => c.id === selectedId);
  course.materials.push({ name: title + '.pdf', topic: topic || 'Mới tải lên', size: '1.5 MB' });
  
  renderMaterials();
  document.getElementById('uploadMaterialForm').style.display = 'none';
  alert('Đã tải lên học liệu mới thành công (FR12, FR16)!');
}

// RENDER ASSIGNMENTS (TAB 4)
function renderAssignments() {
  const container = document.getElementById('assignmentList');
  let html = '';
  coursesData.forEach(c => {
    c.assignments.forEach(a => {
      html += `
        <div class="card mb-3">
          <div class="card-header-flex">
            <h4>${a.title}</h4>
            <span class="badge-warning">${c.name}</span>
          </div>
          <p class="course-meta">Hạn nộp: <strong>${a.deadline} 23:59</strong> • Trạng thái: <strong>${a.status}</strong></p>
          <div class="mt-2">
            <input type="file" id="file-${c.id}" class="form-control" style="max-width:300px; display:inline-block;">
            <button class="btn btn-primary" onclick="submitAssignment('${a.title}')">Nộp bài tập (FR19)</button>
          </div>
        </div>
      `;
    });
  });
  container.innerHTML = html;
}

function submitAssignment(title) {
  alert(`Bài tập "${title}" đã được ghi nhận nộp thành công đúng thời điểm system log (FR19, FR20, FR21)!`);
}

// QUIZ SUBMIT (TAB 5)
function submitQuiz(e) {
  e.preventDefault();
  const q1 = document.querySelector('input[name="q1"]:checked')?.value;
  const q2 = document.querySelector('input[name="q2"]:checked')?.value;
  const q3 = document.querySelector('input[name="q3"]:checked')?.value;

  let score = 0;
  if (q1 === 'A') score += 3.33;
  if (q2 === 'B') score += 3.33;
  if (q3 === 'A') score += 3.34;

  const total = Math.round(score);
  document.getElementById('quizResult').style.display = 'block';
  document.getElementById('scoreText').innerText = `${total} / 10 Điểm`;
  document.getElementById('quizFeedback').innerText = total >= 7 ? 'Chúc mừng! Bạn đã nắm chắc lý thuyết kiến trúc và phương pháp luận phần mềm.' : 'Bạn nên ôn lại các kịch bản QAS và chỉ tiêu NFRs.';
}

// RENDER GRADES (TAB 6)
function renderGrades() {
  const tbody = document.getElementById('gradeTableBody');
  tbody.innerHTML = gradesData.map(g => `
    <tr>
      <td><strong>${g.course}</strong></td>
      <td>${g.lecturer}</td>
      <td>${g.cc}</td>
      <td>${g.bt}</td>
      <td>${g.thi}</td>
      <td><strong style="color:var(--primary)">${g.sum}</strong></td>
      <td><span class="badge-success">${g.letter}</span></td>
    </tr>
  `).join('');
}

// RENDER FORUM (TAB 7)
function renderForum() {
  const container = document.getElementById('forumTopicsContainer');
  container.innerHTML = forumTopics.map(t => `
    <div class="card mb-3">
      <h4>${t.title}</h4>
      <p class="course-meta">Đăng bởi: <strong>${t.author}</strong> • ${t.time}</p>
      <div class="mt-2" style="background:#f7fafc; padding:10px; border-radius:5px;">
        ${t.replies.map(r => `<p><strong>${r.author}:</strong> ${r.content}</p>`).join('')}
      </div>
    </div>
  `).join('');
}

function addForumTopic() {
  const title = document.getElementById('forumTitle').value;
  if (!title) return alert('Nhập tiêu đề thảo luận!');
  forumTopics.unshift({
    id: Date.now(),
    title: title,
    author: 'Nguyễn Văn A',
    time: 'Vừa xong',
    replies: []
  });
  renderForum();
  document.getElementById('forumTitle').value = '';
  document.getElementById('forumContent').value = '';
}

// RENDER NOTIFICATIONS (TAB 8)
function renderNotifications() {
  const container = document.getElementById('notifContainer');
  container.innerHTML = notifications.map(n => `
    <div class="info-row" style="padding:10px 0; border-bottom:1px solid #eee;">
      <div>
        <p style="${!n.read ? 'font-weight:bold;' : ''}">${n.text}</p>
        <small class="course-meta">${n.time}</small>
      </div>
      ${!n.read ? '<span class="badge-warning">Mới</span>' : ''}
    </div>
  `).join('');
}

function markAllNotificationsRead() {
  notifications.forEach(n => n.read = true);
  renderNotifications();
  document.getElementById('notifBadge').innerText = '0';
}

// RENDER AUDIT LOGS (TAB 10)
function renderAuditLogs() {
  const tbody = document.getElementById('auditLogBody');
  tbody.innerHTML = auditLogs.map(l => `
    <tr>
      <td><small>${l.time}</small></td>
      <td><strong>${l.user}</strong></td>
      <td>${l.action}</td>
      <td><span class="badge-warning">${l.module}</span></td>
      <td>${l.ip}</td>
    </tr>
  `).join('');
}

// UPDATE PROFILE (TAB 2)
function updateProfile(e) {
  e.preventDefault();
  const newName = document.getElementById('inputName').value;
  document.getElementById('profileName').innerText = newName;
  alert('Đã lưu thông tin hồ sơ cá nhân thành công (FR05)!');
}

// MODAL NFRs CONTROL
function openNfrModal() {
  document.getElementById('nfrModal').style.display = 'flex';
}
function closeNfrModal() {
  document.getElementById('nfrModal').style.display = 'none';
}