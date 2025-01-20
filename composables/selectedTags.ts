export function useSelectedTags() {
  return useState<string[]>('selectedTags', () => []);
}
