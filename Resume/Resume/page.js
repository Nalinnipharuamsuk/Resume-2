// pages/index.js

import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>My Resume</h1>
      </header>

      <main className={styles.main}>
        <section className={styles.profile}>
          <img 
            src="/profile.jpg" // ใส่รูปโปรไฟล์ที่คุณจะใช้ (เก็บไว้ในโฟลเดอร์ public)
            alt="Profile Picture"
            className={styles.profileImg}
          />
          <h2>Profile</h2>
          <p>
            I am Nalinnipha Ruamsuk, a recent graduate in Software Engineering from the University of Phayao.
            With a strong passion for UX/UI design, I am dedicated to crafting intuitive and user-friendly digital experiences.
          </p>
        </section>

        <section className={styles.skills}>
          <h2>Skills</h2>
          <ul>
            <li>UX/UI Design</li>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>Next.js</li>
          </ul>
        </section>

        <section className={styles.tools}>
          <h2>Tools</h2>
          <ul>
            <li>Visual Studio Code</li>
            <li>Figma</li>
            <li>Canva</li>
          </ul>
        </section>

        <section className={styles.education}>
          <h2>Education</h2>
          <p>Bachelor's Degree in Software Engineering, University of Phayao</p>
          <p>Graduated: 2024</p>
        </section>

        <section className={styles.contact}>
          <h2>Contact Information</h2>
          <p><strong>Phone:</strong> 063-979-7333</p>
          <p><strong>Email:</strong> Nalinnipharuamsuk@gmail.com</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Nalinnipha Ruamsuk</p>
      </footer>
    </div>
  )
}
