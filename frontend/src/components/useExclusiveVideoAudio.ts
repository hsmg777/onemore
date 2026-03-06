import { RefObject, useCallback, useEffect, useState } from 'react';

const VIDEO_AUDIO_ACTIVATED_EVENT = 'onemore:video-audio-activated';

type VideoAudioActivatedDetail = {
  sourceId: string;
};

export function useExclusiveVideoAudio(
  sourceId: string,
  videoRef: RefObject<HTMLVideoElement | null>,
  initialMuted = true
) {
  const [isMuted, setIsMuted] = useState(initialMuted);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted, videoRef]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleOtherVideoActivated = (event: Event) => {
      const customEvent = event as CustomEvent<VideoAudioActivatedDetail>;
      if (customEvent.detail?.sourceId === sourceId) {
        return;
      }

      setIsMuted(true);
      if (videoRef.current) {
        videoRef.current.muted = true;
      }
    };

    window.addEventListener(VIDEO_AUDIO_ACTIVATED_EVENT, handleOtherVideoActivated);

    return () => {
      window.removeEventListener(VIDEO_AUDIO_ACTIVATED_EVENT, handleOtherVideoActivated);
    };
  }, [sourceId, videoRef]);

  const toggleMute = useCallback(() => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);

    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
    }

    if (!nextMuted && typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent<VideoAudioActivatedDetail>(VIDEO_AUDIO_ACTIVATED_EVENT, {
          detail: { sourceId },
        })
      );
    }
  }, [isMuted, sourceId, videoRef]);

  return { isMuted, toggleMute };
}