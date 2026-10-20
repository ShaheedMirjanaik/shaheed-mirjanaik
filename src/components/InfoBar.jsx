import { GraduationCap, MapPin, Bot, BookOpen } from 'lucide-react';

const infoItems = [
  {
    icon: GraduationCap,
    label: 'B.Tech CSE',
    value: 'PES University',
  },
  {
    icon: MapPin,
    label: 'Belagavi,',
    value: 'Karnataka',
  },
  {
    icon: Bot,
    label: 'Internship',
    value: 'Automation & Robotics Centre',
  },
  {
    icon: BookOpen,
    label: '1 Publication',
    value: 'XAI-MedTrack (2026)',
  },
];

export default function InfoBar() {
  return (
    <section className="info-bar" aria-label="Quick Information">
      <div className="container">
        <div className="info-bar-grid">
          {infoItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="info-bar-item">
                <div className="info-bar-icon" aria-hidden="true">
                  <Icon size={24} />
                </div>
                <div className="info-bar-content">
                  <span className="info-bar-label">{item.label}</span>
                  <span className="info-bar-value">{item.value}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
