// Autobind decorator
export function Autobind(
  _1: any,
  _2: string | Symbol | number,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjustableDescriptor: PropertyDescriptor = {
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjustableDescriptor;
}
