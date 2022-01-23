export function phraseToId(category, includeHash = true) {
  return ((includeHash) ? "#" : "") +
      category.toLowerCase()
          .replace(/[^a-zA-Z0-9\s]/g, "")
          .replace(/\s/g, "\-");
}