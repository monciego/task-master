import { Link, InertiaLinkProps } from "@inertiajs/react";

export default function NavLink({
  active = false,
  className = "",
  children,
  ...props
}: InertiaLinkProps & { active: boolean }) {
  return (
    <Link
      {...props}
      className={
        "transition-colors hover:text-foreground " +
        (active ? "text-foreground" : "text-muted-foreground") +
        className
      }
    >
      {children}
    </Link>
  );
}
