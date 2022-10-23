import { Html, Head, Main, NextScript } from "next/document";
import { i18n } from "next-i18next.config";

const Document = ({ __NEXT_DATA__: { locale } }) => {
    return (
        <Html lang={locale || i18n.defaultLocale}>
            <Head />
            <body>
                <Main />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                    lazyload="lazyload"
                />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
