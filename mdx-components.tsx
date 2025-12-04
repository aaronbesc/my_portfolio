import Image from "next/image";

export function useMDXComponents(components: any) {
  return {
    img: (props: any) => (
      <Image
        {...props}
        alt={props.alt || ""}
        width={props.width || 800}
        height={props.height || 500}
        className="rounded-xl my-6 w-full h-auto"
      />
    ),
    ...components,
  };
}
