export default function Page() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <header style={{ textAlign: "center", padding: "20px", backgroundColor: "#6c9ab3", color: "white" }}>
        <h1 style={{ margin: "0" }}>My Resume</h1>
      </header>

      <main style={{ maxWidth: "800px", margin: "20px auto", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <section style={{ textAlign: "center", marginBottom: "20px" }}>
          <img 
            src="/images/profile3.jpg" 
            alt="Profile3" 
            style={{ borderRadius: "50%", width: "150px", height: "150px", objectFit: "cover", marginBottom: "10px" }}
            className="rounded-full"
          />

          <h2 style={{ borderBottom: "2px solid #6c9ab3", paddingBottom: "5px", color: "#333" }}>Profile</h2>
          <p>
            I am Nalinnipha Ruamsuk, a recent graduate in Software Engineering from the University of Phayao.
            With a strong passion for UX/UI design, I am dedicated to crafting intuitive and user-friendly digital experiences.
          </p>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "2px solid #6c9ab3", paddingBottom: "5px", color: "#333" }}>Skills</h2>
          <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
            <li>UX/UI Design</li>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>Next.js</li>
          </ul>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "2px solid #6c9ab3", paddingBottom: "5px", color: "#333" }}>Tools</h2>
          <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
            <li>Visual Studio Code</li>
            <li>Figma</li>
            <li>Canva</li>
          </ul>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "2px solid #6c9ab3", paddingBottom: "5px", color: "#333" }}>Education</h2>
          <p>Bachelor's Degree in Software Engineering, University of Phayao</p>
          <p>Graduated: [Specify Year]</p>
        </section>

        <section>
          <h2 style={{ borderBottom: "2px solid #6c9ab3", paddingBottom: "5px", color: "#333" }}>Contact Information</h2>
          <p><strong>Phone:</strong> 063-979-8543</p>
          <p><strong>Email:</strong> Nalinnipharuamsuk@gmail.com</p>
        </section>
      </main>

      <footer style={{ textAlign: "center", padding: "10px", backgroundColor: "#f1f1f1", marginTop: "20px", borderRadius: "0 0 8px 8px" }}>
        <p style={{ margin: "0", fontSize: "14px", color: "#555" }}>© 2024 Nalinnipha Ruamsuk</p>
      </footer>
    </div>
  );
}
