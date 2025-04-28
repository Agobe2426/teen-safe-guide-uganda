import { AgeGroup } from "@/components/AgeSelector";
import { ThemeType } from "@/components/ThemeCard";

export interface ContentItem {
  id: string;
  title: string;
  description: string;
  content: string;
  ageGroups: AgeGroup[];
  themeId: ThemeType;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  themeId: ThemeType;
  ageGroups: AgeGroup[];
  questions: Question[];
}

export interface QA {
  id: string;
  question: string;
  answer: string;
  ageGroups: AgeGroup[];
  themeId: ThemeType;
  isCommonQuestion: boolean;
}

export const themeData = [
  {
    id: "development" as ThemeType,
    title: "Human Development",
    description: "Learn about physical, emotional, and cognitive changes during adolescence.",
  },
  {
    id: "health" as ThemeType,
    title: "Sexual & Reproductive Health",
    description: "Understand your body and make informed health decisions.",
  },
  {
    id: "relationships" as ThemeType,
    title: "Relationships",
    description: "Build healthy friendships, family bonds, and understand consent.",
  },
  {
    id: "values" as ThemeType,
    title: "Values, Attitudes & Skills",
    description: "Develop life skills, critical thinking, and personal values.",
  },
  {
    id: "culture" as ThemeType,
    title: "Society & Culture",
    description: "Explore cultural beliefs, gender roles, and community values.",
  },
];

export const contentData: ContentItem[] = [
  {
    id: "early-learning",
    title: "My Body and Me",
    description: "Learning about our bodies in a fun and safe way",
    content: `
      <h2>Our Amazing Bodies</h2>
      <p>Everyone's body is special and unique! Let's learn about our bodies together.</p>
      
      <h3>Parts of Our Body</h3>
      <ul>
        <li>Head - for thinking and seeing</li>
        <li>Arms - for hugging and playing</li>
        <li>Legs - for walking and running</li>
        <li>Tummy - for food and giggles</li>
      </ul>
      
      <h3>Taking Care of Our Body</h3>
      <p>We need to keep our body clean and healthy:</p>
      <ul>
        <li>Washing hands with soap</li>
        <li>Brushing teeth morning and night</li>
        <li>Having a bath or shower</li>
        <li>Eating healthy food</li>
      </ul>
      
      <h3>Safe Touch</h3>
      <p>Remember:</p>
      <ul>
        <li>Your body belongs to you</li>
        <li>Some body parts are private</li>
        <li>It's okay to say "no" to touches you don't like</li>
        <li>Tell a trusted grown-up if someone makes you feel uncomfortable</li>
      </ul>
    `,
    ageGroups: ["3-5"],
    themeId: "development",
  },
  {
    id: "family-care",
    title: "Family and Care",
    description: "Learning about families and how they care for us",
    content: `
      <h2>Our Loving Families</h2>
      <p>Families come in all shapes and sizes, and they all share love and care!</p>
      
      <h3>Family Members</h3>
      <ul>
        <li>Parents who take care of us</li>
        <li>Sisters and brothers to play with</li>
        <li>Grandparents who tell stories</li>
        <li>Aunts and uncles who help us grow</li>
      </ul>
      
      <h3>Family Love</h3>
      <p>Families show love by:</p>
      <ul>
        <li>Giving hugs and kisses</li>
        <li>Making yummy food</li>
        <li>Reading bedtime stories</li>
        <li>Taking care when we're sick</li>
      </ul>
      
      <h3>Being a Good Family Member</h3>
      <ul>
        <li>Saying "please" and "thank you"</li>
        <li>Helping with small tasks</li>
        <li>Sharing toys with siblings</li>
        <li>Using kind words</li>
      </ul>
    `,
    ageGroups: ["3-5"],
    themeId: "relationships",
  },
  {
    id: "puberty-changes",
    title: "Understanding Puberty",
    description: "Physical and emotional changes during puberty",
    content: `
      <h2>What Is Puberty?</h2>
      <p>Puberty is the time when your body begins to develop and change as you move from childhood to adulthood. During puberty, your body will grow faster than at any other time in your life, except for when you were a baby.</p>
      
      <h3>Physical Changes</h3>
      <ul>
        <li>Growth spurts</li>
        <li>Body hair growth</li>
        <li>Skin changes</li>
        <li>Voice changes (especially in boys)</li>
      </ul>
      
      <h3>Emotional Changes</h3>
      <p>During puberty, you might experience new and stronger emotions. This is normal! You might sometimes feel:</p>
      <ul>
        <li>More sensitive</li>
        <li>Concerned about how you look</li>
        <li>Interested in new friendships</li>
        <li>More independent from parents</li>
      </ul>
      
      <p>Remember: Everyone goes through puberty at their own pace. Some people start earlier, some start later, but everyone experiences these changes.</p>
    `,
    ageGroups: ["10-12"],
    themeId: "development",
  },
  {
    id: "physical-emotional-dev",
    title: "Physical & Emotional Development",
    description: "Understanding the changes in your body and emotions",
    content: `
      <h2>Your Changing Body</h2>
      <p>During adolescence, your body goes through many changes. These changes are natural and happen to everyone, though they may start at different times and progress at different rates.</p>
      
      <h3>For Girls</h3>
      <ul>
        <li>Development of breasts</li>
        <li>Growth of pubic and underarm hair</li>
        <li>Widening of hips</li>
        <li>Beginning of menstruation (periods)</li>
      </ul>
      
      <h3>For Boys</h3>
      <ul>
        <li>Growth of pubic, facial, and body hair</li>
        <li>Voice deepening</li>
        <li>Development of muscles</li>
        <li>Growth of testicles and penis</li>
      </ul>
      
      <h3>Emotional Changes</h3>
      <p>Along with physical changes come emotional changes:</p>
      <ul>
        <li>Mood swings</li>
        <li>New feelings of attraction</li>
        <li>Desire for independence</li>
        <li>Concern about identity and belonging</li>
      </ul>
      
      <p>These changes can sometimes feel confusing or overwhelming, but they are a normal part of growing up. Talk to a trusted adult if you have questions or concerns.</p>
    `,
    ageGroups: ["13-16", "17-18"],
    themeId: "development",
  },
  {
    id: "my-body",
    title: "My Body",
    description: "Learning about our bodies and personal hygiene",
    content: `
      <h2>Our Amazing Bodies</h2>
      <p>Your body is special and belongs to you! It's important to know about your body parts and how to keep them clean and healthy.</p>
      
      <h3>Body Parts</h3>
      <p>Everyone has:</p>
      <ul>
        <li>A head with a brain for thinking</li>
        <li>A heart that pumps blood</li>
        <li>Arms and legs for moving and playing</li>
        <li>Private parts that are covered by underwear</li>
      </ul>
      
      <h3>Keeping Clean</h3>
      <p>To stay healthy:</p>
      <ul>
        <li>Wash your hands with soap before eating and after using the toilet</li>
        <li>Brush your teeth twice a day</li>
        <li>Take regular baths or showers</li>
        <li>Change into clean clothes</li>
      </ul>
      
      <h3>Privacy</h3>
      <p>Some parts of your body are private. These are the parts covered by your underwear. It's important to know:</p>
      <ul>
        <li>No one should touch your private parts</li>
        <li>If someone tries to, tell a trusted adult right away</li>
        <li>It's okay to say "no" if you feel uncomfortable</li>
      </ul>
    `,
    ageGroups: ["6-9"],
    themeId: "development",
  },
  {
    id: "reproductive-health",
    title: "Reproductive Health Basics",
    description: "Essential information about reproductive health",
    content: `
      <h2>Reproductive Health</h2>
      <p>Reproductive health involves taking care of the reproductive parts of our bodies and making informed decisions about relationships and family planning.</p>
      
      <h3>Menstruation</h3>
      <p>Menstruation (having periods) is a normal part of a woman's life. A typical menstrual cycle lasts about 28 days, but it can range from 21 to 35 days. During menstruation:</p>
      <ul>
        <li>Use clean sanitary pads, tampons, or menstrual cups</li>
        <li>Change them regularly to prevent infections</li>
        <li>Keep track of your cycle to know when to expect your next period</li>
      </ul>
      
      <h3>Reproductive Health Care</h3>
      <ul>
        <li>Regular check-ups are important for reproductive health</li>
        <li>Report unusual symptoms or pain to a healthcare provider</li>
        <li>Practice proper hygiene to prevent infections</li>
      </ul>
      
      <h3>Safe Choices</h3>
      <p>Making informed decisions about relationships includes:</p>
      <ul>
        <li>Understanding the consequences of sexual activity</li>
        <li>Knowing that abstinence is the most effective way to prevent pregnancy and STIs</li>
        <li>Communicating clearly and respecting others' boundaries</li>
      </ul>
      
      <p>Remember, your body belongs to you, and you have the right to make informed decisions about it.</p>
    `,
    ageGroups: ["13-16", "17-18"],
    themeId: "health",
  },
  {
    id: "friendship",
    title: "Healthy Friendships",
    description: "Building positive relationships with friends",
    content: `
      <h2>Good Friends</h2>
      <p>Friends are people we like spending time with. Good friends are kind and make us feel happy.</p>
      
      <h3>Being a Good Friend</h3>
      <p>To be a good friend, you can:</p>
      <ul>
        <li>Share your toys</li>
        <li>Take turns when playing games</li>
        <li>Listen when your friends are talking</li>
        <li>Be kind with your words</li>
        <li>Help friends when they need it</li>
      </ul>
      
      <h3>When Friends Make You Feel Sad</h3>
      <p>Sometimes friends might:</p>
      <ul>
        <li>Say unkind words</li>
        <li>Not want to play</li>
        <li>Take your things without asking</li>
      </ul>
      
      <p>If a friend makes you feel sad or upset, you can:</p>
      <ul>
        <li>Tell them how you feel</li>
        <li>Talk to a grown-up you trust</li>
        <li>Play with other friends who are kind</li>
      </ul>
      
      <p>Remember, everyone deserves friends who are kind and respectful!</p>
    `,
    ageGroups: ["6-9"],
    themeId: "relationships",
  },
  {
    id: "consent-boundaries",
    title: "Consent and Boundaries",
    description: "Understanding consent in relationships",
    content: `
      <h2>Understanding Consent and Boundaries</h2>
      <p>Consent means giving permission for something to happen or agreeing to do something. Respecting boundaries is about understanding and honoring personal limits—both yours and others'.</p>
      
      <h3>Key Principles of Consent</h3>
      <ul>
        <li><strong>Freely given:</strong> Given without pressure, manipulation, or under the influence of substances</li>
        <li><strong>Reversible:</strong> Can be withdrawn at any time</li>
        <li><strong>Informed:</strong> All parties understand what is being agreed to</li>
        <li><strong>Enthusiastic:</strong> Should be given with positive feelings, not reluctance</li>
        <li><strong>Specific:</strong> Saying yes to one thing doesn't mean saying yes to everything</li>
      </ul>
      
      <h3>Setting Healthy Boundaries</h3>
      <p>You have the right to set boundaries about:</p>
      <ul>
        <li>Your personal space</li>
        <li>Your time and energy</li>
        <li>Your body and physical contact</li>
        <li>Your emotions and thoughts</li>
        <li>Your digital presence and privacy</li>
      </ul>
      
      <h3>Communicating Boundaries</h3>
      <p>Clear communication helps establish healthy boundaries:</p>
      <ul>
        <li>Use "I" statements: "I feel uncomfortable when..."</li>
        <li>Be direct and clear about your limits</li>
        <li>Listen respectfully when others express their boundaries</li>
        <li>Remember that "no" is a complete sentence</li>
      </ul>
      
      <p>In Uganda, cultural values emphasize respect in relationships. Understanding consent and boundaries is consistent with showing respect for yourself and others.</p>
    `,
    ageGroups: ["13-16", "17-18"],
    themeId: "relationships",
  },
  {
    id: "decision-making",
    title: "Making Good Decisions",
    description: "Learning how to make responsible choices",
    content: `
      <h2>Making Good Choices</h2>
      <p>Every day, we make many choices. Some choices are small, like what to eat for breakfast. Other choices are bigger and can affect us for a longer time.</p>
      
      <h3>Steps for Making Good Choices</h3>
      <ol>
        <li><strong>Stop and think</strong> before you act</li>
        <li><strong>Consider choices</strong> - what could you do?</li>
        <li><strong>Think about what might happen</strong> with each choice</li>
        <li><strong>Choose</strong> the best option</li>
        <li><strong>Learn</strong> from what happens</li>
      </ol>
      
      <h3>Who Can Help You Make Choices?</h3>
      <p>When you're not sure what to do, you can ask for help from:</p>
      <ul>
        <li>Parents or guardians</li>
        <li>Teachers</li>
        <li>Older siblings</li>
        <li>Other trusted adults</li>
      </ul>
      
      <h3>Good Choices Help You:</h3>
      <ul>
        <li>Stay safe and healthy</li>
        <li>Learn and grow</li>
        <li>Be kind to others</li>
        <li>Feel proud of yourself</li>
      </ul>
      
      <p>Remember: Everyone makes mistakes sometimes. When you make a mistake, you can say sorry and try to make better choices next time.</p>
    `,
    ageGroups: ["6-9", "10-12"],
    themeId: "values",
  },
  {
    id: "critical-thinking",
    title: "Critical Thinking Skills",
    description: "Developing skills to analyze information and make informed decisions",
    content: `
      <h2>Critical Thinking Skills</h2>
      <p>Critical thinking is the ability to analyze information objectively and make reasoned judgments. These skills help you make better decisions and solve problems effectively.</p>
      
      <h3>Key Critical Thinking Skills</h3>
      <ul>
        <li><strong>Analysis:</strong> Breaking down complex information into smaller parts</li>
        <li><strong>Evaluation:</strong> Judging the credibility and value of information</li>
        <li><strong>Inference:</strong> Drawing conclusions based on evidence</li>
        <li><strong>Problem-solving:</strong> Finding solutions to challenges</li>
        <li><strong>Self-reflection:</strong> Examining your own thoughts and biases</li>
      </ul>
      
      <h3>Applying Critical Thinking to Daily Life</h3>
      <p>You can use critical thinking when:</p>
      <ul>
        <li>Evaluating information from social media or news</li>
        <li>Making decisions about relationships and peer pressure</li>
        <li>Considering health choices and consequences</li>
        <li>Setting and working toward personal goals</li>
        <li>Resolving conflicts with others</li>
      </ul>
      
      <h3>Questions for Critical Thinking</h3>
      <p>When faced with information or decisions, ask yourself:</p>
      <ul>
        <li>What are the facts? What is opinion?</li>
        <li>What is the source of this information? Is it reliable?</li>
        <li>What might be missing from this information?</li>
        <li>Are there other perspectives to consider?</li>
        <li>What are the potential consequences of each option?</li>
      </ul>
      
      <p>Critical thinking helps you navigate complex social situations and make decisions that align with your values and goals.</p>
    `,
    ageGroups: ["13-16", "17-18"],
    themeId: "values",
  },
  {
    id: "family-traditions",
    title: "Family and Traditions",
    description: "Learning about family relationships and cultural traditions",
    content: `
      <h2>Families and Our Traditions</h2>
      <p>Families come in many different shapes and sizes. Each family has special ways of doing things called traditions.</p>
      
      <h3>Different Kinds of Families</h3>
      <p>Some families have:</p>
      <ul>
        <li>A mom and a dad with children</li>
        <li>Just a mom or just a dad with children</li>
        <li>Grandparents taking care of children</li>
        <li>Aunts, uncles, or other relatives caring for children</li>
        <li>Foster parents or adoptive parents</li>
      </ul>
      
      <p>All families are special, no matter what they look like!</p>
      
      <h3>Family Traditions</h3>
      <p>Traditions are special activities or celebrations that families do together. Some examples are:</p>
      <ul>
        <li>Holiday celebrations</li>
        <li>Special meals or foods</li>
        <li>Songs, dances, or games</li>
        <li>Ways of greeting or showing respect to elders</li>
        <li>Stories passed down from older family members</li>
      </ul>
      
      <h3>Family Roles</h3>
      <p>In families, different people have different jobs or roles:</p>
      <ul>
        <li>Adults often work to earn money and take care of children</li>
        <li>Children go to school and help with chores</li>
        <li>Everyone helps to make the home a happy place</li>
      </ul>
      
      <p>What special traditions does your family have? What's your role in your family?</p>
    `,
    ageGroups: ["6-9", "10-12"],
    themeId: "culture",
  },
  {
    id: "gender-roles",
    title: "Gender Roles and Equality",
    description: "Understanding gender roles in society and the importance of equality",
    content: `
      <h2>Gender Roles and Equality</h2>
      <p>Gender roles are expectations about how people should behave based on whether they are male or female. These expectations vary across cultures and can change over time.</p>
      
      <h3>Traditional Gender Roles in Uganda</h3>
      <p>In many Ugandan communities, traditional gender roles have included:</p>
      <ul>
        <li>Men as primary breadwinners and decision-makers</li>
        <li>Women responsible for domestic work and childcare</li>
        <li>Specific ceremonies, activities, and behaviors assigned by gender</li>
      </ul>
      
      <h3>Changing Perspectives</h3>
      <p>Today, many of these traditional roles are evolving:</p>
      <ul>
        <li>Both men and women pursue education and careers</li>
        <li>Household responsibilities are increasingly shared</li>
        <li>Leadership positions are open to both genders</li>
        <li>People recognize that abilities are not determined by gender</li>
      </ul>
      
      <h3>Gender Equality</h3>
      <p>Gender equality means:</p>
      <ul>
        <li>Equal rights, responsibilities, and opportunities for all genders</li>
        <li>Freedom to develop personal abilities without gender limitations</li>
        <li>Respect for all people regardless of gender</li>
        <li>Valuing traditionally feminine and masculine qualities equally</li>
      </ul>
      
      <h3>Balancing Tradition and Equality</h3>
      <p>It's possible to respect cultural traditions while promoting equality:</p>
      <ul>
        <li>Preserve meaningful cultural practices while discouraging harmful ones</li>
        <li>Recognize the valuable contributions of all community members</li>
        <li>Support each person's right to dignity and opportunity</li>
      </ul>
      
      <p>Achieving gender equality benefits everyone by allowing all people to reach their full potential.</p>
    `,
    ageGroups: ["13-16", "17-18"],
    themeId: "culture",
  },
];

export const quizData: Quiz[] = [
  {
    id: "puberty-quiz",
    title: "Understanding Puberty",
    description: "Test your knowledge about changes during puberty",
    themeId: "development",
    ageGroups: ["10-12"],
    questions: [
      {
        id: "pub-q1",
        question: "What is puberty?",
        options: [
          "A type of fruit",
          "The time when your body develops from a child to an adult",
          "A game played at school",
          "A subject studied in science class"
        ],
        correctAnswer: 1,
        explanation: "Puberty is the natural process when your body develops and changes as you grow from a child into an adult."
      },
      {
        id: "pub-q2",
        question: "Which is NOT a change that happens during puberty?",
        options: [
          "Growth spurts",
          "Voice changes",
          "Learning to read",
          "Growing body hair"
        ],
        correctAnswer: 2,
        explanation: "Learning to read is a skill that is typically learned before puberty. The other options are physical changes that happen during puberty."
      },
      {
        id: "pub-q3",
        question: "True or False: Everyone starts puberty at exactly the same age.",
        options: [
          "True",
          "False"
        ],
        correctAnswer: 1,
        explanation: "False. People start puberty at different ages. Some may start earlier and others later, but everyone goes through it eventually."
      }
    ]
  },
  {
    id: "repro-health-quiz",
    title: "Reproductive Health",
    description: "Test your knowledge about reproductive health",
    themeId: "health",
    ageGroups: ["13-16", "17-18"],
    questions: [
      {
        id: "rh-q1",
        question: "How often should you change a sanitary pad during menstruation?",
        options: [
          "Once a day",
          "Every 4-6 hours or when it becomes full",
          "Only when it feels uncomfortable",
          "Every 3 days"
        ],
        correctAnswer: 1,
        explanation: "Sanitary pads should be changed every 4-6 hours or when they become full to maintain proper hygiene and prevent infections."
      },
      {
        id: "rh-q2",
        question: "Which of the following is NOT a way to maintain good reproductive health?",
        options: [
          "Regular check-ups with a healthcare provider",
          "Practicing proper hygiene",
          "Keeping your reproductive health concerns secret",
          "Learning accurate information about your body"
        ],
        correctAnswer: 2,
        explanation: "Keeping reproductive health concerns secret is not good for your health. It's important to discuss concerns with a trusted adult or healthcare provider."
      },
      {
        id: "rh-q3",
        question: "What is the most effective way to prevent pregnancy and sexually transmitted infections (STIs)?",
        options: [
          "Taking vitamins",
          "Abstinence (not having sex)",
          "Regular exercise",
          "Eating healthy foods"
        ],
        correctAnswer: 1,
        explanation: "Abstinence, or not having sex, is the most effective way to prevent both pregnancy and sexually transmitted infections."
      }
    ]
  },
  {
    id: "friendship-quiz",
    title: "Healthy Friendships",
    description: "Test your knowledge about being a good friend",
    themeId: "relationships",
    ageGroups: ["6-9"],
    questions: [
      {
        id: "fr-q1",
        question: "What makes someone a good friend?",
        options: [
          "They take your toys without asking",
          "They are kind and share with you",
          "They only play with you when no one else is around",
          "They tell you what to do all the time"
        ],
        correctAnswer: 1,
        explanation: "Good friends are kind and willing to share with you. They respect you and care about your feelings."
      },
      {
        id: "fr-q2",
        question: "What should you do if a friend says something that hurts your feelings?",
        options: [
          "Never speak to them again",
          "Say something mean back to hurt their feelings too",
          "Tell them how you feel or talk to a trusted adult",
          "Keep it a secret and feel sad"
        ],
        correctAnswer: 2,
        explanation: "It's best to tell your friend how their words made you feel, or talk to a trusted adult who can help you."
      }
    ]
  },
  {
    id: "consent-quiz",
    title: "Consent and Boundaries",
    description: "Test your understanding of consent in relationships",
    themeId: "relationships",
    ageGroups: ["13-16", "17-18"],
    questions: [
      {
        id: "con-q1",
        question: "What does consent mean?",
        options: [
          "Saying yes when you really want to say no",
          "Giving permission freely and clearly for something to happen",
          "Agreeing to something because everyone else is doing it",
          "Following instructions without asking questions"
        ],
        correctAnswer: 1,
        explanation: "Consent means giving permission freely and clearly for something to happen. It must be given without pressure or manipulation."
      },
      {
        id: "con-q2",
        question: "True or False: Once you give consent for something, you cannot change your mind.",
        options: [
          "True",
          "False"
        ],
        correctAnswer: 1,
        explanation: "False. Consent can be withdrawn at any time. You always have the right to change your mind."
      },
      {
        id: "con-q3",
        question: "Which of the following is an example of setting a healthy boundary?",
        options: [
          "Saying yes to something you're uncomfortable with to avoid conflict",
          "Letting friends pressure you into activities you don't want to do",
          "Clearly telling someone you're not comfortable with them touching you",
          "Keeping your feelings to yourself to avoid upsetting others"
        ],
        correctAnswer: 2,
        explanation: "Setting a boundary by clearly communicating when you're not comfortable with something, such as unwanted physical contact, is healthy and important."
      }
    ]
  }
];

export const qaData: QA[] = [
  {
    id: "qa-1",
    question: "When do most people start puberty?",
    answer: "Puberty typically starts between ages 8-13 for girls and 9-14 for boys. However, everyone is different, and it's normal to start earlier or later than your friends.",
    ageGroups: ["10-12"],
    themeId: "development",
    isCommonQuestion: true,
  },
  {
    id: "qa-2",
    question: "Is it normal to have painful periods?",
    answer: "Some discomfort during periods is common, but severe pain that disrupts daily activities may need medical attention. Mild cramps can often be managed with rest, gentle exercise, warm compresses, and over-the-counter pain relievers recommended by a healthcare provider.",
    ageGroups: ["13-16", "17-18"],
    themeId: "health",
    isCommonQuestion: true,
  },
  {
    id: "qa-3",
    question: "What should I do if a friend is being bullied?",
    answer: "If you see someone being bullied, don't join in or watch silently. Support your friend by staying with them, showing kindness, and helping them tell a trusted adult like a teacher or parent. Remember that reporting bullying is not tattling—it's helping someone stay safe.",
    ageGroups: ["6-9", "10-12"],
    themeId: "relationships",
    isCommonQuestion: true,
  },
  {
    id: "qa-4",
    question: "How do I know if a relationship is healthy?",
    answer: "Healthy relationships involve mutual respect, trust, honesty, good communication, and support. Both people feel safe, comfortable, and free to be themselves. If someone makes you feel scared, controls who you talk to, insults you, or pressures you to do things you're uncomfortable with, these are warning signs of an unhealthy relationship.",
    ageGroups: ["13-16", "17-18"],
    themeId: "relationships",
    isCommonQuestion: true,
  },
  {
    id: "qa-5",
    question: "How can I say no when I feel pressured to do something wrong?",
    answer: "It can be hard to say no, but you can: 1) Use a clear, firm voice to say 'No, I don't want to.' 2) Give a reason if you want: 'I'll get in trouble' or 'That doesn't feel right to me.' 3) Suggest another activity instead. 4) If needed, walk away and find friends who respect your choices. Remember, real friends will respect your decisions.",
    ageGroups: ["10-12", "13-16"],
    themeId: "values",
    isCommonQuestion: true,
  },
  {
    id: "qa-6",
    question: "Can boys and girls like the same activities?",
    answer: "Yes! While some societies have traditions about what boys and girls should like, interests and talents don't actually depend on gender. Girls can excel at science, math, or sports, and boys can be great at cooking, art, or caring for others. Everyone should have the chance to explore different activities and develop their unique skills and interests.",
    ageGroups: ["6-9", "10-12"],
    themeId: "culture",
    isCommonQuestion: true,
  }
];
