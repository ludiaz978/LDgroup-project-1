import React from 'react';

function HoomanprofileButton({ label, icon }) {
  return (
    <button>
      {icon && <span className="button-icon">{icon}</span>}
      {label}
    </button>
  );
}

export default HoomanprofileButton;