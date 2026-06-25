/** Mock data for frontend previews — replace with API later */

export const mockUser = {
  username: "nightowl_34",
  bio: "Guitar, late-night walks, hostel lawn jams.",
  hobbies: ["Music", "Football", "Photography"],
};

export const mockEvents = [
  {
    id: "1",
    title: "Photography society exhibition",
    society: "Photography Society",
    date: "Fri 28",
    venue: "NAB Gallery",
    goingCount: 24,
    description:
      "Annual showcase of student work. Open to all batches. RSVP to get event chat access.",
    attendees: [
      { username: "lens_giki" },
      { username: "snap_topi" },
      { username: "frame_34" },
    ],
  },
  {
    id: "2",
    title: "Robotics hack night",
    society: "Robotics Society",
    date: "Sat 29",
    venue: "NAB Lab 3",
    goingCount: 12,
    description: "Build night with society mentors. Bring your laptop.",
    attendees: [{ username: "bot_34" }, { username: "gear_giki" }],
  },
];

export const mockMeetups = [
  {
    id: "1",
    title: "Sunday jam on hostel lawn",
    host: "nightowl_34",
    category: "Music",
    time: "Sun, 6:00 PM",
    venue: "Hostel A lawn",
    spotsLeft: 3,
    maxCapacity: 8,
    status: "open" as const,
    members: ["nightowl_34", "strings_35", "beat_topi"],
  },
  {
    id: "2",
    title: "Cricket nets — casual",
    host: "pace_topi",
    category: "Sports",
    time: "Today, 5 PM",
    venue: "Sports complex",
    spotsLeft: 0,
    maxCapacity: 10,
    status: "full" as const,
    members: ["pace_topi", "bat_34", "ball_giki"],
  },
];

export const mockPeople = [
  {
    username: "football_giki",
    reason: "You both like football & gaming",
    sharedHobbies: ["Football", "Gaming"],
  },
  {
    username: "art_giki",
    reason: "You both like art & photography",
    sharedHobbies: ["Art", "Photography"],
  },
];

export const mockPosts = [
  {
    username: "campus_wanderer",
    caption: "Best sunset from the hill viewpoint tonight.",
    likes: 18,
    comments: 2,
    hasImage: true,
  },
  {
    username: "society_ec",
    caption: "Society week lineup is live — check Events tab!",
    likes: 42,
    comments: 5,
    hasImage: false,
    commentPending: true,
  },
];

export const mockChat = [
  { username: "nightowl_34", message: "Anyone bringing a guitar?", sent: false },
  { username: "strings_35", message: "I can bring mine", sent: false },
  { message: "I'll bring mine too 🎸", sent: true },
];

export const mockMapLocations = [
  { name: "NAB", moments: 4 },
  { name: "Sports Complex", moments: 7 },
  { name: "Hill Viewpoint", moments: 12 },
  { name: "Cafeteria", moments: 3 },
];

export const hobbyCategories = {
  Sports: ["Football", "Cricket", "Basketball", "Gym"],
  Music: ["Guitar", "Singing", "Production", "Jam sessions"],
  Creative: ["Art", "Photography", "Writing", "Film"],
  Tech: ["Coding", "Robotics", "Gaming"],
};

export const designSections = [
  {
    id: "components",
    title: "Components",
    description: "Buttons, cards, chips, badges — the building blocks",
    href: "/design/components",
    phase: "Alpha",
  },
  {
    id: "auth",
    title: "Auth & Sign up",
    description: "GIKI email + @username",
    href: "/design/auth",
    phase: "Alpha",
  },
  {
    id: "onboarding",
    title: "Onboarding",
    description: "Hobbies & MCQs — one screen at a time (Alan style)",
    href: "/design/onboarding",
    phase: "Alpha",
  },
  {
    id: "home",
    title: "Home feed",
    description: "Announcements, For You, mixed feed",
    href: "/design/home",
    phase: "Alpha",
  },
  {
    id: "events",
    title: "Events",
    description: "Society & admin events — Meetup style",
    href: "/design/events",
    phase: "Alpha",
  },
  {
    id: "meetups",
    title: "Meetups",
    description: "Create, join, capacity lock",
    href: "/design/meetups",
    phase: "Alpha",
  },
  {
    id: "chat",
    title: "Group chat",
    description: "In-app only — no WhatsApp",
    href: "/design/chat",
    phase: "Alpha",
  },
  {
    id: "discover",
    title: "Discover people",
    description: "@username recommendations",
    href: "/design/discover",
    phase: "Alpha",
  },
  {
    id: "profile",
    title: "Public profile",
    description: "Username, bio, hobbies only",
    href: "/design/profile",
    phase: "Alpha",
  },
  {
    id: "community",
    title: "Community feed",
    description: "Posts, likes, admin-approved comments",
    href: "/design/community",
    phase: "Beta",
  },
  {
    id: "map",
    title: "GIK Map",
    description: "Campus moments on map",
    href: "/design/map",
    phase: "Beta",
  },
  {
    id: "admin",
    title: "Admin & moderation",
    description: "Announcements + comment queue",
    href: "/design/admin",
    phase: "Alpha",
  },
] as const;
