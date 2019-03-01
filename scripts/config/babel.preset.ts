export interface BabelTarget {
  emotion?: boolean
  react?: boolean
  node?: boolean
}

export const create = (target: BabelTarget) => {
  if (target.node) {
    return [require.resolve('babel-preset-backpack'), require.resolve('@babel/preset-typescript')]
  }

  if (target.react) {
    return [
      // isue with preset-react-app & @babel/runtime absolute paths on now deployments
      // https://github.com/facebook/create-react-app/issues/5443#issuecomment-430188464

      // also specyfing ext, because I'm not using babel cli
      [
        require.resolve('babel-preset-react-app'),
        { absoluteRuntime: false, flow: false, typescript: true },
      ],
      target.emotion && require.resolve('@emotion/babel-preset-css-prop'),
    ].filter(Boolean)
  }
}
