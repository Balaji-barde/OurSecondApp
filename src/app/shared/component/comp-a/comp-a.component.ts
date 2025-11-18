import { Component, OnInit } from '@angular/core';
import {
  IArtist, IBook,  ICar, IChef, IConcert, ICricketer,
  IDeveloper, IDoctor, IEmployee,  IEntrepreneur,
  IGamer, IInfluencer, Imeeting, IMovie, 
  IPerson, IPhotographer, IPilot, Iplaylist, IProduct,  IRestaurant,
  IShop, Istd, IStudent, ITeacher, ITrainer, ITraveler,
  IUniversityStudent, IYoutuber, 
} from '../../models/person';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss'],
})

export class CompAComponent implements OnInit {
    constructor() {}
  ngOnInit(): void {

}
  // Basic objects (typed with interfaces)
  person: IPerson = {
    fname: "Ravi",
    lname: "Kiran",
    age: 30,
    city: "Pune",
    profession: "Software Engineer",
    company: "TechUnity Corp",
    hobby: "cycling",
    experience: 8,
    favLang: "JavaScript",
    petName: "Bruno",
    petType: "dog",
    married: "Yes",
  };

  student: IStudent = {
    studentName: "Aarav",
    school: "Sunshine Public School",
    grade: 7,
    favSubject: "Science",
    bestFriend: "Riya",
    favSport: "Cricket",
    dream: "Scientist",
    city: "Nagpur",
    teacherName: "Mrs. Sharma",
    marks: 89,
  };

  product: IProduct = {
    brand: "Apple",
    model: "iPhone 15 Pro",
    price: 145000,
    color: "Titanium Blue",
    storage: "256GB",
    camera: "48MP",
    os: "iOS 18",
    owner: "Rohit",
    purchaseYear: 2024,
    warranty: "2 years",
  };

  movie: IMovie = {
    movieName: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010,
    actor: "Leonardo DiCaprio",
    genre: "Sci-Fi",
    rating: 8.8,
    duration: "2h 28m",
    platform: "Netflix",
    favScene: "Hallway fight",
  };

  traveler: ITraveler = {
    traveler: "Sanya",
    country: "Japan",
    city: "Tokyo",
    days: 10,
    favPlace: "Shibuya Crossing",
    localFood: "Sushi",
    stayHotel: "Hotel Sakura",
    travelMode: "Flight",
    spent: "₹1,20,000",
  };

  cricketer: ICricketer = {
    playerName: "Virat Kohli",
    team: "India",
    runs: 122,
    balls: 63,
    opponent: "Pakistan",
    venue: "Melbourne",
    matchType: "T20 World Cup",
    result: "India won by 4 wickets",
    strikeRate: 193.65,
  };

  book: IBook = {
    author: "J.K. Rowling",
    book: "Harry Potter and the Sorcerer’s Stone",
    genre: "Fantasy",
    published: 1997,
    copiesSold: "120 million",
    mainCharacter: "Harry Potter",
    setting: "Hogwarts",
    publisher: "Bloomsbury",
  };

  shop: IShop = {
    shopName: "Gadget Hub",
    owner: "Mehul",
    location: "Mumbai",
    openTime: "10 AM",
    closeTime: "9 PM",
    bestSelling: "Smartwatches",
    foundedYear: 2015,
    employees: 15,
    rating: 4.7,
  };

  trainer: ITrainer = {
    trainer: "Neha",
    gymName: "FitLife Studio",
    experience: 6,
    specialization: "Weight Training",
    location: "Bangalore",
    clients: 120,
    timing: "6 AM - 10 PM",
    rating: 4.9,
  };

  restaurant1: IRestaurant = {
    restaurant: "Spice Villa",
    chef: "Rajesh",
    cuisine: "Indian",
    location: "Hyderabad",
    signatureDish: "Butter Chicken",
    rating: 4.8,
    established: 2010,
    branches: 5,
  };

  concert: IConcert = {
    singer: "Arijit Singh",
    concertName: "Soul Beats Tour",
    location: "Dubai",
    date: "5th June 2025",
    crowd: 25000,
    ticketPrice: 8000,
    duration: "3 hours",
    organizer: "LiveNation",
  };

  car: ICar = {
    carBrand: "Tesla",
    model: "Model Y",
    owner: "Karan",
    range: "455 km",
    price: "₹70 lakh",
    battery: "75 kWh",
    topSpeed: "217 km/h",
    color: "Midnight Blue",
  };

  teacher: ITeacher = {
    teacher: "Mrs. Meena",
    subject: "Mathematics",
    school: "Green Valley School",
    experience: 15,
    favTopic: "Geometry",
    awards: 3,
    city: "Delhi",
  };

  // Simple employee (profile)
  emp: IEmployee = {
    employee: "Suresh",
    designation: "Project Manager",
    department: "IT",
    company: "NextGen Solutions",
    years: 10,
    city: "Pune",
    projects: 25,
    teamSize: 12,
  };

  youtuber: IYoutuber = {
    youtuber: "TechGuru",
    subscribers: "2.3M",
    contentType: "Tech Reviews",
    joinYear: 2017,
    uploads: 560,
    favVideo: "iPhone 15 Review",
    country: "India",
  };

  gamer: IGamer = {
    game: "Valorant",
    player: "Rohan",
    rank: "Diamond",
    playHours: 1200,
    favAgent: "Jett",
    bestWeapon: "Vandal",
    region: "Asia Pacific",
  };

  developer: IDeveloper = {
    developer: "Sneha",
    stack: "MERN",
    company: "Innovate Labs",
    exp: 5,
    favTech: "React",
    projectCount: 18,
    mentor: "Ankit",
    location: "Chennai",
  };

  photographer: IPhotographer = {
    photographer: "Rahul",
    camera: "Canon EOS R5",
    specialization: "Wedding Photography",
    experience: 7,
    location: "Jaipur",
    awards: 4,
    clients: 320,
  };

  chef: IChef = {
    chef: "Aditi",
    show: "MasterChef India",
    season: 9,
    dish: "Truffle Risotto",
    rank: "Runner-up",
    city: "Ahmedabad",
    fans: "1M",
  };

  artist: IArtist = {
    artist: "Ravi",
    artStyle: "Abstract",
    medium: "Oil Paint",
    exhibitions: 12,
    awards: 3,
    city: "Goa",
    favPiece: "The Silent Wave",
  };

  doctor: IDoctor = {
    doctor: "Dr. Meera",
    specialization: "Cardiologist",
    hospital: "City Care Hospital",
    experience: 12,
    city: "Pune",
    patientsPerDay: 30,
    rating: 4.8,
  };

  pilot: IPilot = {
    pilot: "Captain Arjun",
    airline: "Air India",
    experience: 14,
    aircraft: "Boeing 787 Dreamliner",
    routes: "Delhi–London",
    flightHours: 9500,
  };

  influencer: IInfluencer = {
    influencer: "Nisha Vlogs",
    platform: "Instagram",
    followers: "850K",
    niche: "Travel & Lifestyle",
    collaborations: 45,
    country: "India",
  };

  uniStudent: IUniversityStudent = {
    student: "Kabir",
    university: "IIT Bombay",
    course: "Computer Science",
    semester: 5,
    cgpa: 9.2,
    project: "AI Chatbot",
    mentor: "Dr. Patel",
  };

  entrepreneur: IEntrepreneur = {
    entrepreneur: "Ananya",
    startup: "EcoBox",
    idea: "Sustainable Packaging",
    founded: 2021,
    employees: 22,
    funding: "₹3 crore",
    city: "Bangalore",
  };

  // Nested objects typed with their interfaces
  std: Istd = {
    name: 'Aisha Khan',
    grades: {
      subjects: [
        { name: 'Math', marks: 92 },
        { name: 'Science', marks: 88 }
      ],
      overall: 90
    }
  };

  meeting: Imeeting = {
    title: 'Tech Strategy Discussion',
    schedule: {
      date: '2025-12-01',
      time: '4:30 PM',
      location: { city: 'Mumbai', room: 'Conference Hall A' }
    }
  };

  playlist: Iplaylist = {
    name: 'Chill Vibes',
    createdBy: 'Arnav',
    songs: [
      { title: 'Ocean Eyes', artist: 'Billie Eilish' },
      { title: 'Sunflower', artist: 'Post Malone' }
    ]
  }
}