import React from 'react';
import { DashboardLayout } from '@/components/Layout/DashboardLayout';
import { Sidebar } from '@/components/common/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Users,
  Briefcase,
  Calendar,
  TrendingUp,
  Plus,
  Eye,
  Clock,
  CheckCircle,
  Building,
  FileText,
  BarChart3
} from 'lucide-react';

const PlacementDashboard = () => {
  const sidebarItems = [
    { title: 'Dashboard', href: '/placement', icon: TrendingUp, description: 'Overview & analytics' },
    { title: 'Job Postings', href: '/placement/jobs', icon: Briefcase, badge: '8', description: 'Manage opportunities' },
    { title: 'Applications', href: '/placement/applications', icon: FileText, badge: '45', description: 'Review applications' },
    { title: 'Students', href: '/placement/students', icon: Users, badge: '120', description: 'Student database' },
    { title: 'Interviews', href: '/placement/interviews', icon: Calendar, badge: '12', description: 'Schedule interviews' },
    { title: 'Companies', href: '/placement/companies', icon: Building, description: 'Company partnerships' },
    { title: 'Reports', href: '/placement/reports', icon: BarChart3, description: 'Analytics & reports' },
  ];

  // Mock data
  const stats = {
    totalStudents: 120,
    activeJobs: 8,
    pendingApplications: 45,
    scheduledInterviews: 12,
    placementRate: 78,
    companiesPartnered: 25,
  };

  const recentJobs = [
    { id: 1, company: 'TechCorp Ltd.', position: 'Software Developer Intern', applications: 15, status: 'Active', postedDate: '2024-01-15', type: 'internship' },
    { id: 2, company: 'DataSystems Inc.', position: 'Data Analyst', applications: 8, status: 'Active', postedDate: '2024-01-12', type: 'placement' },
    { id: 3, company: 'Innovation Labs', position: 'Product Manager', applications: 12, status: 'Review', postedDate: '2024-01-10', type: 'placement' },
  ];

  const pendingReviews = [
    { id: 1, student: 'John Doe', company: 'TechCorp Ltd.', position: 'Software Developer', department: 'CSE', submittedDate: '2024-01-16' },
    { id: 2, student: 'Jane Smith', company: 'DataSystems Inc.', position: 'Data Analyst', department: 'IT', submittedDate: '2024-01-15' },
    { id: 3, student: 'Mike Johnson', company: 'StartupXYZ', position: 'Frontend Developer', department: 'CSE', submittedDate: '2024-01-14' },
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      'Active': { variant: 'default' as const, icon: CheckCircle },
      'Review': { variant: 'secondary' as const, icon: Clock },
      'Closed': { variant: 'destructive' as const, icon: Clock },
    };
    return variants[status as keyof typeof variants] || variants['Review'];
  };

  return (
    <DashboardLayout
      title="Placement Officer Dashboard"
      sidebar={<Sidebar items={sidebarItems} />}
    >
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Placement Management</h2>
              <p className="text-muted-foreground">Manage internships, placements, and student applications</p>
            </div>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Post New Job
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalStudents}</div>
              <p className="text-xs text-muted-foreground">Total registered</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeJobs}</div>
              <p className="text-xs text-muted-foreground">Currently open</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Applications</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.pendingApplications}</div>
              <p className="text-xs text-muted-foreground">Pending review</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Interviews</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.scheduledInterviews}</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Placement Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.placementRate}%</div>
              <Progress value={stats.placementRate} className="h-2 mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Companies</CardTitle>
              <Building className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.companiesPartnered}</div>
              <p className="text-xs text-muted-foreground">Partner companies</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Recent Job Postings */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Job Postings</CardTitle>
              <CardDescription>Latest internship and placement opportunities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentJobs.map((job) => {
                const statusInfo = getStatusBadge(job.status);
                return (
                  <div key={job.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="space-y-1 flex-1">
                      <p className="font-medium">{job.company}</p>
                      <p className="text-sm text-muted-foreground">{job.position}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {job.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {job.applications} applications
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge {...statusInfo}>
                        <statusInfo.icon className="w-3 h-3 mr-1" />
                        {job.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                );
              })}
              <Button variant="outline" className="w-full">
                View All Job Postings
              </Button>
            </CardContent>
          </Card>

          {/* Pending Application Reviews */}
          <Card>
            <CardHeader>
              <CardTitle>Pending Reviews</CardTitle>
              <CardDescription>Applications waiting for your review</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {pendingReviews.map((review) => (
                <div key={review.id} className="flex items-center justify-between p-3 border rounded-lg bg-orange-50 dark:bg-orange-950/20">
                  <div className="space-y-1 flex-1">
                    <p className="font-medium">{review.student}</p>
                    <p className="text-sm text-muted-foreground">{review.company} - {review.position}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{review.department}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {review.submittedDate}
                      </span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    Review
                  </Button>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Pending Reviews
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PlacementDashboard;