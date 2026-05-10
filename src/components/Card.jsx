
const getToolInfo = (name) => {
  const n = name.toLowerCase();
  if (n.includes('word') || n.includes('docs')) return { color: '#2b579a', icon: 'bi-file-earmark-word' };
  if (n.includes('excel') || n.includes('sheets')) return { color: '#217346', icon: 'bi-file-earmark-excel' };
  if (n.includes('drive')) return { color: '#ffbb00', icon: 'bi-hdd-fill' };
  if (n.includes('whatsapp')) return { color: '#25d366', icon: 'bi-whatsapp' };
  if (n.includes('telegram')) return { color: '#0088cc', icon: 'bi-telegram' };
  if (n.includes('instagram')) return { color: '#e4405f', icon: 'bi-instagram' };
  if (n.includes('linkedin')) return { color: '#0077b5', icon: 'bi-linkedin' };
  if (n.includes('tiktok')) return { color: '#000000', icon: 'bi-tiktok' };
  if (n.includes('youtube')) return { color: '#ff0000', icon: 'bi-youtube' };
  if (n.includes('gemini')) return { color: '#4285f4', icon: 'bi-stars' };
  if (n.includes('claude')) return { color: '#d97706', icon: 'bi-robot' };
  if (n.includes('chatgpt')) return { color: '#10a37f', icon: 'bi-chat-dots-fill' };
  if (n.includes('github')) return { color: '#333333', icon: 'bi-github' };
  if (n.includes('vercel')) return { color: '#000000', icon: 'bi-triangle-fill' };
  if (n.includes('netlify')) return { color: '#00c7b7', icon: 'bi-cloud-fill' };
  if (n.includes('stealth writer')) return { color: '#000000', icon: 'bi-mask' };
  if (n.includes('grok')) return { color: '#000000', icon: 'bi-search' };
  if (n.includes('qwen')) return { color: '#5b21b6', icon: 'bi-cpu-fill' };
  if (n.includes('kimi')) return { color: '#2563eb', icon: 'bi-chat-dots' };
  if (n.includes('perplexity')) return { color: '#10b981', icon: 'bi-stars' };
  if (n.includes('render')) return { color: '#4338ca', icon: 'bi-box-seam' };
  if (n.includes('railway')) return { color: '#000000', icon: 'bi-train-front' };
  if (n.includes('supabase')) return { color: '#3ecf8e', icon: 'bi-database-fill' };
  if (n.includes('firebase')) return { color: '#ffca28', icon: 'bi-fire' };
  if (n.includes('loveable')) return { color: '#f43f5e', icon: 'bi-heart-fill' };
  if (n.includes('bolt.new')) return { color: '#000000', icon: 'bi-lightning-fill' };
  if (n.includes('canva')) return { color: '#00c4cc', icon: 'bi-palette-fill' };
  if (n.includes('quillbot')) return { color: '#499167', icon: 'bi-feather' };
  if (n.includes('google scholar')) return { color: '#4285f4', icon: 'bi-mortarboard-fill' };
  if (n.includes('facebook')) return { color: '#1877f2', icon: 'bi-facebook' };
  if (n.includes('twitter') || n.includes(' x ')) return { color: '#000000', icon: 'bi-twitter-x' };
  if (n.includes('pinterest')) return { color: '#bd081c', icon: 'bi-pinterest' };
  if (n.includes('gmail')) return { color: '#ea4335', icon: 'bi-envelope-fill' };
  if (n.includes('notion')) return { color: '#000000', icon: 'bi-sticky-fill' };
  if (n.includes('ucampus')) return { color: '#003366', icon: 'bi-person-badge-fill' };
  if (n.includes('ulearn')) return { color: '#ffb800', icon: 'bi-mortarboard-fill' };
  if (n.includes('uschedule')) return { color: '#003366', icon: 'bi-calendar3' };
  if (n.includes('ucs report')) return { color: '#003366', icon: 'bi-file-earmark-bar-graph' };
  if (n.includes('ubooking')) return { color: '#003366', icon: 'bi-calendar-check' };
  if (n.includes('techcrunch')) return { color: '#00a300', icon: 'bi-newspaper' };
  if (n.includes('the verge')) return { color: '#e5127d', icon: 'bi-hash' };
  if (n.includes('wired')) return { color: '#000000', icon: 'bi-cursor-fill' };
  if (n.includes('techradar')) return { color: '#0096d6', icon: 'bi-radar' };
  if (n.includes('ars technica')) return { color: '#ff4e00', icon: 'bi-journal-code' };
  if (n.includes('rotgen')) return { color: '#6366f1', icon: 'bi-camera-reels-fill' };
  if (n.includes('higgsfield')) return { color: '#000000', icon: 'bi-videocam-fill' };
  if (n.includes('kling motion')) return { color: '#ff0000', icon: 'bi-play-btn-fill' };
  if (n.includes('adobe express')) return { color: '#ff0000', icon: 'bi-brush-fill' };
  if (n.includes('outlook')) return { color: '#0078d4', icon: 'bi-envelope-paper-fill' };
  if (n.includes('deepseek')) return { color: '#2d5cf6', icon: 'bi-robot' };
  if (n.includes('figma')) return { color: '#f24e1e', icon: 'bi-figma' };
  if (n.includes('stitch')) return { color: '#ff4d00', icon: 'bi-bounding-box' };
  
  return { color: '#6366f1', icon: 'bi-grid-1x2-fill' };
};

const Card = ({ name, url, isFeatured, isLoading }) => {
  if (isLoading) {
    return (
      <div className={`card-skeleton mb-4 ${isFeatured ? 'p-4' : 'p-3'}`} style={{ minHeight: isFeatured ? '120px' : '80px' }}>
        <div className="d-flex align-items-center w-100">
          <div className="skeleton-icon" style={{ 
            width: isFeatured ? '84px' : '64px', 
            height: isFeatured ? '84px' : '64px', 
            flexShrink: 0, 
            borderRadius: '16px' 
          }}></div>
          <div className={`${isFeatured ? 'ms-5' : 'ms-4'} flex-grow-1`}>
            <div className="skeleton-text mb-3" style={{ width: '80%', height: isFeatured ? '24px' : '16px' }}></div>
            <div className="skeleton-text" style={{ width: '40%', height: isFeatured ? '16px' : '12px' }}></div>
          </div>
        </div>
      </div>
    );
  }

  const { color, icon } = getToolInfo(name);

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`custom-card-link ${isFeatured ? 'featured-card-link' : ''}`}>
      <div className={`custom-card d-flex align-items-center mb-4 ${isFeatured ? 'p-4 border-2 featured-card' : 'p-3'}`} 
           style={isFeatured ? { boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.1), 0 10px 15px -5px rgba(0, 0, 0, 0.04)' } : {}}>
        
        {/* Icon Square: Left */}
        <div className={`rounded-4 d-flex align-items-center justify-content-center ${isFeatured ? 'me-5' : 'me-4'}`} style={{ 
          width: isFeatured ? '84px' : '64px', 
          height: isFeatured ? '84px' : '64px', 
          backgroundColor: color,
          flexShrink: 0
        }}>
          <i className={`bi ${icon} text-white ${isFeatured ? 'fs-1' : 'fs-2'}`}></i>
        </div>

        {/* Text Stack: Middle */}
        <div className="flex-grow-1 min-w-0">
          <div className="fw-bold text-truncate" style={{ 
            fontSize: isFeatured ? '1.5rem' : '1.2rem',
            color: 'var(--text-main)'
          }}>{name}</div>
          <div style={{ 
            fontSize: isFeatured ? '1.1rem' : '0.9rem',
            color: 'var(--text-muted)'
          }}>Open in new tab</div>
        </div>

        {/* Action: Right arrow */}
        <div className="ms-2 opacity-25 action-arrow">
          <i className={`bi bi-arrow-right ${isFeatured ? 'fs-3' : 'fs-5'}`} style={{ color: 'var(--text-main)' }}></i>
        </div>
      </div>
    </a>
  );
};

export default Card;
