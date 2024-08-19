import React from 'react';

// Component for task filter

const TaskFilter = ({ filter, setFilter }) => {
  return (
    <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
      <button
        onClick={() => setFilter('all')}
        style={{
          marginRight: '1rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: filter === 'all' ? '#48bb78' : '#edf2f7',
          color: filter === 'all' ? '#1a202c' : '#6b46c1',
          border: 'none',
          borderRadius: '0.5rem',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: '500',
          transition: 'background-color 0.3s ease, transform 0.2s ease',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = filter === 'all' ? '#38a169' : '#e2e8f0';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = filter === 'all' ? '#48bb78' : '#edf2f7';
        }}
      >
        All Tasks
      </button>
      <button
        onClick={() => setFilter('completed')}
        style={{
          marginRight: '1rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: filter === 'completed' ? '#48bb78' : '#edf2f7',
          color: filter === 'completed' ? '#1a202c' : '#6b46c1',
          border: 'none',
          borderRadius: '0.5rem',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: '500',
          transition: 'background-color 0.3s ease, transform 0.2s ease',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = filter === 'completed' ? '#38a169' : '#e2e8f0';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = filter === 'completed' ? '#48bb78' : '#edf2f7';
        }}
      >
        Completed Tasks
      </button>
      <button
        onClick={() => setFilter('not_completed')}
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: filter === 'not_completed' ? '#48bb78' : '#edf2f7',
          color: filter === 'not_completed' ? '#1a202c' : '#6b46c1',
          border: 'none',
          borderRadius: '0.5rem',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: '500',
          transition: 'background-color 0.3s ease, transform 0.2s ease',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = filter === 'not_completed' ? '#38a169' : '#e2e8f0';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = filter === 'not_completed' ? '#48bb78' : '#edf2f7';
        }}
      >
        Pending Tasks
      </button>
    </div>
  );
};

export default TaskFilter;
