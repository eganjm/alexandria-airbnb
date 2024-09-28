// InventoryList.js
import React from 'react';
import { signOut } from '@aws-amplify/auth';
import { useNavigate } from 'react-router-dom';
import './InventoryList.css';

const InventoryList = () => {
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await signOut();
      localStorage.removeItem('userSession'); // Clear the user session from local storage
      navigate('/'); // Redirect to the main Authenticator at the / route
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  
  const kitch_cab_items = ['coffee','tea','espresso','sugar/sweetener','creamer','visitor guides','dish detergent','dishwasher pods','paper towels','bathroom trash bags','tall trash bags','laundry detergent','kleenex','makeup remover towelettes'];
  const bed_top_cab_items = ['toilet paper','hand soap','shower gel','shampoo'];
  const unlocked_items = ['olive oil','salt','pepper','surface spray','stain remover'];
  
  return (
    <div>
      <h1>Inventory List</h1>
      <h3>Kitchen Locked Cabinet</h3>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {kitch_cab_items.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
              <td>
                <div className="radio-buttons">
                  <input 
                    type="radio" 
                    id={`plenty-${index}`} 
                    name={`inventoryItem-${index}`} 
                    value="plenty" 
                  />
                  <label htmlFor={`plenty-${index}`}>Plenty</label>
                  
                  <input 
                    type="radio" 
                    id={`low-${index}`} 
                    name={`inventoryItem-${index}`} 
                    value="low" 
                  />
                  <label htmlFor={`low-${index}`}>Low</label>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Bedroom Locked Cabinets</h3>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bed_top_cab_items.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
              <td>
                <div className="radio-buttons">
                  <input 
                    type="radio" 
                    id={`plenty-${index}`} 
                    name={`inventoryItem-${index}`} 
                    value="plenty" 
                  />
                  <label htmlFor={`plenty-${index}`}>Plenty</label>
                  
                  <input 
                    type="radio" 
                    id={`low-${index}`} 
                    name={`inventoryItem-${index}`} 
                    value="low" 
                  />
                  <label htmlFor={`low-${index}`}>Low</label>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Other not in locked cabinets</h3>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {unlocked_items.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
              <td>
                <div className="radio-buttons">
                  <input 
                    type="radio" 
                    id={`plenty-${index}`} 
                    name={`inventoryItem-${index}`} 
                    value="plenty" 
                  />
                  <label htmlFor={`plenty-${index}`}>Plenty</label>
                  
                  <input 
                    type="radio" 
                    id={`low-${index}`} 
                    name={`inventoryItem-${index}`} 
                    value="low" 
                  />
                  <label htmlFor={`low-${index}`}>Low</label>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};

export default InventoryList;