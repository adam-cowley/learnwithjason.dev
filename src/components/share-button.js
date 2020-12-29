import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { IconShare } from './icon-share.js';

export function ShareButton({ title, text, url, ...props }) {
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    if (navigator.share) {
      setCanShare(true);
    }
  }, []);

  // TODO abstract this into a component and use in all sharing spots
  async function handleShare() {
    await navigator.share({ title, text, url });
  }

  return canShare ? (
    <button onClick={handleShare} {...props}>
      <IconShare /> Share
    </button>
  ) : null;
}
