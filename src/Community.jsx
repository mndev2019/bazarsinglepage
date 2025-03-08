import { useEffect } from "react";

function Community() {
    useEffect(() => {
        function getOS() {
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;
            if (/android/i.test(userAgent)) {
                return "android";
            }
            if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                return "ios";
            }
            return "unknown";
        }

        function redirectToApp() {
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get("id") || "default";
            const deepLink = `happeningbazaar://community/${id}`;
            const playStoreLink =
                "https://play.google.com/store/apps/details?id=com.happeningbazaar";
            const os = getOS();

            if (os === "android") {
                // Redirect using Android intent
                window.location.replace(
                    `intent://community/${id}#Intent;scheme=happeningbazaar;package=com.happeningbazaar;end;`
                );
                setTimeout(() => {
                    window.location.replace(playStoreLink);
                }, 3000);
            } else if (os === "ios") {
                // Redirect using deep link for iOS
                window.location.replace(deepLink);
                setTimeout(() => {
                    window.location.replace(playStoreLink);
                }, 3000);
            } else {
                // Fallback: redirect directly to Play Store if OS is unknown
                window.location.replace(playStoreLink);
            }
        }

        redirectToApp();
    }, []);



    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Redirecting...</h1>
            <p>
                If you are not redirected automatically,{" "}
                <a href="https://play.google.com/store/apps/details?id=com.happeningbazaar">
                    click here
                </a>
                .
            </p>
        </div>
    );
}

export default Community;
