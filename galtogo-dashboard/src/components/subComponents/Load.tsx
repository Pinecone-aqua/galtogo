import React from "react";
import { useRouter } from "next/router";

interface Props {
  text?: string;
}

const LOADER_THRESHOLD = 250;

export default function NavigationLoader(props: Props) {
  const { text = "Loading..." } = props;
  const [isLoading, setLoading] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    let timer: NodeJS.Timeout;

    const start = () =>
      (timer = setTimeout(() => setLoading(true), LOADER_THRESHOLD));

    const end = () => {
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

      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [router.events]);

  if (!isLoading) return null;

  return (
    <div className="loading">
      <div className="loading-spinner"></div>
    </div>
  );
}
