import React, { useState } from 'react';
import { Shield, Award, CheckCircle, Quote, Compass, Calendar, ArrowRight } from 'lucide-react';

const ClosingCTA = () => {
  const [selectedColor, setSelectedColor] = useState('black-blue');
  const [booked, setBooked] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <>
      <section className="specs-section" id="specs">
        <div className="specs-container">
          <p className="section-tag">Technical Prowess</p>
          <h2 className="section-title">Built for Performance. Engineered for Precision.</h2>

          <div className="specs-grid">
            <div className="spec-item">
              <div className="spec-label">Frame Construction</div>
              <div className="spec-value">High-tensile carbon steel and aerospace-grade aluminum hybrid folding frame</div>
            </div>
            <div className="spec-item">
              <div className="spec-label">Wheel Assembly</div>
              <div className="spec-value">26" Magnesium alloy 6-spoke integrated wheels with anti-slip mountain tires</div>
            </div>
            <div className="spec-item">
              <div className="spec-label">Suspension System</div>
              <div className="spec-value">Lockable hydraulic front suspension fork + rear spring mechanical shock absorber</div>
            </div>
            <div className="spec-item">
              <div className="spec-label">Braking Power</div>
              <div className="spec-value">Dual mechanical front & rear ventilated disc brakes (160mm rotors)</div>
            </div>
            <div className="spec-item">
              <div className="spec-label">Drivetrain & Shifting</div>
              <div className="spec-value">Professional 21-speed transmission with micro-adjust shifters</div>
            </div>
            <div className="spec-item">
              <div className="spec-label">Folded Dimensions</div>
              <div className="spec-value">95cm x 75cm x 35cm (37.4" x 29.5" x 13.8")</div>
            </div>
            <div className="spec-item">
              <div className="spec-label">Weight Capacity</div>
              <div className="spec-value">Rated up to 150 kg (330 lbs) / Bike Net Weight: 17.2 kg (38 lbs)</div>
            </div>
            <div className="spec-item">
              <div className="spec-label">Rider Height Range</div>
              <div className="spec-value">Optimized for riders from 160cm to 195cm (5'3" to 6'5")</div>
            </div>
          </div>
        </div>
      </section>

      <section className="closing-section" id="book-now">
        <div className="closing-container">
          <p className="section-tag">Join the Ride</p>
          <h2 className="closing-title">Elevate Your Journey.</h2>
          <p className="closing-description">
            Experience the freedom of a full-fledged mountain bike that packs down to fit your life. Free shipping, easy returns, and a lifetime frame warranty included.
          </p>

          <div className="testimonial-block">
            <Quote className="quote-icon" size={32} />
            <p className="testimonial-text">
              "The X6 Series is a masterclass in folding engineering. I was skeptical about structural flex, but this frame is rock-solid on rocky trails. It folds down in seconds to fit inside my sports coupe trunk, making weekend trips incredibly convenient."
            </p>
            <div className="testimonial-author">Marcus Vance</div>
            <div className="testimonial-role">Professional Trail Guide & Adventurer</div>
          </div>

          <div className="trust-badges">
            <div className="badge-item">
              <span className="badge-number">10K+</span>
              <span className="badge-label">Active Riders</span>
            </div>
            <div className="badge-item">
              <span className="badge-number">4.9★</span>
              <span className="badge-label">Average Rating</span>
            </div>
            <div className="badge-item">
              <span className="badge-number">15s</span>
              <span className="badge-label">Fold Time</span>
            </div>
          </div>

          <div className="booking-card">
            {booked ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <CheckCircle size={64} className="check-icon" style={{ margin: '0 auto 20px', display: 'block' }} />
                <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>Your X6 Series is Reserved!</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  Thank you for booking. A specialist will contact you in the next 24 hours to confirm your delivery schedule and final custom configurations.
                </p>
                <button className="btn-secondary-large" onClick={() => setBooked(false)}>
                  Modify Inclusions
                </button>
              </div>
            ) : (
              <form onSubmit={handleBooking}>
                <div className="booking-card-header">
                  <div>
                    <span className="price-title">Reserve Today</span>
                    <div className="price-amount">$1,499 <span style={{ fontSize: '16px', color: 'var(--text-secondary)', textDecoration: 'line-through' }}>$1,899</span></div>
                  </div>
                  <span className="price-detail">Fully refundable $100 deposit</span>
                </div>

                <div className="color-options">
                  <div className="color-title">Select Colorway</div>
                  <div className="color-selectors">
                    <button
                      type="button"
                      className={`color-dot ${selectedColor === 'black-blue' ? 'active' : ''}`}
                      onClick={() => setSelectedColor('black-blue')}
                      aria-label="Stealth Black with Electric Blue accents"
                    >
                      <div className="color-dot-inner black-blue"></div>
                    </button>
                    <button
                      type="button"
                      className={`color-dot ${selectedColor === 'silver-black' ? 'active' : ''}`}
                      onClick={() => setSelectedColor('silver-black')}
                      aria-label="Liquid Silver with Obsidian Black accents"
                    >
                      <div className="color-dot-inner silver-black"></div>
                    </button>
                  </div>
                  <p style={{ fontSize: '13px', marginTop: '10px', color: 'var(--text-secondary)' }}>
                    {selectedColor === 'black-blue'
                      ? 'Stealth Black with Electric Blue accents (Custom paint finish)'
                      : 'Liquid Silver with Obsidian Black accents (Premium anodized finish)'}
                  </p>
                </div>

                <ul className="booking-features-list">
                  <li>
                    <CheckCircle className="check-icon" size={16} />
                    <span>Premium Travel Storage & Duffel Bag included</span>
                  </li>
                  <li>
                    <CheckCircle className="check-icon" size={16} />
                    <span>Complementary Multi-tool kit for trail adjustments</span>
                  </li>
                  <li>
                    <CheckCircle className="check-icon" size={16} />
                    <span>Free shipping in continental United States</span>
                  </li>
                  <li>
                    <CheckCircle className="check-icon" size={16} />
                    <span>Lifetime warranty on the folding frame structure</span>
                  </li>
                </ul>

                <button
                  type="submit"
                  className="btn-primary-large"
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                >
                  Secure Reservation <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ClosingCTA;
