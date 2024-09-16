import React from 'react';
import ProfileCard from '../../components/alumni/ProfileCard';
import JobPostingCard from '../../components/alumni/JobPostingCard';
import EventCard from '../../components/alumni/EventCard';

const AlumniDashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Alumni Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProfileCard name="Neymar jr" bio="Software Engineer at XYZ" image="enter img src" alt="..." />
        <JobPostingCard title="Full-Stack Developer" company="Tech" description="Looking for full-stack developers." />
        <EventCard eventName="Alumni Networking Event" date="2024-09-20" description="Join us for a networking session." />
      </div>
    </div>
  );
};

export default AlumniDashboard;
