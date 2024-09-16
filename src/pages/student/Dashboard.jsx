import React from 'react';
import MentorshipCard from '../../components/student/MentorshipCard';
import CareerResourceCard from '../../components/student/CareerResourceCard';

const StudentDashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Student Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <MentorshipCard
          mentor="Jane Smith"
          expertise="Full-Stack Development"
          description="Join mentorship sessions to grow your skills."
        />
        <CareerResourceCard
          resource="Resume Building Workshop"
          description="Improve your resume and land your dream job."
        />
      </div>
    </div>
  );
};

export default StudentDashboard;
