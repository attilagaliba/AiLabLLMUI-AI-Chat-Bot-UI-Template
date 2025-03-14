"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

// Dosya tipi tanımlamaları
type FileType = {
  type: "pdf" | "ppt" | "link";
  name: string;
  size?: string;
  url?: string;
};

type MessageType = {
  id: number;
  type: "bot" | "user";
  avatar?: string; // Bot için zorunlu, user için opsiyonel
  message: string;
  time: string;
  image?: string | StaticImageData;
  files?: FileType[];
};

const messages: MessageType[] = [
  {
    id: 1,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "Hello! How can I help you?",
    time: "09:30",
  },
  {
    id: 2,
    type: "user",
    message:
      "I need to prepare a report about the tourism sector. Can you help me?",
    time: "09:31",
  },
  {
    id: 3,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message:
      "Of course! I can prepare a detailed report about the tourism sector for you. Is there a specific area you'd like to focus on?",
    time: "09:31",
  },
  {
    id: 4,
    type: "user",
    message:
      "Can we focus on growth forecasts for 2022-2032 and the post-pandemic recovery process?",
    time: "09:32",
  },
  {
    id: 5,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message:
      "Here's the tourism sector analysis:\n\n1. Resilient Tourism: Despite the effects of the pandemic, international tourism recovered significantly in 2022.\n\n2. Growth Predictions: Forecasts show that travel and tourism GDP will grow by 5.8% annually between 2022-2032.",
    time: "09:33",
  },
  {
    id: 6,
    type: "user",
    message: "Great! What are the main drivers of this growth?",
    time: "09:34",
  },
  {
    id: 7,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message:
      "The main drivers are:\n\n1. Digital Transformation\n2. Sustainable Tourism\n3. Personalized Experiences\n4. Remote Work and Digital Nomadism\n5. Health and Safety Protocols",
    time: "09:35",
  },
  {
    id: 8,
    type: "user",
    message: "Can you compile this information in a report format?",
    time: "09:36",
  },
  {
    id: 9,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "Of course! I'm preparing a detailed report in PDF format for you.",
    time: "09:36",
  },
  {
    id: 10,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "Here's your report:",
    files: [
      {
        type: "pdf",
        name: "Tourism_Growth_Report_2022-2032.pdf",
        size: "2.4 MB",
      },
    ],
    time: "09:37",
  },
  {
    id: 11,
    type: "user",
    message: "Thanks! Can we add some visual materials as well?",
    time: "09:38",
  },
  {
    id: 12,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message:
      "Of course! Here's a graph showing tourism growth predictions:",
    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
    time: "09:39",
  },
  {
    id: 13,
    type: "user",
    message:
      "Perfect! Finally, can we turn this data into a presentation?",
    time: "09:40",
  },
  {
    id: 14,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message:
      "I'll prepare it right away! The presentation will cover these topics:\n\n1. Market Overview\n2. Growth Forecasts\n3. Opportunities and Challenges\n4. Recommendations",
    time: "09:41",
  },
  {
    id: 15,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "Here's your presentation:",
    files: [
      {
        type: "ppt",
        name: "Tourism_Industry_Presentation.ppt",
        size: "5.8 MB",
      },
    ],
    time: "09:42",
  },
  {
    id: 16,
    type: "user",
    message: "This looks great! Is there anything else you'd like to add?",
    time: "09:43",
  },
  {
    id: 17,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message:
      "Yes, I have one more suggestion. We can add a monthly updated dashboard at the end of the report. This way you can continuously track the data. Would you like that?",
    time: "09:44",
  },
  {
    id: 18,
    type: "user",
    message: "Yes, that would be great!",
    time: "09:45",
  },
  {
    id: 19,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message:
      "Great! I'm preparing the dashboard. I'll send it to you in a few minutes.",
    time: "09:46",
  },
  {
    id: 20,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "Here's your interactive dashboard:",
    files: [
      {
        type: "link",
        name: "Tourism_Analytics_Dashboard",
        url: "https://dashboard.example.com/tourism-analytics",
      },
    ],
    time: "09:48",
  },
];

// Image Generation Chat
export const imageGenerationChat: MessageType[] = [
  {
    id: 1,
    type: "user",
    message: "Can you create a mountain landscape image?",
    time: "16:30",
  },
  {
    id: 2,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "Of course! What kind of mountain landscape do you envision? Do you have any specific preferences like sunset, snowy mountains, or green valleys?",
    time: "16:30",
  },
  {
    id: 3,
    type: "user",
    message: "I'd like snowy mountain peaks at sunset. Can you also add a human silhouette in the foreground?",
    time: "16:31",
  },
  {
    id: 4,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "Here's the image you requested:",
    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
    time: "16:32",
  }
];

// User Analysis Chat
export const userAnalysisChat: MessageType[] = [
  {
    id: 1,
    type: "user",
    message: "I need to analyze user behavior. Where should I start?",
    time: "14:30",
  },
  {
    id: 2,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "I can help you with that. First, let's determine which metrics you want to focus on. For example:\n\n1. User Engagement\n2. Conversion Rates\n3. User Journey\n4. Segmentation\n\nWhich area is your priority?",
    time: "14:30",
  }
];

// AI Search Chat
export const aiSearchChat: MessageType[] = [
  {
    id: 1,
    type: "user",
    message: "How can I develop an AI-powered search system?",
    time: "15:45",
  },
  {
    id: 2,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "To develop an AI-powered search system, you can follow these steps:\n\n1. Data Collection and Processing\n2. NLP Model Integration\n3. Search Algorithm Selection\n4. Result Ranking\n\nWhich topic would you like to learn more about?",
    time: "15:46",
  }
];

// CAC Analysis Chat
export const cacAnalysisChat: MessageType[] = [
  {
    id: 1,
    type: "user",
    message: "How can we reduce our customer acquisition cost?",
    time: "16:15",
  },
  {
    id: 2,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "You can implement these strategies to reduce CAC:\n\n1. Target Audience Optimization\n2. Marketing Channel Analysis\n3. A/B Testing\n4. Content Marketing Strategy\n\nWould you like me to prepare a report?",
    time: "16:16",
  }
];

// LTV Analysis Chat
export const ltvAnalysisChat: MessageType[] = [
  {
    id: 1,
    type: "user",
    message: "How can we increase customer lifetime value?",
    time: "17:20",
  },
  {
    id: 2,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "I can suggest these strategies to increase LTV:\n\n1. Customer Loyalty Programs\n2. Personalized Marketing\n3. Product/Service Quality\n4. Customer Experience Improvement\n\nWhich strategy would you like to explore in detail?",
    time: "17:21",
  }
];

// Marketing Strategy Chat
export const marketingStrategyChat: MessageType[] = [
  {
    id: 1,
    type: "user",
    message: "I want to create an effective marketing strategy for 2024.",
    time: "15:45",
  },
  {
    id: 2,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "Important trends for 2024 marketing strategy:\n\n1. AI-Powered Marketing\n2. Sustainability-Focused Communication\n3. Video Content Strategy\n4. Community Management\n\nI can prepare a comprehensive strategy document for you. Would you like that?",
    time: "15:46",
  }
];

// Product Review Chat
export const productReviewChat: MessageType[] = [
  {
    id: 1,
    type: "user",
    message: "I want to analyze user feedback for our product.",
    time: "11:20",
  },
  {
    id: 2,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "We can analyze user feedback under these categories:\n\n1. User Satisfaction\n2. Feature Requests\n3. Bug Reports\n4. Suggestions and Improvements\n\nWhich area would you like to focus on?",
    time: "11:21",
  }
];

// Code Example Chat
export const codeExampleChat: MessageType[] = [
  {
    id: 1,
    type: "user",
    message: "Can you give me a JavaScript example?",
    time: "15:20",
  },
  {
    id: 2,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "Sure! Here's a simple JavaScript code:",
    time: "15:21",
  },
  {
    id: 3,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "```js\n// Random number guessing game\nconst randomNumber = Math.floor(Math.random() * 100) + 1;\nlet attempts = 0;\n\nfunction guessNumber(userGuess) {\n    attempts++;\n\n    if (userGuess < randomNumber) {\n        console.log(\"Enter a higher number.\");\n    } else if (userGuess > randomNumber) {\n        console.log(\"Enter a lower number.\");\n    } else {\n        console.log(`Congratulations! You found the correct number in ${attempts} attempts.\");\n    }\n}\n\n// Example usage\nguessNumber(50);  // User guessed 50\n```",
    time: "15:21",
  },
  {
    id: 4,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "This code:\n\n1. Generates a random number between 1-100\n2. Checks user's guesses\n3. Provides guiding hints\n4. Shows number of attempts on correct guess\n\nWould you like to see another example?",
    time: "15:22",
  },
  {
    id: 5,
    type: "user",
    message: "Yes, can you show me a more complex example?",
    time: "15:23",
  },
  {
    id: 6,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "Here's a more complex JavaScript example:",
    time: "15:24",
  },
  {
    id: 7,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "```js\n// Todo List Application\nclass TodoList {\n    constructor() {\n        this.todos = [];\n    }\n\n    addTodo(title) {\n        this.todos.push({\n            id: Date.now(),\n            title,\n            completed: false\n        });\n    }\n\n    toggleTodo(id) {\n        const todo = this.todos.find(t => t.id === id);\n        if (todo) {\n            todo.completed = !todo.completed;\n        }\n    }\n\n    deleteTodo(id) {\n        this.todos = this.todos.filter(t => t.id !== id);\n    }\n\n    getCompletedTodos() {\n        return this.todos.filter(t => t.completed);\n    }\n\n    getPendingTodos() {\n        return this.todos.filter(t => !t.completed);\n    }\n}\n\n// Usage example\nconst todoList = new TodoList();\n\ntodoList.addTodo(\"Learn JavaScript\");\ntodoList.addTodo(\"Develop React project\");\ntodoList.addTodo(\"Write unit tests\");\n\ntodoList.toggleTodo(1);  // Complete first task\nconsole.log(todoList.getCompletedTodos());  // Show completed tasks\n```",
    time: "15:24",
  },
  {
    id: 8,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "This example:\n\n1. Uses Class structure\n2. Contains CRUD operations\n3. Uses Array methods\n4. Shows modern JavaScript features\n\nWould you like me to explain how the code works step by step?",
    time: "15:25",
  }
];

// Translation Chat
export const translationChat: MessageType[] = [
  {
    id: 1,
    type: "user",
    message: "다음 텍스트를 영어, 프랑스어, 독일어로 번역해주세요:\n\n안녕하세요! 저는 한국에서 온 학생입니다. 저는 음악을 좋아하고 기타를 배우고 있습니다. 주말에는 친구들과 카페에서 만나는 것을 좋아합니다.",
    time: "11:20",
  },
  {
    id: 2,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "각 언어로 번역해드리겠습니다:\n\n🇬🇧 English:\nHello! I am a student from Korea. I like music and I'm learning to play the guitar. On weekends, I like to meet friends at cafes.\n\n🇫🇷 Français:\nBonjour! Je suis un(e) étudiant(e) de Corée. J'aime la musique et j'apprends à jouer de la guitare. Le week-end, j'aime retrouver mes amis dans des cafés.\n\n🇩🇪 Deutsch:\nHallo! Ich bin ein Student aus Korea. Ich mag Musik und lerne Gitarre spielen. Am Wochenende treffe ich mich gerne mit Freunden in Cafés.",
    time: "11:21",
  },
  {
    id: 3,
    type: "user",
    message: "이 문장도 번역해주세요:\n\n우리 회사는 환경 보호를 위해 재활용 제품을 사용하고 있습니다. 또한 에너지 절약을 위해 태양광 패널을 설치했습니다.",
    time: "11:22",
  },
  {
    id: 4,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "네, 번역해드리겠습니다:\n\n🇬🇧 English:\nOur company uses recycled products for environmental protection. We have also installed solar panels to save energy.\n\n🇫🇷 Français:\nNotre entreprise utilise des produits recyclés pour la protection de l'environnement. Nous avons également installé des panneaux solaires pour économiser l'énergie.\n\n🇩🇪 Deutsch:\nUnser Unternehmen verwendet recycelte Produkte zum Umweltschutz. Außerdem haben wir Solarpanele zur Energieeinsparung installiert.",
    time: "11:23",
  },
  {
    id: 5,
    type: "user",
    message: "마지막으로 이것도 번역해주세요:\n\n인공지능 기술은 우리의 일상생활을 크게 변화시키고 있습니다. 특히 자동 번역 시스템의 발전은 국제 소통을 더욱 원활하게 만들었습니다.",
    time: "11:24",
  },
  {
    id: 6,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "마지막 번역입니다:\n\n🇬🇧 English:\nArtificial Intelligence technology is significantly changing our daily lives. In particular, the advancement of automatic translation systems has made international communication much smoother.\n\n🇫🇷 Français:\nLa technologie de l'Intelligence Artificielle change considérablement notre vie quotidienne. En particulier, le développement des systèmes de traduction automatique a rendu la communication internationale beaucoup plus fluide.\n\n🇩🇪 Deutsch:\nKünstliche Intelligenz-Technologie verändert unseren Alltag erheblich. Insbesondere die Entwicklung automatischer Übersetzungssysteme hat die internationale Kommunikation deutlich vereinfacht.",
    time: "11:25",
  },
  {
    id: 7,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "추가로 각 번역에 대한 문법적 설명이나 문화적 차이점에 대해 설명이 필요하신가요?",
    time: "11:25",
  }
];

// AI Features Demo Chat
export const aiFeaturesChat: MessageType[] = [
  {
    id: 1,
    type: "user",
    message: "AI'ın farklı özelliklerini görebilir miyim? Örneğin görsel analizi, ses tanıma, duygu analizi gibi.",
    time: "13:45",
  },
  {
    id: 2,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "Size AI'ın temel özelliklerini gösterebilirim. Önce görsel analizi ile başlayalım:",
    time: "13:46",
  },
  {
    id: 3,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "📷 Görsel Analizi:\nYüklediğiniz görselde:\n- Dağlık bir manzara\n- Gün batımı ışığı\n- Ön planda bir insan silueti\n- Arka planda karlı dağ zirveleri\n- Atmosferik perspektif efekti\n\nGörselin duygusal tonu: Huzur verici, ilham verici\nTahmini çekim zamanı: Altın saat (gün batımı)\nKompozisyon: Kural üçte bir kullanılmış",
    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
    time: "13:47",
  },
  {
    id: 4,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "🎵 Ses Tanıma ve Analizi:\nKaydedilen ses örneği analizi:\n- Konuşmacı: Yetişkin, erkek\n- Dil: Türkçe\n- Ton: Profesyonel\n- Arka plan: Ofis ortamı\n- Gürültü seviyesi: Düşük\n\nMetne dönüştürülmüş içerik:\n\"Yapay zeka teknolojileri günümüzde birçok alanda kullanılmaktadır...\"",
    time: "13:48",
  },
  {
    id: 5,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "💭 Duygu Analizi:\nGönderilen metin analizi:\n- Genel ton: Pozitif (%85)\n- Tespit edilen duygular:\n  * Heyecan: %45\n  * Güven: %30\n  * Merak: %25\n- Öne çıkan konular:\n  * Teknoloji adaptasyonu\n  * İnovasyon\n  * Gelecek beklentileri",
    time: "13:49",
  },
  {
    id: 6,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "🤖 Doğal Dil İşleme:\n- Dil algılama\n- Gramer düzeltme\n- Özetleme\n- Anahtar kelime çıkarma\n- Konu sınıflandırma\n\n🎨 Görsel Üretimi:\n- Stil transferi\n- Görsel düzenleme\n- Yeni görsel oluşturma\n\n🔍 Semantik Arama:\n- Bağlamsal anlama\n- İlişkili içerik bulma\n- Kavram haritalama",
    time: "13:50",
  },
  {
    id: 7,
    type: "user",
    message: "Bu özellikleri gerçek bir senaryoda nasıl kullanabiliriz?",
    time: "13:51",
  },
  {
    id: 8,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "İşte pratik bir örnek:\n\n1. Müşteri Hizmetleri Senaryosu:\n- Gelen çağrıların ses tanıma ile metne dönüştürülmesi\n- Duygu analizi ile müşteri memnuniyeti ölçümü\n- Otomatik kategorizasyon ve yönlendirme\n- Çok dilli destek\n\n2. İçerik Yönetimi:\n- Görsel içeriklerin otomatik etiketlenmesi\n- İçerik özetleme ve sınıflandırma\n- SEO optimizasyonu\n- Çok dilli içerik üretimi\n\n3. Ürün Geliştirme:\n- Kullanıcı geri bildirimlerinin analizi\n- Trend analizi\n- Otomatik raporlama\n- A/B test sonuçlarının değerlendirilmesi",
    time: "13:52",
  }
];

// JavaScript Examples Chat
export const jsExamplesChat: MessageType[] = [
  {
    id: 1,
    type: "user",
    message: "Can you give me a JavaScript example?",
    time: "15:20",
  },
  {
    id: 2,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "Sure! Here's a simple JavaScript code:",
    time: "15:21",
  },
  {
    id: 3,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "```js\n// Random number guessing game\nconst randomNumber = Math.floor(Math.random() * 100) + 1;\nlet attempts = 0;\n\nfunction guessNumber(userGuess) {\n    attempts++;\n\n    if (userGuess < randomNumber) {\n        console.log(\"Enter a higher number.\");\n    } else if (userGuess > randomNumber) {\n        console.log(\"Enter a lower number.\");\n    } else {\n        console.log(`Congratulations! You found the correct number in ${attempts} attempts.\");\n    }\n}\n\n// Example usage\nguessNumber(50);  // User guessed 50\n```",
    time: "15:21",
  },
  {
    id: 4,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "This code:\n\n1. Generates a random number between 1-100\n2. Checks user's guesses\n3. Provides guiding hints\n4. Shows number of attempts on correct guess\n\nWould you like to see another example?",
    time: "15:22",
  },
  {
    id: 5,
    type: "user",
    message: "Yes, can you show me a more complex example?",
    time: "15:23",
  },
  {
    id: 6,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "Here's a more complex JavaScript example:",
    time: "15:24",
  },
  {
    id: 7,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "```js\n// Todo List Application\nclass TodoList {\n    constructor() {\n        this.todos = [];\n    }\n\n    addTodo(title) {\n        this.todos.push({\n            id: Date.now(),\n            title,\n            completed: false\n        });\n    }\n\n    toggleTodo(id) {\n        const todo = this.todos.find(t => t.id === id);\n        if (todo) {\n            todo.completed = !todo.completed;\n        }\n    }\n\n    deleteTodo(id) {\n        this.todos = this.todos.filter(t => t.id !== id);\n    }\n\n    getCompletedTodos() {\n        return this.todos.filter(t => t.completed);\n    }\n\n    getPendingTodos() {\n        return this.todos.filter(t => !t.completed);\n    }\n}\n\n// Usage example\nconst todoList = new TodoList();\n\ntodoList.addTodo(\"Learn JavaScript\");\ntodoList.addTodo(\"Develop React project\");\ntodoList.addTodo(\"Write unit tests\");\n\ntodoList.toggleTodo(1);  // Complete first task\nconsole.log(todoList.getCompletedTodos());  // Show completed tasks\n```",
    time: "15:24",
  },
  {
    id: 8,
    type: "bot",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    message: "This example:\n\n1. Uses Class structure\n2. Contains CRUD operations\n3. Uses Array methods\n4. Shows modern JavaScript features\n\nWould you like me to explain how the code works step by step?",
    time: "15:25",
  }
];

interface ChatAreaProps {
  currentMessages?: MessageType[];
}

const ChatArea: React.FC<ChatAreaProps> = ({ currentMessages = messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isActiveChatOpen, setIsActiveChatOpen] = useState(true);
  const [localMessages, setLocalMessages] = useState<MessageType[]>(currentMessages);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    if (!chatContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
    const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
    setShowScrollButton(!isNearBottom);
  };

  const handleCloseChat = () => {
    setIsActiveChatOpen(false);
    setLocalMessages([]);
  };

  const handleNewChat = () => {
    setIsActiveChatOpen(true);
    setLocalMessages([]);
  };

  useEffect(() => {
    setLocalMessages(currentMessages);
  }, [currentMessages]);

  useEffect(() => {
    scrollToBottom();
  }, [localMessages]);

  if (!isActiveChatOpen) {
    return (
      <div className="flex-1 flex flex-col h-screen bg-white/70 backdrop-blur-sm border border-gray-100 rounded-3xl animate-fade-in">
        {/* Üst Başlık */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                alt="AI Avatar"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold">New Chat</h2>
              <p className="text-sm text-gray-500">AI Assistant</p>
            </div>
          </div>
          <button 
            onClick={handleNewChat}
            className="flex items-center gap-2 px-4 py-2 bg-[#2A2A2A] text-white rounded-full hover:bg-[#3A3A3A] transition-all duration-300 group"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-400 group-hover:text-white transition-colors"
            >
              <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-gray-400 group-hover:text-white transition-colors">New Chat</span>
          </button>
        </div>

        {/* Boş Mesaj Alanı */}
        <div className="flex-1"></div>

        {/* Mesaj Yazma Alanı */}
        <div className="p-6 border-t border-gray-100">
          <div className="flex flex-col gap-4">
            <div className="relative flex gap-2 items-end">
              <div className="relative group">
                <button className="p-3 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200 hover:bg-white/80 transition-colors">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Upload Files
                </span>
              </div>
              
              <div className="flex-1 relative">
                <textarea
                  placeholder="Ask me anything ..."
                  rows={2}
                  className="w-full p-4 pr-12 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200 focus:outline-none focus:border-purple-400 resize-none"
                />
                <button className="absolute right-4 bottom-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 2L11 13" />
                    <path d="M22 2L15 22l-4-9l-9-4L22 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-screen bg-white/70 backdrop-blur-sm border border-gray-100 rounded-3xl animate-fade-in">
      {/* Üst Başlık */}
      <div className="flex justify-between items-center p-6 border-b border-gray-100 animate-slide-in-right" style={{ animationDelay: '100ms' }}>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              alt="AI Avatar"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">New Chat</h2>
            <p className="text-sm text-gray-500">AI Assistant</p>
          </div>
        </div>
        <button 
          onClick={handleCloseChat}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Mesaj Alanı */}
      <div
        ref={chatContainerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto p-6 space-y-6 relative scroll-smooth animate-slide-in-right"
        style={{ animationDelay: '200ms' }}
      >
        {localMessages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-4 ${
              message.type === "user" ? "flex-row-reverse" : ""
            }`}
          >
            {message.type === "bot" && message.avatar && (
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={message.avatar}
                  alt="AI Avatar"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
            )}
            <div
              className={`flex flex-col gap-2 ${
                message.type === "user" ? "items-end" : "items-start"
              }`}
              style={{ width: "80%" }}
            >
              <div
                className={`p-4 rounded-2xl ${
                  message.type === "user"
                    ? "bg-primary-500 text-white"
                    : "bg-[#F8F9FC]"
                }`}
              >
                {message.message.startsWith("```") ? (
                  <div className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs text-gray-500">
                        {message.message.split("\n")[0].replace("```", "")}
                      </div>
                      <button 
                        onClick={() => navigator.clipboard.writeText(message.message.split("```")[1])}
                        className="flex items-center gap-1 px-2 py-1 text-xs text-gray-500 hover:text-gray-700 transition-colors"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2z" />
                          <path d="M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2" />
                        </svg>
                        Copy
                      </button>
                    </div>
                    <pre className="overflow-x-auto p-4 rounded-lg bg-[#1E1E1E] text-white font-mono text-sm">
                      <code>{message.message.split("```")[1]}</code>
                    </pre>
                  </div>
                ) : (
                  <p className="whitespace-pre-line">{message.message}</p>
                )}
                {message.image && (
                  <div className="mt-3 rounded-xl overflow-hidden">
                    <Image
                      src={message.image}
                      alt="Message image"
                      width={400}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                )}
                {message.files && (
                  <div className="mt-3 space-y-2">
                    {message.files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/50 hover:bg-white/80 transition-colors cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            {file.type === "pdf" && (
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6" />
                            )}
                            {file.type === "ppt" && (
                              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                            )}
                            {file.type === "link" && (
                              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                            )}
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{file.name}</p>
                          {file.size && (
                            <p className="text-xs text-gray-500">{file.size}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <span className="text-xs text-gray-400">{message.time}</span>
            </div>
          </div>
        ))}
        
        {/* Creating Message Animation */}
        <div className="flex gap-4 animate-fade-in">
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              alt="AI Avatar"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2" style={{ width: "80%" }}>
            <div className="p-4 rounded-2xl bg-[#F8F9FC]">
              <div className="flex items-center gap-2 text-gray-500">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary-500 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-primary-500 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-primary-500 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
                <span className="text-sm">Creating</span>
              </div>
            </div>
            <span className="text-xs text-gray-400">{new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
        </div>

        <div ref={messagesEndRef} />
        {showScrollButton && (
          <button
            onClick={scrollToBottom}
            className="fixed bottom-32 left-1/2 -translate-x-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all group"
          >
            <div className="relative">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-600"
              >
                <path
                  d="M12 5v14M19 12l-7 7-7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="absolute top-0 left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
                Go to last message
              </span>
            </div>
          </button>
        )}
      </div>

      {/* Mesaj Yazma Alanı */}
      <div className="p-6 border-t border-gray-100 animate-slide-in-right" style={{ animationDelay: '300ms' }}>
        <div className="flex flex-col gap-4">
          <div className="relative flex gap-2 items-end">
            <div className="relative group">
              <button className="p-3 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200 hover:bg-white/80 transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Upload Files
              </span>
            </div>
            
            <div className="flex-1 relative">
              <textarea
                placeholder="Ask me anything ..."
                rows={2}
                className="w-full p-4 pr-12 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200 focus:outline-none focus:border-purple-400 resize-none"
              />
              <button className="absolute right-4 bottom-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22l-4-9l-9-4L22 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
