export const extractValueFromEvent = (
  event: React.FormEvent<HTMLFormElement>,
  inputName: string
) => {
  const element = event.currentTarget.elements.namedItem(inputName) as any;

  return element.value as string;
};