// A simple service to preload and play sound effects.

type SoundEffect = 'happy' | 'open';

const sounds: { [key in SoundEffect]?: HTMLAudioElement } = {};
let isMuted = false;

// --- Sound file URLs ---
const soundUrls: { [key in SoundEffect]: string } = {
    happy: 'https://cdn.pixabay.com/audio/2021/08/04/audio_bb630cc098.mp3',
    // FIX: Added 'open' sound to be used in the AskPal component.
    open: 'https://cdn.pixabay.com/audio/2022/03/15/audio_2d2077e024.mp3'
};

/**
 * Pre-loads all sound effects into Audio objects.
 * This should be called once when the application starts.
 */
export const loadSounds = () => {
  for (const key in soundUrls) {
    const soundKey = key as SoundEffect;
    if (!sounds[soundKey]) {
      sounds[soundKey] = new Audio(soundUrls[soundKey]);
      sounds[soundKey]!.preload = 'auto';
      sounds[soundKey]!.muted = isMuted;
    }
  }
};

/**
 * Plays a pre-loaded sound effect.
 * @param soundName The name of the sound to play.
 */
export const playSound = (soundName: SoundEffect) => {
  const sound = sounds[soundName];
  if (sound) {
    sound.currentTime = 0; // Rewind to the start
    sound.play().catch(error => {
      // Autoplay was prevented. This can happen if the user hasn't interacted with the page yet.
      // It's generally fine to ignore this for simple UI sounds.
      console.warn(`Could not play sound '${soundName}':`, error.message);
    });
  }
};


/**
 * Toggles mute for all sounds and music.
 * @returns The new mute state (true if muted, false if not).
 */
export const toggleMuteAll = (): boolean => {
    isMuted = !isMuted;
    for (const key in sounds) {
        const sound = sounds[key as SoundEffect];
        if (sound) {
            sound.muted = isMuted;
        }
    }
    return isMuted;
}
