export default function About() {
  return (
    <section className="section" id="about">
      <div className="section__header reveal">
        <span className="section__number">01</span>
        <h2 className="section__title">About Me</h2>
        <div className="section__line" />
      </div>

      <div className="about__grid">
        <div className="about__image-wrapper reveal">
          {/* PLACEHOLDER: Replace this div with <Image src="/your-photo.jpg" ... /> */}
          <div className="about__image-placeholder">
            <span>Your Photo</span>
          </div>
        </div>

        <div className="about__text reveal">
          <p>
            {/* PLACEHOLDER: Replace with your bio paragraph 1 */}
            I&apos;m a data scientist with strong backend engineering skills
            and a passion for turning complex datasets into clear, actionable
            insights. My journey in tech started with curiosity about the stories
            hidden in data, and has grown into expertise spanning data analysis,
            statistical methods, and building the APIs that serve them.
          </p>
          <p>
            {/* PLACEHOLDER: Replace with your bio paragraph 2 */}
            Currently, I work across the full data stack — from wrangling and
            analyzing data in Python and Jupyter notebooks to building robust
            backend systems with FastAPI and PostgreSQL. I believe the best
            insights come from clean pipelines and well-structured code.
          </p>

          <div className="about__details">
            <div className="about__detail">
              <span className="about__detail-label">Location</span>
              <span className="about__detail-value">Port Harcourt, Nigeria</span>
            </div>
            <div className="about__detail">
              <span className="about__detail-label">Education</span>
              {/* PLACEHOLDER: Replace with your education */}
              <span className="about__detail-value">Your Degree &amp; University</span>
            </div>
            <div className="about__detail">
              <span className="about__detail-label">Focus</span>
              <span className="about__detail-value">
                Data Science &amp; Backend Development
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
