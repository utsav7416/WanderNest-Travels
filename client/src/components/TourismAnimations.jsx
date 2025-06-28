import React, { useEffect, useState } from 'react';
import { Plane, MapPin, Camera, Heart, Star, Globe, Compass, Mountain, Waves, TreePine } from 'lucide-react';

const TourismAnimations = () => {
  const [activeAnimation, setActiveAnimation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAnimation(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tourism-animations">
      <div className="floating-elements">
        <div className="floating-plane">
          <Plane className="w-8 h-8 text-blue-500" />
        </div>
        <div className="floating-compass">
          <Compass className="w-6 h-6 text-green-500" />
        </div>
        <div className="floating-camera">
          <Camera className="w-7 h-7 text-purple-500" />
        </div>
        <div className="floating-heart">
          <Heart className="w-5 h-5 text-red-500" />
        </div>
      </div>

      <div className="travel-destinations">
        <div className={`destination ${activeAnimation === 0 ? 'active' : ''}`}>
          <Mountain className="w-12 h-12 text-gray-700" />
          <span>Mountain Adventures</span>
        </div>
        <div className={`destination ${activeAnimation === 1 ? 'active' : ''}`}>
          <Waves className="w-12 h-12 text-blue-600" />
          <span>Beach Escapes</span>
        </div>
        <div className={`destination ${activeAnimation === 2 ? 'active' : ''}`}>
          <TreePine className="w-12 h-12 text-green-600" />
          <span>Forest Retreats</span>
        </div>
        <div className={`destination ${activeAnimation === 3 ? 'active' : ''}`}>
          <Globe className="w-12 h-12 text-indigo-600" />
          <span>City Explorations</span>
        </div>
      </div>

      <div className="travel-stats">
        <div className="stat-item">
          <div className="stat-number">150+</div>
          <div className="stat-label">Countries</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">50K+</div>
          <div className="stat-label">Happy Travelers</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">4.9</div>
          <div className="stat-label">
            <Star className="w-4 h-4 inline text-yellow-500 fill-yellow-500" />
            Rating
          </div>
        </div>
      </div>

      <div className="travel-quote">
        <blockquote>
          "Travel makes one modest. You see what a tiny place you occupy in the world."
        </blockquote>
        <cite>- Gustave Flaubert</cite>
      </div>

      <div className="interactive-map">
        <div className="map-pin pin-1">
          <MapPin className="w-4 h-4 text-red-500" />
        </div>
        <div className="map-pin pin-2">
          <MapPin className="w-4 h-4 text-blue-500" />
        </div>
        <div className="map-pin pin-3">
          <MapPin className="w-4 h-4 text-green-500" />
        </div>
        <div className="map-background"></div>
      </div>
    </div>
  );
};

export default TourismAnimations;