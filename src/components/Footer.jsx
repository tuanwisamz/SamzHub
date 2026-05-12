
const Footer = () => {
  return (
    <footer className="mt-5 pt-5 border-top" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
      <div className="container-fluid px-md-5 py-5">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
          <div className="mb-4 mb-md-0">
            <p className="text-muted mb-0" style={{ fontSize: '1.15rem', fontWeight: '400', letterSpacing: '0.5px' }}>
              © 2026 SamzHub. Crafted for focus and speed.
            </p>
          </div>
          <div>
            <p className="text-muted mb-0" style={{ fontSize: '1.15rem', fontWeight: '400', letterSpacing: '0.5px' }}>
              All trademarks belong to their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
