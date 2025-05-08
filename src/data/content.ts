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
];

export const contentData: ContentItem[] = [
  {
    id: "growing-body",
    title: "Growing and Changing",
    description: "Learning about how our bodies grow and change",
    content: `
      <h2>How We Grow</h2>
      <p>As we grow, our bodies change in many wonderful ways! Just like a flower grows from a tiny seed, we grow taller and stronger each day.</p>
      
      <div class="bg-purple-50 p-4 rounded-lg my-4 border border-purple-100">
        <h3 class="font-bold text-purple-700">Fun Fact! 🌟</h3>
        <p>Did you know that you were once smaller than a strawberry? Now look at you! You've grown so much!</p>
      </div>
      
      <h3 class="text-shield-purple mt-4">Everyone is Special</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li>Every child is unique and precious</li>
        <li>We all grow at our own perfect pace</li>
        <li>Our bodies are amazing gifts that help us play, learn, and love</li>
        <li>We should take good care of ourselves</li>
      </ul>
      
      <div class="flex items-center gap-2 bg-yellow-50 p-3 rounded-lg my-4 border border-yellow-100">
        <div class="text-xl">🎮</div>
        <p><strong>Activity:</strong> Stand back-to-back with a friend or family member. Who is taller? Ask a grown-up to mark your height on a wall, and check again in 3 months!</p>
      </div>
      
      <h3 class="text-shield-purple mt-4">Taking Care of Our Bodies</h3>
      <div class="grid grid-cols-2 gap-2 my-2">
        <div class="bg-blue-50 p-2 rounded text-center">😋 Eating healthy foods</div>
        <div class="bg-blue-50 p-2 rounded text-center">😴 Getting enough sleep</div>
        <div class="bg-blue-50 p-2 rounded text-center">🏃‍♂️ Playing and moving</div>
        <div class="bg-blue-50 p-2 rounded text-center">🚿 Keeping clean</div>
      </div>

      <h3 class="text-shield-purple mt-4">Being Safe and Strong</h3>
      <p>Remember these important rules:</p>
      <div class="my-4 space-y-2">
        <div class="flex items-center gap-2 bg-green-50 p-3 rounded-lg border border-green-100">
          <div class="font-bold text-green-700">1.</div>
          <p>Your body belongs to you</p>
        </div>
        <div class="flex items-center gap-2 bg-green-50 p-3 rounded-lg border border-green-100">
          <div class="font-bold text-green-700">2.</div>
          <p>Say "NO" if you feel unsafe</p>
        </div>
        <div class="flex items-center gap-2 bg-green-50 p-3 rounded-lg border border-green-100">
          <div class="font-bold text-green-700">3.</div>
          <p>Tell a trusted grown-up if you need help</p>
        </div>
        <div class="flex items-center gap-2 bg-green-50 p-3 rounded-lg border border-green-100">
          <div class="font-bold text-green-700">4.</div>
          <p>Stay close to safe family members</p>
        </div>
      </div>
      
      <div class="bg-pink-50 p-4 rounded-lg my-4 border border-pink-100">
        <h4 class="font-bold">Remember! 💫</h4>
        <p>Growing up is an amazing journey! You're doing great!</p>
      </div>
    `,
    ageGroups: ["3-5"],
    themeId: "development",
  },
  {
    id: "puberty-changes",
    title: "Understanding Puberty",
    description: "Physical and emotional changes during puberty",
    content: `
      <h2>What Is Puberty?</h2>
      <p>Puberty is the time when your body begins to develop and change as you move from childhood to adulthood. Everyone goes through puberty, though it happens at different times for different people.</p>
      
      <div class="bg-blue-50 p-4 rounded-lg my-4 border border-blue-100 flex items-start gap-3">
        <div class="text-2xl">💡</div>
        <div>
          <h3 class="font-bold text-blue-700">Did You Know?</h3>
          <p>Puberty usually starts between ages 8-13 for girls and 9-14 for boys. But it's perfectly normal to start earlier or later!</p>
        </div>
      </div>
      
      <div class="my-5">
        <h3 class="text-shield-purple font-bold">Physical Changes Timeline</h3>
        <div class="relative">
          <div class="absolute left-2 top-0 bottom-0 w-1 bg-shield-purple-light"></div>
          <div class="ml-8 space-y-4 py-3">
            <div class="relative">
              <div class="absolute -left-6 w-4 h-4 rounded-full bg-shield-purple"></div>
              <h4 class="font-bold">Early Changes</h4>
              <p>Growth spurts begin and you might grow taller quickly</p>
            </div>
            <div class="relative">
              <div class="absolute -left-6 w-4 h-4 rounded-full bg-shield-purple"></div>
              <h4 class="font-bold">Middle Changes</h4>
              <p>Body hair starts growing and skin may become oilier</p>
            </div>
            <div class="relative">
              <div class="absolute -left-6 w-4 h-4 rounded-full bg-shield-purple"></div>
              <h4 class="font-bold">Later Changes</h4>
              <p>Voice changes (especially for boys) and body shape changes</p>
            </div>
          </div>
        </div>
      </div>
      
      <h3 class="text-shield-purple mt-4">Emotional Changes</h3>
      <p>During puberty, you might experience new and stronger emotions. This is normal! You might sometimes feel:</p>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-2 my-3">
        <div class="bg-yellow-50 p-3 rounded text-center border border-yellow-100">
          <div class="text-xl">😊→😢</div>
          <p class="text-sm">More sensitive</p>
        </div>
        <div class="bg-yellow-50 p-3 rounded text-center border border-yellow-100">
          <div class="text-xl">🤔</div>
          <p class="text-sm">Concerned about appearance</p>
        </div>
        <div class="bg-yellow-50 p-3 rounded text-center border border-yellow-100">
          <div class="text-xl">👫</div>
          <p class="text-sm">Interested in new friendships</p>
        </div>
        <div class="bg-yellow-50 p-3 rounded text-center border border-yellow-100">
          <div class="text-xl">🦅</div>
          <p class="text-sm">More independent</p>
        </div>
      </div>
      
      <div class="flex items-center gap-2 bg-green-50 p-4 rounded-lg my-4 border border-green-100">
        <div class="text-xl">✏️</div>
        <div>
          <p><strong>Journal Prompt:</strong> What's one thing about growing up that you're excited about? What's one thing that makes you nervous?</p>
        </div>
      </div>
      
      <div class="bg-purple-50 p-4 rounded-lg my-4 border border-purple-100">
        <h3 class="font-bold text-purple-700">Remember!</h3>
        <ul class="list-disc pl-5">
          <li>Everyone goes through puberty at their own pace</li>
          <li>It's okay to ask questions about the changes you notice</li>
          <li>Talk to trusted adults when you need guidance or support</li>
        </ul>
      </div>
    `,
    ageGroups: ["10-12"],
    themeId: "development",
  },
  {
    id: "physical-emotional-dev",
    title: "Physical & Emotional Development",
    description: "Understanding the changes in your body and emotions",
    content: `
      <div class="bg-shield-purple-light p-5 rounded-lg mb-5">
        <h2 class="text-shield-purple font-bold text-xl">Your Changing Body</h2>
        <p>Adolescence is a significant period of transformation. The changes you're experiencing are natural biological processes that everyone goes through, though timing and progression vary from person to person.</p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-5 my-5">
        <div class="bg-pink-50 p-4 rounded-lg border border-pink-100">
          <h3 class="font-bold text-pink-700">For Young Women</h3>
          <ul class="list-disc pl-5 space-y-1 mt-2">
            <li>Development of breasts</li>
            <li>Growth of body hair</li>
            <li>Widening of hips</li>
            <li>Beginning of menstruation (periods)</li>
            <li>Increase in body fat</li>
          </ul>
        </div>
        
        <div class="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 class="font-bold text-blue-700">For Young Men</h3>
          <ul class="list-disc pl-5 space-y-1 mt-2">
            <li>Growth of facial and body hair</li>
            <li>Voice deepening</li>
            <li>Development of muscles</li>
            <li>Growth of genitals</li>
            <li>Broadening of shoulders</li>
          </ul>
        </div>
      </div>
      
      <div class="flex items-center gap-3 bg-amber-50 p-4 rounded-lg my-5 border border-amber-100">
        <div class="text-2xl">💭</div>
        <div>
          <h3 class="font-bold">Myth vs. Fact</h3>
          <p><strong>Myth:</strong> Everyone develops at the same time and pace.<br>
          <strong>Fact:</strong> Each person has their own unique development timeline.</p>
        </div>
      </div>
      
      <h3 class="text-shield-purple font-bold mt-5">Emotional Intelligence</h3>
      <p>Along with physical changes come emotional developments. Learning to understand and manage your emotions is a crucial life skill.</p>
      
      <div class="my-5 bg-white p-4 rounded-lg border">
        <h4 class="font-bold">The Emotional Landscape of Adolescence:</h4>
        <div class="space-y-3 mt-3">
          <div class="flex gap-2 items-center">
            <div class="bg-purple-100 text-purple-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">1</div>
            <div>
              <p><strong>Mood fluctuations</strong> - Your emotions may change quickly, which is normal due to hormonal changes</p>
            </div>
          </div>
          <div class="flex gap-2 items-center">
            <div class="bg-purple-100 text-purple-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">2</div>
            <div>
              <p><strong>Identity exploration</strong> - You may be thinking more about who you are and who you want to become</p>
            </div>
          </div>
          <div class="flex gap-2 items-center">
            <div class="bg-purple-100 text-purple-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">3</div>
            <div>
              <p><strong>New attractions</strong> - You may develop romantic or sexual feelings</p>
            </div>
          </div>
          <div class="flex gap-2 items-center">
            <div class="bg-purple-100 text-purple-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">4</div>
            <div>
              <p><strong>Desire for autonomy</strong> - Seeking more independence from parents/guardians</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-green-50 p-4 rounded-lg my-5 border border-green-100">
        <h3 class="font-bold text-green-700">Healthy Ways to Manage Emotions</h3>
        <div class="grid grid-cols-2 gap-3 mt-3">
          <div class="bg-white p-3 rounded border">
            <p class="text-center">🧘‍♀️ Practice mindfulness</p>
          </div>
          <div class="bg-white p-3 rounded border">
            <p class="text-center">🏃‍♂️ Regular physical activity</p>
          </div>
          <div class="bg-white p-3 rounded border">
            <p class="text-center">📝 Keep a journal</p>
          </div>
          <div class="bg-white p-3 rounded border">
            <p class="text-center">👥 Talk to trusted people</p>
          </div>
        </div>
      </div>
      
      <div class="bg-shield-purple-light p-4 rounded-lg my-5">
        <h3 class="font-bold">Remember</h3>
        <p>These changes can sometimes feel confusing or overwhelming, but they are a normal part of growing up. If you have questions or concerns, don't hesitate to talk to a trusted adult, healthcare provider, school counselor, or other trusted person in your life.</p>
      </div>
      
      <div class="flex items-center gap-2 bg-blue-50 p-4 rounded-lg my-5 border border-blue-100">
        <div class="text-xl">📚</div>
        <p><strong>Self-Reflection:</strong> What's one way you can take better care of your physical and emotional health this week?</p>
      </div>
    `,
    ageGroups: ["13-16", "17-18"],
    themeId: "development",
  },
  {
    id: "family-friends",
    title: "Family and Friends",
    description: "Understanding family relationships and making good friends",
    content: `
      <h2>Our Special Families</h2>
      <p>Families are like beautiful gardens with different types of flowers - each one special in its own way!</p>
      
      <h3>Types of Families</h3>
      <ul>
        <li>Some families are big, some are small</li>
        <li>Some live with mummy and daddy</li>
        <li>Some live with grandparents</li>
        <li>Some live with aunties or uncles</li>
        <li>All families are special!</li>
      </ul>

      <h3>Being a Good Family Member</h3>
      <ul>
        <li>Showing love and respect</li>
        <li>Helping with small tasks</li>
        <li>Using kind words</li>
        <li>Following family rules</li>
      </ul>

      <h3>Making Good Friends</h3>
      <p>Good friends:</p>
      <ul>
        <li>Are kind and gentle</li>
        <li>Share and take turns</li>
        <li>Help each other</li>
        <li>Play safely together</li>
      </ul>

      <h3>Staying Safe with Others</h3>
      <ul>
        <li>Play where grown-ups can see you</li>
        <li>Stay with trusted friends</li>
        <li>Tell a grown-up if someone is unkind</li>
        <li>Trust your feelings</li>
      </ul>
    `,
    ageGroups: ["3-5"],
    themeId: "relationships",
  },
  {
    id: "staying-safe",
    title: "Staying Safe and Happy",
    description: "Learning ways to stay safe and protected",
    content: `
      <h2>Keeping Safe and Happy</h2>
      <p>God made us special, and we need to stay safe and happy!</p>
      
      <h3>Safe and Unsafe Touches</h3>
      <ul>
        <li>Safe touches make us feel happy (like hugs from family)</li>
        <li>Unsafe touches make us feel scared or sad</li>
        <li>We can say "NO" to touches we don't like</li>
        <li>Tell a trusted grown-up if you feel unsafe</li>
      </ul>

      <h3>Safe Adults</h3>
      <p>These people help keep us safe:</p>
      <ul>
        <li>Parents and family members</li>
        <li>Teachers at school</li>
        <li>Religious leaders</li>
        <li>Doctors and nurses</li>
      </ul>

      <h3>Safety Rules</h3>
      <ul>
        <li>Stay with trusted grown-ups</li>
        <li>Don't go with strangers</li>
        <li>Tell someone if you feel scared</li>
        <li>Know your home address</li>
      </ul>
    `,
    ageGroups: ["3-5"],
    themeId: "values",
  },
  {
    id: "healthy-habits",
    title: "Healthy Happy Living",
    description: "Learning good health habits for a happy life",
    content: `
      <h2>Staying Healthy and Strong</h2>
      <p>When we take care of our bodies, we stay happy and strong!</p>
      
      <h3>Clean and Healthy</h3>
      <ul>
        <li>Wash hands with soap</li>
        <li>Brush teeth morning and night</li>
        <li>Take baths to stay clean</li>
        <li>Wear clean clothes</li>
      </ul>

      <h3>Healthy Food Choices</h3>
      <ul>
        <li>Eat lots of colorful fruits</li>
        <li>Enjoy fresh vegetables</li>
        <li>Drink clean water</li>
        <li>Have regular meals</li>
      </ul>

      <h3>Exercise and Rest</h3>
      <ul>
        <li>Play and move every day</li>
        <li>Get enough sleep</li>
        <li>Take rest when tired</li>
        <li>Enjoy outdoor games safely</li>
      </ul>

      <h3>When We Feel Sick</h3>
      <ul>
        <li>Tell a grown-up if you don't feel well</li>
        <li>Take medicine only from trusted adults</li>
        <li>Rest in bed if needed</li>
        <li>Visit the health center when sick</li>
      </ul>
    `,
    ageGroups: ["3-5"],
    themeId: "health",
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
        id: "repro-q1",
        question: "What is the most effective way to prevent pregnancy?",
        options: [
          "Taking a bath after sexual activity",
          "Abstinence (not having sexual intercourse)",
          "Drinking lemon juice after sexual activity",
          "Taking pain medication before sexual activity"
        ],
        correctAnswer: 1,
        explanation: "Abstinence, or not having sexual intercourse, is the most effective way to prevent pregnancy as it is 100% effective."
      },
      {
        id: "repro-q2",
        question: "Which statement about menstruation is true?",
        options: [
          "It only happens to girls who are sexually active",
          "It is a sign that a girl's body is developing naturally",
          "It means there is something wrong with the body",
          "It only happens once a year"
        ],
        correctAnswer: 1,
        explanation: "Menstruation is a natural part of female development and indicates that the reproductive system is working normally."
      }
    ]
  }
];

export const qaData: QA[] = [
  {
    id: "qa1",
    question: "What is puberty?",
    answer: "Puberty is when your body changes from a child's body to an adult's body. It usually starts between ages 8-13 for girls and 9-14 for boys. During puberty, you'll grow taller, develop body hair, and notice other changes.",
    ageGroups: ["10-12"],
    themeId: "development",
    isCommonQuestion: true
  },
  {
    id: "qa2",
    question: "What is menstruation?",
    answer: "Menstruation (or having a period) is when blood and tissue from the uterus leave the body through the vagina. It usually happens once a month and is a normal part of growing up for girls.",
    ageGroups: ["10-12", "13-16"],
    themeId: "health",
    isCommonQuestion: true
  },
  {
    id: "qa3",
    question: "How can I stay safe online?",
    answer: "To stay safe online: never share personal information, don't meet people from the internet without a trusted adult, use privacy settings, think before you post, and tell a trusted adult if something makes you uncomfortable.",
    ageGroups: ["6-9", "10-12", "13-16", "17-18"],
    themeId: "values",
    isCommonQuestion: true
  },
  {
    id: "qa4",
    question: "What is consent?",
    answer: "Consent means getting permission before touching someone or entering their personal space. Everyone has the right to say 'yes' or 'no' about their own body. For older teens, consent is especially important in romantic or sexual situations - it must be freely given, enthusiastic, and can be withdrawn at any time.",
    ageGroups: ["10-12", "13-16", "17-18"],
    themeId: "relationships",
    isCommonQuestion: true
  },
  {
    id: "qa5",
    question: "Can I get pregnant the first time I have sex?",
    answer: "Yes, pregnancy can occur anytime unprotected sexual intercourse happens, including the first time. The only 100% effective way to prevent pregnancy is abstinence (not having sex). If someone chooses to be sexually active, contraception methods like condoms can help prevent pregnancy.",
    ageGroups: ["13-16", "17-18"],
    themeId: "health",
    isCommonQuestion: true
  },
  {
    id: "qa6",
    question: "How are babies made?",
    answer: "Babies are made when a special cell from a man (called a sperm) joins with a special cell from a woman (called an egg). This happens when grown-ups who love each other very much share a special kind of hug.",
    ageGroups: ["3-5", "6-9"],
    themeId: "development",
    isCommonQuestion: true
  },
  {
    id: "qa7",
    question: "Why do I need to wash my hands?",
    answer: "Washing your hands is important because it removes tiny germs that can make you sick. We should wash hands before eating, after using the toilet, after playing outside, and after sneezing or coughing.",
    ageGroups: ["3-5", "6-9"],
    themeId: "health",
    isCommonQuestion: true
  },
  {
    id: "qa8",
    question: "What are STIs and how can I prevent them?",
    answer: "STIs (Sexually Transmitted Infections) are infections that spread through sexual contact. The most reliable ways to prevent STIs are abstinence (not having sex) or using condoms correctly every time you have sex. Regular testing is also important if you're sexually active.",
    ageGroups: ["13-16", "17-18"],
    themeId: "health",
    isCommonQuestion: true
  },
  {
    id: "qa9",
    question: "How do I know if I'm ready for a relationship?",
    answer: "You might be ready for a relationship if you: respect yourself and others, can communicate your feelings, understand what a healthy relationship looks like, feel comfortable setting boundaries, and are interested in someone for who they are (not just to have a relationship).",
    ageGroups: ["13-16", "17-18"],
    themeId: "relationships",
    isCommonQuestion: true
  },
  {
    id: "qa10",
    question: "Why are some parts of my body private?",
    answer: "Private parts are the parts of your body covered by underwear. They're private because they're special and belong just to you. No one should look at or touch your private parts except trusted adults helping you stay clean and healthy, like parents or doctors.",
    ageGroups: ["3-5", "6-9"],
    themeId: "development",
    isCommonQuestion: true
  }
];
