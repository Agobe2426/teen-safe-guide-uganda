
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import VoiceReader from "@/components/VoiceReader";
import ParentControls from "@/components/ParentControls";

const YoungLearningModule = () => {
  const navigate = useNavigate();
  const [parentalMode, setParentalMode] = useState(false);
  const [privatePartTerms, setPrivatePartTerms] = useState({
    boy: "private parts",
    girl: "private parts"
  });

  // Content sections
  const sections = [
    {
      id: "uniqueness",
      title: "I Am Special!",
      content: `
        <div class="space-y-4">
          <h2 class="text-xl font-bold text-shield-purple">Every Child is Special</h2>
          
          <p>Hello! You are very special. There is no one else exactly like you!</p>
          
          <div class="bg-yellow-50 p-3 rounded-lg border border-yellow-100 flex items-center gap-3">
            <div class="text-2xl">✨</div>
            <p>You are important. You are loved. You are amazing!</p>
          </div>
          
          <h3 class="font-bold text-shield-purple">Boys and Girls</h3>
          <p>Some children are boys. Some children are girls. All children are special!</p>
          
          <div class="grid grid-cols-2 gap-3 my-4">
            <div class="bg-blue-50 p-3 rounded-lg border border-blue-100 text-center">
              <p>Boys are special!</p>
            </div>
            <div class="bg-pink-50 p-3 rounded-lg border border-pink-100 text-center">
              <p>Girls are special!</p>
            </div>
          </div>
          
          <div class="bg-purple-50 p-3 rounded-lg border border-purple-100">
            <h3 class="font-bold">Let's Think!</h3>
            <p>What makes you special? Can you name three things you like about yourself?</p>
          </div>
          
          <div class="bg-green-50 p-3 rounded-lg border border-green-100 flex items-center gap-3">
            <div class="text-2xl">🎵</div>
            <div>
              <p class="font-bold">Song: "I Am Special"</p>
              <p>I am special, I am special<br/>Look at me, look at me<br/>Someone very special, someone very special<br/>That is me, that is me!</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "bodyAwareness",
      title: "My Amazing Body",
      content: `
        <div class="space-y-4">
          <h2 class="text-xl font-bold text-shield-purple">My Body Parts</h2>
          
          <p>Your body helps you play, learn, and do many wonderful things!</p>
          
          <div class="grid grid-cols-2 gap-3 my-4">
            <div class="bg-blue-50 p-3 rounded-lg border border-blue-100 text-center">
              <p class="font-bold">Head</p>
              <p>For thinking</p>
            </div>
            <div class="bg-blue-50 p-3 rounded-lg border border-blue-100 text-center">
              <p class="font-bold">Eyes</p>
              <p>For seeing</p>
            </div>
            <div class="bg-blue-50 p-3 rounded-lg border border-blue-100 text-center">
              <p class="font-bold">Ears</p>
              <p>For hearing</p>
            </div>
            <div class="bg-blue-50 p-3 rounded-lg border border-blue-100 text-center">
              <p class="font-bold">Hands</p>
              <p>For touching</p>
            </div>
          </div>
          
          <h3 class="font-bold text-shield-purple">Private Body Parts</h3>
          <p>Some parts of your body are private. These are the parts covered by your underwear.</p>
          <p>Boys and girls have different private parts.</p>
          
          <div id="privatePartsContent" class="bg-purple-50 p-4 rounded-lg border border-purple-100 my-4">
            <p>Private parts are special and belong just to you. Only you, your parents, or a doctor should touch them to keep them clean and healthy.</p>
          </div>
          
          <div class="bg-green-50 p-3 rounded-lg border border-green-100 flex items-center gap-3">
            <div class="text-2xl">🎵</div>
            <div>
              <p class="font-bold">Song: "Head, Shoulders, Knees and Toes"</p>
              <p>Head, shoulders, knees and toes, knees and toes<br/>Head, shoulders, knees and toes, knees and toes<br/>Eyes and ears and mouth and nose<br/>Head, shoulders, knees and toes, knees and toes</p>
            </div>
          </div>
          
          <div class="bg-yellow-50 p-3 rounded-lg border border-yellow-100">
            <h3 class="font-bold">Activity</h3>
            <p>Can you touch your head? Your shoulders? Your knees? Your toes?</p>
          </div>
        </div>
      `
    },
    {
      id: "safeTouch",
      title: "Safe and Unsafe Touch",
      content: `
        <div class="space-y-4">
          <h2 class="text-xl font-bold text-shield-purple">Good Touch, Bad Touch</h2>
          
          <p>Some touches make you feel happy and safe. Some touches might make you feel sad or scared.</p>
          
          <div class="bg-green-50 p-3 rounded-lg border border-green-100 my-4">
            <h3 class="font-bold text-green-700">Safe Touch</h3>
            <ul class="list-disc pl-5 space-y-1">
              <li>Hugs from family members</li>
              <li>High-fives with friends</li>
              <li>Holding hands to cross the road</li>
              <li>A doctor checking you when you're sick (with a parent there)</li>
            </ul>
          </div>
          
          <div class="bg-red-50 p-3 rounded-lg border border-red-100 my-4">
            <h3 class="font-bold text-red-700">Unsafe Touch</h3>
            <ul class="list-disc pl-5 space-y-1">
              <li>Touch that hurts you</li>
              <li>Touch that makes you feel scared</li>
              <li>Touch on private parts that is not for keeping clean or healthy</li>
              <li>Touch that someone says must be a secret</li>
            </ul>
          </div>
          
          <div class="bg-purple-50 p-4 rounded-lg border border-purple-100">
            <h3 class="font-bold">If You Feel Unsafe:</h3>
            <ul class="list-disc pl-5 space-y-1">
              <li>Say "NO" in a big, strong voice</li>
              <li>Go away from that person if you can</li>
              <li>Tell a trusted grown-up right away</li>
              <li>Remember: It's never your fault</li>
            </ul>
          </div>
          
          <div class="bg-yellow-50 p-3 rounded-lg border border-yellow-100 flex items-center gap-3 my-4">
            <div class="text-2xl">💪</div>
            <p>You are brave and strong! Your body belongs to you!</p>
          </div>
          
          <div class="bg-green-50 p-3 rounded-lg border border-green-100">
            <h3 class="font-bold">Let's Practice!</h3>
            <p>Can you practice saying "NO" in a big, strong voice?</p>
            <p>Who are the trusted grown-ups you can talk to?</p>
          </div>
        </div>
      `
    },
    {
      id: "storyTime",
      title: "Story Time",
      content: `
        <div class="space-y-4">
          <h2 class="text-xl font-bold text-shield-purple">Kato and Nakato Learn About Safety</h2>
          
          <div class="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p>Once upon a time, there were twins named Kato and Nakato. They lived in a beautiful village in Uganda.</p>
            <p class="mt-2">One day, their teacher taught them about their bodies. They learned that some parts of their bodies are private.</p>
            <p class="mt-2">"Your private parts are covered by your underwear," said the teacher. "No one should touch your private parts except to keep you clean and healthy."</p>
            <p class="mt-2">Kato raised his hand. "What if someone tries to touch us there?" he asked.</p>
            <p class="mt-2">"You say 'NO' in a big voice, go away if you can, and tell a trusted grown-up," said the teacher.</p>
            <p class="mt-2">Nakato thought about the trusted grown-ups in her life. "Like our parents, our aunt, and you, teacher?" she asked.</p>
            <p class="mt-2">"Yes, exactly!" said the teacher. "Remember, your body belongs to you!"</p>
            <p class="mt-2">Kato and Nakato felt brave and strong knowing how to keep themselves safe.</p>
          </div>
          
          <div class="bg-yellow-50 p-3 rounded-lg border border-yellow-100 my-4">
            <h3 class="font-bold">Story Questions:</h3>
            <ol class="list-decimal pl-5 space-y-1">
              <li>What did Kato and Nakato learn about their bodies?</li>
              <li>What should you do if someone tries to touch your private parts?</li>
              <li>Who are the trusted grown-ups in your life?</li>
            </ol>
          </div>
        </div>
      `
    }
  ];

  const [activeTab, setActiveTab] = useState(sections[0].id);
  
  // Update private parts terminology based on parent settings
  const updatePrivatePartContent = () => {
    const contentElement = document.getElementById("privatePartsContent");
    if (contentElement) {
      contentElement.innerHTML = `
        <p>Boys have a ${privatePartTerms.boy} that is private.</p>
        <p>Girls have a ${privatePartTerms.girl} that is private.</p>
        <p>Private parts are special and belong just to you. Only you, your parents, or a doctor should touch them to keep them clean and healthy.</p>
      `;
    }
  };

  // Handle parental controls submission
  const handleParentalControlsSubmit = (values: any) => {
    setPrivatePartTerms({
      boy: values.boyTerminology || "private parts",
      girl: values.girlTerminology || "private parts"
    });
    setParentalMode(false);
    setTimeout(updatePrivatePartContent, 100);
  };

  const getActiveContent = () => {
    const section = sections.find(s => s.id === activeTab);
    return section ? section.content : '';
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <div className="teen-shield-container">
          <div className="mb-6">
            <Link to="/learn" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Learning Areas
            </Link>
            
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-shield-purple">Growing and Changing</h1>
              <Button variant="outline" onClick={() => setParentalMode(true)}>
                Parent Settings
              </Button>
            </div>
            <p className="text-muted-foreground">For children ages 3-5 years</p>
          </div>
          
          {parentalMode ? (
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Parent Controls</h2>
              <p className="mb-4">Choose the terminology your child is familiar with:</p>
              
              <ParentControls 
                onSubmit={handleParentalControlsSubmit}
                initialValues={{
                  boyTerminology: privatePartTerms.boy,
                  girlTerminology: privatePartTerms.girl
                }}
                fields={[
                  {
                    name: "boyTerminology",
                    label: "Term for boy's private parts",
                    type: "select",
                    options: ["private parts", "penis", "willy", "boy parts"]
                  },
                  {
                    name: "girlTerminology",
                    label: "Term for girl's private parts",
                    type: "select",
                    options: ["private parts", "vagina", "girl parts"]
                  }
                ]}
              />
              
              <Button variant="outline" onClick={() => setParentalMode(false)} className="mt-4">
                Cancel
              </Button>
            </Card>
          ) : (
            <div className="space-y-6">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-4 mb-6">
                  {sections.map((section) => (
                    <TabsTrigger key={section.id} value={section.id}>
                      {section.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                <Card className="p-6">
                  <TabsContent value={activeTab} className="mt-0 space-y-4">
                    <div 
                      className="prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: getActiveContent() }}
                    />
                  </TabsContent>

                  <div className="mt-6 pt-4 border-t">
                    <VoiceReader
                      text={`${sections.find(s => s.id === activeTab)?.title}. ${document.querySelector('.prose')?.textContent}`}
                      ageGroup="3-5"
                    />
                    
                    <div className="mt-4 flex justify-between">
                      <Button 
                        variant="outline"
                        onClick={() => {
                          const currentIndex = sections.findIndex(s => s.id === activeTab);
                          const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
                          setActiveTab(sections[prevIndex].id);
                        }}
                        disabled={sections.findIndex(s => s.id === activeTab) === 0}
                      >
                        Previous
                      </Button>
                      
                      <Button
                        onClick={() => {
                          const currentIndex = sections.findIndex(s => s.id === activeTab);
                          const nextIndex = (currentIndex + 1) % sections.length;
                          setActiveTab(sections[nextIndex].id);
                        }}
                        disabled={sections.findIndex(s => s.id === activeTab) === sections.length - 1}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                </Card>
              </Tabs>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default YoungLearningModule;
