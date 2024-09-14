//  用于获取assets静态资源文件
export const getAssetsFile = (name: string) => new URL(`../assets/images/${name}`, import.meta.url).href