import { ChevronDown } from 'lucide-react';

export default function ScrollIndicator() {
  return (
    <div className="scroll-indicator" aria-hidden="true">
      <div className="scroll-mouse">
        <div className="scroll-dot"></div>
      </div>
      <span>Scroll to explore</span>
      <ChevronDown size={16} className="scroll-arrow" />
    </div>
  );
}
