window.config = {
  // default: '/'
  routerBasename: '/',
  whiteLabelling: {},
  extensions: [],
  showStudyList: true,
  filterQueryParam: false,
  servers: {
    dicomWeb: [
      {
        name: 'DCM4CHEE',
        wadoUriRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/wado',
        qidoRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs',
        wadoRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs',
        qidoSupportsIncludeField: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
      },
    ],
  },
  // Extensions should be able to suggest default values for these?
  // Or we can require that these be explicitly set
  hotkeys: [
    // ~ Global
    {
      commandName: 'incrementActiveViewport',
      label: 'Próxima janela',
      keys: ['right'],
    },
    {
      commandName: 'decrementActiveViewport',
      label: 'Janela anterior',
      keys: ['left'],
    },
    // Supported Keys: https://craig.is/killing/mice
    // ~ Cornerstone Extension
    { commandName: 'rotateViewportCW', label: 'Rotacionar eireita', keys: ['r'] },
    { commandName: 'rotateViewportCCW', label: 'Rotacionar esquerda', keys: ['l'] },
    { commandName: 'invertViewport', label: 'Inverter', keys: ['i'] },
    {
      commandName: 'flipViewportVertical',
      label: 'Girar horizontalmente',
      keys: ['h'],
    },
    {
      commandName: 'flipViewportHorizontal',
      label: 'Girar verticalmente',
      keys: ['v'],
    },
    { commandName: 'scaleUpViewport', label: 'Zoom +', keys: ['+'] },
    { commandName: 'scaleDownViewport', label: 'Zoom -', keys: ['-'] },
    { commandName: 'fitViewportToWindow', label: 'Zoom padrão', keys: ['='] },
    { commandName: 'resetViewport', label: 'Restaurar', keys: ['space'] },
    // clearAnnotations
    { commandName: 'nextImage', label: 'Próxima imagem', keys: ['down'] },
    { commandName: 'previousImage', label: 'Imagem anterior', keys: ['up'] },
    // firstImage
    // lastImage
    {
      commandName: 'previousViewportDisplaySet',
      label: 'Série de dados anterior',
      keys: ['pagedown'],
    },
    {
      commandName: 'nextViewportDisplaySet',
      label: 'Próxima série de dados',
      keys: ['pageup'],
    },
    // ~ Cornerstone Tools
    { commandName: 'setZoomTool', label: 'Zoom', keys: ['z'] },
    // ~ Window level presets
    {
      commandName: 'windowLevelPreset1',
      label: 'Preset 1',
      keys: ['1'],
    },
    {
      commandName: 'windowLevelPreset2',
      label: 'Preset 2',
      keys: ['2'],
    },
    {
      commandName: 'windowLevelPreset3',
      label: 'Preset 3',
      keys: ['3'],
    },
    {
      commandName: 'windowLevelPreset4',
      label: 'Preset 4',
      keys: ['4'],
    },
    {
      commandName: 'windowLevelPreset5',
      label: 'Preset 5',
      keys: ['5'],
    },
    {
      commandName: 'windowLevelPreset6',
      label: 'Preset 6',
      keys: ['6'],
    },
    {
      commandName: 'windowLevelPreset7',
      label: 'Preset 7',
      keys: ['7'],
    },
    {
      commandName: 'windowLevelPreset8',
      label: 'Preset 8',
      keys: ['8'],
    },
    {
      commandName: 'windowLevelPreset9',
      label: 'Preset 9',
      keys: ['9'],
    },
  ],
  cornerstoneExtensionConfig: {},
};
