import { EntrySection } from "@/components/entry-section";
import { ProfileCard } from "@/components/profile-card";
import { profile } from "@/data/profile";

const navigation = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#career", label: "Career" },
  { href: "#projects", label: "Projects" },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <nav className="site-nav" aria-label="Main navigation">
        <div className="container nav-inner">
          <a className="nav-brand" href="#top">{profile.shortName}</a>
          <ul className="nav-links">{navigation.map((item) => <li key={item.href}><a href={item.href}>{item.label}</a></li>)}</ul>
        </div>
      </nav>
      <header id="top" className="site-header">
        <div className="container">
          <p className="eyebrow">Personal portfolio</p>
          <h1>{profile.name}<span className="title-dot">.</span></h1>
          <p className="header-note">{profile.role ? `${profile.role} · ` : ""}{profile.location}</p>
        </div>
      </header>
      <main id="main" className="container content-wrapper">
        <div className="main-content">
          <div className="intro-text">
            {profile.bio.length ? profile.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>) : (
              <><p><strong>{profile.name}</strong> is based in {profile.location}.</p><p className="placeholder">A short introduction will go here: what I do, what I care about, and what I’m working on.</p></>
            )}
          </div>
          <section id="about" aria-labelledby="about-heading">
            <h2 id="about-heading">About</h2>
            {profile.about.length ? profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>) : <p className="placeholder">My background, interests, and the experiences that shaped my journey. More to come.</p>}
          </section>
          <EntrySection id="education" title="Education" entries={profile.education} placeholder="Education details will be added here." />
          <EntrySection id="career" title="Career" entries={profile.experience} placeholder="Work experience and career highlights will be added here." />
          <EntrySection id="projects" title="Selected projects" entries={profile.projects} placeholder="A selection of my projects, with details and links, will be added here." />
          <section id="contact" aria-labelledby="contact-heading">
            <h2 id="contact-heading">Get in touch</h2>
            {profile.email ? <p>You can reach me at <a href={`mailto:${profile.email}`}>{profile.email}</a>.</p> : <p className="placeholder">Contact details will be available here soon.</p>}
            {profile.links.length > 0 && <ul className="contact-links">{profile.links.map((link) => <li key={link.url}><a href={link.url}>{link.label} <span aria-hidden="true">↗</span></a></li>)}</ul>}
          </section>
        </div>
        <ProfileCard />
      </main>
      <footer className="site-footer"><div className="container footer-inner"><p>© {new Date().getFullYear()} {profile.name}</p><a href="#top">Back to top <span aria-hidden="true">↑</span></a></div></footer>
    </>
  );
}
