
import React, { useState } from 'react';

const StudentEvents = () => {
  // State to manage event data with images
  const [events, setEvents] = useState([
    { 
      id: 1, 
      name: 'Alumni Reunion 2024', 
      date: '2024-05-12', 
      description: 'An annual reunion for alumni.',
      imageUrl: 'https://via.placeholder.com/600x400?text=Alumni+Reunion' 
    },
    { 
      id: 2, 
      name: 'Guest Lecture on AI', 
      date: '2024-06-15', 
      description: 'A lecture on the impact of AI on various industries.',
      imageUrl: 'https://via.placeholder.com/600x400?text=AI+Guest+Lecture' 
    },
    { 
      id: 3, 
      name: 'Workshop on Career Development', 
      date: '2024-07-01', 
      description: 'A workshop to help students enhance their career prospects.',
      imageUrl: 'https://via.placeholder.com/600x400?text=Career+Development+Workshop' 
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-400 py-6 flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Upcoming Events</h1>

        {/* Event List */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Events You Can Attend</h2>
          <div className="space-y-6">
            {events.map((event) => (
              <div 
                key={event.id} 
                className="border p-4 rounded-md shadow-md bg-gradient-to-r from-indigo-100 to-blue-50 hover:shadow-xl transition-all"
              >
                <div className="flex items-center space-x-4">
                  {/* Event Image */}
                  <img 
                    src={event.imageUrl} 
                    alt={event.name} 
                    className="w-32 h-32 object-cover rounded-md shadow-md" 
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800">{event.name}</h3>
                    <p className="text-gray-600">{event.date}</p>
                    <p className="text-gray-500 mt-2">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentEvents;
