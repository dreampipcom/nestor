// main.test.ts
import { describe, expect, it } from 'vitest';
import { client } from '..';

describe('Mail lib', () => {
  it('Lib loads correctly', () => {
    const trackEvent = client.track('LOL', {});
    expect(trackEvent).toBe(
      "Nestor::JavaScript::Client::EVENT: - I'm a mock tracker - LOL - {}.",
    );
  });
});
