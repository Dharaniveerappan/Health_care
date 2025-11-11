import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Calendar, Video, Heart, Shield, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-doctor.jpg";
import dashboardIllustration from "@/assets/dashboard-illustration.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Healthcare at Your
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Fingertips</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Connect with certified doctors instantly. Get expert medical advice, book appointments, 
                and manage your health—all from the comfort of your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" onClick={() => navigate("/doctors")} className="shadow-xl">
                  Find a Doctor
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate("/auth")}>
                  Get Started Free
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Patients Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">1,200+</div>
                  <div className="text-sm text-muted-foreground">Certified Doctors</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Patient Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
              <img
                src={heroImage}
                alt="Professional healthcare provider"
                className="relative rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose HealthConnect?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience modern healthcare with our comprehensive telemedicine platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Video className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Instant Consultations</h3>
              <p className="text-muted-foreground leading-relaxed">
                Connect with doctors via video or chat within minutes. No waiting rooms, no delays.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <div className="bg-secondary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Calendar className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Easy Scheduling</h3>
              <p className="text-muted-foreground leading-relaxed">
                Book appointments at your convenience. View availability and choose times that work for you.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Health Tracking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Monitor your health journey with comprehensive records and personalized insights.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Secure & Private</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your data is encrypted and protected with industry-leading security standards.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <div className="bg-secondary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Clock className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">24/7 Availability</h3>
              <p className="text-muted-foreground leading-relaxed">
                Access healthcare whenever you need it. Our doctors are available around the clock.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Expert Network</h3>
              <p className="text-muted-foreground leading-relaxed">
                Connect with specialists across all medical fields, vetted and certified.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started with healthcare that adapts to your lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-6 shadow-lg">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Create Your Account</h3>
              <p className="text-muted-foreground">
                Sign up in seconds and complete your health profile
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-6 shadow-lg">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Choose Your Doctor</h3>
              <p className="text-muted-foreground">
                Browse specialists and book appointments instantly
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-6 shadow-lg">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Start Your Consultation</h3>
              <p className="text-muted-foreground">
                Connect via video or chat and get expert medical advice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={dashboardIllustration}
                alt="Health dashboard interface"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                Your Health Dashboard
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Track appointments, view health records, monitor vital signs, and manage prescriptions—all in one place.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-full mt-1">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Health Metrics</div>
                    <div className="text-sm text-muted-foreground">Monitor vital signs and health trends</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-secondary/10 p-1 rounded-full mt-1">
                    <Calendar className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Appointment History</div>
                    <div className="text-sm text-muted-foreground">Access all past consultations and reports</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-accent/10 p-1 rounded-full mt-1">
                    <Shield className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Secure Records</div>
                    <div className="text-sm text-muted-foreground">All medical records encrypted and private</div>
                  </div>
                </li>
              </ul>
              <Button size="lg" onClick={() => navigate("/dashboard")}>
                View Dashboard
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-hero rounded-3xl p-12 md:p-16 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Healthcare?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join thousands of patients who have already discovered the convenience of telemedicine
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" onClick={() => navigate("/auth")} className="shadow-xl">
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/doctors")} className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Explore Doctors
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <Heart className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">HealthConnect</span>
          </div>
          <p className="text-sm">© 2024 HealthConnect. All rights reserved.</p>
          <p className="text-sm mt-2">Professional healthcare at your fingertips.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
