import React from 'react';
import StudentItem from './StudentItem';

function StudentList({ students, onDeleteStudent, searchQuery }) {
  // M3: 'Empty state' (Boş liste) kontrolü
  if (students.length === 0 && !searchQuery) {
    return (
      <p className="no-data">No students yet - use the form above.</p>
    );
  }

  // M4: 'No search results' (Arama sonucu yok) kontrolü
  if (students.length === 0 && searchQuery) {
    return (
      <p className="no-data">
        No students match "<em>{searchQuery}</em>"
        [cite_start]{}
      </p>
    );
  }

  return (
    <ul className="student-list">
      {students.map((student) => (
        <StudentItem
          key={student.id} // M5: Key prop'u zorunlu
          student={student}
          onDelete={onDeleteStudent} // M3: prop'u aşağıya (StudentItem'a) geçir
        />
      ))}
    </ul>
  );
}

export default StudentList;