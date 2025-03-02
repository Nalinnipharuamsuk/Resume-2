export default function Page() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // ให้ content เต็มหน้าจอเสมอ
      }}
    >
      <header
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#6c9ab3",
          color: "white",
        }}
      >
        <h1 style={{ margin: "0" }}>My Resume</h1>
      </header>

      <main
        style={{
          maxWidth: "800px",
          margin: "20px auto",
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          flex: "1", // ทำให้ main ขยายตัวเองเพื่อให้ footer อยู่ด้านล่างเสมอ
        }}
      >
        <section style={{ textAlign: "center", marginBottom: "20px" }}>
          <img
            src="/images/profile3.jpg"
            alt="Profile3"
            style={{
              borderRadius: "50%",
              width: "150px",
              height: "150px",
              objectFit: "cover",
              marginBottom: "10px",
            }}
          />
          <h2 style={{ borderBottom: "2px solid #6c9ab3", paddingBottom: "5px", color: "#333" }}>Profile</h2>
          <p>
            I am Nalinnipha Ruamsuk, a recent graduate in Software Engineering from the University of Phayao. With a strong passion for UX/UI design, I am dedicated to crafting intuitive and user-friendly digital experiences.
          </p>
        </section>

        {/* เพิ่มเนื้อหาอื่น ๆ ตามต้องการ */}
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#6c9ab3",
          color: "white",
          borderTop: "6px solid #f9f9f9",
          borderRadius: "0 0 8px 8px",
          backgroundImage: "linear-gradient(45deg, #6c9ab3, #2f4f6d)",
        }}
      >
        <p style={{ margin: "0", fontSize: "14px", color: "#fff" }}>© 2024 Nalinnipha Ruamsuk</p>
      </footer>
    </div>
  );
}
