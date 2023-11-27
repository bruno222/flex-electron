module.exports = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        bin: 'Flex Electron'
      },
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        bin: 'Flex Electron'
      }
    }    
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'delimitertech',
          name: 'flex-electron'
        },
        prerelease: true
      }
    }
  ]
};
