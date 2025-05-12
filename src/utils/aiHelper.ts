
import { AgeGroup } from "@/components/AgeSelector";

// Dictionary of age-appropriate responses by topic
const preApprovedResponses: Record<string, Record<AgeGroup, string[]>> = {
  "puberty": {
    "3-5": [
      "Bodies grow and change as you get older. This is normal and happens to everyone!",
      "Everyone's body is special and grows in its own way.",
      "Growing up means your body will change, and that's okay!"
    ],
    "6-9": [
      "Puberty is when your body starts to change from a child's body to a grown-up's body.",
      "During puberty, you might grow taller and notice other changes. This is natural.",
      "Everyone goes through puberty, but it happens at different times for different people."
    ],
    "10-12": [
      "Puberty is when your body develops and changes. You might notice growth spurts or mood changes.",
      "During puberty, bodies produce different hormones that cause physical changes.",
      "It's normal to have questions about puberty. You can always talk to trusted adults about it."
    ],
    "13-16": [
      "Puberty involves physical, emotional, and hormonal changes as your body matures.",
      "Changes during puberty can include growth spurts, body hair development, voice changes, and more.",
      "Everyone experiences puberty differently, and that's completely normal."
    ],
    "17-18": [
      "Puberty is marked by both physical and psychological development as the body reaches reproductive maturity.",
      "Hormonal changes during puberty affect physical, mental, and emotional development.",
      "Understanding the changes your body goes through helps develop a healthy self-image."
    ]
  },
  "relationships": {
    "3-5": [
      "Friends are people who are kind to us and play nicely.",
      "It's important to be gentle and kind with others.",
      "Families take care of each other and keep each other safe."
    ],
    "6-9": [
      "Good friends respect each other's feelings and choices.",
      "It's okay to say 'no' when you don't want to do something.",
      "Trust means believing someone will do what they say they will do."
    ],
    "10-12": [
      "Healthy friendships make you feel good about yourself.",
      "It's important to respect other people's personal space.",
      "Communication is key to solving disagreements with friends."
    ],
    "13-16": [
      "Healthy relationships involve mutual respect, trust, and good communication.",
      "Setting boundaries is an important part of any relationship.",
      "It's normal to have different types of feelings for friends as you grow."
    ],
    "17-18": [
      "Healthy relationships require open communication, mutual respect, and consent.",
      "Recognizing unhealthy relationship patterns is important for your well-being.",
      "Building relationships based on shared values creates stronger connections."
    ]
  },
  "safety": {
    "3-5": [
      "Your body belongs to you. You can say 'no' if you don't want hugs or touches.",
      "There are private parts of your body that others shouldn't touch.",
      "If you feel unsafe, always tell a grown-up you trust."
    ],
    "6-9": [
      "You have the right to say who can touch your body and how.",
      "It's important to tell a trusted adult if someone makes you feel uncomfortable.",
      "Some touches are safe and some are not. Trust your feelings."
    ],
    "10-12": [
      "Your personal boundaries deserve respect, both online and offline.",
      "If someone makes you feel uncomfortable, it's important to tell a trusted adult.",
      "Online safety means being careful about what information you share."
    ],
    "13-16": [
      "Consent means getting clear permission before touching someone else.",
      "Online safety includes being careful about sharing personal information or images.",
      "If you or someone you know feels unsafe, reach out to a trusted adult for help."
    ],
    "17-18": [
      "Consent must be freely given, reversible, informed, enthusiastic, and specific.",
      "Digital safety means protecting your personal information and being aware of digital footprints.",
      "Recognizing warning signs in relationships helps protect yourself and others."
    ]
  },
  "health": {
    "3-5": [
      "Washing your hands helps keep germs away.",
      "Eating healthy foods helps your body grow strong.",
      "Sleep helps your body and brain rest and grow."
    ],
    "6-9": [
      "Taking care of your body includes washing regularly, eating well, and getting exercise.",
      "Different foods help your body in different ways.",
      "Getting enough sleep helps you learn and play better."
    ],
    "10-12": [
      "Regular hygiene becomes more important as your body changes.",
      "Balanced nutrition and exercise help support your growing body.",
      "Mental health is just as important as physical health."
    ],
    "13-16": [
      "Good hygiene practices help manage body changes during puberty.",
      "Understanding your body's signals helps you take better care of yourself.",
      "Mental and emotional well-being are important parts of overall health."
    ],
    "17-18": [
      "Taking responsibility for your health includes regular check-ups and preventive care.",
      "Understanding sexual and reproductive health helps make informed decisions.",
      "Balancing physical, mental, and emotional well-being contributes to overall health."
    ]
  },
  "fallback": {
    "3-5": [
      "That's an interesting question! Maybe we can ask a grown-up about that.",
      "I'm not sure about that. Let's talk about something else that's fun!",
      "Let's save that question for a parent or teacher who can explain it better."
    ],
    "6-9": [
      "That's a good question. It might be best to ask a trusted grown-up for help with that.",
      "I don't have a simple answer for that. Maybe we can find a book about it or ask an adult.",
      "That's something that would be good to talk about with your parent or guardian."
    ],
    "10-12": [
      "That's a thoughtful question. It might be best to discuss with a parent or teacher.",
      "This is an important topic that would be better explained by someone you trust.",
      "I'd recommend asking an adult you trust about this, as they can give you the best guidance."
    ],
    "13-16": [
      "That's a good question that deserves a thorough answer. Consider talking with a trusted adult.",
      "This topic is important, and I'd recommend discussing it with a parent, teacher, or counselor.",
      "For a complete answer on this topic, it would be best to speak with a knowledgeable adult."
    ],
    "17-18": [
      "This is an important question. For the most accurate information, consider consulting a healthcare provider.",
      "While I can provide general information, speaking with a healthcare professional would give you the most accurate guidance.",
      "That's a thoughtful question. Consider researching reputable sources or speaking with a healthcare provider for detailed information."
    ]
  }
};

// List of sensitive words that should trigger redirection for younger users
const sensitiveWords = [
  "sex", "intercourse", "condom", "contraception", "masturbation", "penis", "vagina", 
  "nude", "porn", "pornography", "naked", "genitals"
];

/**
 * Checks if a question contains sensitive content that should be filtered
 * for younger age groups
 */
export const containsSensitiveContent = (question: string, ageGroup: AgeGroup): boolean => {
  // For very young children, filter more strictly
  if (ageGroup === "3-5" || ageGroup === "6-9") {
    return sensitiveWords.some(word => 
      question.toLowerCase().includes(word.toLowerCase())
    );
  }
  
  // For pre-teens, filter some words but allow educational content
  if (ageGroup === "10-12") {
    const highSensitivityWords = ["porn", "pornography", "intercourse", "masturbation"];
    return highSensitivityWords.some(word => 
      question.toLowerCase().includes(word.toLowerCase())
    );
  }
  
  // For teens, minimal filtering
  return false;
};

/**
 * Classifies the question into a topic category
 */
const classifyQuestion = (question: string): string => {
  const lowerQuestion = question.toLowerCase();
  
  if (lowerQuestion.includes("puberty") || 
      lowerQuestion.includes("grow") || 
      lowerQuestion.includes("body change") || 
      lowerQuestion.includes("period") || 
      lowerQuestion.includes("voice change")) {
    return "puberty";
  }
  
  if (lowerQuestion.includes("friend") || 
      lowerQuestion.includes("relationship") || 
      lowerQuestion.includes("boyfriend") || 
      lowerQuestion.includes("girlfriend") || 
      lowerQuestion.includes("love") ||
      lowerQuestion.includes("crush")) {
    return "relationships";
  }
  
  if (lowerQuestion.includes("touch") || 
      lowerQuestion.includes("safe") || 
      lowerQuestion.includes("private") || 
      lowerQuestion.includes("online") || 
      lowerQuestion.includes("consent") ||
      lowerQuestion.includes("uncomfortable")) {
    return "safety";
  }
  
  if (lowerQuestion.includes("hygiene") || 
      lowerQuestion.includes("clean") || 
      lowerQuestion.includes("wash") || 
      lowerQuestion.includes("health") || 
      lowerQuestion.includes("sick")) {
    return "health";
  }
  
  return "fallback";
};

/**
 * Gets an age-appropriate response for a question
 */
export const getAIResponse = (question: string, ageGroup: AgeGroup): string => {
  // Check for sensitive content
  if (containsSensitiveContent(question, ageGroup)) {
    return "This is an important question that would be best answered by a trusted adult, like a parent, guardian, or teacher. They can give you accurate information that's right for your age.";
  }
  
  // Classify the question
  const topic = classifyQuestion(question);
  
  // Get responses for that topic and age group
  const responses = preApprovedResponses[topic][ageGroup];
  
  // Return a random response from the appropriate list
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
};

/**
 * Tracks user interaction to provide personalized recommendations
 */
interface LearningData {
  completedQuizzes: string[];
  quizScores: Record<string, number>;
  viewedTopics: string[];
  timeSpent: Record<string, number>;
  lastRecommendations: string[];
}

const LEARNING_DATA_KEY = "teen_shield_learning_data";

export const initializeUserLearningData = (): LearningData => {
  const storedData = localStorage.getItem(LEARNING_DATA_KEY);
  
  if (storedData) {
    return JSON.parse(storedData);
  }
  
  // Initialize with empty data
  const newData: LearningData = {
    completedQuizzes: [],
    quizScores: {},
    viewedTopics: [],
    timeSpent: {},
    lastRecommendations: []
  };
  
  localStorage.setItem(LEARNING_DATA_KEY, JSON.stringify(newData));
  return newData;
};

export const updateLearningData = (updatedData: Partial<LearningData>) => {
  const currentData = initializeUserLearningData();
  const newData = { ...currentData, ...updatedData };
  localStorage.setItem(LEARNING_DATA_KEY, JSON.stringify(newData));
};

export const trackTopicView = (topicId: string) => {
  const currentData = initializeUserLearningData();
  
  // Add to viewed topics if not already there
  if (!currentData.viewedTopics.includes(topicId)) {
    currentData.viewedTopics.push(topicId);
  }
  
  // Update time spent
  currentData.timeSpent[topicId] = (currentData.timeSpent[topicId] || 0) + 1;
  
  localStorage.setItem(LEARNING_DATA_KEY, JSON.stringify(currentData));
};

export const trackQuizCompletion = (quizId: string, score: number) => {
  const currentData = initializeUserLearningData();
  
  // Add to completed quizzes if not already there
  if (!currentData.completedQuizzes.includes(quizId)) {
    currentData.completedQuizzes.push(quizId);
  }
  
  // Update score (overwrite previous score)
  currentData.quizScores[quizId] = score;
  
  localStorage.setItem(LEARNING_DATA_KEY, JSON.stringify(currentData));
};

export const getPersonalizedRecommendations = (ageGroup: AgeGroup, themeId?: string): string[] => {
  const currentData = initializeUserLearningData();
  
  // This is a simplified recommendation logic
  // In a real app, this would be more sophisticated
  
  // If user hasn't completed many quizzes, recommend some
  if (currentData.completedQuizzes.length < 2) {
    return ["quiz-puberty-basics", "quiz-healthy-relationships"];
  }
  
  // If user has low scores in certain quizzes, recommend related content
  const lowScoreQuizzes = Object.entries(currentData.quizScores)
    .filter(([_, score]) => score < 0.7)
    .map(([quizId]) => quizId);
  
  if (lowScoreQuizzes.length > 0) {
    // In a real app, we would map these quiz IDs to related content
    return ["theme-relationships", "theme-development"];
  }
  
  // Default recommendations based on age group
  switch (ageGroup) {
    case "3-5":
      return ["theme-values", "theme-health"];
    case "6-9":
      return ["theme-relationships", "quiz-friendship-basics"];
    case "10-12":
      return ["theme-development", "quiz-puberty-basics"];
    case "13-16":
      return ["theme-relationships", "theme-health"];
    case "17-18":
      return ["theme-values", "theme-relationships"];
    default:
      return ["theme-development", "theme-health"];
  }
};
