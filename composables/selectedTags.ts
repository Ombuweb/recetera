import type { TAGS } from '~/core/models/domain';

export function useSelectedTags() {
  return useState<TAGS[]>('selectedTags', () => []);
}
