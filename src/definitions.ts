export interface AdPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
