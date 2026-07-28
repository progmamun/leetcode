class TrieNode {
  children: Map<string, TrieNode>;
  index: number;
  minLen: number;

  constructor() {
    this.children = new Map();
    this.index = -1;
    this.minLen = Infinity;
  }
}

function stringIndices(wordsContainer: string[], wordQuery: string[]): number[] {
  const root = new TrieNode();

  // update helper
  const updateNode = (node: TrieNode, wordLen: number, index: number) => {
    if (wordLen < node.minLen || (wordLen === node.minLen && index < node.index)) {
      node.minLen = wordLen;
      node.index = index;
    }
  };
  // insert reversed words into trie
  for (let i = 0; i < wordsContainer.length; i++) {
    const word = wordsContainer[i];
    const reversed = word.split('').reverse().join('');

    let node = root;

    // root update
    updateNode(node, word.length, i);

    for (const ch of reversed) {
      if (!node.children.has(ch)) {
        node.children.set(ch, new TrieNode());
      }
      node = node.children.get(ch)!;

      updateNode(node, word.length, i);
    }
  }

  const result: number[] = [];

  // process queries
  for (const query of wordQuery) {
    const reversed = query.split('').reverse().join('');

    let node = root;

    for (const ch of reversed) {
      if (!node.children.has(ch)) {
        break;
      }
      node = node.children.get(ch)!;
    }
    result.push(node.index);
  }
  return result;
}
