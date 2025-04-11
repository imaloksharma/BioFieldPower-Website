import React, { useEffect, useState } from "react";

const FindUs: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ 
      ...styles.container, 
      padding: isMobile ? "40px" : styles.container.padding 
    }}>
      <h2 style={styles.heading}>Find us</h2>
      <div style={isMobile ? styles.contentMobile : styles.content}>
        <div style={{ 
          ...styles.column, 
          ...(isMobile ? styles.columnMobile : {}), 
          textAlign: isMobile ? "left" : "left" 
        }}>
          <p style={styles.text}>
            Mr. Anmol Gupta
            <br />
            (Founder)
          </p>
        </div>
        <div style={{ 
          ...styles.column, 
          ...(isMobile ? styles.columnMobile : {}) , 
          textAlign: isMobile ? "left" : "left"
        }}>
          <p style={styles.text}>
            Biofield Power Pvt. Ltd.
            <br />
            ROOM NO- 316/317, 3 FLOOR, M VISVESVARAYA,
            <br />
            IIT Ropar, Rupnagar, Punjab, India. 140001
          </p>
        </div>
        <div style={{ 
          ...styles.column, 
          ...(isMobile ? styles.columnMobile : { textAlign: "right" }) ,
          textAlign: isMobile ? "left" : "right"
        }}>
          <p style={styles.text}>
            +91-85578-97582
            <br />
            info@biofieldpower.com
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#1D5E1E",
    color: "#FFFFFF",
    padding: "40px 130px",
    fontFamily: "Montserrat, sans-serif" as const,
  },
  heading: {
    fontSize: "32px",
    fontWeight: "600",
    marginBottom: "30px",
  },
  content: {
    display: "grid",
    gridTemplateColumns: "1fr 1.5fr 1fr",
    gap: "20px", // Reduced gap
    alignItems: "start",
  },
  contentMobile: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "20px",
    alignItems: "flex-start",
  },
  column: {
    fontSize: "18px",
    lineHeight: "1.5",
  },
  columnMobile: {
    fontSize: "18px",
    lineHeight: "1.5",
    marginBottom: "10px",
  },
  text: {
    margin: 0,
  },
};

export default FindUs;
