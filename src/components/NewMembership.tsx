'use client';

import React, { useState } from 'react';
import MembershipForm from './MembershipForm';

const NewMembership: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="membership-container">
      <button
        className="btn-primary"
        style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        onClick={() => setShowForm(true)}
      >
        Buy Sylvan Road Membership
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowForm(false)}>
          <div className="bg-white p-6 rounded shadow-lg relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={() => setShowForm(false)}>X</button>
            <MembershipForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default NewMembership;
