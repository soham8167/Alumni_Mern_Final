import React from 'react';
import UserManagementTable from '../../components/admin/UserManagementTable';

const UserManagement = () => {
  const users = [
    { name: 'Neymar', email: 'neymar@example.com', role: 'Alumni' },
    { name: 'Messi', email: 'messi@example.com', role: 'Student' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">User Management</h2>
      <UserManagementTable users={users} />
    </div>
  );
};

export default UserManagement;
