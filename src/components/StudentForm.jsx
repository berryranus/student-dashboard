import { useState } from 'react';

// M2: 'onAddStudent' prop'unu al [cite: 83]
function StudentForm({ onAddStudent }) {
  // M2: Form için kontrollü state'ler 
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [error, setError] = useState(null); // M2: Validasyon hata state'i [cite: 86]

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); // Önceki hatayı temizle

    // M2 GÖREVİ: Validasyon 1: İsim boş olamaz [cite: 81]
    if (name.trim() === '') {
      setError('İsim alanı boş bırakılamaz.');
      return;
    }

    // M2 GÖREVİ: Validasyon 2: Not 0-100 arası olmalı [cite: 81]
    const gradeNum = Number(grade);
    if (isNaN(gradeNum) || gradeNum < 0 || gradeNum > 100) {
      setError('Not 0 ile 100 arasında bir sayı olmalıdır.');
      setGrade(''); // Hatalı girişi temizle
      return;
    }

    // M2 GÖREVİ: Validasyon 3: App.jsx'teki onAddStudent'ı çağır [cite: 83]
    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      grade: gradeNum,
    };
    
    const success = onAddStudent(newStudent);

    if (success) {
      // M2 GÖREVİ: Başarılı eklemeden sonra input'ları temizle [cite: 84]
      setName('');
      setGrade('');
    } else {
      // M2 GÖREVİ: App.jsx'ten 'false' dönerse (duplicate name) hatayı ayarla [cite: 86]
      setError(`'${name}' isminde bir öğrenci zaten mevcut.`);
    }
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      {/* M2: Kontrollü bileşenler (value ve onChange ekli) [cite: 79, 124] */}
      <input
        type="text"
        placeholder="Öğrenci Adı"
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Not (0-100)"
        className="input input-grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      />
      <button type="submit" className="btn">
        Öğrenci Ekle
      </button>

      {/* M2: Koşullu hata mesajı [cite: 86] */}
      {error && <p className="form-error">{error}</p>}
    </form>
  );
}

export default StudentForm;