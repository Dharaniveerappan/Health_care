import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Star, MapPin, Award } from "lucide-react";

const mockDoctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    rating: 4.9,
    reviews: 127,
    experience: "15 years",
    location: "New York, NY",
    available: true,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Dermatologist",
    rating: 4.8,
    reviews: 98,
    experience: "12 years",
    location: "San Francisco, CA",
    available: true,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    rating: 4.9,
    reviews: 156,
    experience: "10 years",
    location: "Austin, TX",
    available: false,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Dr. James Williams",
    specialty: "General Physician",
    rating: 4.7,
    reviews: 203,
    experience: "20 years",
    location: "Chicago, IL",
    available: true,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Dr. Lisa Anderson",
    specialty: "Psychiatrist",
    rating: 4.9,
    reviews: 89,
    experience: "8 years",
    location: "Boston, MA",
    available: true,
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Dr. David Kim",
    specialty: "Orthopedic Surgeon",
    rating: 4.8,
    reviews: 142,
    experience: "18 years",
    location: "Seattle, WA",
    available: true,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop",
  },
];

const specialties = ["All", "Cardiologist", "Dermatologist", "Pediatrician", "General Physician", "Psychiatrist", "Orthopedic Surgeon"];

const Doctors = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");

  const filteredDoctors = mockDoctors.filter((doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = selectedSpecialty === "All" || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4">Find Your Doctor</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with certified specialists across all medical fields
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by doctor name or specialty..."
                className="pl-12 h-14 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Specialty Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {specialties.map((specialty) => (
              <Button
                key={specialty}
                variant={selectedSpecialty === specialty ? "default" : "outline"}
                onClick={() => setSelectedSpecialty(specialty)}
                className="rounded-full"
              >
                {specialty}
              </Button>
            ))}
          </div>

          {/* Doctor Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor) => (
              <Card key={doctor.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <div className="relative h-48 bg-muted">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                  {doctor.available && (
                    <Badge className="absolute top-3 right-3 bg-secondary">
                      Available Now
                    </Badge>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{doctor.name}</h3>
                  <p className="text-primary font-medium mb-3">{doctor.specialty}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="font-semibold text-foreground">{doctor.rating}</span>
                      <span>({doctor.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Award className="h-4 w-4" />
                      <span>{doctor.experience} experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{doctor.location}</span>
                    </div>
                  </div>

                  <Button
                    className="w-full"
                    onClick={() => navigate(`/doctor/${doctor.id}`)}
                  >
                    View Profile
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No doctors found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
