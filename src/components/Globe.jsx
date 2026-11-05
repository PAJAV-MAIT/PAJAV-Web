// ABC-style closing globe, redrawn as a dotted Earth in PAJAV colours.
// Canvas only, no libraries. Starts centred on India with MAIT marked,
// turns slowly, pauses when off screen, and stays still for people who
// prefer reduced motion.
import { useEffect, useRef } from "react";
import LAND from "./globe-land";

const MAIT = { lon: 77.07, lat: 28.72 };
const TILT = (18 * Math.PI) / 180; // look slightly from the north
const SPEED = 5; // degrees per second
const RAD = Math.PI / 180;

export default function Globe({ label = "A slowly turning globe with MAIT, Delhi marked" }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const css = getComputedStyle(document.documentElement);
    const col = (name, fallback) => css.getPropertyValue(name).trim() || fallback;
    const ocean = col("--forest", "#1d4a2c");
    const deep = col("--deep", "#0f2232");
    const land = col("--lime", "#d4eaa9");
    const marker = col("--el-agni", "#ef7a22");

    let size = 0;
    let dpr = 1;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      size = canvas.clientWidth;
      canvas.width = Math.round(size * dpr);
      canvas.height = Math.round(size * dpr);
    };

    const sinT = Math.sin(TILT);
    const cosT = Math.cos(TILT);
    const project = (lon, lat, lon0) => {
      const l = (lon - lon0) * RAD;
      const p = lat * RAD;
      const cp = Math.cos(p);
      return {
        x: cp * Math.sin(l),
        y: cosT * Math.sin(p) - sinT * cp * Math.cos(l),
        z: sinT * Math.sin(p) + cosT * cp * Math.cos(l),
      };
    };

    const draw = (lon0, t) => {
      const w = size * dpr;
      const R = w * 0.46;
      const c = w / 2;
      ctx.clearRect(0, 0, w, w);

      // sphere
      const g = ctx.createRadialGradient(c - R * 0.35, c - R * 0.4, R * 0.1, c, c, R);
      g.addColorStop(0, ocean);
      g.addColorStop(1, deep);
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(c, c, R, 0, Math.PI * 2);
      ctx.fill();

      // land dots
      const dot = R * 0.0125;
      for (let i = 0; i < LAND.length; i += 2) {
        const q = project(LAND[i], LAND[i + 1], lon0);
        if (q.z <= 0) {
          if (q.z > -0.5) {
            ctx.globalAlpha = 0.08;
            ctx.fillStyle = land;
            ctx.beginPath();
            ctx.arc(c + q.x * R, c - q.y * R, dot * 0.6, 0, Math.PI * 2);
            ctx.fill();
          }
          continue;
        }
        ctx.globalAlpha = 0.35 + 0.65 * q.z;
        ctx.fillStyle = land;
        ctx.beginPath();
        ctx.arc(c + q.x * R, c - q.y * R, dot * (0.55 + 0.45 * q.z), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // light on the rim
      const rim = ctx.createRadialGradient(c, c, R * 0.82, c, c, R);
      rim.addColorStop(0, "rgba(212,234,169,0)");
      rim.addColorStop(1, "rgba(212,234,169,0.22)");
      ctx.fillStyle = rim;
      ctx.beginPath();
      ctx.arc(c, c, R, 0, Math.PI * 2);
      ctx.fill();

      // MAIT marker
      const m = project(MAIT.lon, MAIT.lat, lon0);
      if (m.z > 0) {
        const x = c + m.x * R;
        const y = c - m.y * R;
        const pulse = reduce ? 0.5 : (t / 1600) % 1;
        ctx.strokeStyle = marker;
        ctx.globalAlpha = (1 - pulse) * m.z;
        ctx.lineWidth = 2 * dpr;
        ctx.beginPath();
        ctx.arc(x, y, dot * 2 + pulse * R * 0.12, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha = m.z;
        ctx.fillStyle = marker;
        ctx.beginPath();
        ctx.arc(x, y, dot * 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    };

    resize();
    let lon0 = MAIT.lon - 10;
    let frame = 0;
    let last = 0;
    let visible = true;

    const loop = (t) => {
      if (last) lon0 += ((t - last) / 1000) * SPEED;
      last = t;
      draw(lon0, t);
      frame = requestAnimationFrame(loop);
    };
    const start = () => {
      if (reduce || frame) return;
      last = 0;
      frame = requestAnimationFrame(loop);
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    draw(lon0, 0);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(canvas);
    const onResize = () => {
      resize();
      draw(lon0, performance.now());
    };
    window.addEventListener("resize", onResize);

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} className="globe" role="img" aria-label={label} />;
}
