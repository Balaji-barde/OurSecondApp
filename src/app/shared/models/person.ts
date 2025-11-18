//  Task 1 — Person
export interface IPerson {
  fname: string;
  lname: string;
  age: number;
  city: string;
  profession: string;
  company: string;
  hobby: string;
  experience: number;
  favLang: string;
  petName: string;
  petType: string;
  married: string;
}

//  Task 2 — Student
export interface IStudent {
  studentName: string;
  school: string;
  grade: number;
  favSubject: string;
  bestFriend: string;
  favSport: string;
  dream: string;
  city: string;
  teacherName: string;
  marks: number;
}

//  Task 3 — Product / Phone
export interface IProduct {
  brand: string;
  model: string;
  price: number;
  color: string;
  storage: string;
  camera: string;
  os: string;
  owner: string;
  purchaseYear: number;
  warranty: string;
}

//  Task 4 — Movie
export interface IMovie {
  movieName: string;
  director: string;
  releaseYear: number;
  actor: string;
  genre: string;
  rating: number;
  duration: string;
  platform: string;
  favScene: string;
}

//  Task 5 — Traveler
export interface ITraveler {
  traveler: string;
  country: string;
  city: string;
  days: number;
  favPlace: string;
  localFood: string;
  stayHotel: string;
  travelMode: string;
  spent: string;
}

//  Task 6 — Cricketer
export interface ICricketer {
  playerName: string;
  team: string;
  runs: number;
  balls: number;
  opponent: string;
  venue: string;
  matchType: string;
  result: string;
  strikeRate: number;
}

//  Task 7 — Book
export interface IBook {
  author: string;
  book: string;
  genre: string;
  published: number;
  copiesSold: string;
  mainCharacter: string;
  setting: string;
  publisher: string;
}

//  Task 8 — Shop
export interface IShop {
  shopName: string;
  owner: string;
  location: string;
  openTime: string;
  closeTime: string;
  bestSelling: string;
  foundedYear: number;
  employees: number;
  rating: number;
}

//  Task 9 — Trainer
export interface ITrainer {
  trainer: string;
  gymName: string;
  experience: number;
  specialization: string;
  location: string;
  clients: number;
  timing: string;
  rating: number;
}

//  Task 10 — Restaurant
export interface IRestaurant {
  restaurant: string;
  chef: string;
  cuisine: string;
  location: string;
  signatureDish: string;
  rating: number;
  established: number;
  branches: number;
}

//  Task 11 — Singer / Concert
export interface IConcert {
  singer: string;
  concertName: string;
  location: string;
  date: string;
  crowd: number;
  ticketPrice: number;
  duration: string;
  organizer: string;
}

//  Task 12 — Car
export interface ICar {
  carBrand: string;
  model: string;
  owner: string;
  range: string;
  price: string;
  battery: string;
  topSpeed: string;
  color: string;
}

//  Task 13 — Teacher
export interface ITeacher {
  teacher: string;
  subject: string;
  school: string;
  experience: number;
  favTopic: string;
  awards: number;
  city: string;
}

//  Task 14 — Employee / Manager
export interface IEmployee {
  employee: string;
  designation: string;
  department: string;
  company: string;
  years: number;
  city: string;
  projects: number;
  teamSize: number;
}

//  Task 15 — YouTuber
export interface IYoutuber {
  youtuber: string;
  subscribers: string;
  contentType: string;
  joinYear: number;
  uploads: number;
  favVideo: string;
  country: string;
}

//  Task 16 — Gamer
export interface IGamer {
  game: string;
  player: string;
  rank: string;
  playHours: number;
  favAgent: string;
  bestWeapon: string;
  region: string;
}

//  Task 17 — Developer
export interface IDeveloper {
  developer: string;
  stack: string;
  company: string;
  exp: number;
  favTech: string;
  projectCount: number;
  mentor: string;
  location: string;
}

//  Task 18 — Photographer
export interface IPhotographer {
  photographer: string;
  camera: string;
  specialization: string;
  experience: number;
  location: string;
  awards: number;
  clients: number;
}

//  Task 19 — Chef / Contestant
export interface IChef {
  chef: string;
  show: string;
  season: number;
  dish: string;
  rank: string;
  city: string;
  fans: string;
}

//  Task 20 — Artist
export interface IArtist {
  artist: string;
  artStyle: string;
  medium: string;
  exhibitions: number;
  awards: number;
  city: string;
  favPiece: string;
}

//  Task 21 — Doctor
export interface IDoctor {
  doctor: string;
  specialization: string;
  hospital: string;
  experience: number;
  city: string;
  patientsPerDay: number;
  rating: number;
}

//  Task 22 — Pilot
export interface IPilot {
  pilot: string;
  airline: string;
  experience: number;
  aircraft: string;
  routes: string;
  flightHours: number;
}

//  Task 23 — Influencer
export interface IInfluencer {
  influencer: string;
  platform: string;
  followers: string;
  niche: string;
  collaborations: number;
  country: string;
}

//  Task 24 — Student (University)
export interface IUniversityStudent {
  student: string;
  university: string;
  course: string;
  semester: number;
  cgpa: number;
  project: string;
  mentor: string;
}

//  Task 25 — Entrepreneur / Startup
export interface IEntrepreneur {
  entrepreneur: string;
  startup: string;
  idea: string;
  founded: number;
  employees: number;
  funding: string;
  city: string;
}

//task nested obj

//task 1

export interface Istd {
  name: string;
  grades: {
    subjects: {
      name: string;
      marks: number;
    }[];
    overall: number;
  };
}

export interface Imeeting{
   
    title: string;
    schedule: {
        date: string;
        time: string;
        location: {
            city: string;
            room: string;
        };
    };
}

export interface Iplaylist{
      name: string;
    createdBy: string;
    songs: {
        title: string;
        artist: string;
    }[];
}

