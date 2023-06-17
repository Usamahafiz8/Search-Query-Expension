export const top100Films = [
  {
    title: "ExternalMerger.items",
    repo: "apache/spark",
    path: "python/pyspark/shuffle.py",
    original_string: "def items(self):\n        \"\"\" Return all merged items as iterator \"\"\"\n        if not self.pdata and not self.spills:\n            return iter(self.data.items())\n        return self._external_items()",
    language: "python",
    code: " **********************def items(self):\n        \"\"\" Return all merged items as iterator \"\"\"\n        if not self.pdata and not self.spills:\n            return iter(self.data.items())\n        return self._external_items()",
    code_tokens: ["def", "items", "(", "self", ")", ":", "if", "not", "self", ".", "pdata", "and", "not", "self", ".", "spills", ":", "return", "iter", "(", "self", ".", "data", ".", "items", "(", ")", ")", "return", "self", ".", "_external_items", "(", ")"],
    docstring: "Return all merged items as iterator test 1",
    docstring_tokens: ["Return", "all", "merged", "items", "as", "iterator"],
    sha: "618d6bff71073c8c93501ab7392c3cc579730f0b",
    url: "https://github.com/apache/spark/blob/618d6bff71073c8c93501ab7392c3cc579730f0b/python/pyspark/shuffle.py#L339-L343",
    partition: "train"
  },
  {
    title: "ExternalMergebjjlgljr.items",
    repo: "apache/spark",
    path: "python/pyspark/shuffle.py",
    original_string: "def items(self):\n        \"\"\" Return all merged items as iterator \"\"\"\n        if not self.pdata and not self.spills:\n            return iter(self.data.items())\n        return self._external_items()",
    language: "python",
    code: "---------------------------------------this is test def items(self):\n        \"\"\" Return all merged items as iterator \"\"\"\n        if not self.pdata and not self.spills:\n            return iter(self.data.items())\n        return self._external_items()",
    code_tokens: ["def", "items", "(", "self", ")", ":", "if", "not", "self", ".", "pdata", "and", "not", "self", ".", "spills", ":", "return", "iter", "(", "self", ".", "data", ".", "items", "(", ")", ")", "return", "self", ".", "_external_items", "(", ")"],
    docstring: "Return all merged items as iterator test 454654",
    docstring_tokens: ["Return", "all", "merged", "items", "as", "iterator"],
    sha: "618d6bff71073c8c93501ab7392c3cc579730f0b",
    url: "https://github.com/apache/spark/blob/618d6bff71073c8c93501ab7392c3cc579730f0b/python/pyspark/shuffle.py#L339-L343",
    partition: "train"
  }
];
