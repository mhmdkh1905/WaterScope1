import React from 'react';
import { useSidebarData } from '../hooks/useSidebarData';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const { navigationItems } = useSidebarData();

  return (
    <nav className="w-64 bg-white shadow-sm h-screen sticky top-0 overflow-y-auto">
      <div className="p-6">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-blue-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
