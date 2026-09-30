/** next/image does not prefix basePath for string src, so public files need it added by hand. */
export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
