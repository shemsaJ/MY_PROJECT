import React from 'react';
import Dashboard from '../components/Dashboard';
import StudentRegistration from '../components/StudentRegistration';
import CourseManagement from '../components/CourseManagement';
import GradeEntry from '../components/GradeEntry';
import PerformanceReport from '../components/PerformanceReport';

const DashboardPage = () => {
  return (
    <div>
      <Dashboard />
      <StudentRegistration />
      <CourseManagement />
      <GradeEntry />
      <PerformanceReport />
    </div>
  );
};

export default DashboardPage;
