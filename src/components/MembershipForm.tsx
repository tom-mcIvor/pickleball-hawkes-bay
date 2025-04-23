import React, { useState } from 'react';

const MembershipForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, address, phone, paymentMethod });
  };

  return (
    <form onSubmit={handleSubmit} className="membership-form space-y-4">
      <p className="text-red-500 mb-4">This form is not currently active. Please check back later for updates.</p>
      <div className="flex flex-col">
        <label className="mb-1 font-semibold">Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 font-semibold">Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 font-semibold">Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 font-semibold">Phone Number:</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 font-semibold">Payment Method:</label>
        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Select a payment method</option>
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bank-transfer">Bank Transfer</option>
        </select>
      </div>
      <button type="submit" className="btn-primary w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
    </form>
  );
};

export default MembershipForm; 