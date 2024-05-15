// CanonicalTag.tsx

import { useEffect, useState } from "react";
import Head from "next/head";
import { NextRouter } from "next/router";

interface Props {
  router: NextRouter;
}

const CanonicalTag = ({ router }: Props) => {
  const [canonicalUrl, setCanonicalUrl] = useState<string | null>(null);

  useEffect(() => {
    if (router.isReady) {
      setCanonicalUrl(`https://natek.netlify.app${router.asPath}`);
    }
  }, [router.isReady, router.asPath]);

  if (!canonicalUrl) return null;

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};

export default CanonicalTag;
