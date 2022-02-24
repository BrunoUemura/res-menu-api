export default interface AbstractService {
  execute(data?: unknown): Promise<unknown>;
}
