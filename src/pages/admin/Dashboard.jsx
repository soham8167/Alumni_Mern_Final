import React from 'react';
import AnalyticsChart from '../../components/admin/AnalyticsChart';
import UserManagementTable from '../../components/admin/UserManagementTable';

const AdminDashboard = () => {
  const userData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    values: [50, 75, 100, 125, 150],
  };

  const users = [
    { name: 'John Doe', email: 'john@example.com', role: 'Alumni' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'Student' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>
      <AnalyticsChart data={userData} />
      <div className="mt-6">
        <UserManagementTable users={users} />
      </div>
    </div>
  );
};

export default AdminDashboard;
