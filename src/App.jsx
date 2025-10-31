import { useState } from 'react';
import './styles/lab-styles.css';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentControls from './components/StudentControls';

// Milestone 1:
const initialStudents = [
  { id: 1, name: 'Ali', grade: 85 },
  { id: 2, name: 'Siti', grade: 72 },
  { id: 3, name: 'Rahim', grade: 55 },
];

function App() {
  // Milestone 2:
  const [students, setStudents] = useState(initialStudents);

  // Milestone 4:
  const [filterBy, setFilterBy] = useState('all'); // 'all', 'pass', 'fail'
  const [searchQuery, setSearchQuery] = useState(''); //
  const [sortBy, setSortBy] = useState('high-low'); // 'high-low', 'low-high'


  const handleAddStudent = (newStudent) => {
    const isDuplicate = students.some(
      (student) => student.name.toLowerCase() === newStudent.name.toLowerCase()
    );

    if (isDuplicate) {
      return false;
    }

    setStudents((prevStudents) => [...prevStudents, newStudent]);
    return true;
  };

  // Milestone 3:
  const handleDeleteStudent = (id) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id)
    );
  };

  // Milestone 4:
  const visibleStudents = students
    .filter((student) => {
      const passed = student.grade >= 60; //
      if (filterBy === 'pass') return passed;
      if (filterBy === 'fail') return !passed;
      return true; // 'all' durumu
    })
    .filter((student) => {
      return student.name.toLowerCase().includes(searchQuery.toLowerCase());
    })
    .sort((a, b) => {
      if (sortBy === 'high-low') {
        return b.grade - a.grade;
      }
      return a.grade - b.grade; // 'low-high'
    });

  return (
    <div className="app">
      <h1 className="header">Student Dashboard</h1>

      {/* M2: onAdd prop'unu ve 'students' (validasyon için) geçir */}
      <StudentForm onAddStudent={handleAddStudent} />

      {/* M4: Filtre/Sıralama state'lerini ve setter'larını prop olarak geçir */}
      <StudentControls
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* M3 & M4: Türetilmiş 'visibleStudents' ve 'onDelete' fonksiyonunu geçir */}
      <StudentList
        students={visibleStudents}
        onDeleteStudent={handleDeleteStudent}
        searchQuery={searchQuery}
      />
    </div>
  );
}

export default App;