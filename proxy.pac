function FindProxyForURL(url, host) {
    PROXY = "SOCKS5 127.0.0.1:8080; DIRECT"

    if (shExpMatch(host,"*.liquid.com")) {
        return PROXY;
    }

    if (shExpMatch(host,"liquid.com")) {
        return PROXY;
    }
    
    // Everything else directly!
    return "DIRECT";
}
