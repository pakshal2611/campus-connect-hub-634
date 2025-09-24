import React from 'react';
import { DashboardLayout } from '@/components/Layout/DashboardLayout';
import { Sidebar } from '@/components/common/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  User,
  FileText,
  Briefcase,
  Calendar,
  Bell,
  TrendingUp,
  CheckCircle,
  Clock,
  AlertCircle,
  Award
} from 'lucide-react';

const StudentDashboard = () => {
  const sidebarItems = [
    { title: 'Dashboard', href: '/student', icon: TrendingUp, description: 'Overview & stats' },
    { title: 'Profile', href: '/student/profile', icon: User, description: 'Manage your profile' },
    { title: 'Applications', href: '/student/applications', icon: FileText, badge: '5', description: 'Track applications' },
    { title: 'Opportunities', href: '/student/opportunities', icon: Briefcase, badge: '12', description: 'Browse jobs & internships' },
    { title: 'Interviews', href: '/student/interviews', icon: Calendar, badge: '2', description: 'Scheduled interviews' },
    { title: 'Certificates', href: '/student/certificates', icon: Award, description: 'Download certificates' },
    { title: 'Notifications', href: '/student/notifications', icon: Bell, badge: '3', description: 'Recent updates' },
  ];

  // Mock data
  const stats = {
    applicationsSubmitted: 5,
    interviewsScheduled: 2,
    offersReceived: 1,
    profileCompletion: 85,
  };

  const recentApplications = [
    { id: 1, company: 'TechCorp Ltd.', position: 'Software Developer Intern', status: 'Interview Scheduled', appliedDate: '2024-01-15', type: 'internship' },
    { id: 2, company: 'DataSystems Inc.', position: 'Data Analyst', status: 'Under Review', appliedDate: '2024-01-12', type: 'placement' },
    { id: 3, company: 'StartupXYZ', position: 'Frontend Developer', status: 'Offer Received', appliedDate: '2024-01-10', type: 'internship' },
  ];

  const upcomingInterviews = [
    { id: 1, company: 'TechCorp Ltd.', position: 'Software Developer Intern', date: '2024-01-20', time: '10:00 AM', type: 'Technical Round' },
    { id: 2, company: 'Innovation Labs', position: 'Product Manager Intern', date: '2024-01-22', time: '2:00 PM', type: 'HR Round' },
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      'Interview Scheduled': { variant: 'default' as const, icon: Calendar },
      'Under Review': { variant: 'secondary' as const, icon: Clock },
      'Offer Received': { variant: 'default' as const, icon: CheckCircle },
      'Rejected': { variant: 'destructive' as const, icon: AlertCircle },
    };
    return variants[status as keyof typeof variants] || variants['Under Review'];
  };

  return (
    <DashboardLayout
      title="Student Dashboard"
      sidebar={<Sidebar items={sidebarItems} />}
    >
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-2">Welcome back, John!</h2>
          <p className="text-muted-foreground">Track your internship and placement applications</p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Applications</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.applicationsSubmitted}</div>
              <p className="text-xs text-muted-foreground">+2 this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Interviews</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.interviewsScheduled}</div>
              <p className="text-xs text-muted-foreground">Scheduled this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Offers</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.offersReceived}</div>
              <p className="text-xs text-muted-foreground">Congratulations! 🎉</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profile</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{stats.profileCompletion}%</span>
                  <Button variant="outline" size="sm">Complete</Button>
                </div>
                <Progress value={stats.profileCompletion} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Recent Applications */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Applications</CardTitle>
              <CardDescription>Your latest internship and job applications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentApplications.map((app) => {
                const statusInfo = getStatusBadge(app.status);
                return (
                  <div key={app.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="space-y-1">
                      <p className="font-medium">{app.company}</p>
                      <p className="text-sm text-muted-foreground">{app.position}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {app.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          Applied {app.appliedDate}
                        </span>
                      </div>
                    </div>
                    <Badge {...statusInfo}>
                      <statusInfo.icon className="w-3 h-3 mr-1" />
                      {app.status}
                    </Badge>
                  </div>
                );
              })}
              <Button variant="outline" className="w-full">
                View All Applications
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Interviews */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Interviews</CardTitle>
              <CardDescription>Don't miss your scheduled interviews</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingInterviews.map((interview) => (
                <div key={interview.id} className="flex items-center justify-between p-3 border rounded-lg bg-primary/5">
                  <div className="space-y-1">
                    <p className="font-medium">{interview.company}</p>
                    <p className="text-sm text-muted-foreground">{interview.position}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{interview.type}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {interview.date} at {interview.time}
                      </span>
                    </div>
                  </div>
                  <Button size="sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    Join
                  </Button>
                </div>
              ))}
              {upcomingInterviews.length === 0 && (
                <p className="text-center text-muted-foreground py-8">
                  No upcoming interviews
                </p>
              )}
              <Button variant="outline" className="w-full">
                View All Interviews
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;