# X6 Series Folding Mountain Bike Landing Page

A premium, modern single-page marketing website for the **X6 Series Folding Mountain Bike**, inspired by Apple's high-end scroll-driven product landing pages. It features a canvas-based image sequence scrubbing frame-by-frame in sync with the user's scroll position.

## Technical Stack
- **React 18 + Vite** (Hot Module Replacement enabled)
- **GSAP + ScrollTrigger** (for scroll pinning and frame scrubbing)
- **Lucide Icons** (for UI indicators, specs, and controls)
- **Vanilla CSS Variables** (for light/dark theme design and fluid layout)

## Key Features
- **4K Canvas Image Sequence**: 151 high-resolution images scrubbed on scroll using `requestAnimationFrame`-friendly drawing calls to avoid repaints.
- **Asynchronous Preloading**: Active percentage indicator loading screen ensuring a smooth, lag-free user experience.
- **Scroll-Synced Callouts**: Six unique marketing feature highlights that transition in and out based on visual frame checkpoints.
- **Transparent Sticky Navigation**: Fixed top header with z-index ordering and smooth navigation target offset jumps.
- **Technical Specifications & Booking Colorways**: Fully responsive specs panel and an interactive color customization reservation booking card.
- **Reduced Motion Support**: Skip canvas scrubbing entirely and automatically transition to a fast, clean static layout if the user has `prefers-reduced-motion` enabled in their OS.

## Local Setup & Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Production Build**:
   ```bash
   npm run build
   ```
   This generates optimized files in the `dist` folder.

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```
