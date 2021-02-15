function FindProxyForURL(url, host) {
    PROXY = "SOCKS5 127.0.0.1:8080"
    PROXY2 = "SOCKS5 127.0.0.1:8080; DIRECT"

    if (dnsDomainIs(host,".bitfinex.com")) {
        return PROXY;
    }

    if (dnsDomainIs(host,".deribit.com")) {
        return PROXY;
    }
    
    if (shExpMatch(host,"[*.]liquid.com")) {
        return PROXY;
    }
    
    // Everything else directly!
    return "DIRECT";
}
