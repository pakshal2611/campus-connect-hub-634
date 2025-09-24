import React from 'react';
import { DashboardLayout } from '@/components/Layout/DashboardLayout';
import { Sidebar } from '@/components/common/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Users,
  Building,
  Settings,
  BarChart3,
  Shield,
  FileText,
  Calendar,
  TrendingUp,
  UserCheck,
  Briefcase,
  Award,
  AlertTriangle
} from 'lucide-react';

const AdminDashboard = () => {
  const sidebarItems = [
    { title: 'Dashboard', href: '/admin', icon: BarChart3, description: 'System overview' },
    { title: 'User Management', href: '/admin/users', icon: Users, badge: '245', description: 'Manage all users' },
    { title: 'Companies', href: '/admin/companies', icon: Building, badge: '25', description: 'Partner companies' },
    { title: 'System Settings', href: '/admin/settings', icon: Settings, description: 'Configure system' },
    { title: 'Reports', href: '/admin/reports', icon: FileText, description: 'Generate reports' },
    { title: 'Analytics', href: '/admin/analytics', icon: TrendingUp, description: 'Usage analytics' },
    { title: 'Security', href: '/admin/security', icon: Shield, description: 'Security settings' },
  ];

  // Mock data
  const systemStats = {
    totalUsers: 245,
    activeStudents: 120,
    placementOfficers: 5,
    totalCompanies: 25,
    activeJobs: 15,
    totalApplications: 89,
    placementRate: 76,
    systemUptime: 99.8,
  };

  const recentActivities = [
    { id: 1, action: 'New user registered', user: 'John Doe (Student)', time: '2 hours ago', type: 'user' },
    { id: 2, action: 'Job posting created', user: 'TechCorp Ltd.', time: '4 hours ago', type: 'job' },
    { id: 3, action: 'Application submitted', user: 'Jane Smith', time: '6 hours ago', type: 'application' },
    { id: 4, action: 'Interview scheduled', user: 'Mike Johnson', time: '8 hours ago', type: 'interview' },
    { id: 5, action: 'Certificate generated', user: 'Sarah Wilson', time: '1 day ago', type: 'certificate' },
  ];

  const systemAlerts = [
    { id: 1, message: 'High server load detected', type: 'warning', time: '30 min ago' },
    { id: 2, message: 'Weekly backup completed successfully', type: 'success', time: '2 hours ago' },
    { id: 3, message: 'Certificate renewal due in 30 days', type: 'info', time: '1 day ago' },
  ];

  const departmentStats = [
    { department: 'Computer Science', students: 45, placed: 38, rate: 84 },
    { department: 'Information Technology', students: 35, placed: 28, rate: 80 },
    { department: 'Electronics & Comm.', students: 25, placed: 18, rate: 72 },
    { department: 'Mechanical Engineering', students: 15, placed: 10, rate: 67 },
  ];

  const getActivityIcon = (type: string) => {
    const icons = {
      user: Users,
      job: Briefcase,
      application: FileText,
      interview: Calendar,
      certificate: Award,
    };
    return icons[type as keyof typeof icons] || Users;
  };

  const getAlertBadge = (type: string) => {
    const variants = {
      warning: { variant: 'destructive' as const, icon: AlertTriangle },
      success: { variant: 'default' as const, icon: UserCheck },
      info: { variant: 'secondary' as const, icon: FileText },
    };
    return variants[type as keyof typeof variants] || variants.info;
  };

  return (
    <DashboardLayout
      title="Admin Dashboard"
      sidebar={<Sidebar items={sidebarItems} />}
    >
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">System Administration</h2>
              <p className="text-muted-foreground">Monitor and manage the campus placement portal</p>
            </div>
            <Badge variant="default" className="gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              System Healthy
            </Badge>
          </div>
        </div>

        {/* System Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStats.totalUsers}</div>
              <p className="text-xs text-muted-foreground">
                {systemStats.activeStudents} students, {systemStats.placementOfficers} officers
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Companies</CardTitle>
              <Building className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStats.totalCompanies}</div>
              <p className="text-xs text-muted-foreground">{systemStats.activeJobs} active job postings</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Applications</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStats.totalApplications}</div>
              <p className="text-xs text-muted-foreground">Total applications submitted</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Placement Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStats.placementRate}%</div>
              <Progress value={systemStats.placementRate} className="h-2 mt-2" />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Recent Activities */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Latest system activities and user actions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivities.map((activity) => {
                const Icon = getActivityIcon(activity.type);
                return (
                  <div key={activity.id} className="flex items-center gap-3 p-3 border rounded-lg">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.user}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                );
              })}
              <Button variant="outline" className="w-full">
                View All Activities
              </Button>
            </CardContent>
          </Card>

          {/* System Alerts */}
          <Card>
            <CardHeader>
              <CardTitle>System Alerts</CardTitle>
              <CardDescription>Important system notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {systemAlerts.map((alert) => {
                const alertInfo = getAlertBadge(alert.type);
                return (
                  <div key={alert.id} className="p-3 border rounded-lg">
                    <div className="flex items-start gap-2 mb-2">
                      <Badge {...alertInfo} className="text-xs">
                        <alertInfo.icon className="w-3 h-3 mr-1" />
                        {alert.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground ml-auto">{alert.time}</span>
                    </div>
                    <p className="text-sm">{alert.message}</p>
                  </div>
                );
              })}
              <Button variant="outline" className="w-full">
                View All Alerts
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Department Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Department-wise Placement Statistics</CardTitle>
            <CardDescription>Placement performance across different departments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {departmentStats.map((dept) => (
                <div key={dept.department} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <p className="font-medium">{dept.department}</p>
                    <p className="text-sm text-muted-foreground">
                      {dept.placed} placed out of {dept.students} students
                    </p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="text-2xl font-bold">{dept.rate}%</p>
                    <Progress value={dept.rate} className="w-20 h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;