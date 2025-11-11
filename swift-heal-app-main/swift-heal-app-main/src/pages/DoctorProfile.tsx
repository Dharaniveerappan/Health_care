import { useNavigate, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Star, MapPin, Award, GraduationCap, Clock, Video } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const DoctorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // Mock data - in real app, fetch based on id
  const doctor = {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    rating: 4.9,
    reviews: 127,
    experience: "15 years",
    location: "New York, NY",
    available: true,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop",
    about: "Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in treating heart conditions. She specializes in preventive cardiology and has helped hundreds of patients improve their cardiovascular health.",
    education: ["MD - Harvard Medical School", "Residency - Johns Hopkins Hospital", "Fellowship - Mayo Clinic"],
    languages: ["English", "Spanish"],
    consultationFee: 150,
    availableSlots: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"],
  };

  const handleBookAppointment = (slot: string) => {
    toast.success(`Appointment booked for ${selectedDate?.toLocaleDateString()} at ${slot}`);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Doctor Header */}
          <Card className="p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full rounded-xl shadow-lg"
                />
                {doctor.available && (
                  <Badge className="w-full justify-center mt-4 py-2 bg-secondary">
                    Available for Consultation
                  </Badge>
                )}
              </div>

              <div className="md:col-span-2 space-y-6">
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">{doctor.name}</h1>
                  <p className="text-2xl text-primary font-medium mb-4">{doctor.specialty}</p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 fill-accent text-accent" />
                      <span className="font-semibold">{doctor.rating}</span>
                      <span className="text-muted-foreground">({doctor.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Award className="h-5 w-5" />
                      <span>{doctor.experience} experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-5 w-5" />
                      <span>{doctor.location}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">About</h3>
                  <p className="text-muted-foreground leading-relaxed">{doctor.about}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    Education & Training
                  </h3>
                  <ul className="space-y-2">
                    {doctor.education.map((edu, index) => (
                      <li key={index} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Languages</h3>
                  <div className="flex gap-2">
                    {doctor.languages.map((lang) => (
                      <Badge key={lang} variant="outline">{lang}</Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Consultation Fee</p>
                      <p className="text-3xl font-bold text-foreground">${doctor.consultationFee}</p>
                    </div>
                    <Button size="lg" variant="secondary">
                      <Video className="mr-2 h-5 w-5" />
                      Start Video Call
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Booking Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Select Date</h2>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-lg border shadow-sm"
                disabled={(date) => date < new Date()}
              />
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Clock className="h-6 w-6 text-primary" />
                Available Time Slots
              </h2>
              <p className="text-muted-foreground mb-6">
                {selectedDate?.toLocaleDateString() || "Select a date"}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {doctor.availableSlots.map((slot) => (
                  <Button
                    key={slot}
                    variant="outline"
                    className="h-auto py-3"
                    onClick={() => handleBookAppointment(slot)}
                  >
                    {slot}
                  </Button>
                ))}
              </div>
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Note:</strong> Appointment confirmations will be sent to your email.
                  Please arrive 5 minutes early for your consultation.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
