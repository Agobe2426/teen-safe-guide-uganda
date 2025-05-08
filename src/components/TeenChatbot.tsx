
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MessageCircle, ArrowUp, Search } from "lucide-react";
import { AgeGroup } from "@/components/AgeSelector";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface TeenChatbotProps {
  ageGroup?: AgeGroup;
}

const TeenChatbot: React.FC<TeenChatbotProps> = ({ ageGroup }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello! I'm Teen Shield's friendly chatbot. Ask me any questions about puberty, body changes, relationships, or health. I'm here to help!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const generateReply = async (question: string) => {
    setIsTyping(true);

    // Simple question matching system
    // In a real app, this would be replaced with a more sophisticated AI/ML model
    const lowerQuestion = question.toLowerCase();
    let answer = "";
    
    if (lowerQuestion.includes("menstruation") || lowerQuestion.includes("period")) {
      if (ageGroup === "3-5" || ageGroup === "6-9") {
        answer = "Menstruation or 'periods' are a natural process that happens to girls when they grow older. It's a sign that the body is healthy and developing. When you're a bit older, we can talk more about the details.";
      } else if (ageGroup === "10-12") {
        answer = "Menstruation (or periods) is a natural monthly process where the body releases blood and tissue from the uterus. It usually starts between ages 9-16 and is a normal part of growing up. During this time, using pads or other products helps manage the flow, and it's normal to feel some discomfort.";
      } else {
        answer = "Menstruation is the monthly shedding of the uterus lining. It happens when an egg isn't fertilized. Periods typically last 3-7 days and occur every 21-35 days. It's normal to experience symptoms like cramping, mood changes, or tiredness. If you have severe pain or very heavy bleeding, it's good to talk to a healthcare provider.";
      }
    } else if (lowerQuestion.includes("pregnant") || lowerQuestion.includes("pregnancy")) {
      if (ageGroup === "3-5" || ageGroup === "6-9") {
        answer = "Pregnancy is how babies grow before they're born. When parents want to have a baby, a tiny seed from a dad and a tiny egg from a mom join together, and the baby grows in the mom's tummy until it's ready to be born.";
      } else if (ageGroup === "10-12") {
        answer = "Pregnancy happens when a sperm cell joins with an egg cell. The fertilized egg then grows into a baby in the mother's uterus (womb). To become pregnant, a person needs to have sexual intercourse without protection.";
      } else {
        answer = "Pregnancy occurs when sperm fertilizes an egg, which then implants in the uterus lining. Sexual intercourse without protection (like condoms or other contraceptives) can result in pregnancy. The only 100% effective way to prevent pregnancy is abstinence, but there are many effective birth control methods available if you're sexually active.";
      }
    } else if (lowerQuestion.includes("consent")) {
      if (ageGroup === "3-5" || ageGroup === "6-9") {
        answer = "Consent means asking permission and respecting when someone says 'no'. For example, always ask before hugging someone, and if they say 'no', that's okay! Your body belongs to you, and you can say 'no' if you don't want to be touched.";
      } else if (ageGroup === "10-12") {
        answer = "Consent means getting permission before touching someone or entering their personal space. Everyone has the right to say 'yes' or 'no' about their own body. It's important to respect others' boundaries and to speak up about your own boundaries too.";
      } else {
        answer = "Consent means getting clear permission before any intimate activity. It must be freely given, reversible, informed, enthusiastic, and specific. If someone is asleep, intoxicated, or pressured, they cannot give consent. Remember that anyone can withdraw consent at any time, and 'no' always means no.";
      }
    } else if (lowerQuestion.includes("puberty")) {
      if (ageGroup === "3-5" || ageGroup === "6-9") {
        answer = "Puberty is when children's bodies grow and change to become more like adults. It happens to everyone when they get older, and it's a normal part of growing up.";
      } else if (ageGroup === "10-12") {
        answer = "Puberty is when your body changes from a child's body to an adult's. Girls often start between 8-13 years, and boys between 9-14 years. You might grow taller quickly, develop body hair, and notice other changes like voice changes for boys or breast development for girls. It's a natural process that everyone goes through.";
      } else {
        answer = "Puberty is the process of physical changes that allow the body to reach sexual maturity. It involves hormonal changes that cause physical development like growth spurts, body hair growth, genital development, voice changes (especially in males), and breast development in females. Emotional changes are also common, including mood swings and new feelings of attraction. Everyone goes through puberty at their own pace.";
      }
    } else if (lowerQuestion.includes("sti") || lowerQuestion.includes("std") || lowerQuestion.includes("sexually transmitted")) {
      if (ageGroup === "3-5" || ageGroup === "6-9") {
        answer = "Those are health topics that teens and adults learn about. When you're older, you'll learn more about keeping your body healthy in different ways.";
      } else if (ageGroup === "10-12") {
        answer = "STIs (sexually transmitted infections) are infections that can spread when people have close physical contact. They're something you'll learn more about when you're a bit older, but the important thing to know is that they're preventable and many are treatable.";
      } else {
        answer = "STIs (sexually transmitted infections) are infections passed from one person to another through sexual contact. Common STIs include chlamydia, gonorrhea, HPV, herpes, and HIV. Many STIs can be prevented by using condoms correctly during sexual activity. Regular testing is important if you're sexually active. Most STIs are treatable, and many are curable with proper medical care.";
      }
    } else {
      answer = "Thank you for your question. This is an important topic, but I don't have specific information on this yet. Consider asking a trusted adult, healthcare provider, or counselor. If you prefer, you can also check reliable resources like teen health websites from organizations like WHO or your local health department.";
    }

    setTimeout(() => {
      const newMessage: Message = {
        id: `bot-${Date.now()}`,
        content: answer,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!input.trim()) return;

    const newMessage: Message = {
      id: `user-${Date.now()}`,
      content: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    generateReply(input);
    setInput("");
  };

  const handleQuickQuestion = (question: string) => {
    const newMessage: Message = {
      id: `user-${Date.now()}`,
      content: question,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    generateReply(question);
  };

  const getSuggestedQuestions = () => {
    if (ageGroup === "3-5") {
      return [
        "Why are boys and girls different?",
        "Where do babies come from?",
        "What are private parts?"
      ];
    } else if (ageGroup === "6-9") {
      return [
        "What is puberty?",
        "Why do people get married?",
        "How do I stay safe around others?"
      ];
    } else if (ageGroup === "10-12") {
      return [
        "What changes happen during puberty?",
        "What is menstruation?",
        "How do I know what's normal for my body?"
      ];
    } else if (ageGroup === "13-16") {
      return [
        "How does pregnancy happen?",
        "What is consent?",
        "How can I handle peer pressure?"
      ];
    } else {
      return [
        "What are different contraception methods?",
        "How do I talk about boundaries in relationships?",
        "What should I know about STIs?"
      ];
    }
  };

  return (
    <Card className="flex flex-col h-[500px] border rounded-lg overflow-hidden shadow-sm">
      <div className="bg-shield-purple p-3 text-white flex items-center">
        <MessageCircle className="h-5 w-5 mr-2" />
        <h3 className="font-medium">Teen Shield Chat Assistant</h3>
      </div>
      
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex",
              message.sender === "user" ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(
                "max-w-[80%] rounded-lg px-4 py-2",
                message.sender === "user"
                  ? "bg-shield-purple text-white rounded-br-none"
                  : "bg-gray-100 text-gray-800 rounded-bl-none"
              )}
            >
              <p>{message.content}</p>
              <p className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-lg px-4 py-2 bg-gray-100 text-gray-800">
              <div className="flex space-x-1">
                <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "200ms" }}></div>
                <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "400ms" }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {messages.length === 1 && (
        <div className="px-4 py-3 bg-gray-50 border-t">
          <p className="text-sm font-medium mb-2">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            {getSuggestedQuestions().map((question, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-xs"
                onClick={() => handleQuickQuestion(question)}
              >
                <Search className="h-3 w-3 mr-1" />
                {question}
              </Button>
            ))}
          </div>
        </div>
      )}
      
      <form onSubmit={handleSend} className="p-3 border-t flex gap-2">
        <Input
          placeholder="Ask a question..."
          value={input}
          onChange={handleInputChange}
          className="flex-grow"
        />
        <Button type="submit" size="icon" disabled={!input.trim() || isTyping}>
          <ArrowUp className="h-4 w-4" />
        </Button>
      </form>
    </Card>
  );
};

export default TeenChatbot;
