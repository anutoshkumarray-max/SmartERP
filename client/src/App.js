import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LayoutDashboard, Building2, Users } from 'lucide-react'; // Ek hi baar import
import './App.css';

function App() {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/company').then(res => setCompany(res.data));
  }, []);

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <div style={{ width: '280px', padding: '30px', background: 'rgba(255,255,255,0.02)' }}>
        <h1 className="gradient-text">SmartERP</h1>
        <div style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }}>
            <LayoutDashboard size={20}/> Dashboard
          </div>
          <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }}>
            <Building2 size={20}/> Company
          </div>
          <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }}>
            <Users size={20}/> Masters
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '50px' }}>
        <h1 className="gradient-text">{company?.name || 'Loading...'}</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginTop: '40px' }}>
          {[ {title: 'Sales', val: '₹ 0'}, {title: 'Customers', val: '0'}, {title: 'Suppliers', val: '0'} ].map((item, i) => (
            <div key={i} className="glass-card">
              <h3>{item.title}</h3>
              <h1 style={{ fontSize: '2.5rem' }}>{item.val}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;