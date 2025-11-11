import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Heart, Activity, FileText, Clock, User, Video } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      date: "Dec 28, 2024",
      time: "10:00 AM",
      type: "Video Consultation",
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "Dermatologist",
      date: "Jan 5, 2025",
      time: "2:30 PM",
      type: "Video Consultation",
    },
  ];

  const healthStats = [
    { label: "Heart Rate", value: "72 bpm", icon: Heart, color: "text-accent" },
    { label: "Blood Pressure", value: "120/80", icon: Activity, color: "text-primary" },
    { label: "Weight", value: "165 lbs", icon: User, color: "text-secondary" },
    { label: "Last Checkup", value: "Dec 15, 2024", icon: Calendar, color: "text-muted-foreground" },
  ];

  const recentRecords = [
    { id: 1, title: "Blood Test Results", date: "Dec 15, 2024", doctor: "Dr. Sarah Johnson" },
    { id: 2, title: "Prescription - Heart Medication", date: "Dec 10, 2024", doctor: "Dr. Sarah Johnson" },
    { id: 3, title: "X-Ray Report", date: "Nov 28, 2024", doctor: "Dr. James Williams" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Welcome Back, John!</h1>
            <p className="text-xl text-muted-foreground">Here's your health overview</p>
          </div>

          {/* Health Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {healthStats.map((stat) => (
              <Card key={stat.label} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Upcoming Appointments */}
            <div className="lg:col-span-2">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-primary" />
                    Upcoming Appointments
                  </h2>
                  <Button variant="outline" onClick={() => navigate("/doctors")}>
                    Book New
                  </Button>
                </div>

                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <Card key={appointment.id} className="p-4 border-l-4 border-l-primary hover:shadow-md transition-all">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-foreground mb-1">
                            {appointment.doctor}
                          </h3>
                          <p className="text-sm text-primary mb-2">{appointment.specialty}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{appointment.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{appointment.time}</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary">
                          <Video className="h-3 w-3 mr-1" />
                          {appointment.type}
                        </Badge>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <Button size="sm" className="flex-1">
                          Join Consultation
                        </Button>
                        <Button size="sm" variant="outline">
                          Reschedule
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>

              {/* Health Records */}
              <Card className="p-6 mt-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  Recent Medical Records
                </h2>
                <div className="space-y-3">
                  {recentRecords.map((record) => (
                    <div
                      key={record.id}
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                    >
                      <div>
                        <p className="font-medium text-foreground">{record.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {record.date} • {record.doctor}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <Button className="w-full justify-start" onClick={() => navigate("/doctors")}>
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="mr-2 h-5 w-5" />
                    View All Records
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Activity className="mr-2 h-5 w-5" />
                    Update Health Data
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <User className="mr-2 h-5 w-5" />
                    Edit Profile
                  </Button>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card">
                <h3 className="font-semibold text-foreground mb-2">Health Tips</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Regular checkups are important for maintaining good health. Schedule your annual physical exam.
                </p>
                <Button variant="secondary" size="sm" className="w-full">
                  Learn More
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
