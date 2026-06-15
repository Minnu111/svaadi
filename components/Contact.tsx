import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram, MessageCircle } from "lucide-react";

const PHONE = "09705799099";
const PHONE_INTL = "919705799099";
const INSTAGRAM = "https://www.instagram.com/svaadishta";
const ADDRESS_MAPS =
  "https://www.google.com/maps/search/?api=1&query=Svaadishta+Kamayyathopu+Centre+Kanuru+Vijayawada";
const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.123456789!2d80.6161!3d16.4837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSvaadishta%2C%20Kamayyathopu%20Centre%2C%20Kanuru%2C%20Vijayawada!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

export function Contact() {
  return (
    <footer id="contact" className="bg-card text-card-foreground pt-24 pb-0 border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-telugu text-3xl text-primary mb-1 tracking-wide">స్వాదిష్ట</h3>
            <p className="font-telugu text-primary/70 text-xs tracking-wide mb-6">సంప్రదాయ రుచులు</p>
            <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
              Elevating South Indian cuisine through heritage recipes and contemporary fine dining.
            </p>
            <div className="flex gap-4">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl mb-6 uppercase tracking-widest text-card-foreground">Contact</h4>
            <ul className="space-y-5 text-muted-foreground text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <span>
                    Kamayyathopu Centre, NTR Marg,<br />
                    Near Penamaluru Police Station,<br />
                    Chalasani Nagar, Kanuru,<br />
                    Andhra Pradesh 520007
                  </span>
                  <div className="mt-3">
                    <a
                      href={ADDRESS_MAPS}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-xs tracking-widest uppercase border border-primary text-primary px-3 py-1.5 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Phone size={18} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="mb-2">{PHONE}</p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={`tel:${PHONE}`}
                      className="inline-block text-xs tracking-widest uppercase border border-primary text-primary px-3 py-1.5 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      Call Now
                    </a>
                    <a
                      href={`https://wa.me/${PHONE_INTL}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase border border-[#25D366] text-[#25D366] px-3 py-1.5 hover:bg-[#25D366] hover:text-white transition-colors"
                    >
                      <MessageCircle size={14} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <Instagram size={18} className="text-primary shrink-0" />
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @svaadishta
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-xl mb-6 uppercase tracking-widest text-card-foreground">Hours</h4>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li className="flex gap-3 items-start">
                <Clock size={18} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-card-foreground mb-2">Monday – Sunday</p>
                  <p>Breakfast: 7:00 AM – 10:30 AM</p>
                  <p>Lunch: 12:30 PM – 3:30 PM</p>
                  <p>Dinner: 7:00 PM – 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="w-full h-56 lg:h-full min-h-[220px] overflow-hidden opacity-80 hover:opacity-100 transition-opacity duration-500">
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.4) contrast(1.1)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SVAADISHTA Location"
            />
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 pb-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground tracking-widest uppercase">
          <p><span className="font-telugu">© 2025 స్వాదిష్ట.</span> All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>

        {/* Developer credit */}
        <div className="border-t border-border/30 py-6 text-center">
          <p className="text-muted-foreground/60 text-[11px] tracking-wide font-light">
            Developed with <span className="text-primary">♥</span> by{" "}
            <span className="font-medium text-muted-foreground/80">Naga Malleswara Rao</span>
            {" · "}
            <a
              href="mailto:nmallesh30@gmail.com"
              className="hover:text-primary transition-colors underline underline-offset-2 decoration-muted-foreground/40 hover:decoration-primary"
            >
              nmallesh30@gmail.com
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
