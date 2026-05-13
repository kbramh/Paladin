const headerContent = `
    <a href="/" class="logoAnchorTag"><div class="logo">Logo</div></a>
    <nav class="nav-right">
        <div class="topnav">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/pages/reportFraud.html">Report Fraud</a>
                </li>
                <li>
                    <a href="/pages/communityRules.html">Community Rules</a>
                </li>
                <li>
                    <a href="/pages/faqs.html">FAQs</a>
                </li>
                <li>
                    <a href="/pages/contactUs.html">Contact Us</a>
                </li>
            </ul>
        </div>
        <div class="right-icons">
            <a href="#">🔍</a>
        </div>
    </nav>
`;

const headerElement = document.querySelector("header")!;
headerElement.innerHTML = headerContent;
