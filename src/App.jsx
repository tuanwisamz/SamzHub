import { useState, useEffect } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import './App.css';

const sectionsData = [
  {
    title: 'Performance',
    subtitle: 'Documents, spreadsheets and writing tools to get work done.',
    items: [
      { name: 'Word', url: 'https://word.cloud.microsoft/en-us/', isFeatured: true },
      { name: 'Excel', url: 'https://excel.cloud.microsoft/', isFeatured: true },
      { name: 'Docs', url: 'https://docs.google.com/', isFeatured: true },
      { name: 'G. Sheets', url: 'https://docs.google.com/spreadsheets', isFeatured: true },
      { name: 'G. Drive', url: 'https://drive.google.com/', isFeatured: true },
      { name: 'G. Scholar', url: 'https://scholar.google.com/', isFeatured: true },
      { name: 'Quillbot', url: 'https://quillbot.com/', isFeatured: true },
      { name: 'Stealth Writer', url: 'https://stealthwriter.ai/', isFeatured: true },
      { name: 'Canva', url: 'https://canva.com/', isFeatured: true },
      { name: 'Github', url: 'https://github.com/', isFeatured: true },
      { name: 'Notion', url: 'https://notion.com/', isFeatured: true },
    ],
  },
  {
    title: 'UTP Gateways',
    subtitle: 'Unified frequent used UTP Gateways for quick access.',
    items: [
      { name: 'UCampus', url: 'https://ucampus.utp.edu.my/sitsvision/wrd/siw_lgn', isFeatured: true },
      { name: 'ULearn', url: 'https://ulearn.utp.edu.my/login/index.php', isFeatured: true },
      { name: 'USchedule', url: 'https://cloud.timeedit.net/uscheduleutp/web', isFeatured: true },
      { name: 'UCS Report', url: 'https://ucs.utp.edu.my/', isFeatured: true },
      { name: 'UBooking', url: 'https://ubooking.utp.edu.my/', isFeatured: true },
    ],
  },
  {
    title: 'Social Media',
    subtitle: 'Stay connected with your community across all platforms.',
    items: [
      { name: 'WhatsApp', url: 'https://web.whatsapp.com/', isFeatured: true },
      { name: 'Telegram', url: 'https://web.telegram.org/', isFeatured: true },
      { name: 'Instagram', url: 'https://www.instagram.com/', isFeatured: true },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/', isFeatured: true },
      { name: 'TikTok', url: 'https://www.tiktok.com/', isFeatured: true },
      { name: 'YouTube', url: 'https://www.youtube.com/', isFeatured: true },
    ],
  },
  {
    title: 'LLMs',
    subtitle: 'Interact with the world\'s most powerful language models.',
    items: [
      { name: 'Gemini', url: 'https://gemini.google.com/', isFeatured: true },
      { name: 'Claude', url: 'https://claude.ai/', isFeatured: true },
      { name: 'ChatGPT', url: 'https://chatgpt.com/', isFeatured: true },
      { name: 'Grok', url: 'https://grok.x.ai/', isFeatured: true },
      { name: 'Qwen', url: 'https://qwen.ai/home/', isFeatured: true },
      { name: 'Kimi', url: 'https://www.kimi.ai/', isFeatured: true },
      { name: 'DeepSeek', url: 'https://deepseek.com/', isFeatured: true },
      { name: 'Perplexity', url: 'https://www.perplexity.ai/', isFeatured: true },
    ],
  },
  {
    title: 'Tech News',
    subtitle: 'Stay updated with the latest technology news and trends.',
    items: [
      { name: 'TechCrunch', url: 'https://techcrunch.com/', isFeatured: true },
      { name: 'The Verge', url: 'https://www.theverge.com/', isFeatured: true },
      { name: 'TechRadar', url: 'https://www.techradar.com/', isFeatured: true },
      { name: 'Ars Technica', url: 'https://arstechnica.com/', isFeatured: true },
      { name: 'Wired', url: 'https://www.wired.com/', isFeatured: true },
    ],
  },
  {
    title: 'Video Generation & Clipper',
    subtitle: 'Stay connected with your community across all platforms.',
    items: [
      { name: 'Rotgen', url: 'https://rotgen.org/', isFeatured: true },
      { name: 'Higgsfield', url: 'https://higgsfield.ai/mcp', isFeatured: true },
      { name: 'Kling Motion', url: 'https://kling.ai/app/video-motion-control/new', isFeatured: true },
      { name: 'A. Express', url: 'https://www.adobe.com/express/', isFeatured: true },
    ],
  },
  {
    title: 'Assistant',
    subtitle: 'Deploy and manage your web applications with ease.',
    items: [
      { name: 'Vercel', url: 'https://vercel.com/', isFeatured: true },
      { name: 'Netlify', url: 'https://www.netlify.com/', isFeatured: true },
      { name: 'Render', url: 'https://render.com/', isFeatured: true },
      { name: 'Railway', url: 'https://railway.app/', isFeatured: true },
      { name: 'Supabase', url: 'https://supabase.com/', isFeatured: true },
      { name: 'Firebase', url: 'https://firebase.google.com/', isFeatured: true },
      { name: 'Loveable', url: 'https://loveable.dev/', isFeatured: true },
      { name: 'Bolt.new', url: 'https://bolt.new/', isFeatured: true },
      { name: 'Stitch', url: 'https://stitch.withgoogle.com/', isFeatured: true },
      { name: 'Figma', url: 'https://figma.com/', isFeatured: true },
      { name: 'v0.dev', url: 'https://v0.dev/', isFeatured: true },
    ],
  },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Simulate loading progress illusion
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 20) + 10;
      });
    }, 200);

    const timer = setTimeout(() => {
      setIsLoading(false);
      clearInterval(interval);
      setProgress(100);
    }, 1500); // 1.5 seconds loading simulation

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const filteredSections = sectionsData.map(section => ({
    ...section,
    items: section.items.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  return (
    <div className="app-container">
      {isLoading && (
        <div className="progress-bar-container">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
      )}
      <div className="container-fluid py-5 px-md-5">
        <Header onSearch={setSearchQuery} />
        <main>
          {filteredSections.map((section, index) => (
            <Section
              key={index}
              title={section.title}
              subtitle={section.subtitle}
              items={isLoading ? Array(section.items.length).fill({ name: '', url: '', isFeatured: true }) : section.items}
              isLoading={isLoading}
            />
          ))}
          {filteredSections.length === 0 && !isLoading && (
            <div className="text-center py-5 my-5">
              <h2 className="display-4 text-muted">No tools found matching "{searchQuery}"</h2>
              <p className="lead fs-4">Try searching for something else or clear the search bar.</p>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
