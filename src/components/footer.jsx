import React from 'react';

const Footer = () => {
  const MapMarkerIcon = () => (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="currentColor"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  );

  const PhoneIcon = () => (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="currentColor"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"/>
    </svg>
  );

  const EnvelopeIcon = () => (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="currentColor"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  );

  // Style object untuk konsistensi
  const styles = {
    footer: {
      backgroundColor: '#1f2937',
      color: 'white',
      padding: '2rem 0'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem'
    },
    companyInfo: {
      gridColumn: 'span 2'
    },
    title: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '1rem'
    },
    subtitle: {
      color: '#d1d5db',
      marginBottom: '1rem'
    },
    sectionTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      marginBottom: '1rem'
    },
    linkList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    linkItem: {
      marginBottom: '0.5rem'
    },
    link: {
      color: '#d1d5db',
      textDecoration: 'none',
      transition: 'color 0.3s ease'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '0.5rem'
    },
    contactText: {
      color: '#d1d5db'
    },
    bottomBar: {
      borderTop: '1px solid #374151',
      marginTop: '2rem',
      paddingTop: '1rem',
      textAlign: 'center'
    },
    copyright: {
      color: '#d1d5db'
    }
  };

  // Media query untuk desktop
  if (typeof window !== 'undefined' && window.innerWidth >= 768) {
    styles.grid.gridTemplateColumns = 'repeat(4, 1fr)';
  }

  return React.createElement('footer', { style: styles.footer },
    React.createElement('div', { style: styles.container },
      React.createElement('div', { style: styles.grid },
        
        // Company Info
        React.createElement('div', { style: styles.companyInfo },
          React.createElement('h3', { style: styles.title }, 'KosFinder'),
          React.createElement('p', { style: styles.subtitle }, 
            'Platform Penemu Kos Terbaik Sesuai Kebutuhanmu!'
          )
        ),

        // Quick Links
        React.createElement('div', null,
          React.createElement('h4', { style: styles.sectionTitle }, 'Quick Links'),
          React.createElement('ul', { style: styles.linkList },
            React.createElement('li', { style: styles.linkItem },
              React.createElement('a', { 
                href: '/', 
                style: styles.link,
                onMouseEnter: (e) => e.target.style.color = 'white',
                onMouseLeave: (e) => e.target.style.color = '#d1d5db'
              }, 'Beranda')
            ),
            React.createElement('li', { style: styles.linkItem },
              React.createElement('a', { 
                href: '/about', 
                style: styles.link,
                onMouseEnter: (e) => e.target.style.color = 'white',
                onMouseLeave: (e) => e.target.style.color = '#d1d5db'
              }, 'Tentang Kami')
            ),
            React.createElement('li', { style: styles.linkItem },
              React.createElement('a', { 
                href: '/kos', 
                style: styles.link,
                onMouseEnter: (e) => e.target.style.color = 'white',
                onMouseLeave: (e) => e.target.style.color = '#d1d5db'
              }, 'Cari Kos')
            ),
            React.createElement('li', { style: styles.linkItem },
              React.createElement('a', { 
                href: '/contact', 
                style: styles.link,
                onMouseEnter: (e) => e.target.style.color = 'white',
                onMouseLeave: (e) => e.target.style.color = '#d1d5db'
              }, 'Kontak')
            )
          )
        ),

        // Contact Info
        React.createElement('div', null,
          React.createElement('h4', { style: styles.sectionTitle }, 'Kontak'),
          React.createElement('div', null,
            React.createElement('div', { style: styles.contactItem },
              React.createElement(MapMarkerIcon, null),
              React.createElement('span', { style: styles.contactText }, 'Bandung, Indonesia')
            ),
            React.createElement('div', { style: styles.contactItem },
              React.createElement(PhoneIcon, null),
              React.createElement('span', { style: styles.contactText }, '+62 123 4567 890')
            ),
            React.createElement('div', { style: styles.contactItem },
              React.createElement(EnvelopeIcon, null),
              React.createElement('span', { style: styles.contactText }, 'info@kosfinder.com')
            )
          )
        )
      ),

      // Bottom Bar
      React.createElement('div', { style: styles.bottomBar },
        React.createElement('p', { style: styles.copyright },
          `© ${new Date().getFullYear()} KosFinder. All rights reserved.`
        )
      )
    )
  );
};

export default Footer;
