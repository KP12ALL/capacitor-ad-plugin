export interface AdPlugin {
  getAdId(): Promise<{ id: string }>
}
