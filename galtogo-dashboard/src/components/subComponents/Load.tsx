import React from "react";
import { useRouter } from "next/router";

const LOADER_THRESHOLD = 250;

export default function NavigationLoader() {
  const [isLoading, setLoading] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    let timer: NodeJS.Timeout;

    const start = () =>
      (timer = setTimeout(() => setLoading(true), LOADER_THRESHOLD));

    const end = () => {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (timer) {
        clearTimeout(timer);
      }
      setLoading(false);
    };

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);

      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [router.events]);

  if (!isLoading) return null;

  return (
    <div className="loading">
      <div className="loading-spinner" />
    </div>
  );
}
