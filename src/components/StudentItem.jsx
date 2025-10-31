import React from 'react';

// M3: 'onDelete' prop'unu al
function StudentItem({ student, onDelete }) {
  // M3: Geçme durumunu hesapla (60 ve üzeri) [cite: 91]
  const passed = student.grade >= 60;

  // M3: Koşullu sınıf adlarını belirle [cite: 92]
  const statusClass = passed ? 'student-pass' : 'student-fail';

  return (
    // 'student-item' ile birlikte koşullu sınıfı ekle [cite: 92, 93]
    <li className={`student-item ${statusClass}`}>
      {/* İsim ve Not */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span className="student-name">{student.name}</span>
        <span className="student-grade">{student.grade}</span>

        {/* M3: Koşullu 'Pass'/'Fail' metni [cite: 94] */}
        <span className="student-status">{passed ? 'Pass' : 'Fail'}</span>
      </div>

      {/* M3: Silme butonu [cite: 99] */}
      <button
        className="delete-btn"
        onClick={() => onDelete(student.id)} // M3: onDelete prop'unu ID ile çağır [cite: 100]
      >
        Delete
      </button>
    </li>
  );
}

export default StudentItem;