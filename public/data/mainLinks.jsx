const mainLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Patient", href: "/patient" },
    {
        label: "Market",
        href: "/market/exchange", 
        subLinks: [
            { label: "Exchange", href: "/market/exchange" },
            { label: "Shop", href: "/market/shop" }
        ]
    },
    { label: "Ai Scan", href: "/aiScan" },
    { label: "Contact Us", href: "/contactUs" }
];

export default mainLinks;
