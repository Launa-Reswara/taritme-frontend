import {
  CONDITION,
  MIDTRANS_CLIENT_KEY,
  MIDTRANS_DEVELOPMENT_SNAP_SCRIPT,
  MIDTRANS_PRODUCTION_SNAP_SCRIPT,
} from "@/lib/utils/constants";
import { useEffect } from "react";

export default function Payment() {
  useEffect(() => {
    const snapScript =
      CONDITION === "development"
        ? MIDTRANS_DEVELOPMENT_SNAP_SCRIPT
        : MIDTRANS_PRODUCTION_SNAP_SCRIPT;
    const clientKey = MIDTRANS_CLIENT_KEY;
    const script = document.createElement("script");

    script.src = snapScript;
    script.setAttribute("data-client-key", clientKey);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <></>;
}
