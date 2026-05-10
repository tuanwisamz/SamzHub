import Card from './Card';

const Section = ({ title, subtitle, items, isLoading }) => {
  const sectionId = title.toLowerCase().replace(/\s+/g, '-');
  return (
    <section className="mb-5 py-5 border-top" id={sectionId}>
      <div className="d-flex justify-content-between align-items-end mb-5 flex-wrap pb-4">
        <div>
          <h2 className="display-4 fw-bold mb-2" style={{ letterSpacing: '-0.8px', color: 'var(--text-main)' }}>{title}</h2>
          <p className="mb-0" style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>{subtitle}</p>
        </div>
        <div className="mt-3">
          <span className="badge rounded-pill shadow-sm px-4 py-2 fw-medium border" 
                style={{ 
                  fontSize: '1.1rem', 
                  backgroundColor: 'var(--card-bg)', 
                  color: 'var(--text-main)',
                  borderColor: 'rgba(0,0,0,0.1)'
                }}>
            {items.length} tools
          </span>
        </div>
      </div>
      <div className="row g-4">
        {items.map((item, index) => {
          const colClass = item.isFeatured 
            ? "col-12 col-lg-6 col-xl-4" 
            : "col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2";
          
          return (
            <div key={index} className={colClass}>
              <Card name={item.name} url={item.url} isFeatured={item.isFeatured} isLoading={isLoading} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section;
