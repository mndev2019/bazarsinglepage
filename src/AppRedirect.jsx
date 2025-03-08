import { useEffect } from "react";

function AppRedirect() {
    useEffect(() => {
        const deepLink = "intent://happeningbazaar.com/app#Intent;scheme=https;package=com.happeningbazaar;end;";
        const playStoreLink = "https://play.google.com/store/apps/details?id=com.happeningbazaar";

        window.location.replace(deepLink);

        const timeout = setTimeout(() => {
            window.location.replace(playStoreLink);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>Redirecting to Happening Bazaar App...</h2>
            <p>If you are not redirected, <a href="https://play.google.com/store/apps/details?id=com.happeningbazaar">click here</a> to download the app.</p>
        </div>
    );
}

export default AppRedirect;
