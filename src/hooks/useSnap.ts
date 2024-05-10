/**
 * A custom hook to manage Midtrans API Flow
 * @export
 * @see https://docs.midtrans.com/docs/snap-snap-integration-guide
 * @returns {{ snapEmbed: (snapToken: any, embedId: any, action: any) => void; }}
 */

// WIP
export function useSnap() {
  /*const [snap, setSnap] = useState<string | null>(null);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = `${MIDTRANS_API_URL}/snap/snap.js`;
    script.setAttribute("data-client-key", MIDTRANS_CLIENT_ID);
    script.onload = () => {
      setSnap(window.snap);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [setSnap]);

  function snapEmbed(snapToken, embedId, action) {
    if (snap) {
      snap.embed(snapToken, {
        embedId,
        // success
        onSuccess: (result) => {},
        // pending
        onPending: (result) => {},
        // close
        onClose: () => {},
      });
    }
  }

  return {
    snapEmbed,
  };*/
}
