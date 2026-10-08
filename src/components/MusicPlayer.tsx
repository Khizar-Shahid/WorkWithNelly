"use client";
import { useEffect } from 'react';

export default function MusicPlayer() {
  useEffect(() => {
    const btn = document.getElementById('musicToggle');
    const audio = document.getElementById('bgMusic') as HTMLAudioElement;
    if (!btn || !audio) return;
    
    audio.volume = 0.35;
    let userPaused = false;
    try { userPaused = sessionStorage.getItem('nellyMusicPaused') === '1'; } catch(e){}

    function setState(playing: boolean){
      btn?.classList.toggle('playing', playing);
      btn?.setAttribute('aria-pressed', playing ? 'true' : 'false');
      btn?.setAttribute('aria-label', playing ? 'Pause background music' : 'Play background music');
      if (btn) btn.title = playing ? 'Pause background music' : 'Play background music';
    }
    
    function rememberPause(paused: boolean){
      userPaused = paused;
      try { paused ? sessionStorage.setItem('nellyMusicPaused','1') : sessionStorage.removeItem('nellyMusicPaused'); } catch(e){}
    }
    
    function playWithTimeout(){
      return Promise.race([
        audio.play(),
        new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 4000))
      ]);
    }

    audio.addEventListener('playing', () => { setState(true); stopListening(); });
    audio.addEventListener('pause', () => setState(false));

    btn.onclick = () => {
      if (audio.paused) {
        rememberPause(false);
        playWithTimeout().catch(() => setState(false));
      } else {
        rememberPause(true);
        audio.pause();
      }
    };

    const events = ['pointerdown','touchend','click','keydown'];
    function onInteract(e: Event){
      if (userPaused || !audio.paused) return stopListening();
      if (e && btn?.contains(e.target as Node)) return; // the button handles its own click
      playWithTimeout().catch(() => {});
    }
    
    function stopListening(){
      events.forEach(ev => document.removeEventListener(ev, onInteract, true));
    }

    if (!userPaused) {
      audio.preload = 'auto';
      playWithTimeout().catch(() => {});
      events.forEach(ev => document.addEventListener(ev, onInteract, true));
    }

    return () => {
      stopListening();
    };
  }, []);

  return (
    <>
      <button id="musicToggle" className="music-toggle" aria-label="Play background music" aria-pressed="false" title="Play background music">
        <svg className="mt-note" viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
        <span className="mt-bars" aria-hidden="true"><span></span><span></span><span></span></span>
      </button>
      <audio id="bgMusic" src="/assets/nelly_bg_music.mp3" loop preload="none"></audio>
    </>
  );
}
