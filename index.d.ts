export default class EventEmitter {
  on(event: string, callback: Function, ctx?: any): EventEmitter;
  once(event: string, callback: Function, ctx?: any): EventEmitter;
  emit(event: string, ...args: any[]): EventEmitter;
  off(event: string, callback?: Function): EventEmitter;
  addEventListener<T>(event: string, callback: (T) => void): void;
  removeEventListener<T>(event: string, callback?: (T) => void): void;
  dispatchEvent(event: Event);
}
