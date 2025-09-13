global.chrome = {
  tabs: {
    create: async () => { throw new Error("Unimplemented.") }
  },
} as unknown as typeof chrome;