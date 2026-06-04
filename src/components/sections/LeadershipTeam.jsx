import { FadeIn } from "../ui/FadeIn";

const TEAM = [
  {
    name: "Gunjan Kumar",
    role: "Founder & CEO",
    image: "/Founder image.jpeg",
    bio: "Leading ProsperKey Realty with a vision to make premium real estate investment transparent, profitable and accessible across India.",
    initials: "GK",
    highlights: ["Strategic Vision", "Industry Pioneer", "Client-First Approach"],
  },
  {
    name: "Vikash Kumar Ojha",
    role: "Senior Relationship Manager",
    image: null,
    bio: "Specializes in luxury residential sales, client relationship management, premium project consulting and investment advisory across multiple cities.",
    initials: "VO",
    highlights: ["Luxury Sales Expert", "Client Relations", "Multi-City Advisory"],
  },
  {
    name: "Prabhat Kumar Singh",
    role: "Senior Sales Manager",
    image: null,
    bio: "Experienced property consultant focused on customer acquisition, premium project sales, investor relations and helping clients identify high-growth investment opportunities.",
    initials: "PS",
    highlights: ["Sales Leadership", "Investor Relations", "Market Analysis"],
  },
];

export function LeadershipTeam() {
  return (
    <section id="leadership" className="section section-cream leadership-section">
      <div className="container">
        <FadeIn className="section-header">
          <div className="section-eyebrow">
            <span className="line" />
            <span className="text">Our People</span>
            <span className="line" />
          </div>
          <h2 className="section-title">
            Meet Our <span className="gold">Leadership Team</span>
          </h2>
          <p className="section-subtitle">
            A team of seasoned professionals dedicated to delivering
            exceptional real estate experiences across India.
          </p>
          <span className="gold-divider" />
        </FadeIn>

        <div className="leadership-grid">
          {TEAM.map((member, i) => (
            <FadeIn key={member.name} delay={i * 0.12}>
              <div className="leader-card">
                <div className="leader-card-glow" />
                <div className="leader-image-wrap">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="leader-image"
                    />
                  ) : (
                    <div className="leader-avatar">
                      <span className="leader-avatar-initials">{member.initials}</span>
                    </div>
                  )}
                  <div className="leader-image-ring" />
                </div>
                <h3 className="leader-name">{member.name}</h3>
                <div className="leader-role">{member.role}</div>
                <div className="leader-divider" />
                <p className="leader-bio">{member.bio}</p>
                <div className="leader-highlights">
                  {member.highlights.map((h) => (
                    <span key={h} className="leader-tag">{h}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
