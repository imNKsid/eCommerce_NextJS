import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const AUTH_PAGES = ["/login"];
const LOGIN = "./login";
const HOME = "./shop";

export default function AuthGate({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (pathName && !AUTH_PAGES.includes(pathName)) {
      router.replace(LOGIN);
      return;
    }
    if (pathName && AUTH_PAGES.includes(pathName)) {
      router.replace(HOME);
      return;
    }
  }, [pathName, router]);

  return <>{children}</>;
}
