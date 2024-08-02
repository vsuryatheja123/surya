import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Header Component
const Header = () => {
  return (
    <div style={{ backgroundColor: 'red', padding: '20px', color: 'white' }}>
      <h1>Welcome to KL University</h1>
      <h3>ERP Works Here</h3>
      <h6>Copyright Reserved to Y23</h6>
    </div>
  );
};

// Options Component
const Options = () => {
  return (
    <div style={{ backgroundColor: 'red', display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Link to="/student" style={{ textDecoration: 'none', color: 'white' }}>
        <button style={{ padding: '10px 20px', margin: '10px', fontSize: '16px' }}>Student</button>
      </Link>
      <Link to="/faculty" style={{ textDecoration: 'none', color: 'white' }}>
        <button style={{ padding: '10px 20px', margin: '10px', fontSize: '16px' }}>Faculty</button>
      </Link>
      <Link to="/timetable" style={{ textDecoration: 'none', color: 'white' }}>
        <button style={{ padding: '10px 20px', margin: '10px', fontSize: '16px' }}>Timetable</button>
      </Link>
      <button style={{ padding: '10px 20px', margin: '10px', fontSize: '16px' }}>Course</button>
    </div>
  );
};

// StudentDetails Component (Reusable)
const StudentDetails = ({ student }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>{student.name}</h2>
      <p>Year: {student.year}</p>
      <p>ID: {student.id}</p>
      <p>Branch: {student.branch}</p>
      {/* Add more details here */}
    </div>
  );
};

// FacultyDetails Component (Reusable)
const FacultyDetails = ({ faculty }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>{faculty.name}</h2>
      <p>ID: {faculty.id}</p>
      <p>Course: {faculty.course}</p>
      {/* Add more faculty details here */}
    </div>
  );
};

// Timetable Component
const Timetable = () => {
  const timetableData = [
    { day: 'Monday', time: '9:00 AM - 10:00 AM', course: 'Math', cluster: 'A', room: '101' },
    { day: 'Monday', time: '10:00 AM - 11:00 AM', course: 'Physics', cluster: 'B', room: '202' },
    // Add more timetable entries
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Course</th>
            <th>Cluster</th>
            <th>Room</th>
          </tr>
        </thead>
        <tbody>
          {timetableData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.day}</td>
              <td>{entry.time}</td>
              <td>{entry.course}</td>
              <td>{entry.cluster}</td>
              <td>{entry.room}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// StudentPage Component
const StudentPage = () => {
  const students = [
    { name: 'K.Sai', year: '1st', id: '2300070321', branch: 'CSE' },
    { name: 'L.Hari', year: '1st', id: '2300070323', branch: 'AI&DS' },
    { name: 'S.Ramu', year: '1st', id: '2300070322', branch: 'CS&IT' },
    { name: 'H.Siva', year: '1st', id: '2300070328', branch: 'CSE' },
    { name: 'M.Rahul', year: '1st', id: '2300070326', branch: 'ECE' },
    // Add more students here
    { name: 'N.Priya', year: '2nd', id: '2300070329', branch: 'IT' },
    { name: 'O.Ravi', year: '2nd', id: '2300070330', branch: 'CSE' },
    // ... and so on
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {students.map((student) => (
        <StudentDetails key={student.id} student={student} />
      ))}
    </div>
  );
};

// FacultyPage Component
const FacultyPage = () => {
  const faculties = [
    { name: 'Prof.Rao', id: 'F123', course: 'CSE' },
    { name: 'Prof.Ramu', id: 'F456', course: 'IT' },
    { name: 'Prof.Chetan', id: 'F789', course: 'ECE' },
    // Add more faculty members here
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {faculties.map((faculty) => (
        <FacultyDetails key={faculty.id} faculty={faculty} />
      ))}
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Options />
        <div style={{ flex: 1, backgroundColor: 'lightgrey' }}>
          <Header />
          <Routes>
            <Route path="/student" element={<StudentPage />} />
            <Route path="/faculty" element={<FacultyPage />} />
            <Route path="/timetable" element={<Timetable />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
