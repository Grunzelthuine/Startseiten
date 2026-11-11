// Passende Installations-Anleitung zuerst zeigen (iPhone oder Android)
(() => {
  const ua = navigator.userAgent;
  const ios = /iPhone|iPad|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const android = /Android/.test(ua);
  const os = ios ? 'ios' : android ? 'android' : '';
  if (!os) return;
  const box = document.querySelector(`.os[data-os="${os}"]`);
  if (!box) return;
  box.classList.add('aktiv');
  box.parentNode.insertBefore(box, box.parentNode.querySelector('.os'));
})();
