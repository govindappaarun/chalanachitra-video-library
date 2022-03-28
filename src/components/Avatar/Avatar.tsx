import { StyledAvatar } from "./Avatar.styled";
import clsx from "clsx";

export type AvatarProps = {
  size?: "sm" | "md" | "lg";
  text?: string;
  type: "img" | "span";
  src?: string;
  alt?: string;
  className?: string;
};

export default function Avatar({
  text,
  type,
  size,
  className,
  ...rest
}: AvatarProps) {
  const element = type ? type : "span";
  return (
    <StyledAvatar
      as={element}
      type={type}
      className={clsx(size, className)}
      {...rest}
    >
      {text}
    </StyledAvatar>
  );
}
