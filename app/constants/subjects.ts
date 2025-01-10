import { MaterialCommunityIcons } from "@expo/vector-icons";

export interface Subject {
  id: string;
  name: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  color: string;
  topics: Topic[];
}

export interface Topic {
  id: string;
  name: string;
  description: string;
}

export const subjects: Subject[] = [
  {
    id: "math",
    name: "Mathematics",
    icon: "calculator",
    color: "#4287f5", // Blue
    topics: [
      {
        id: "algebra",
        name: "Algebra",
        description: "Learn equations and variables",
      },
      {
        id: "geometry",
        name: "Geometry",
        description: "Explore shapes and measurements",
      },
      {
        id: "fractions",
        name: "Fractions",
        description: "Master fractions and decimals",
      },
    ],
  },
  {
    id: "science",
    name: "Science",
    icon: "microscope",
    color: "#42f554", // Green
    topics: [
      { id: "biology", name: "Biology", description: "Study living organisms" },
      {
        id: "physics",
        name: "Physics",
        description: "Understand forces and energy",
      },
      {
        id: "chemistry",
        name: "Chemistry",
        description: "Explore matter and reactions",
      },
    ],
  },
  {
    id: "history",
    name: "History",
    icon: "book-open-variant",
    color: "#8B4513", // Brown
    topics: [
      {
        id: "world-wars",
        name: "World Wars",
        description: "Learn about major conflicts",
      },
      {
        id: "ancient-civ",
        name: "Ancient Civilizations",
        description: "Discover past cultures",
      },
      {
        id: "local-history",
        name: "Local History",
        description: "Explore your heritage",
      },
    ],
  },
  {
    id: "english",
    name: "English",
    icon: "book-alphabet",
    color: "#e74c3c", // Red
    topics: [
      {
        id: "grammar-beginner",
        name: "Grammar (Beginner)",
        description: "Basic English grammar concepts",
      },
      {
        id: "grammar-intermediate",
        name: "Grammar (Intermediate)",
        description: "Advanced grammar structures",
      },
      {
        id: "grammar-advanced",
        name: "Grammar (Advanced)",
        description: "Complex grammar and usage",
      },
    ],
  },
];
