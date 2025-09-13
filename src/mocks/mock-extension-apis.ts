global.chrome = {
  tabs: {
    query: async () => { throw new Error("Unimplemented.") },
    create: async () => { throw new Error("Unimplemented.") }
  },
} as unknown as typeof chrome;